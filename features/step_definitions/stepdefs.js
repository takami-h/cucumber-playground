const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  return today === 'Friday' ? 'TGIF' : 'Nope';
}

Given('today is {string}', (today) => {
  this.today = today;
});

When('I ask whether it\'s Friday yet', () => {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', (expectedAnswer) => {
  assert.equal(this.actualAnswer, expectedAnswer);
});
