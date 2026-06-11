 // var let const

 // Declaration and Initialization

 var a; //Declaration
 a = 4; //initialization
 var b = 12;  // Declaration and initization
 
 
 //var adds to window when declared globally, 
 // but not when declared inside functions (then it’s function-scoped).
 // Does not give error on declaring again

 var c = 14;
 var c = 17;

 //const use in constant values or values we are sure not going to change
 // its essential to initialize const at the time of declaration
const hoursInDay = 24;
 // Scope (global,block,functional)

 var i = 42; // global
 
 
 function functional(){  //functional scope
    var j = 90; 
 }

// var does not respect block scope it can be accesed outside of block


if(hoursInDay<4){
    let k = 54;                   // variable k can only be accessed inside if block

}

// Reassignment and redeclaration
// Recdeclaration only possible using var
// redeclaration in let will lead to an error

var d = 65;
d = 24;        //reassignment

var d = 53;    //redeclaration


// Temporal Dead Zone   “Exists but not usable yet”
 console.log(y);       
 let y = 34;          // Temporal Dead Zone (TDZ):
// The time between entering a block scope
// and initializing a variable declared with let/const.
// Accessing it before initialization → ReferenceError.
                
//TDZ does not exist in var 
//TDZ is applicable in let,const



//hoisting impact per type

//Hoisting => JS moves declarations to the top of scope before execution
var a = 12;
a = undefined;
a = 12;
// Hoisting impact per type
// var   -> hoisted, initialized as undefined
// let   -> hoisted, uninitialized (TDZ, not accessible before init)
// const -> hoisted, uninitialized (TDZ, must be initialized at declaration)
