<?php
require_once('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");

    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);

    try {
        $stmt->execute();
        header("Location: login.php");
    } catch (PDOException $e) {
        echo "Erreur d'inscription: " . $e->getMessage();
    }
}
?>