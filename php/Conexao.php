<?php

class Conexao
{
    private $host = "";
    private $usuario = "";
    private $senha = "";
    private $bd = "";
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