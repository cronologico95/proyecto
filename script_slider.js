$(document).ready(main);
var contador = 1;

function main() {
    $('.menu_bar').click(function () {
        if (contador == 1) {
            document.getElementById("barrat").style.width = "80%";
            contador = 0;
        }
        else {
            contador = 1;
            document.getElementById("barrat").style.width = "0%";
        }
    })
}