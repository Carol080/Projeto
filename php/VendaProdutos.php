<?php

class  VendaProdutos
{
    private $nome;
    private $valor;
    private $quantidade;
    private $idVenda;
    private $conectaBD;

    function __construct($idVenda, $nome, $valor, $quantidade)
    {
        $this->idVenda = $idVenda;
        $this->nome = $nome;
        $this->valor = $valor;
        $this->quantidade = $quantidade;
        $this->conectaBD = new Conexao();
    }

    public function cadastrar()
    {
        $query = "INSERT INTO venda_produtos (idVenda, nome, valor, quantidade) 
        VALUES ('$this->idVenda', '$this->nome', '$this->valor', '$this->quantidade')";

        $resultado = $this->conectaBD->executarQuery($query);
        $retorno = [
            'status' => false,
            'mensagem' => 'houve um erro ao se cadastrar',
        ];
        if ($resultado->insert_id > 0) {
            $retorno = [
                'status' => true,
                'mensagem' => 'Cadastro realizado!',
            ];
        }
        return $retorno;

    }
}

