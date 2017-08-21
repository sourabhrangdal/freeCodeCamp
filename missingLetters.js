
function fearNotLetter(str) {

    str = str.split('').map(function(letter){
        return letter.charCodeAt(0);
    });

    for(var i = 0; i < str.length; i++){
        if(str[i + 1] - str[i] > 1){
            return String.fromCharCode(str[i] + 1);
        }
    }
}
fearNotLetter("abce");


/*

// work in progress

function fearNotLetter(str) {
    str = str.split('').map(function(letter){
        return letter.charCodeAt(0);
    });
    for(var i = 0; i < str.length; i++){
    //console.log(str)
    //console.log(str[i])
    //console.log(str[i + 1] - str[i] > 1)
    //console.log(str[i] + 1)
        if(str[i + 1] - str[i] > 1){
            return String.fromCharCode(str[i] + 1);
        }
    }
}
fearNotLetter("abce");


// ------------------------ // working on below code

function fearNotLetter(str) {

    var keyCode, len = str.length;

    for(var i = 0; i < len; i++){
        code = len.charCodeAt(i)   
        // console.log(code);

        code!= str.charCodeAt(0) + i;
        //console.log(code);
        console.log(code +" "+ String.fromCharCode(code - 1));
    }

}
fearNotLetter("abce");

*/