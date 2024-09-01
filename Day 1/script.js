//Q1 : find the maximum number in an array
const numbers = [10, 24, 1, 67, -10, 50, 4]


function findMaxNumber(numbers) {

    /* let max = numbers[0]
     for(let i=1;i<numbers.length;i++){
         if(numbers[i]>max){
             max = numbers[i]
         }
     }
     return max;*/

    //second method
    return Math.max(...numbers) // if no parameter is provided than it returns -Infinity
}

// console.log(findMaxNumber(numbers))


//Q2 : Write a JavaScript function to check if a given string is a palindrome
//example : mom

function checkPalindrome(str) {
    /* let revStr = ""
     for(let i=str.length-1;i>=0;i--){
         revStr+=str[i]
     }
     if(revStr.toLowerCase() === str.toLowerCase()){
         return true;
     }else{
         return false
     } */

    //second method

    const revStr = str.toLowerCase().split('').reverse().join('');
    return revStr === str.toLowerCase()
    
}

// console.log(checkPalindrome("raceCar"))


//Q3 : Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const arr = [1,2,3,4,5,6,7,8,9,0]

function findEvenNumbers(arr){
    let evenNumbers = []
    /*for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenNumbers.push(arr[i])
        }
    }
    return evenNumbers */

    //second method
    evenNumbers = arr.filter(number=>number%2===0)
    return evenNumbers;
}

console.log(findEvenNumbers(arr))

