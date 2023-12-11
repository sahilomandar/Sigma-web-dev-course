console.log("Hello I am Conditional Tutorial")

let age = 1;
// let grace = 3;

// age += grace

// console.log(age);
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age ** grace);
// console.log(age / grace);
// console.log(age % grace);


if(age==18){
    console.log("Yes you can drive");
}

else if(age == 0){
    console.log("Are you kidding?");
}
else if(age == 1){
    console.log("Are you again kidding?");
}

else{
    console.log("No you cannot drive");
}


a = 6;
b = 10;
let c = a > b? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else{
    let c = a - b;
}
*/