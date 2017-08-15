

function whatIsInAName(collection, source) {
  
  var arr = [];
  
  arr = collection.filter(function(obj){
    for(var i in source){
      if(source[i] != obj[i]){ // if source is not equal to obj
        return false;
      }
    }
    return true; // for return true
  });
  
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/* work-in-progress


function whatIsInAName(collection, source) {
  
  var arr = [];
  
  arr = collection.filter(function(obj){
    for(var i in source){
      if(obj.hasOwnProperty(search[i]) !== source[i]){
        return false;
      }
  }
  return true;
  });
  
  return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

*/