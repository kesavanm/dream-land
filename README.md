# land-converter

A simple utility to convert between acres and cents, where 100 cents equals one acre.

## Installation

```bash
npm install land-converter
```

## Usage

```javascript
const landConverter = require('land-converter');

// Convert acres to cents
const cents = landConverter.acresToCents(2.5);
console.log(cents); // Output: 250

// Convert cents to acres
const acres = landConverter.centsToAcres(150);
console.log(acres); // Output: 1.5
```

## API

### acresToCents(acres)

Converts acres to cents.

- **acres** (Number): The number of acres to convert
- Returns: (Number) The equivalent in cents

### centsToAcres(cents)

Converts cents to acres.

- **cents** (Number): The number of cents to convert
- Returns: (Number) The equivalent in acres

## License

MIT
