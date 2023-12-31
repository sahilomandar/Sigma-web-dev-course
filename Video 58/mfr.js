let arr = [1, 12, 5, 8, 15]
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array)=>{
    return e**3
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(newArr.filter(greaterThanSeven))

let arr2 = [1, 5, 6, 9, 8, 3]

const red = (a, b)=>{
    return a*b
}

console.log(arr2.reduce(red))