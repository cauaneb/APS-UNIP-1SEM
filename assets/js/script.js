document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menuContent = document.querySelector('.menu');
    menu.classList.toggle('hidden');
    menuContent.classList.toggle('open');
});