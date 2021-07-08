<?php
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL & ~E_NOTICE);

require_once 'Venda.php';
require_once 'VendaProdutos.php';
require_once 'Conexao.php';

$vendedor = $_POST['vendedor'];
$total = $_POST['total'];

$venda = new Venda($vendedor, $total);
$resultado = $venda->cadastrar();
$idVenda = $resultado['id'];


if ($resultado['status'] === false) {
    echo "<h2>{$resultado['mensagem']}</h2>";
}

$produtos = $_POST['produtos'];

    foreach ($produtos as $produto){
    $nome = $produto ['nome'];
    $valor = $produto['valor'];
    $quantidade = $produto['quantidade'];
    $vendaProdutos = new VendaProdutos ($idVenda, $nome, $valor, $quantidade);
    $resultado = $vendaProdutos->cadastrar();
        if ($resultado['status'] == false) {
            echo "<h2>{$resultado['mensagem']}</h2>";
        }
}