// calculator-test.js

const test = require('tape');
const calc = require('./../app/calculator');

test(`#Calculator - add - should return the sum of two numbers`, async (t) => {
  const result = await calc.add(5,8);
  const expected = 13;
  t.assert(result === expected, `Calculator add ok.`);
  t.end();
});

test(`#Calculator - share - should return the value of dividing two numbers`, async(t) => {
  const result = await calc.share(24,6);
  const expected = 4;
  t.assert(result === expected, `Calculator share ok.`);
  t.end();
});


test(`#Calculator - share - should return a message 
  stating that the second parameter cannot be zero`, async(t) => {
  const result = await calc.share(51,0);
  const expected = 'second parameter cannot be zero';
  t.assert(result === expected, 'Calculator share ok.');
  t.end();
});

test(`#Calculator - multiply - should return the value of multiplying two numbers`, async(t) => {
  const result = await calc.multiply(2,3);
  const expected = 6;
  t.assert(result === expected, 'Calculator multiply ok.');
  t.end();
});

test(`#Calculator - subtract - should return the value of subtraction of two numbers`, async(t) => {
  const result = await calc.subtract(9,4);
  const expected = 5;
  t.assert(result === expected, `Calculator subtract ok.`);
  t.end();
});


