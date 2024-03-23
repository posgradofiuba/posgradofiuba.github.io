function applySystemThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

window.onload = function() {
    applySystemThemePreference();

    window.onscroll = function() {
        scrollFunction();
    };
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemThemePreference);

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
