function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(venda) {
    let vendaTr = document.createElement("tr");
    vendaTr.classList.add("venda");

    vendaTr.appendChild(montaTd(venda.id, "info-id"));
    vendaTr.appendChild(montaTd(venda.data, "info-data"));
    vendaTr.appendChild(montaTd(venda.hora, "info-hora"));
    vendaTr.appendChild(montaTd(venda.vendedor, "info-vendedor"));
    vendaTr.appendChild(montaTd(venda.total, "info-total"));

    return vendaTr;
}

function adicionaVendaNaTabela(venda) {
    let vendaTr = montaTr(venda);
    let tabela = document.querySelector("#tabela-vendas");
    tabela.appendChild(vendaTr);
}