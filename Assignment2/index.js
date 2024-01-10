// ***** Merge Sort Algorithm *****

// Sort the left half of the list/array
// Sort the right half of the list/array
// Merge the Sorted Lists/Arrays

const mergeSort = (array) => {

    // Base Case
    if (array.length <= 1) {
        return array
    }

    const mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    
    // Recursive Case
    const leftSort = mergeSort(left)
    const rightSort = mergeSort(right)
    
    return mergedArray(leftSort, rightSort)
}

// Logic to Merge Lists/Arrays
const mergedArray = (leftSort, rightSort) => {
    let result = []
    let leftPtr = 0
    let rightPtr = 0
    
    while (leftPtr < leftSort.length && rightPtr < rightSort.length) {
        if (leftSort[leftPtr] < rightSort[rightPtr]) {
            result.push(leftSort[leftPtr])
            leftPtr++
        } else {
            result.push(rightSort[rightPtr])
            rightPtr++
        }
    }
    result = result.concat(leftSort.slice(leftPtr)).concat(rightSort.slice(rightPtr))
    return result;
}

const testArr1 = [3, 2, 1, 13, 8, 5, 0, 1]
const testArr2 = [105, 79, 100, 110]

console.log(mergeSort(testArr1)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(testArr2)); // [79, 100, 105, 110]