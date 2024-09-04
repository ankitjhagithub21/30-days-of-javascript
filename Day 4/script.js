// Q1
function findMissingNumber(arr){
    const n = arr.length+1;
    const sumOffFirstN = (n*(n+1)/1) / 2;
    let sum = 0
    for(let i=0;i<n-1;i++){
            sum+=arr[i]
    }
    let missingElement = sumOffFirstN - sum;
    return missingElement
}

console.log(findMissingNumber([1,2,3,5]))