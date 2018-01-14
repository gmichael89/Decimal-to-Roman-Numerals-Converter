import generate from './generate'
const AppConfig = require('../app.config.js');

document.getElementById('Submit').addEventListener('click', () => {

    const inputValue = document.getElementById('NumberInput').value;
    let result = generate(inputValue);

    if (!result) {
        result = `Input invalid. Ensure that you are passing in a number and it
                    is within the range ${AppConfig.NumberRange.Min} and
                    ${AppConfig.NumberRange.Max}.`
    }

    document.getElementById('Result').innerHTML = result;

})
