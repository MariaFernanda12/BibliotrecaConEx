$(document).ready(function () {
    getUser();
});
function getUser() {
    $.ajax({
        url: "Sesion",
        type: "GET"

    }).done(function (response) {
        console.log(response);
        if (response == "false") {
            window.location.href = "index.html";
        } else {
            document.getElementById('ident').innerHTML = response.identificador;
            document.getElementById('nombre').innerHTML = response.nombreSol;
            document.getElementById('col').innerHTML = response.colegio;
            document.getElementById('curso').innerHTML = response.cursoArea;
            var a =  response.imagenUsuario;
            document.getElementById('imageUser').src = a;
        }
    });
}
function closeSesion() {
    $.ajax({
        url: "CloseSesion",
        type: "GET"

    }).done(function (response) {
        console.log(response);
        if (response == "false") {
            window.location.href = "index.html";
        }
    });
}



