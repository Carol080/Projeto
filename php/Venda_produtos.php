<?php
include_once 'Conexao.php';

class  Venda_produtos
{
    private $nome;
    private $valor;
    private $quantidade;
    private $id_venda;
    private $conectaBD;

    function __construct($id_venda, $nome, $valor, $quantidade)
    {
        $this->id_venda = $id_venda;
        $this->nome = $nome;
        $this->valor = $valor;
        $this->quantidade = $quantidade;
        $this->conectaBD = new Conexao();
    }

    public function cadastrar_vendaP()
    {
        $query = "INSERT INTO venda_produtos (id_venda, nome, valor, quantidade) 
        VALUES ('$this->id_venda', '$this->nome', '$this->valor', '$this->quantidade')";

        $resultado = $this->conectaBD->executarQuery($query);

        if ($resultado->insert_id > 0) {
            return 'Cadastro venda_Produto realizado com sucesso!';
        }
        return 'Erro ao realizar cadastro!';

    }
}

