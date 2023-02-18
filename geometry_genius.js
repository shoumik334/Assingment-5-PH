const resultDiv = document.getElementById('resultDiv');
const triangleInputs = document.getElementById('triangleInputs');
const rectangleInputs = document.getElementById('rectangleInputs');
const parallelogramInput = document.getElementById('parallelogramInput');


// Calculate buttons
const calculateButtons = document.querySelectorAll('.card button');
for (const button of calculateButtons) {
    button.addEventListener('click', (e) => {
        console.log(e.target, e.target.value)
        startCalculation(e.target, e.target.value);
    })
}

function startCalculation(target, value) {
    if (value === 'triangle') {
        if (validation(target)) {
            let result = 0.5 * input1Value(target) * input2Value(target);
            publishResult(result, 'Triangle');
        }
    }
    else if (value === 'rectangle') {
        if (validation(target)) {
            let result = input1Value(target) * input2Value(target);
            publishResult(result, 'Rectangle');
        }
    }
    else if (value === 'parallelogram') {
        if (validation(target)) {
            let result = input1Value(target) * input2Value(target);
            publishResult(result, 'Parallelogram');
        }
    }
    else if (value === 'rhombus') {
        if (validation(target)) {
            let result = 0.5 * input1Value(target) * input2Value(target);
            publishResult(result, 'Rhombus');
        }
    }
    else if (value === 'pentagon') {
        if (validation(target)) {
            let result = 0.5 * input1Value(target) * input2Value(target);
            publishResult(result, 'Pentagon');
        }
    }
    else if (value === 'ellipse') {
        if (validation(target)) {
            let result = Math.PI * input1Value(target) * input2Value(target);
            publishResult(result, 'Ellipse');
        }
    }

}




// changing card background color randomly
const cards = document.querySelectorAll('.card');
for (const card of cards) {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = `rgba(${random255()}, ${random255()}, ${random255()}, .2)`;
    })
}

//get a random number from 0 to 255
function random255() {
    let random = Math.floor(Math.random() * 256);
    return random;
}

// input value validation check
function validation(reference) {
    let num1 = Number(reference.previousElementSibling.children[0].value);
    let num2 = Number(reference.previousElementSibling.children[1].value);
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        alert('enter proper value');
        return false;
    }
    return true;
}

function input1Value(reference) {
    return Number(reference.previousElementSibling.children[0].value);
}
function input2Value(reference) {
    return Number(reference.previousElementSibling.children[1].value);
}

//Result Generate
let count = 1;
function publishResult(result, type) {
    const para1 = document.createElement('p');
    para1.textContent = `${count}. ${type}`;

    const para2 = document.createElement('p');
    para2.innerHTML = `${result.toFixed(2)} cm<sup>2<sup>`;
    para2.style.fontWeight = 'bold';
    para2.setAttribute('class', 'convertP');

    const button = document.createElement('button');
    button.setAttribute('class', 'btn-primary');
    button.innerHTML = `Convert to m<sup>2</sup>`;

    const section = document.createElement('section');
    section.setAttribute('class', 'result-section')
    section.appendChild(para1);
    section.appendChild(para2);
    section.appendChild(button);

    resultDiv.appendChild(section);
    count++;

   //convert meter square 
    button.addEventListener('click', () => {
        let mixedArray = button.previousElementSibling.textContent.split(' ');

        if (mixedArray.includes('cm2')) {
            let meterSqr = Number(mixedArray[0]) / 10000;
            para2.innerHTML = `${meterSqr} m<sup>2</sup>`;
            button.innerHTML = `Convert to cm<sup>2</sup>`;
        } else{
            let centimeterSqr = Number(mixedArray[0]) * 10000;
            para2.innerHTML = `${centimeterSqr} cm<sup>2</sup>`;
            button.innerHTML = `Convert to m<sup>2</sup>`;
        }
    })
}
