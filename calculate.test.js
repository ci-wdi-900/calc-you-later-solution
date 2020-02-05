const calculate = require('./calculate');

describe('calculate', () => {
  it(`given two strings representing numbers and a string of '+', returns the sum of those numbers`, () => {
    expect(calculate('3', '5', '+')).toBe(8)
    expect(calculate('5', '6', '+')).toBe(11)
  });

  it(`given two strings representing numbers and a string of '-', returns the second number subtracted from the first number`, () => {
    expect(calculate('3', '5', '-')).toBe(-2)
    expect(calculate('8', '5', '-')).toBe(3)
  });

  it(`given two strings representing numbers and a string of 'x', returns the second number subtracted from the first number`, () => {
    expect(calculate('3', '5', 'x')).toBe(15)
    expect(calculate('10', '4', 'x')).toBe(40)
  });

  it(`given two strings representing numbers and a string of '/', returns the first number divided by the second number`, () => {
    expect(calculate('15', '5', '/')).toBe(3)
    expect(calculate('55', '11', '/')).toBe(5)
  });

  it(`given two strings representing numbers and a string of '%', returns the result of a modulus operation of the first number by the second number`, () => {
    expect(calculate('15', '4', '%')).toBe(3)
    expect(calculate('20', '6', '%')).toBe(2)
  });

  it(`given a string that doesn't match one of our operations, gives us a nice error message`, () => {
    expect(calculate('2', '3', 'troogle')).toBe(`Sorry, that's not a mathematical operation!`)
    expect(calculate('15', '5', 'sparky')).toBe(`Sorry, that's not a mathematical operation!`)
  })

  it(`allows for the word 'plus' in addition`, () => {
    expect(calculate('3', '5', 'plus')).toBe(8)
    expect(calculate('1', '2', 'plus')).toBe(3)
  })

  it(`allows for the word 'minus' in subtraction`, () => {
    expect(calculate('3', '5', 'minus')).toBe(-2)
    expect(calculate('103', '50', 'minus')).toBe(53)
  })

  it(`allows for the word 'times' in multiplication`, () => {
    expect(calculate('3', '5', 'times')).toBe(15)
    expect(calculate('3', '15', 'times')).toBe(45)
  })

  it(`allows for an upper case 'X' in multiplication`, () => {
    expect(calculate('3', '5', 'X')).toBe(15)
    expect(calculate('10', '101', 'X')).toBe(1010)
  })

  it(`allows for the word 'modulus' in a modulus operation`, () => {
    expect(calculate('15', '4', 'modulus')).toBe(3)
    expect(calculate('53', '13', 'modulus')).toBe(1)
  })
  
  it(`allows for the shortening 'mod' in a modulus operation`, () => {
    expect(calculate('15', '4', 'mod')).toBe(3)
    expect(calculate('5', '2', 'mod')).toBe(1)
  })
  
  it(`allows for the words 'added to' in addition`, () => {
    expect(calculate('3', '5', 'added to')).toBe(8)
    expect(calculate('3', '51', 'added to')).toBe(54)
  })
  
  it(`allows for the words 'subtracted from' in subtraction`, () => {
    expect(calculate('3', '5', 'subtracted from')).toBe(-2)
    expect(calculate('31', '5', 'subtracted from')).toBe(26)
  })

  it(`allows for the words 'multiplied by' in division`, () => {
    expect(calculate('3', '5', 'multiplied by')).toBe(15)
    expect(calculate('3', '50', 'multiplied by')).toBe(150)
  })

  it(`allows for the words 'divided by' in division`, () => {
    expect(calculate('15', '5', 'divided by')).toBe(3)
    expect(calculate('155', '5', 'divided by')).toBe(31)
  })
});