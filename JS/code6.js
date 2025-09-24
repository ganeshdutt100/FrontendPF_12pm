console.log("Code 6");
// call()
// fun.call(null, functionArg)


// function fun(name){
//     console.log("Hello "+ name);
    
// }
// fun.call(null,"Ganesh")

// function Emp(id,name){
//     this.id  = id ;
//     this.name =name ;
// }

// function PEmp(id,name,salary){
//     this.salary = salary
//     Emp.call(this,id,name)
// }
// function TEmp(id,name){
//     Emp.call(this,id,name)
// }


// let pEmp  =  new PEmp(123, "Khushi", 438748)
// let tEmp  =  new TEmp(3, "Mohit")

// console.log(pEmp);
// console.log(tEmp);

// apply(thisArg , [array])
// let a = [12,345,654,3,23,4]
// let max  = Math.max.apply(this, a)
// let min  = Math.min.apply(this, a)
// console.log(max);
// console.log(min);


let course  = {
    name : "JS",
getCourseName  : function(){
    return this.name;
}
}

let course2 = {
    name :  "React.js"
}

// console.log(course.getCourseName());
// console.log(course2.getCourseName());

let value =   course.getCourseName;
let newValue  = value.bind(course2);
console.log(newValue());
