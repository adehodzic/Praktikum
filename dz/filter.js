function Negative(negative) {
    const minus = negative.filter(neg => neg < 0)
    return minus;
  }

function checkifPersonisOld(old) {
    const older = old.filter(old => old >= 75)
    return older;
}

function WordLenght(words) {
    const result = words.filter(word => word.length > 4);
    return result;
}

function isBigEnough1(numbers) {
    const result = numbers.filter(value => value > 54);
    return result;
}

function isBigEnough2(numbers) {
    const result = numbers.filter(value => value > 60);
    return result;
}


function filterWords(arr, query) {
    return arr.filter(function(element) {
    return element.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

function femaleHorse(horse){
    const sex = horse.filter((horse) => horse.gender === 'female')
    return sex;
}

function Even(n) {
    const even = n.filter(num => num % 2 === 0)
    return even;
}

function Odd(m) {
    const odd = m.filter(numb => numb % 2 != 0)
    return odd;
}







module.exports = { Negative, checkifPersonisOld, WordLenght, isBigEnough1, isBigEnough2, filterWords, femaleHorse, Even, Odd}


