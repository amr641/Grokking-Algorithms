// Binary search O(log n)
const BinarySearch = function (item: number, arr: number[]): number | string {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = arr[mid]
        if (guess == item) return mid
        else if (guess > item) high = mid - 1
        else if (guess < item) low = mid + 1

    }
    return "none"
}
// console.log(binarySearch(40,[1,2,3,4,5,6,7,8,9,10]));


// selection sort
const findSmallestIndex = function (arr: number[]): number {
    // check the smallest number and get its index
    let smallest = arr[0];
    let smallestIndex = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}
let selectionSort = function (arr: number[]): number[] {
    let smallest: number;
    let newArray: number[] = []
    while (arr.length > 0) {
        // set the smallest dynamically
        smallest = findSmallestIndex(arr)
        // push the smallest one by one to the new sorted array
        newArray.push(arr[smallest])
        // remove it
        arr.splice(smallest, 1)
    }
    return newArray
}
// console.log(
//     selectionSort([3, 2, 4, 5, 0, 1]));

// Chapter 3 Recursion
let factorial = function (n: number): number {
    if (n <= 1) { // base case
        return n
    }
    else return n * factorial(n - 1) // recursive case
    /* 6 *factorial(5) 6*120 =720
        5 *factorial(4)5*24=120
          4 *factorial(3) 4*6=24
            3 *factorial(2) 3*2=6
              2 *factorial(1) 2*1=2
            */
}
// console.log(factorial(5));
class Recursive {
    static fib(n: number): number {
        if (n <= 1) {
            return n
        } else {


            return this.fib(n - 1) + this.fib(n - 2)
        }
    }
}
// console.log(Recursive.fib(3));



// Divide and Conquer 

function sum(arr: number[]): number {
    if (!arr.length) {        //
        return 0              // 
    }                         // BASE CASE
    else if (arr.length == 1) { //
        return arr[0]            //
    }                              //
    else {
        return arr.shift()! + sum(arr) // RECURSIVE CASE
    }
}
// console.log(sum([5]));

// Divide and Conquer exercise 4.2  
let listOfNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6,99]
function count(arr: number[]): number { // Recursive function to count the number of items in the list
    if (arr.length == 0) return arr.length
    else if (arr.length == 1) return arr.length
    else {
        let result = 0
        result++
        return result + count(arr.slice(1))
    }
}
// console.log(count(listOfNums)); // 11 [✔]

// Divide and Conquer exercise4.3
function findMaximumNum(arr: number[]): number {
    if (arr.length == 1) return arr[0]
    else {
        let maxNum = findMaximumNum(arr.slice(1))
        return arr[0] > maxNum ? arr[0] : maxNum
    }
}
// console.log(findMaximumNum(listOfNums));

