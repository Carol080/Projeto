let botaoAdicionarVenda = document.querySelector("#adicionarVenda");
botaoAdicionarVenda.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#form-cadastra"),
        venda = obtemVendaDoFormulario(form),
        erros = validaCadastro(venda);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    ($.ajax({
        type: 'POST',
        url: 'php/cadastrar_venda.php',
        data: {
            vendedor: $('#vendedor').val(),
            total: totalVenda,
            produtos: vendasA,
        },
        error: function (resposta) {
            console.log(resposta);
        },
        success: function (resposta) {
            console.log(resposta);
            $("#vendedor").val(" ");
            $("#tabela-nova-venda").html(" ");
            $("#rodape").html(" ");
        }

    }));


});

function validaCadastro(venda) {
    let erros = [];

    if (venda.vendedor.length == 0) {
        erros.push("Informe o vendedor!");
    }

    return erros;
}

let botaoLimparVenda = document.querySelector("#limpar-venda");
botaoLimparVenda.addEventListener("click", function (){
    $("#tabela-nova-venda").html("");
    $("#rodape").html("");
    $("#nome").val("");
    $("#valor").val("");
    $("#quantidade").val("");
    $("#vendedor").val("");
})

