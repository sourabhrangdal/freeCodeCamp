
// 

function palindrome(str){

    var reg = /[\W]/g;

    var lowerStr = str.toLowerCase().replace(re, '');

    var splitStr = lowerStr.split('').reverse().join('');

    return lowerStr === splitStr;

}
palindrome('eye') 

/*

// work in progress

function palindrome(str){

    var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '')
    var len = str.length;
    // console.log(str)
    for(var i = 0; i < len/2; i++){
        if(len[i] != str[i]){           // research
            // console.log(len[i])
            // console.log(str[i])
            return false;
        }
    }
    return true;  

}
palindrome('eye') 


*/