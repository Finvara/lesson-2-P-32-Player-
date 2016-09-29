"use strict"; // строгий формат js

var gallery = document.getElementById('gallery');

var show = document.getElementById('show');

gallery.onclick = function(e) {
    console.log(e)
    if(e.target.tagName === 'IMG') {
        var html = "<img src='" + e.target.attributes.src.value + "'>";
        var image = document.createElement('img');
        image.src = e.target.attributes.src.value;
        show.innerText = '';
        show.appendChild(image);
        show.innerText = '';
        show.innerHTML = html
    }
}



    e.target.onmouseout = function() {
        show.style.display = 'none'
    }
}