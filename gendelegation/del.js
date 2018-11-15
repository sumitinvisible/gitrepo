const architect = {
name:"jill",
assistant:"bill"
}
const developer= {
architect, 
developer1:"alan",
developer2:"walker",
city:"NewYork"
}
function* execute(developer){
    yield developer.developer1;
    yield developer.developer2;
    yield* architect;
}

var z = new execute(developer);
/* const names =[];
for (let name of function execute(developer))
{
     names.push(name);
} */



 