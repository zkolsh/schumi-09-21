// Funcionalidad para el menú móvil
document.getElementById('menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const isHidden = menu.classList.contains('max-h-0');

    if (isHidden) {
        menu.classList.remove('max-h-0');
        menu.classList.add('max-h-64');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        menu.classList.add('max-h-0');
        menu.classList.remove('max-h-64');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cerrar el menú móvil si se redimensiona la ventana a un tamaño mayor
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');
        menu.classList.add('max-h-0');
        menu.classList.remove('max-h-64');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});