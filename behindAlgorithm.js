
// I go after chunks, lots of chunks (this is how i start)

// Free Code Camp - Basic Algorithm Scripting: Title Case a Sentence Complete

// chunk 1
function titleCase(str){
return str.split(''); // split single space and letter
}
titleCase("i'm a little tea pot");
// (20) ["i", "'", "m", " ", "a", " ", "l", "i", "t", "t", "l", "e", " ", "t", "e", "a", " ", "p", "o", "t"]

// chunk 2
function titleCase(str){
return str.split(' '); // split words
}
titleCase("i'm a little tea pot"); // (5) ["i'm", "a", "little", "tea", "pot"]

// chunk 3
function titleCase(str){
return str.split(' ').map();
}
titleCase("i'm a little tea pot"); // undefined is not a function

// chunk 4
function titleCase(str){
return str.split(' ').map(function(letter){ return letter.charAt(0)});
}
titleCase("i'm a little tea pot"); // (5) ["i", "a", "l", "t", "p"]

// chunk 4
function titleCase(str){
return str.split(' ').map(function(letter){ return letter.charAt(0).toUpperCase()});
}
titleCase("i'm a little tea pot"); // (5) ["I", "A", "L", "T", "P"]

// chunk 5
function titleCase(str){
return str.split(' ').map(function(letter){ return letter.charAt(0).toUpperCase() + letter});
}
titleCase("i'm a little tea pot"); // (5) ["Ii'm", "Aa", "Llittle", "Ttea", "Ppot"]

// chunk 6
function titleCase(str){
return str.split(' ').map(function(letter){ return letter.charAt(0).toUpperCase() + letter.slice(1)});
}
titleCase("i'm a little tea pot"); // (5) ["I'm", "A", "Little", "Tea", "Pot"]

// chunk 7
function titleCase(str){
return str.split(' ').map(function(letter){ return letter.charAt(0).toUpperCase() + letter.slice(1)}).join(' ');
}
titleCase("i'm a little tea pot"); // "I'm A Little Tea Pot"
