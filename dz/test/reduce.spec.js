let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {division, sales, dollars, merge, removeTwins} = require("../reduce.js");

describe('dollar',function(){


    it("adding dollars: [70, 54.6, 72, 9, 16] should be equel 221,6", function(){
        expect(dollars([70, 54.6, 72, 9, 16])).to.equal(221.6)
    });

    it("adding dollars: [74, 62, 19, 38, 15] should be equel 208", function(){
        expect(dollars([74, 62, 19, 38, 15])).to.equal(208)
    });
  

});

describe('Selling fruits',function(){


    it("for [60, 10, 15, 6] should return 29", function(){
        expect(sales([60, 10, 15, 6])).to.be.equal(29)
    }); 

    it("for [95, 15, 6, 9, 13] should return 52", function(){
        expect(sales([95, 15, 6, 9, 13])).to.be.equal(52)
    }); 

});


describe('Merge',function(){


    it("to be a function", function(){
        expect(merge).to.be.a("function")
    }); 

    it("it should merge arrays", function(){
        expect(merge([[25, 13, 8, 6], [7, 12]])).to.be.eql([25, 13, 8, 6, 7, 12])
    }); 

    it("it should return 1 merged array", function(){
        expect(merge([[0, 19, 72], [24, 36, 48], [1, 57]])).to.be.eql([0, 19, 72, 24, 36, 48, 1, 57])
    }); 

});


describe('Remove twin value',function(){


    it("removing twin numbers", function(){
        expect(removeTwins([7, 8, 7, 8, 9, 3, 5, 4, 5, 3, 5, 6])).to.be.eql([ 7, 8, 9, 3, 5, 4, 6])
    }); 

    it("removing twin numbers", function(){
        expect(removeTwins([0 ,1, 0, 2, 0, 1, 6, 5, 2, 2, 2])).to.be.eql([ 0, 1, 2, 6, 5 ])
    }); 

   

});

describe('Numbers division',function(){
    

    it('error if argument is not a number',function(){
        expect(()=>division("number")).to.throw(Error);
    });
    it("function should accept number", function() {
        division([1]);
    });

    it("90, 3, 3 should be equal to 10", function() {
        expect(division([90, 3, 3])).to.equal(10);
    });

    it("150, 5, 10 should be equal to 3", function() {
        expect(division([150, 5, 10])).to.equal(3);
    });

    
     

});

