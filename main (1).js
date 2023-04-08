canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx._beginpath;
ctx.color = "grey";
ctx.lineWidth = 1;
ctx._150,143,430,200(x, y, width, height);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx.beginpath;
ctx.color = "blue";
ctx.lineWidth = 5;
ctx._250,210,40,0,2(x, y, r, startAngle, endAngle);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
ctx.beginpath;
ctx.color = "black";
ctx.lineWidth = 10;
ctx._350,210(position)
ctx.stroke();

// Similarly, create a red circle with position 210 and 40
ctx.beginpath;
ctx.color = "red";
ctx.lineWidth = 15;
ctx._210,40(position)
ctx.stroke();

// Similarly, create an orange circle with position 300 and 250
ctx.beginpath;
ctx.color = "orange";
ctx.lineWidth = 20;
ctx._300,250(position);
ctx.stroke();

// Similarly, create a green circle with position 400 and 250
ctx._beginpath;
ctx.color = "green";
ctx.lineWidth = 25;
ctx._400,250(position);
ctx.stroke();