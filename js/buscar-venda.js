let botaoBuscarVenda = document.querySelector("#buscar-venda");

botaoBuscarVenda.addEventListener("click", function () {
    ($.ajax({
        url: 'php/consulta.php',
        type: "POST",
        data: {
            data: $("#buscar-data").val(),
            vendedor: $("#buscar-vendedor").val(),
        },
        error: function (resposta) {
        },
        success: function (resposta) {
            console.log(resposta);
            $("#tabela-vendas").html(" ");
            let vendas = JSON.parse(resposta);
            vendas.forEach(function (venda) {
                adicionaVendaNaTabela(venda);
            })
            $("#buscar-vendedor").val("");
            $("#buscar-data").val("");
        }

    }));
})

