import generate from './generate'

document.getElementById('Submit').addEventListener('click', () => {

    const inputValue = document.getElementById('NumberInput').value;

    document.getElementById('Result').value = generate(inputValue);

})
