const landConverter = require('./index');

// Test acre to cents conversion
console.log('--- Testing acre to cents conversion ---');
console.log('1 acre =', landConverter.acresToCents(1), 'cents');
console.log('2.5 acres =', landConverter.acresToCents(2.5), 'cents');
console.log('0.25 acres =', landConverter.acresToCents(0.25), 'cents');

// Test cents to acre conversion
console.log('\n--- Testing cents to acres conversion ---');
console.log('100 cents =', landConverter.centsToAcres(100), 'acres');
console.log('250 cents =', landConverter.centsToAcres(250), 'acres');
console.log('25 cents =', landConverter.centsToAcres(25), 'acres');

// Test error handling
console.log('\n--- Testing error handling ---');
try {
  landConverter.acresToCents('not a number');
} catch (error) {
  console.log('Error caught:', error.message);
}

try {
  landConverter.centsToAcres(-50);
} catch (error) {
  console.log('Error caught:', error.message);
}
