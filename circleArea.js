//7 kyu Circle area inside square

//Turn an area of a square in to an area of a circle that fits perfectly inside the square.

function squareAreaToCircle(size){
    const radius = Math.sqrt(size) / 2;
  
    // Step 2: Calculate the area of the circle using the formula A = πr^2
    const circleArea = Math.PI * Math.pow(radius, 2);
  
    // Return the area of the circle
    return circleArea;
  }
  
  console.log(squareAreaToCircle(20))