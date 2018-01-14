# Roman Numeral Generator

A generator to convert a decimal number into Roman numerals. There is a config file found in `config/app-config.json` where the number range is defined. The default range is set to 1-3999.

The conversion function can be found in `src/generate.js` and is written as a single function export so that it can be easily utilised. The app currently uses the function as an input event handler and also as a test case.

## Installation

Run the command `npm install` in the project root to install all necessary dependencies.

## Running the Code

The function can be tested via a basic web interface by opening the file `build/index.html` in a web browser.

Alternatively, run `npm run start` in the console and navigate to http://localhost:8080/ in a browser to convert a number to Roman Numerals.

## Testing

Run `npm run test` to test the methods `src/generate.js` and `src/utils/is-in-range.js`.

A pretest script runs the [Standard][standard-lint] linting tool before the main testing scripts to ensure that files within the `src/` directory are linted to industry-recognised standards.

Test cases can be found in `tests/converter/*.js` and `tests/is-in-range/*.js`.

[standard-lint]: https://standardjs.com
