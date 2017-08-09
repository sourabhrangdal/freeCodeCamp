
// 3
function reverseString(str){

       if(str === "") {
           return "";
       } else {
           return reverseString(str.substr(1)) + str.charAt(0);
       }
        // return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("sourabh"); // ('hbaruos')

// 2
function reverseString(str){
    var splitStr = str.split('');
    // ('s','o','u','r','a','b','h')

    var reverseStr = splitStr.reverse();
    // ('h','b','a','r','u','o','s')

    var joinStr = reverseStr.join('');
    // ('hbaruos')

    return joinStr;
}
reverseString("sourabh"); // ('hbaruos')

// 1
function reverseString(str){
    return str.split('').reverse().join('');
}
reverseString("Reverse the string");