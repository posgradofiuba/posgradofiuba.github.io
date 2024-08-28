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
    var contentToHide = document.getElementById('contentToHide');
    var toggleIcon = document.getElementById('toggleIcon');

    if (contentToHide.style.display === 'none') {
        contentToHide.style.display = 'block';
        toggleIcon.src = 'https://i.imgur.com/SqonsjV.png';
        localStorage.setItem('resolucionesOcultas', 'false');
    } else {
        contentToHide.style.display = 'none';
        toggleIcon.src = 'https://i.imgur.com/lnHhdlc.png';
        localStorage.setItem('resolucionesOcultas', 'true');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var infoText = document.getElementById('info-text');
    var infoBox = document.getElementById('info-box');
    var closeBtn = document.getElementById('close-btn');
    var contentToHide = document.getElementById('contentToHide');
    var toggleIcon = document.getElementById('toggleIcon');

    if (infoText) {
        infoText.addEventListener('click', function () {
            infoBox.classList.remove('hidden');
            infoBox.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            infoBox.classList.add('hidden');
            infoBox.style.display = 'none';
        });
    }

    if (localStorage.getItem('modoOscuro') === 'true') {
        document.body.classList.add('modo-oscuro');
    }

    if (localStorage.getItem('resolucionesOcultas') === 'true') {
        contentToHide.style.display = 'none';
        toggleIcon.src = 'https://i.imgur.com/lnHhdlc.png';
    } else {
        contentToHide.style.display = 'block';
        toggleIcon.src = 'https://i.imgur.com/SqonsjV.png';
    }
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-7Z988QYX9W');

function showMessage(id) {
  var messageBox = document.getElementById(id + '-message');
  if (messageBox.style.display === 'none' || messageBox.style.display === '') {
      messageBox.style.display = 'block';
  } else {
      messageBox.style.display = 'none';
  }
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-7Z988QYX9W');

function showMessage(id) {
  var messageBox = document.getElementById(id + '-message');
  if (messageBox.style.display === 'none' || messageBox.style.display === '') {
      messageBox.style.display = 'block';
  } else {
      messageBox.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
    var infoText = document.getElementById('info-text');
    var infoBox = document.getElementById('info-box');
    var closeBtn = document.getElementById('close-btn');

    if (infoText) {
        infoText.addEventListener('click', function () {
            infoBox.classList.remove('hidden');
            infoBox.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            infoBox.classList.add('hidden');
            infoBox.style.display = 'none';
        });
    }

    if (localStorage.getItem('modoOscuro') === 'true') {
        document.body.classList.add('modo-oscuro');
    }
});

function modooscuro() {
    var element = document.body;
    element.classList.toggle("modo-oscuro");

    if (element.classList.contains('modo-oscuro')) {
        localStorage.setItem('modoOscuro', 'true');
    } else {
        localStorage.setItem('modoOscuro', 'false');
    }
}

function previewDocument(fileId) {
    var previewFrame = document.getElementById('previewFrame');
    var previewContainer = document.getElementById('previewContainer');
    previewFrame.src = 'https://drive.google.com/file/d/' + fileId + '/preview';
    previewContainer.style.display = 'block';
}

function previewDocument(fileId) {
    const previewContainer = document.getElementById('previewContainer');
    const previewFrame = document.getElementById('previewFrame');
    
    previewFrame.src = `https://drive.google.com/file/d/${fileId}/preview`;
    
    previewContainer.style.display = 'block';
}

function closePreview() {
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.style.display = 'none';
}
