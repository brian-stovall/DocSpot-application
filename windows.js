'use strict'
document.addEventListener('DOMContentLoaded', function() {

    var container = document.getElementById('container');
    // an array of references to each of the 16 divs inside container element
    var innerSquares = [];
    
    //center the container element onscreen
    container.style.top = ((window.innerHeight - container.offsetHeight)/2).toString() + 'px';
    container.style.left = ((window.innerWidth - container.offsetWidth)/2).toString() + 'px';
    
    //populate innerSquares
    var innerSquareDimension = container.offsetHeight / 4;

    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            var currentSquare = (document.createElement('div'));
            currentSquare.classList.add('innerSquare');
            currentSquare.style['background-color'] = randColor(null);
            currentSquare.style.width = innerSquareDimension + 'px';
            currentSquare.style.height = innerSquareDimension + 'px';
            currentSquare.style.top = (j * innerSquareDimension) + 'px';
            currentSquare.style.left = (i * innerSquareDimension) + 'px';
            currentSquare.choosable = true;
            container.appendChild(currentSquare);
            innerSquares.push(currentSquare);
        };

    //start animation
    animate();
    
//**********************************Helper functions***********************************

    //animation handler; calls itself via setTimeout to continue animation
    function animate() {
        //choose a square that hasn't changed in the last 2 seconds
        var changeableSquares =  innerSquares.filter((square)=> {return square.choosable});
        var square = randomArrayChoice(changeableSquares);
        //give it a random color, different than its current color
        square.style['background-color'] = randColor(square.style['background-color']);
        //set it as unchoosable
        square.choosable=false;
        //capture a reference to the chosen square via a closure and reset it in 2 seconds
        function revert() { square.choosable = true};
        window.setTimeout(revert, 2000);
        //request another animation in 250ms
        window.setTimeout(animate, 250);
    };

    //choose a random entry from an array
    function randomArrayChoice(arr) {
        return (arr[Math.floor(Math.random() * arr.length)]);
    };
    
     //choose a random color between 0 and 0xFFFFFF and return a valid CSS string
     function randColor(currentColor) {
        var color = (Math.floor(Math.random() * (0xFFFFFF + 1)).toString(16));
        //pad too-short colorstrings with trailing 0s
        while (color.length < 6)
            color += '0';
         color = '#' + color;
         //test to see if we got a new color and try again if we didn't (very unlikely)
         return (currentColor === color) ? randColor(currentColor) : color;
        };

});
