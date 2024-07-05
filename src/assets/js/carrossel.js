
var scrollPerClick;
var imagePadding = 20;

showMovieData("#nutricao");
showMovieData("#movimento");
showMovieData("#sono");
showMovieData("#mental");
showMovieData("#longevidade");

var scrollAmount = 0;

function sliderScrollLeft(id__carrossel) {
    

    const sliders = document.querySelector(id__carrossel);

    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight(id__carrossel) {

    

    const sliders = document.querySelector(id__carrossel);

    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        });
    }
}


async function showMovieData(id__carrossel) {

    /*
    const s = document.querySelector(id__carrossel);

    const api_key = "1268590fd0b518ebdddbeb4a3e70199c";
    /

    var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&sort_by=popularity.desc"
    );

    result = result.data.results;

    result.map(function (cur, index) {
        s.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" onclick="carregarPaginaEAlterarConteudo(${index})" />`
        );
    });
    */
    scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding;
}

function carregarPaginaEAlterarConteudo(fileURL) {
    /*window.location.href = "../my-test/conteudo.html?index=" + fileURL;*/
    window.location.href = "conteudo.html"
}