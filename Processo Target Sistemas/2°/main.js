const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const label = document.createElement('label');
label.setAttribute('for', 'userInput');
label.textContent = 'Digite um valor:';

const input = document.createElement('input');
input.setAttribute('id', 'userInput');
input.setAttribute('type', 'number');

const button = document.createElement('button');
button.classList.add('verificaFibonacci');
button.textContent = 'Verificar';

const resultado = document.createElement('p');
resultado.setAttribute('id', 'resultado');

const tabelaFibonacci = document.createElement('div');
tabelaFibonacci.classList.add('tabelaFibonacci');

container.appendChild(label);
container.appendChild(input);
container.appendChild(button);
container.appendChild(resultado);
container.appendChild(tabelaFibonacci);

button.addEventListener('click', () => {
    let valor = document.querySelector('#userInput');
    let fibonacci = [0, 1];
    let i = 1;

    if (valor.value < 0 || valor.value % 1 !== 0) {
        resultado.innerHTML = 'Digite um número positivo e inteiro';
        input.value = '';
    } else {
        valor = Number(input.value);
        while (fibonacci[i] + fibonacci[i - 1] <= valor) {
            fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
            i++;
            if (fibonacci[i] === valor) {
                resultado.innerHTML = `${valor} pertence à sequência de Fibonacci`;
            } else {
                resultado.innerHTML = `${valor} não pertence à sequência de Fibonacci`;
            }
        }

        tabelaFibonacci.innerHTML = `Aqui está a sequência com os valores anteriores de ${valor}:<br>${fibonacci}`;

        input.value = '';
    }
});
