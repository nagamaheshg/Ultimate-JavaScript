// Immediately-Invoked-Functions
(function () {
    const user = 'John';
    console.log(user)
    const hello = () => console.log("Hello From the IIFE");
    hello()
})();

//hello()

(function(name){
    console.log('Hello '+name);
})('Simba')