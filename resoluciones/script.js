window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleContent() {
    var content = document.getElementById("contentToHide");
    var toggleButton = document.getElementById("toggleButton");
    var toggleIcon = document.getElementById("toggleIcon");
    var displayValue = window.getComputedStyle(content).getPropertyValue('display');

    if (displayValue === "none") {
    content.style.display = "block";
    toggleIcon.src = "https://i.imgur.com/SqonsjV.png";
    toggleButton.setAttribute("aria-label", "Ocultar Resoluciones");
    } else {
    content.style.display = "none";
    toggleIcon.src = "https://i.imgur.com/lnHhdlc.png";
    toggleButton.setAttribute("aria-label", "Mostrar Resoluciones");
    }
}
