// binary search O(log n)
const binarySearch = function (item: number, arr: number[]): number | string {
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
const findSmallestIndex = function (arr: number[]):number {
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
let selectionSort = function (arr: number[]):number[] {
    let smallest: number;
    let newArray: number[] = []
    while(arr.length>0){
        // set the smallest dynamically
        smallest = findSmallestIndex(arr)
        // push the smallest one by one to the new sorted array
        newArray.push(arr[smallest])
        // remove it
        arr.splice(smallest, 1)
    }
    return newArray
}
console.log(
    selectionSort([3, 2, 4, 5, 0, 1]));
