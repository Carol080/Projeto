function montaTd(dado, classe) {
    let td = $("<td></td>");
    td.addClass(classe);
    td.text(dado);

    return td;
}

function montaTr(venda) {
    let vendaTr = $("<tr></tr>");
    vendaTr.addClass("venda");

    vendaTr.append(montaTd(venda.id, "info-id"));
    vendaTr.append(montaTd(venda.data, "info-data"));
    vendaTr.append(montaTd(venda.hora, "info-hora"));
    vendaTr.append(montaTd(venda.vendedor, "info-vendedor"));
    vendaTr.append(montaTd(venda.total, "info-total"));

    return vendaTr;
}

function adicionaVendaNaTabela(venda) {
    let vendaTr = montaTr(venda);
    let tabela = $("#tabela-vendas");
    tabela.append(vendaTr);
}