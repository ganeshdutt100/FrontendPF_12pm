// console.log("Nested If-Else");

// let a = 8;
// let b = 7

// if(a%2 ==0){
//     console.log("Even ");

//      if(b>= 10){
//         console.log(b);
        
//     }else{
//         console.log("data not found");
        
//     }
   
    
// }else{
//     console.log("odd");
    
// }

// let age  = 17;
// let hasLicense=  true;

// if(age >= 18){
//     console.log("your age  enough for driving license");
//     if(hasLicense){
//         console.log("You have a license");
        
//     }else{
//       console.log("you don`t have a license");
      
//     }
    
// }else{
//     console.log("your age not enough for driving license");
    
// }


// let day = 1

// switch(day){
//     case 1:
//         console.log("Monday");
    
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// let a = Number(prompt("Enter your first number "))
// let b = Number(prompt("Enter your second number ")s)
// console.log(a+b);


let firstNum = Number(prompt("Enter your first number "));
let op = prompt("Enter your operator (+, -, *, /)");
let secondNum = Number(prompt("Enter your second number "));

switch(op){
    case "+":
        console.log(firstNum + secondNum);
       break;
    case "-":
        console.log(firstNum - secondNum);
       break;
    case "*":
        console.log(firstNum * secondNum);
       break;
    case "/":
        console.log(firstNum / secondNum);
       break;
    default:
        console.log("Invalid operator");
        break;
}

