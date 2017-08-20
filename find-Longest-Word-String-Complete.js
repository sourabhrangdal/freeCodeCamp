
// Find the Longest Word in a String Complete

function findLongestWord(str){

    var longestWord = '';

    str = str.split(' ');

    for(var i = 0; i < str.length; i++){
        if(str[i].length > longestWord){
            longestWord = str[i].length;
        }
        
    }
    
return longestWord;

}
findLongestWord("The quick brown fox jumped over the lazy dog");


// sort

function findLongestWord(str){

    return str.split(' ').sort(function(small, big){
    	return big.length > small.length;
})[0];

}
findLongestWord("The quick brown fox jumped over the lazy dog");


/*

// reduce << not working??

function findLongestWord(str){
    return str.split(' ').reduce(function(small, big){
    	return big.length > small.length;
})[0];
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// sort

function findLongestWord(str){
    return str.split(' ').sort(function(small, big){
    	return big.length > small.length;
})[0];
}
findLongestWord("The quick brown fox jumped over the lazy dog");


function findLongestWord(str){
    return str.split(' ').sort(function(small, big){
    	return big > small ? big : small;
});
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str){
    return str.split(' ').sort(function(small, big){
    	return big.length > small.length ? big : small;
});
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str){
    return str.split(' ').sort(function(small, big){
    	return big.length > small.length;
});
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str){
    return str.split(' ').sort(function(small, big){
    	return big > small;
});
}
findLongestWord("The quick brown fox jumped over the lazy dog");


// for loop

function findLongestWord(str){

    var longestWord = '';

    str = str.split(' ');

    for(var i = 0; i < str.length; i++){
        //console.log(str[i])
        //console.log(str[i].length)
        //console.log(str[i] < longestWord)
        //console.log(str[i].length < longestWord)
        //console.log(str[i] > longestWord)
        
        if(str[i].length > longestWord){
            longestWord = str[i].length;
        }
        
    }
    
return longestWord;

}
findLongestWord("The quick brown fox jumpedjumped over the lazy dog");



*/