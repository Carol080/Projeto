let botaoLancarVenda = document.querySelector("#lancarVenda"),
    vendasA = [],
    totalVenda = 0;

botaoLancarVenda.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#form-cadastra"),
        venda = obtemVendaDoFormulario(form),
        vendaP = obtemProduto(form);
    erros = validaVenda(vendaP, venda);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaNovaVendaNaTabela(vendaP);
   $("#nome").val("");
    $("#valor").val("");
    $("#quantidade").val("");
    adicionaRodape(venda);

    let mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = " ";
});

function obtemVendaDoFormulario() {
    let venda = {
        vendedor: $("#vendedor").val(),
    }

    return venda;
}

function obtemProduto() {
    let vendaP = {
        nome: $("#nome").val(),
        valor: $("#valor").val(),
        quantidade: $("#quantidade").val(),
        total: calculaTotal($("#valor").val(), $("#quantidade").val()),
    }
    vendasA.push(vendaP);
    return vendaP;
}

function montaTr(vendaP) {
    let vendaTr = document.createElement("tr");
    vendaTr.classList.add("venda");

    vendaTr.appendChild(montaTd(vendaP.nome, "info-produto"));
    vendaTr.appendChild(montaTd(vendaP.valor, "info-valor-unitario"));
    vendaTr.appendChild(montaTd(vendaP.quantidade, "info-quantidade"));
    vendaTr.appendChild(montaTd(vendaP.total, "info-total"));

    return vendaTr;
}


function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaVenda(vendaP) {
    let erros = [];
    if (vendaP.nome == 0) {
        erros.push("Informe o produto!");
    }

    if (vendaP.quantidade == 0 ) {
        erros.push("Informe a quantidade!");
    }

    if (vendaP.valor == 0) {
        erros.push("Informe o valor!");
    }

    if(vendaP.quantidade < 0){
        erros.push("A quantidade não pode ser negativa!");
    }

    if(vendaP.valor < 0){
        erros.push("O valor não pode ser negativo!");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaNovaVendaNaTabela(venda) {
    let vendaTr = montaTr(venda);
    let tabela = document.querySelector("#tabela-nova-venda");
    tabela.appendChild(vendaTr);

}

function adicionaRodape() {
    let rodape = $("#info-total-venda");
    rodape.text(totalVenda);
}

function calculaTotal(valor, quantidade) {
    let total = 0;
    total = valor * quantidade;
    totalVenda += total;
    return total;

}
