// Object

let rajesh = { name: "rajesh", age: "17" }
console.log(rajesh.name, rajesh.age)



// 1. Write a JS code to print numbers from 1 to 10

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 2. Write a JS code to print Even numbers in given array

let evennumber = [5, 4, 58, 8, 8, 5, 8, 7, 5, 9, 2, 4, 8, 5, 2, 58, 8, 4, 2, 5, 8, 4, 2, 5, 8, 4, 2, 5]

for (let ii = 0; ii < evennumber.length; ii++) {
    if (evennumber[ii] % 2 === 0) {
        console.log(evennumber[ii])
    }
}


// 3. Write a JS code to find the power of a number using for looplet 

function power(a, b) {
    let multiply = 1;
    for (let r = 0; r < b; r++) {
        multiply *= a
    }
    return multiply;
}

let r2 = power(2,3)
console.log(r2)



// 4. Write a JS code to find the no of digits in a number
// function whilee(){
// let a3=0;
// while(a3<10){
//     a3++;
//     return a3;
// }
// }
// let r3=whilee();
// console.log(r3)

function whilee(a) {
    
    let counts = 0;
    while (a >1) {
        a = a / 10;
        counts++;

    }
    return counts;
}
console.log(whilee(2000))

// console.log(whilee(54445))
// let number={nub:234567}
// console.log(number.nub)
// function whilee(a) {
//     let counts = 0;
//     while (a > 0) {
//         a = Math.floor(a / 10);
//         counts++;
//     }
//     return counts;
// }

// console.log(whilee(544));



// 5. Write a JS code to calculate the sum of digits in a number

let sum=[3343,56,45,65,675,675,765,567,673,5]
console.log(sum.length)

let sums=0;
for(let i=0; i<sum.length; i++){
sums += sum[i]
}
console.log(sums)







