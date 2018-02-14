'use strict';

const Fp = require('../lib/fp.js');

// FILTER


describe('testing filter with array for even numbers only', () => {
  let expected = [2,4,6,8];
  it('it should return the array with only even numbers', () => {
    let array = [1,2,3,4,5,6,7,8];
    let even = (n) => {return n % 2 === 0};
    let result = Fp.filter(array, even);
    expect(result).toEqual(expected);
    // expect(40).toEqual(90);
  })
});


// FOREACH


describe('testing forEach with an array of four numbers', () => {
  let expected = [2, 18, 16, 16];
  it('it should double the amounts', () => {
    let array = [1, 9, 8, 8];
    let result = [];
    let callback = (number) => {
      return number * 2;
    }
    Fp.forEach(array, (number) => {
      result.push(callback(number));
    });
    expect(result).toEqual(expected);
    // expect(40).toEqual(90);
  })
});




// MAP

describe('testing map with 4 numbers', () => {
  let expected = ['New number: 2', 'New number: 10', 'New number: 9', 'New number: 9'];
  it('it should return strings with the amounts increased by one', () => {
    let array = [1, 9, 8, 8];
    let callback = (number) => {
      return `New number: ${number + 1}`;
    }
    let result = Fp.map(array, callback);
    expect(result).toEqual(expected);
    // expect(40).toEqual(90);
  })
});




// REDUCE

describe('testing reduce with an array of four numbers', () => {
  let expected = 26;
  it('it should return 26', () => {
    let array = [1, 9, 8, 8];
    let callback = (accumulator, number) => {
      return accumulator + number;
    }
    let result = Fp.reduce(array, callback);
    expect(result).toEqual(expected);
    // expect(40).toEqual(90);
  })
});


