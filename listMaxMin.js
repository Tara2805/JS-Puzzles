// Find Maximum and Minimum Values of a List

var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}

var numbers = [1, 2, 3, 4, 5];
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));