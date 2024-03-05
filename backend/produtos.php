<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

include 'dbaccess.php';
$db = new DbConnect;
$conn = $db->connect();

$sql = "SELECT * FROM produtos";
$path = explode('/', $_SERVER['REQUEST_URI']);
if (isset($path[3]) && is_numeric($path[3])) {
    $sql .= " WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $path[3]);
    $stmt->execute();
    $prod = $stmt->fetch(PDO::FETCH_ASSOC);
} else {
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $prod = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
echo json_encode($prod);
