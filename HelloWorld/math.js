// Method 1

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports = {
    add,
    sub,
};

// // Method 2

// exports.add  = (a,b) => a+b;
// exports.sub  = (a,b) => a-b;