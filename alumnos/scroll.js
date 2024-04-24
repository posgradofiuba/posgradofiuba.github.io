window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > 20 && (scrollPosition + window.innerHeight) < document.documentElement.scrollHeight) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
