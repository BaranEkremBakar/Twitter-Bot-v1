function welcome(name, callback) {
console.log("Hello"+ " " + name )
callback()
};


function callBaran() {
    setTimeout(() => {
        console.log("I am Groot");
    }, 1000);
};
welcome("Baran", callBaran);



