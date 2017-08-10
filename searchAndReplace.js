
// correct code

function myReplace(str, before, after) {

if(before.charAt(0) === before.charAt(0).toUpperCase()){
	after = after.charAt(0).toUpperCase() + after.slice(1); 
}

return str.replace(before, after);
}
myReplace("A quick Jumped brown fox Jumped over the lazy dog", "Jumped", "leaped");



/* work in progress

// 3 slice()??

function myReplace(str, before, after) {

if(before.charAt(0) === before.charAt(0).toUpperCase()){
    after = after.charAt(0).toUpperCase().slice(1); 
    // slice is not working?
    // tried slice(), slice(0)
    // checked "Title Case a Sentence" from fcc-challenge-basic algorithm -- after.slice(1) --
}
return str.replace(before, after);
}
myReplace("A quick Jumped brown fox Jumped over the lazy dog", "Jumped", "leaped");


// 2 - global: this will search all 'Jumped' and replace with 'leaped'

function myReplace(str, before, after) {
    var re = /before/gi;
    var newStr = str.replace(re, after)
    return newStr;
}
myReplace("A quick Jumped brown fox Jumped over the lazy dog", "Jumped", "leaped");

// 1 

function myReplace(str, before, after) {

    str = str.replace(before, after);
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
retrun str; // no output? search and read again
}
myReplace("A quick Jumped brown fox Jumped over the lazy dog", "Jumped", "leaped");

*/