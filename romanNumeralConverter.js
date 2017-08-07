function convertToRoman(num) {
    
    var decimal = [ 1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 1000];
    var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M',];
    var deciToRom = '';
    for(var i = 0; i < decimal; i++){
        while(decimal[i] <= num){
            // deciToRom = deciToRom + roman[i];
            deciToRom += roman[i];
            deciToRom = deciToRom - decimal[i];
        }
    }
  return deciToRom;
}
convertToRoman(36);