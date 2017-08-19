
// Find the Longest Word in a String Complete

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