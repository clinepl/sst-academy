<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}


$user_id = htmlspecialchars($_SESSION['user_id'], ENT_QUOTES, 'UTF-8');
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Liste de Tâches</title>
</head>

<body>
    <h1>Ma Liste de Tâches</h1>
    <p>Bienvenue, utilisateur <?php echo $user_id; ?> !</p>
    <a href="tasks.php">Accéder à la liste des tâches</a><br>
    <a href="logout.php">Déconnexion</a>
</body>

</html>
