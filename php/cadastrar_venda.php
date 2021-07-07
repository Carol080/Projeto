<?php
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL & ~E_NOTICE);

include_once 'include/conecta_bd.inc';
include_once 'Venda.php';
include_once 'Venda_produtos.php';
include_once 'Conexao.php';

$vendedor = $_POST['vendedor'];
$total = $_POST['total'];

$venda = new Venda($vendedor, $total);
$resultado = $venda->cadastrar_venda();


if ($resultado == "Erro ao realizar cadastro!") {
    echo "<h2>" . $resultado . "</h2>";
}

$produtos = $_POST['produtos'];
$id_venda = $resultado;

for ($i = 0; $i < count($produtos); $i++) {
    $produto = $produtos[$i];
    $nome = $produto ['nome'];
    $valor = $produto['valor'];
    $quantidade = $produto['quantidade'];
    $venda_produtos = new Venda_produtos ($id_venda, $nome, $valor, $quantidade);
    $resultado = $venda_produtos->cadastrar_vendaP();

    if ($resultado == "Cadastro venda_Produto realizado com sucesso!") {
        echo "<h2>" . $resultado . "</h2>";
    } else {
        echo '<h2>Erro ao realizar cadastro...</h2> <br>';
    }
}