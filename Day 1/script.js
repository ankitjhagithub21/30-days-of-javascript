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

// console.log(findEvenNumbers(arr))


//Q4: Write a JavaScript program to calculate the factorial of a given number. 

function findFactorial(num){
    if(num==0 || num==1){
        return 1;
    }else{
        return num*findFactorial(num-1)
    }
}

// console.log(findFactorial(5))

// Q5 : Write a JavaScript function to check if a given number is prime. 

function checkPrime(num){
    if(num<=1){
        return false;
    }
  
    for(let i=2;i<=num/2;i++){
        if(num%i === 0){
           return false;
        }
    }
    return true

}
// console.log(checkPrime(11))


// Q6 : Write a JavaScript program to find the largest element in a nested array.  

const nestedArray = [
    [3,2,5],
    [19,23,15],
    [45,10,48]
]

function findLargestElement(nestedArray){
    let largestNumber = nestedArray[0][0]
    for(let array of nestedArray){
        for(let number of array){
            if(number > largestNumber){
                largestNumber = number
            }
        }
    }
    return largestNumber
}

// console.log(findLargestElement(nestedArray))

//Q7: Write a JavaScript program to convert a string to title case capitalize the first letter of each word.

function toTitleCase(str) {
    let words = str.split(' ');
    let arr = [];
    for (let word of words) {
        let titleCase = word.charAt(0).toUpperCase() + word.slice(1);
        arr.push(titleCase);
    }
    
    return arr.join(' ');
}

console.log(toTitleCase("hello world this is javascript"));
