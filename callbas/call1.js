var add = (a,s) =>{
var c = a+s;
return c;
}
var res = add(78,98);
console.log(res);

setTimeout(()=>{

console.log('Inside of callback');
},2000)

// for syncs call we only need call stack that is enough to execute the code 
// settimeout is a node api as it is not availavle in v8 engine ,node provide this feature

// refer figure for better visualization


