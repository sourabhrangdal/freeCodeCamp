
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