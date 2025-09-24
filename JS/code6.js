console.log("Code 6");
// call()
// fun.call(null, functionArg)


// function fun(name){
//     console.log("Hello "+ name);
    
// }
// fun.call(null,"Ganesh")

function Emp(id,name){
    this.id  = id ;
    this.name =name ;
}

function PEmp(id,name,salary){
    this.salary = salary
    Emp.call(this,id,name)
}
function TEmp(id,name){
    Emp.call(this,id,name)
}


let pEmp  =  new PEmp(123, "Khushi", 438748)
let tEmp  =  new TEmp(3, "Mohit")

console.log(pEmp);
console.log(tEmp);

