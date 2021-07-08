<?php
include_once 'Conexao.php';

class Venda
{
    private $vendedor;
    private $data;
    private $hora;
    private $total;
    private $conectaBD;


    function __construct($vendedor, $total)
    {
        $data = new DateTime();
        $timezone = new DateTimeZone('America/Sao_Paulo');
        $data->setTimezone($timezone);
        $this->vendedor = $vendedor;
        $this->data = $data->format('Y-m-d');
        $this->hora = $data->format('H:i:s');
        $this->total = $total;
        $this->conectaBD = new Conexao();
    }

    public function cadastrar_venda()
    {
        $query = "INSERT INTO venda (vendedor, data, hora, total) 
        VALUES ('$this->vendedor', '$this->data', '$this->hora', '$this->total')";

        $resultado = $this->conectaBD->executarQuery($query);

        if ($resultado->insert_id > 0) {
            return $resultado->insert_id;
        }
        return "Erro ao realizar cadastro!";
    }
}


