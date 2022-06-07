const stringLength = require('./string');
const reverseString = require('./reverse');
const capitalize = require('./capital');
const Calculator = require('./calculator');
const calc = new Calculator();

test('should equal the length of the string', () => {
  const length = stringLength('conditioner');
  expect(length).toBe(11);
});

test('should be greater than 1 and less than 10', () => {
  const length = stringLength('hello')
  expect(length).toBe(true);
});

test('should return reversed string', () => {
  const reverseStr = reverseString('hello')
  expect(reverseStr).toBe('olleh');
});


describe('Calculator', () => {

  const addResult1 = calc.add(2, 3);
  const addResult2 = calc.add(7, 9);
  const addResult3 = calc.add(10, 12);

  const subtractResult1 = calc.subtract(10, 7);
  const subtractResult2 = calc.subtract(2, 1);
  const subtractResult3 = calc.subtract(8, 1);

  const divideResult1 = calc.divide(100, 50);
  const divideResult2 = calc.divide(20, 5);
  const divideResult3 = calc.divide(30, 3);

  const multiplyResult1 = calc.multiply(6, 6);
  const multiplyResult2 = calc.multiply(8, 9);
  const multiplyResult3 = calc.multiply(7, 5);


  test('added', () => {
    expect(addResult1).toBe(5);
    expect(addResult2).toBe(16);
    expect(addResult3).toBe(22);
  })

  test('subtracted', () => {
    expect(subtractResult1).toBe(3);
    expect(subtractResult2).toBe(1);
    expect(subtractResult3).toBe(7);
  })

  test('divided', () => {
    expect(divideResult1).toBe(2);
    expect(divideResult2).toBe(4);
    expect(divideResult3).toBe(10);
  })

  test('multiplied', () => {
    expect(multiplyResult1).toBe(36);
    expect(multiplyResult2).toBe(72);
    expect(multiplyResult3).toBe(35);
  })
})

test('should capitalize first character of string', () => {
  const caps = capitalize('conditioner');
  const numCheck = capitalize('100');
  expect(caps).toBe('Conditioner');
  expect(numCheck).toBe('Enter a letter');
});