
//

function booWho(bool) {
    if(bool === true){
        return true;
    } else if(bool === false){
        return true;
    } else {
        false;
    }
}
booWho(true)

// 

function booWho(bool) {

    return (bool === true || bool === false);

}
booWho([].slice)

//

function booWho(bool) {

    return !bool === bool;

}
booWho({ "a": 1 })


// should return true
    // booWho(true)
    // booWho(false)

// should return false
    // booWho([1, 2, 3])
    // booWho([].slice)
    // booWho({ "a": 1 })
    // booWho(1)
    // booWho(NaN)
    // booWho("a")
    // booWho("true")
    // booWho("false")

/*

// typeof 

function booWho(bool) {

    if(typeof(bool) === "boolean"){
        return true;
    } else {
        return false;
    }
}
booWho(NaN)


*/    