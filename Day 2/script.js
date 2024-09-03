//Q1: Ans
function reverseEachWord(str){

    const words = str.split(' ')
    const revArr = []
    for(let word of words){
        const charArr = word.split('')
       const revWord = charArr.reverse().join('')
       revArr.push(revWord)
    }
    return revArr.join(' ')
}

// console.log(reverseEachWord("Hello World"))

//Q2:Ans
function isInt(num){
    return num%1 === 0
}

console.log(isInt(5.7))
