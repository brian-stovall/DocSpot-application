document.addEventListener('DOMContentLoaded', function() {

    var container = document.getElementById('container');
    // an array of references to each of the 16 divs inside container
    var innerSquares = [];
    
    //center the container element onscreen
    container.style.top = ((window.innerHeight - container.offsetHeight)/2).toString() + 'px';
    container.style.left = ((window.innerWidth - container.offsetWidth)/2).toString() + 'px';

    var innerSquareDimension = container.offsetHeight / 4;

    //populate innerSquares
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            var currentSquare = (document.createElement('div'));
            currentSquare.classList.add('innerSquare');
            currentSquare.style['background-color'] = randColor(null);
            currentSquare.style.width = innerSquareDimension + 'px';
            currentSquare.style.height = innerSquareDimension + 'px';
            currentSquare.style.top = (j * innerSquareDimension) + 'px';
            currentSquare.style.left = (i * innerSquareDimension) + 'px';
            console.log(j + ', ' + i + ': ' + currentSquare.style.top +
                       ', ' + currentSquare.style.left);
            container.appendChild(currentSquare);
            innerSquares.push(currentSquare);
        };

        //choose a random color between 0 and 0xFFFFFF and return a valid CSS string
        //excluding the passed color
        function randColor(currentColor) {
            return '#' + (Math.floor(Math.random() * (0xFFFFFF + 1)).toString(16));
        };

});
