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

// after registering settimeout in nodeapi ,it will remove the settimeout from callstack

/* // suppose we have "n" no of callback function ,all will then transfer to callback queue i.e callback queue is a section for holding callback function
then it will transfer to call stack for further execution 

refer img 3 
responsibility of event loop to check whether call stack is empty or not so that we can put callback function from 
callback queue to callstack
 */