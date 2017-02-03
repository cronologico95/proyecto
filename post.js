function activar() {
    var parametro1 = document.getElementById("Usuario").value;
    var parametro2 = document.getElementById("Contrasena").value;
    alert("activar");
    $.ajax({
        data: {
            "parametro1": parametro1
            , "parametro2": parametro2
        }
        , url: 'http://innovation.260mb.net/consultar.php'
        , type: 'post'
        , success: function (response) {
            alert("si");
        }
    });
};