$(document).on('click', '#buscar-venda', function () {
    $.ajax({
        url: 'php/consulta.php',
        type: "POST",
        data: {
            data: $("#buscar-data").val(),
            vendedor: $("#buscar-vendedor").val(),
        },
        success: function (resposta) {
            $("#tabela-vendas").html(" ");
            let vendas = JSON.parse(resposta);
            vendas.forEach(function (venda) {
                adicionaVendaNaTabela(venda);
            })
            $("#buscar-vendedor").val("");
            $("#buscar-data").val("");
        }

    });
})

