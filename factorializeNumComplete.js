
// While loop

function factorialize(num) {

    var result = num;

    if(num === 0 || num === 1){
        return 1;
    }

    while(num > 1){
        num--;
        result *= num;
    }

return result;

}
factorialize(5);


// for loop

function factorialize(num) {

    if(num === 0 || num === 1){
        return 1;
    }
    for(var i = num - 1; i > 0; i--){ // i > 0 or i > 1, search/ask
        num *= i;
    }
    
return num;

}
factorialize(5);