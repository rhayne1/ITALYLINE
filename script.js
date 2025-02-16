function mostrarCatalogo() {
    const menu = document.getElementById("menu");
    const catalogoImagem = document.getElementById("catalogo-imagem");
    const resetBtn = document.getElementById("reset-btn");
    const catalogoBtn = document.getElementById("catalogo-btn");

    const catalogos = {
        "inspira": "inspira.jpg.JPG",
        "economica": "imagens/linha_economica.jpgeconomica.jpg.JPG",
        "colonial": "colonial.jpg.JPG",
        "provencal": "provencal.jpg.jpg",
        "inox": "inox.jpg.JPG",
        "cristal": "cristal.jpg.JPG",
        "ceramica": "ceramica.jpg.JPG",
        "estilo": "estilo.jpg.jpg",
        "rustica": "rustica.jpg.jpg",
        "duplos": "duplos.jpg.jpg",
        "acessorios": "acessorios.jpg.PNG",
        "rodizios": "rodizios.jpg.jpg",
        "banho": "banho.jpg.JPG",
        "espelhos": "espelhos.jpg.PNG"
    };

    const escolha = menu.value;

    if (escolha && catalogos[escolha]) {
        catalogoImagem.src = catalogos[escolha];
        catalogoImagem.style.display = "block";
        resetBtn.style.display = "inline-block";
        catalogoBtn.style.display = "inline-block";
    } else {
        catalogoImagem.style.display = "none";
        resetBtn.style.display = "none";
        catalogoBtn.style.display = "none";
    }
}

function resetarSelecao() {
    const menu = document.getElementById("menu");
    const catalogoImagem = document.getElementById("catalogo-imagem");
    const resetBtn = document.getElementById("reset-btn");
    const catalogoBtn = document.getElementById("catalogo-btn");

    menu.value = "";
    catalogoImagem.style.display = "none";
    resetBtn.style.display = "none";
    catalogoBtn.style.display = "none";
}
