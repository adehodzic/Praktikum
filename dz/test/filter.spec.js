let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const { Negative, checkifPersonisOld, WordLenght, isBigEnough1, isBigEnough2 , filterWords, femaleHorse, Even, Odd,} = require("../filter.js");



describe.skip('Negative numbers',function(){


    it("checking if the number is negative", function(){
        expect(Negative([-15, 45, 12, -85, -9, 8])).to.eql([-15, -85, -9])
    });

});

describe.skip('Filtering out all big values',function(){


    it("numbers bigger then 54", function(){
        expect(isBigEnough2([54, 85, 95, 25, 63, 11])).to.eql([85, 95, 63])
    });

    it("numbers bigger  then 60", function(){
        expect(isBigEnough1([756, 48, 32, 69, 95])).to.eql([756, 69, 95])
    });

});

describe.skip('check if Person is old',function(){


    it("checking if the person is over 18 years old", function(){
        expect(checkifPersonisOld([15, 79, 86, 94, 16, 54])).to.eql([79, 86, 94])
    });

});


describe.skip('Lenght of words',function(){


    it("words with lenght higher than 4", function(){
        expect(WordLenght(["car", "octopus", "banana","house", "sun", "run"])).to.eql(["octopus", "banana","house"])
    });

});




describe.skip('Searching in array',function(){


    it("for fruits, when an is written, the apple and grapefruit should be returned", function(){
        expect(filterWords(['space', 'ace', 'star', 'array', 'mace'], 'ac')).to.eql(['space', 'ace','mace'])
    });

    it("for fruitswhen an is written, the banana, mango, orange should be returned", function(){
        expect(filterWords(['play', 'bay', 'grape', 'grey', 'day'], 'ay')).to.eql(['play', 'bay', 'day'])
    });

});

describe.skip('femaleHorse',function(){


    it("the sex of the horse should be female", function(){
        expect(femaleHorse([
            {
              name: 'Lora',
              gender: 'female'
            },
            {
              name: 'Vjeko',
              gender: 'female'
            },
            {
              name: 'Starshine',
              gender: 'male'
            },
            {
              name: 'Traktor',
              gender: 'female'
            }
          ])).to.eql([ { name: 'Lora', gender: 'female' }, { name: 'Vjeko', gender: 'female' },{ name: 'Traktor', gender: 'female' } ])
    });

});

describe.skip('Even numbers',function(){


    it("checking if the number is even", function(){
        expect(Even([17, 68, 48, 52, 811, 36 ])).to.eql([68, 48, 52, 36])
    });

});

describe.skip('Odd numbers',function(){


    it("checking if the number is odd", function(){
        expect(Odd([7, 15, 19, 36, 57, 42, 159])).to.eql([7, 15, 19, 57, 159])
    });

});



