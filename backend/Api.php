<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


include 'dbaccess.php';
$db = new DbConnect;
$conn = $db->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "GET":
        $sql = "SELECT * FROM profilia";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt ->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
    break;
    /*case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO teste (nome_prod, descricao) VALUES(:nome_prod, :descricao)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nome_prod', $user->produto);
        $stmt->bindParam(':descricao', $user->descricao);
        if($stmt->execute()){
            $response = ['status' => 1, 'message' => "usuário cadastrado com sucesso."];
        } else {
            $errorInfo = $stmt->errorInfo(); // Captura a informação de erro
            $response = ['status' => 0, 'message' => "falha na criação de usuário. Erro: " . $errorInfo[2]];
        }
        echo json_encode($response);
        break;*/
}
?>
