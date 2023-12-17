// funcion para cambiar la imagen principal

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las miniaturas
    var thumbnails = document.getElementsByClassName('thumbnails');

    // Agregar evento de clic a cada miniatura
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function (event) {
            changeImage(event);
        });
    }

    // Función para cambiar la imagen principal
    function changeImage(event) {
        var mainImage = document.getElementById('mainImage');
        var imageSrc = event.target.src;
        mainImage.src = imageSrc;

        // Cambiar la clase de la miniatura activa
        for (var j = 0; j < thumbnails.length; j++) {
            thumbnails[j].classList.remove('active');
        }
        event.target.classList.add('active');
    }
});
