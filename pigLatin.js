
function translatePigLatin(str){

var vowel = ['a','e','i','o','u'];
var pigLatin = str.split(''); // ['s','o','u','r','a','b','h']
	// if string has first vowel, includes(str[0])
	if(vowel.includes(str[0])){
		// console.log(str = str + " " + 'way');
		return str = str + " " + 'way';
	} else {
		for(var i = 0; i < str.length; i++){
			if(!vowel.includes(str[i])){
				// console.log(vowel)
				// console.log(pigLatin.push(pigLatin.shift()))
				pigLatin.push(pigLatin.shift());
				// return pigLatin; // ["o", "u", "r", "a", "b", "h", "s"]
			} else {
				// add 'ay'
				pigLatin.push('ay');
				// return pigLatin; // ["o", "u", "r", "a", "b", "h", "s", "ay"]
				return pigLatin.join('');
			}
		} // for start
	}
}
translatePigLatin('sourabh');



/* work-in-progress

var a = 'sourabh'.split();
var b = a.push(a.shift());
var c = a + " " + b;
console.log(c) // o,u,r,a,b,h,s, 7

// 

function translatePigLatin(str){

var vowel = ['a','e','i','o','u'];
var pigLatin = str.split(''); // ['s','o','u','r','a','b','h']
if(vowel.includes(str[0])){
	console.log(str = str + " " +  'way')
	// return str += 'way';
} 

}
translatePigLatin('sourabh'); // ourabh way

*/