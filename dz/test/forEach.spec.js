let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const animals = require('../forEach').animals;

describe.skip('forEach', function () {
    it('forEach should return dogs and cats whit long hair', function () {
      let longHair = [];
  
      animals.forEach(function HairCheck(animals) {
        if (animals.hair === 'long') {
            longHair.push(animals.breed);
        }
      });
  
      let expectedOutput = [
        'persian',
        'puddle'
      ];
  
      expect(longHair).to.eql(expectedOutput);
    });

    it('forEach should return dogs and cats whit short hair', function () {
        let shortHair = [];
    
        animals.forEach(function HairCheck(animals) {
          if (animals.hair === 'short') {
              shortHair.push(animals.breed);
          }
        });
    
        let expectedOutput = [
            'ragdoll',
            'bulldog'

        ];
    
        expect(shortHair).to.eql(expectedOutput);
      });

      it('forEach should return dogs and cats whit middle hair', function () {
        let middleHair = [];
    
        animals.forEach(function HairCheck(animals) {
          if (animals.hair === 'middle') {
              middleHair.push(animals.breed);
          }
        });
    
        let expectedOutput = [
            'rottweiler',
            'doberman',
            'sfinks'

        ];
    
        expect(middleHair).to.eql(expectedOutput);
      });

      it('forEach should return dogs and cats whit short hair', function () {
        let shortHair = [];
    
        animals.forEach(function HairCheck(animals) {
          if (animals.hair === 'short') {
              shortHair.push(animals.breed);
          }
        });
    
        let expectedOutput = [
            'ragdoll',
            'bulldog'

        ];
    
        expect(shortHair).to.eql(expectedOutput);
      });

      it('forEach should return dogs ', function () {
        let Dog = [];
    
        animals.forEach(function DogCheck(animals) {
          if (animals.species === 'dog') {
              Dog.push(animals.breed);
          }
        });
    
        let expectedOutput = [
            'rottweiler',
            'bulldog',
            'puddle',
            'doberman'
        
        ];
    
        expect(Dog).to.eql(expectedOutput);
      });

      it('forEach should return cats ', function () {
        let Cat = [];
    
        animals.forEach(function CatCheck(animals) {
          if (animals.species === 'cat') {
              Cat.push(animals.breed);
          }
        });
    
        let expectedOutput = [
            'persian',
            'ragdoll',
            'sfinks'
        
        ];
    
        expect(Cat).to.eql(expectedOutput);
      });


})
