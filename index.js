/**
 * land-converter
 * A utility to convert between acres and cents (where 100 cents equals one acre)
 */

/**
 * Convert acres to cents
 * @param {number} acres - The number of acres to convert
 * @returns {number} The equivalent in cents
 */
function acresToCents(acres) {
  if (typeof acres !== 'number' || isNaN(acres)) {
    throw new TypeError('Input must be a valid number');
  }
  
  if (acres < 0) {
    throw new Error('Input must be a non-negative number');
  }
  
  return acres * 100;
}

/**
 * Convert cents to acres
 * @param {number} cents - The number of cents to convert
 * @returns {number} The equivalent in acres
 */
function centsToAcres(cents) {
  if (typeof cents !== 'number' || isNaN(cents)) {
    throw new TypeError('Input must be a valid number');
  }
  
  if (cents < 0) {
    throw new Error('Input must be a non-negative number');
  }
  
  return cents / 100;
}

module.exports = {
  acresToCents,
  centsToAcres
};
