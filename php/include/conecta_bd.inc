<?php
$conexao = mysqli_connect("177.70.2.70", "dev1", "memo@2021", "memocash_0");

if (mysqli_connect_errno()) {
    echo "Problemas para conectar no banco. Erro:";
    echo mysqli_connect_error();
    die();
}
?>