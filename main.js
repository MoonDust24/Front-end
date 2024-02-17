document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll('.elem');

    elems.forEach(function(elem) {
        var image = elem.querySelector('img');

        elem.addEventListener('mousemove', function(event){
            var rect = elem.getBoundingClientRect();
            var x = event.clientX - rect.left //- image.width/2;
            var y = event.clientY - rect.top //- image.height/2;

            image.style.left = `${x}px`;
            image.style.top = `${y}px`;
        });

        elem.addEventListener('mouseleave', function(){
            image.style.opacity = '0';
            elem.style.backgroundColor = 'red';
        });

        elem.addEventListener('mouseenter', function(){
            image.style.opacity = '1';
            elem.style.backgroundColor = 'transparent';
        });
    });
});
