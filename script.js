function gameOverDir(img) {
    document.getElementById("imgSusto").style.display = 'block';
    document.getElementById("reset").style.display = 'block';
}

function gameOverEsq(img) {
    document.getElementById("imgSusto").style.display = 'block'; 
    document.getElementById("reset").style.display = 'block';
}

function susto() {
    let x = document.getElementById("susto");
    x.onplay();
}

function ganhou() {
    document.getElementById("ladoDireito").style.display = 'none';
    document.getElementById("ladoEsquerdo").style.display = 'none';
    document.getElementById("ganhou").innerHTML = "VOCÊ GANHOU :)";
    document.getElementById("reset").style.display = 'block';
   
}