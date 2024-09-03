// Q1:
function removeDuplicates(arr){
   
    const uniqueArr = []

    for(let i=0;i<arr.length;i++){
      if(uniqueArr.indexOf(arr[i]) ===-1){
        uniqueArr.push(arr[i])
      }
    }
    
    return uniqueArr;
}
// console.log(removeDuplicates([1,2,3,4,1,2,3]))

//Q2:
function reverseWords(str){
    const words = str.split(' ').reverse().join(' ')
    return words

}

// console.log(reverseWords("The quick brown fox"))


// Q3:

function getKeysAndValues(obj){
    return Object.entries(obj)
    
}

// console.log(getKeysAndValues({ name: "Alice", age: 25, city: "New York" }))