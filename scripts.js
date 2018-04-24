var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var itemCount = document.getElementsByTagName('li'),
        itemNumber = itemCount.length,
        element = document.createElement('li');

    element.innerHTML = 'item ' + itemNumber;
    list.appendChild(element);
    });