function sumAll(arr) {
  var minArr = Math.min(arr[0],arr[1]);
  var maxArr = Math.max(arr[0],arr[1]);
  var totalArr = 0;
  for(var i = minArr; i <= maxArr; i++){
    // i = 0; i <= 4; 1++                       <<<<<<< 
    // i = 1; i <= 4; 2++                       <<<<<<< 
    // i = 2; i <= 4; 3++                       <<<<<<< 
    // i = 3; i <= 4; 4++                       <<<<<<< 
    totalArr = totalArr + i; // totalArr += i;
    // totalArr = 0 + 1 = 1                       <<<<<<< 
    // totalArr = 1 + 2 = 3                       <<<<<<< 
    // totalArr = 3 + 3 = 6                       <<<<<<< 
    // totalArr = 6 + 4 = 10                      <<<<<<< 
  }
  return totalArr;
}
// sumAll([1, 4]);
// sumAll([4, 1]);
// sumAll([5, 10]);
sumAll([10, 5]);