function showElement(element) {
    const elt = document.getElementsByClassName(element)[0];
    if (elt.style.display === 'flex') {
        elt.style.display = 'none';
        return 0;
    }
    elt.style.display = 'flex';
}

window.addEventListener('scroll', function() {
    var element = document.getElementById('scroll');
    var distanceFromTop = element.offsetTop;

    if (window.scrollY > distanceFromTop) {
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';
        element.style.width = '100%'; // Pour s'assurer que l'élément reste plein écran
    } else {
        element.style.position = 'static'; // Retour à son comportement normal
    }
});