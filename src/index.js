import generate from './generate'
alert('erert')
document.getElementById('Submit').addEventListener('click', () => {
alert('ererr3t')
    const inputValue = document.getElementById('NumberInput').value;

    document.getElementById('Result').value = generate(inputValue);

})
