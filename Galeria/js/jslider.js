window.addEventListener('load', iniciar, false);

var contador = 0;
var obj = document.getElementById('slider');
var obj2 = obj.getElementsByTagName('img');
var paginacion = document.querySelector('.swiper-dots');
var prevButton = document.querySelector('.gallery-prev');
var nextButton = document.querySelector('.gallery-next');

function iniciar() {
    setInterval(cambiarImg, 5000);
    crearPaginacion();
    prevButton.addEventListener('click', function() {
        cambiarManual('IZQ');
    });
    nextButton.addEventListener('click', function() {
        cambiarManual('DER');
    });
}

function crearPaginacion() {
    for (var i = 0; i < obj2.length; i++) {
        var bullet = document.createElement('span');
        bullet.classList.add('swiper-pagination-bullet');
        bullet.setAttribute('tabindex', '0');
        bullet.setAttribute('role', 'button');
        bullet.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        bullet.addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'));
            cambiarImagen(index);
        });
        bullet.setAttribute('data-index', i);
        paginacion.appendChild(bullet);
    }
    obj2[contador].style.opacity = '1';
}

function cambiarImagen(index) {
    if (index !== contador) {
        obj2[contador].style.opacity = '0';
        contador = index;
        obj2[contador].style.opacity = '1';
    }
}

function cambiarManual(sentido) {
    if (sentido === "DER") {
        var nextIndex = (contador + 1) % obj2.length;
        cambiarImagen(nextIndex);
    } else if (sentido === "IZQ") {
        var prevIndex = (contador - 1 + obj2.length) % obj2.length;
        cambiarImagen(prevIndex);
    }
}

function cambiarImg() {
    var nextIndex = (contador + 1) % obj2.length;
    cambiarImagen(nextIndex);
}
