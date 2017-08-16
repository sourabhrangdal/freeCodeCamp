
// work in progress

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