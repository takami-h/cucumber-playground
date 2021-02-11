const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { isItFriday } = require('../../src/index');

Given('today is {string}', (today) => {
  this.today = today;
});

When('I ask whether it\'s Friday yet', () => {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', (expectedAnswer) => {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
