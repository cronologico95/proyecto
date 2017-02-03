$(document).ready(function () {
    $('body').hide();
    $('#main').hide();
    $('body').show();
    $('#main').show();
});
var contador = 1;

function main() {
    if (contador == 1) {
        document.getElementById("mySidenav").style.width = "100%";
        $('#main').hide();
        contador = 0;
    }
    else {
        contador = 1;
        document.getElementById("mySidenav").style.width = "0%";
        $('#main').show();
    }
}

function cerrar() {
    contador = 1;
    document.getElementById("mySidenav").style.width = "0%";
    $('#main').show();
}