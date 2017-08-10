
function convertToRoman(num) {
    
    var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var deciToRom = '';
    for(var i = 0; i < decimal.length; i++){
        while(decimal[i] <= num){
            deciToRom += roman[i]; 
            num -= decimal[i]; 
        }
    }
  return deciToRom;
}
convertToRoman(36);



/*

// 3

function convertToRoman(num) {
    
    var decimal = [ 1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 1000].reverse();
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M',].reverse();
    var deciToRom = '';
    for(var i = 0; i < decimal; i++){
        while(decimal[i] <= num){
            deciToRom += roman[i]; 
            num -= decimal[i];
        }
    }
  return deciToRom;
}
convertToRoman(36);

// 2

function convertToRoman(num) {
    
    var decimal = [ 1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 1000];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M',];
    var deciToRom = '';
    for(var i = 0; i < decimal; i++){
        while(decimal[i] <= num){
            deciToRom += roman[i]; 
            deciToRom -= decimal[i]; // where am I doing wrong?
        }
    }
  return deciToRom;
}
convertToRoman(36);

// 1

function convertToRoman(num) {
    
    var decimal = [ 1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 1000];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M',];
    // var deciToRom = '';
    var deciToRom = [];
    for(var i = 0; i < decimal; i++){
        while(decimal[i] <= num){
            // deciToRom = deciToRom + roman[i];
            // deciToRom += roman[i];
            // deciToRom = deciToRom - decimal[i];
            deciToRom.push(roman[i]);
        }
    }
  return deciToRom;
}
convertToRoman(36);

*/