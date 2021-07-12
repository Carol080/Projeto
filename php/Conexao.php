<?php

class Conexao
{
    private $host = "177.70.2.70";
    private $usuario = "dev1";
    private $senha = "memo@2021";
    private $bd = "memocash_0";
    private $conexao;
    private $resultado;

    public function __construct()
    {
        $this->conexao = new mysqli($this->host, $this->usuario, $this->senha, $this->bd);
    }

    public function executarQuery($sql)
    {
        $this->resultado = $this->conexao->query($sql);

        return $this->conexao;
    }

    public function resultado()
    {
        $resultados = [];
        for ($i = 0; $i < $this->resultado->num_rows; $i++) {
            if ($this->resultado->data_seek($i)) {
                $row = $this->resultado->fetch_assoc();
                $resultados[] = $row;
            }
        }
        return $resultados;
    }
}