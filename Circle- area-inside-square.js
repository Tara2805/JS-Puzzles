//Circle area inside square

function squareAreaToCircle(size){
    const radius = Math.sqrt(size) / 2;
  
    // Step 2: Calculate the area of the circle using the formula A = πr^2
    const circleArea = Math.PI * Math.pow(radius, 2);
  
    // Return the area of the circle
    return circleArea;
  }
  
  console.log(squareAreaToCircle(20))