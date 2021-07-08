<?php
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);

include_once 'Conexao.php';

$data = $_POST['data'];
$vendedor = $_POST['vendedor'];
$conectaBD = new Conexao();
$vendas = [];

if (empty($vendedor) && empty($data)) {
    $query = "SELECT * FROM venda";
} elseif (empty($data)) {
    $query = "SELECT * FROM venda WHERE vendedor = '$vendedor'";
} elseif (empty($vendedor)) {
    $query = "SELECT * FROM venda WHERE data = '$data'";
} else {
    $query = "SELECT * FROM venda WHERE data = '$data' AND vendedor = '$vendedor'";
}

$conectaBD->executarQuery($query);

echo json_encode($conectaBD->resultado());







