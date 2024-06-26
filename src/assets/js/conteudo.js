

document.getElementById('conteudo-alteravel').innerHTML = 'Novo Conteúdo Dinâmico! ' + obterParametroDaURL("index");


function alterarConteudo() {
    // Exemplo de alteração dinâmica do conteúdo
    document.getElementById('conteudo-alteravel').innerHTML = 'Novo Conteúdo Dinâmico!';

    
}


function obterParametroDaURL(nomeParametro) {
    var urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeParametro);
}