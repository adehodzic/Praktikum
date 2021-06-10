let chai = require("chai");
let assert = require('assert');
let expect = chai.expect;
let should = chai.should;

const {triple, havle, size, getWholeName, Vletter, insect} = require("../map.js");



describe.skip('Havle',function(){
    
    it("Havle [62, 32, 45, 22]", function() {
        expect(havle([62, 32, 45, 22])).to.be.eql([31, 16, 22.5, 11]);
    });

});

describe.skip('Size of string',function(){
    
    it("for airplane, basilisk, mechanic return 8, 8, 8", function() {
        expect(size(["airplane", "basilisk", "mechanic"])).to.be.eql([8,8,8]);
    });

    it("for magnet, fridge, screen return 6, 6 ,6", function() {
        expect(size(["magnet", "fridge", "screen"])).to.be.eql([6,6,6]);
    });

});

describe.skip('Whole Name',function(){
    
    it("get Whole Name for Ivana, Marko, Muhamed", function() {
        expect(getWholeName([
            {lastname: "Peglica", firstname : "Ivana"},
            {lastname: "Trešnjica", firstname : "Marko"},
            {lastname: "Ali", firstname : "Muhamed"}
          ])).to.be.eql(["Peglica Ivana", "Trešnjica Marko", "Ali Muhamed"]);
    });

    it("get WHole Name for Branko, Žarlo, Janko", function() {
        expect(getWholeName([
            {lastname: "Tutankamon", firstname : "Branko"},
            {lastname: "Toranj", firstname : "Žarlo"},
            {lastname: "Žarulja", firstname : "Janko"}
          ])).to.be.eql(["Tutankamon Branko", "Toranj Žarlo", "Žarulja Janko"]);
    });

});

describe.skip('Name + letter',function(){
    
    it("adding (v) for each letter", function() {
        expect(Vletter("Sandra")).to.be.eql(["Sv", "av", "nv", "dv", "rv", "av"]);
    });

});

describe.skip('Insect',function(){
    
    it("should return what the insect likes and multiply the length of the name by 5 to get the legs", function() {
        expect(insect([
            { name: 'ladybug', likes: 'grass' },
            { name: 'termite', likes: 'trees' },
            { name: 'ant', likes: 'ground' }
        ])).to.be.eql([
            {ladybug: "grass", legs:35 },
            {termite: "trees", legs: 35},
            {ant: "ground", legs: 15 }
        ]);
    });

});

describe.skip('Triple',function(){


    it("function", function() {
        expect(triple).to.be.a("function");
    });
    
    it("Triple[1, 5 ,6 ,8 ,9]", function() {
        expect(triple([1, 5 ,6 ,8 ,9])).to.be.eql([3, 15, 18, 24, 27]);
    });
    
    it("Triple [12, 50, 44, 32]", function() {
        expect(triple([12, 50, 44, 32])).to.be.eql([36, 150, 132, 96]);
    });
    
    
    });

