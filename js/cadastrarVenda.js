$(document).on('click', '#adicionarVenda', function (event) {
    event.preventDefault();
    let form = $("#form-cadastra"),
        venda = obtemVendaDoFormulario(form),
        erros = validaCadastro(venda);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'php/cadastrarVenda.php',
        data: {
            vendedor: $('#vendedor').val(),
            total: totalVenda,
            produtos: vendas,
        },
        success: function (resposta) {
            location.reload();
        }

    });


});

function validaCadastro(venda) {
    let erros = [];

    if (venda.vendedor.length == 0) {
        erros.push("Informe o vendedor!");
    }

    return erros;
}


