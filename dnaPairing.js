
//

function pairElement(str){
    var pairDNA = { T:'A', A:'T', G:'C', C:'G' };

    return str.split('').map(function(letter){
        return [letter, pairDNA[letter]];
    });
}
pairElement("CGC")


//

function pairElement(str){
    
    var pairDNA = {T:'A', A:'T', G:'C', C:'G'};

    str = str.split('');
    for(var i = 0; i < str.length; i++){
        str[i] = [ str[i], pairDNA[str[i]] ];
    }

    return str;
}
pairElement("CGC")


/* work-in-progress

// map

function pairElement(str){

    var pairDNA = { T:'A', A:'T', G:'C', C:'G' };

    return str.split('').map(function(letter){
        // console.log(letter);
        // console.log(letter, pairDNA)
        // console.log(letter, pairDNA[letter])
        // return letter, pairDNA[letter];
        return [letter, pairDNA[letter]];
});

pairElement("CGC")

// ------------------------ //

// for loop

function pairElement(str){
    
    var pairDNA = { T:'A', A:'T', G:'C', C:'G' };

    str = str.split('');
    for(var i = 0; i < str.length; i++){
        
        // str[i] = str[i]; // ['C','G','C']
        // str[i] = str[i] + pairDNA; // ["C[object Object]", "G[object Object]", "C[object Object]"]
        // str[i] = pairDNA(str[i]); // pairDNA isn't a function?
        // str[i] = pairDNA.push(str[i]); // pairDNA.push isn't a function?
        // str[i] = str[i] + pairDNA[str[i]];
        // str[i] += pairDNA[str[i]];
        // str[i] = ( str[i] + pairDNA[str[i]] );
        // str[i] = str[i], pairDNA[str[i]];
        // str[i] = [ str[i] + pairDNA[str[i]] ]; 

        str[i] = [ str[i], pairDNA[str[i]] ]; 
    }

    return str;
}
pairElement("CGC")

// ------------------------ //

// not working?
// review with other coders?

function pairElement(str){
    
    return str.split('').map(function(letter){

        if(letter === 'A'){
            return ('A','T');
        } else if(letter === 'T'){
            return ('T','A');
        } else if(letter === 'C'){
            return ('C','G');
        } else {
            return ('G','C');
        }

        // return (letter === 'A') ? ('A','T') : (letter === 'T') ? ('T','A') : (letter === 'C') ? ('C','G') : ('G','C');

    };

}
pairElement('CGC');

// ------------------------ //

// not working?
// review with other coders
// keep trying

function pairElement(str){

    var pairDNA = "A": "T", "T": "A", "C": "G", "G": "C" };
    var newArr = [];
    for(var i in str){
        newArr.push(str[i], pairDNA[str[i]]);
        str = newArr;
    }
return str;

}
pairElement('CGC')

*/