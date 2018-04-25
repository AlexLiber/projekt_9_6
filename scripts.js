var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var existingLiElements = document.getElementsByTagName('li'),
        element = document.createElement('li');

    element.innerHTML = 'item ' + existingLiElements.length;
    list.appendChild(element);
});