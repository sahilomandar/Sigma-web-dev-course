console.log("JavaScript Functions");


function hello(name) {
    console.log("Hey " + name + " your are good")
    console.log("Hey " + name + " your laptop is best")
    console.log("Hey " + name + " you can do anything")
    console.log("Hey " + name + " you can have everything you Wish")
}

function sum(a, b, c = 5) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(5, 16)
result2 = sum(5, 1)
result3 = sum(5, 6, 2)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (z)=>{
    console.log("I am an arrow function", z)
}

func1(50);
func1(65);
func1(45);
func1(96);

// hello("Sahil")
// hello("Aniket")
// hello("Sidhu")
// hello("Shivam")
// hello("Sainath")
// hello("Rahul")
// hello("Pratik")

// console.log("Hey Sahil your are good")
// console.log("Hey Sahil your laptop is best")
// console.log("Hey Sahil you can do anything")
// console.log("Hey Sahil you can have everything you Wish")


