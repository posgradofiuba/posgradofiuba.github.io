window.onscroll = function() { 
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    // Eliminar el numeral del enlace cuando se hace clic en el botón de subir
    const enlaces = document.querySelectorAll('.indice a');
    enlaces.forEach(function(enlace) {
        enlace.href = enlace.href.replace(/#.*$/, '');
    });

    // Hacer scroll hasta arriba de la página
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
