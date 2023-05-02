"use strict";
function test1() {
 let a = 10;
 if (a > 5) {
 a = 7;
 }
 console.log("a = " + a);
}
test1();
//correct guess

"use strict";
function test2A() {
 if (1 == 1) {
 var a = 5;
 }
 console.log("a = " + a);
}
test2A();

//correct guess

"use strict";
let a = 5
function test2B() {
 if (1 == 1) {
 let a = 5;
 }
 console.log("a = " + a);
}
test2B();

//incorrect guess

"use strict";
let b = 4;
function test3() {
let b = 3;
 console.log("a = " + b);
}
test3();
console.log("a = " + b);

//semi correct

"use strict";
let c = 4;
function test4() {
 let c = 7;
 console.log("a = " + c);
}
test4();
console.log("a = " + c);

//correct guess


"use strict";
let d = 4;
function test5() {
 let d = 7;
 function again() {
 let d = 8;
 console.log("a = " + d); 
 }
 again();
 console.log("a = " + d); 
}
test5();
console.log("a = " + d);

//currect guess


"use strict";
let e = 4;
function test6() {
 let e = 7;
 function again() {
 let e = 8;
 console.log("a = " + e); 
 }
 again();
 console.log("a = " + e); 
}
test6();
console.log("a = " + e);