function* colors(){
  yield 'red';
  yield 'orange';
  yield 'black';
}
const a = new colors();
a.next();
a.next();
a.next();
function* colors(){
  const aa = yield 'red';
  yield 'orange';
  yield 'black';
return aa;
}
const amm = colors();
/* 
output sequence
amm.next();

{value: "red", done: false}
amm.next();
{value: "orange", done: false}
amm.next();
{value: "black", done: false}
amm.next();
{value: undefined, done: true}
------------------------------

function* colors(){

  const aa = yield 'red';
  yield 'orange';
  yield 'black';
return aa;
}
const amm = colors();


amm.next();
{value: "red", done: false}
amm.next();
{value: "orange", done: false}
amm.next();
{value: "black", done: false}
amm.next('dd');
{value: undefined, done: true}

-----------------------------------------------

function* colors(){

yield 'red';
  
}
const amm = colors();

amm.next();
{value: "red", done: false}
amm.next('kkkk');
{value: undefined, done: true}
-----------------------------------------------
function* colors(){

var a =yield 'red';
return a;
  
}
const amm = colors();
amm.next();
{value: "red", done: false}
amm.next('hhwh');
{value: "hhwh", done: true}
amm.next('hhw');
{value: undefined, done: true}

--------------------------------------------------

function* colors(){

  const aa = yield 'red';
  yield 'orange';
  yield 'black';
return aa;
}
const amm = colors();
amm.next("dded");
{value: "red", done: false}
amm.next("");
{value: "orange", done: false}
amm.next("");
{value: "black", done: false}
amm.next("");
{value: "", done: true}
amm.next("");
{value: undefined, done: true}
amm.next();
{value: undefined, done: true}
*/

