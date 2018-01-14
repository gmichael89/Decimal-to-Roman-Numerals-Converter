import IsInRange from './utils/is-in-range'

const AppConfig = require('../config/app-config.js');

const { NumeralsTable } = AppConfig

export default (number) => {

    number = parseInt(number);

    if (isNaN(number) || !IsInRange(number, 1, 3999)) {
        return false;
    }

    var result = '';

    var keys = Object.keys(NumeralsTable).reverse();

    while (number) {

        keys.some((key) => {

            if (number >= parseInt(key)) {
                let item = NumeralsTable[key];
                number -= key;
                result += item;

                // Break out of the iteration to prevent unnecessary processing.
                return true;
            }
        })

    }

    return result;
}
