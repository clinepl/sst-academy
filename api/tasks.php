<?php
session_start();
require_once('config.php');

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
}

$user_id = $_SESSION['user_id'];

// Gestion des tâches
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $task_id = $_POST['task_id'];
    $completed = isset($_POST['completed']) ? 1 : 0;

    $stmt = $conn->prepare("UPDATE tasks SET completed = :completed WHERE id = :task_id AND user_id = :user_id");
    $stmt->bindParam(':completed', $completed);
    $stmt->bindParam(':task_id', $task_id);
    $stmt->bindParam(':user_id', $user_id);

    try {
        $stmt->execute();
    } catch (PDOException $e) {
        echo "Erreur lors de la mise à jour de la tâche: " . $e->getMessage();
    }
}

// Récupération des tâches de l'utilisateur
$stmt = $conn->prepare("SELECT * FROM tasks WHERE user_id = :user_id");
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!-- Affichage des tâches dans page HTML -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma To-Do List</title>
</head>

<body>
    <h1>Ma To-Do List</h1>
    <form method="POST" action="tasks.php">
        <?php foreach ($tasks as $task): ?>
            <label>
                <input type="checkbox" name="completed" <?php echo $task['completed'] ? 'checked' : ''; ?>>
                <?php echo $task['task_name']; ?>
                <input type="hidden" name="task_id" value="<?php echo $task['id']; ?>">
            </label><br>
        <?php endforeach; ?>
        <input type="submit" value="Enregistrer">
    </form>
    <a href="logout.php">Déconnexion</a>
</body>

</html>