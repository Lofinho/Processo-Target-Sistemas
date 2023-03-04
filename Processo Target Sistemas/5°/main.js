const div = document.createElement('div');
div.setAttribute('id', 'container');

const label = document.createElement('label');
label.setAttribute('for', 'userInput');
label.textContent = 'Digite uma palavra:';

const input = document.createElement('input');
input.setAttribute('id', 'userInput');
input.setAttribute('type', 'text');

const resultado = document.createElement('div');
resultado.setAttribute('id', 'resultado');

const button = document.createElement('button')
button.textContent = 'Alterar'

document.body.appendChild(div);
container.appendChild(label);
container.appendChild(input);
container.appendChild(button)
container.appendChild(resultado);

button.addEventListener('click', () =>{
  let palavra = input.value
  palavra = palavra.split('')
  let tamanhoArray = palavra.length
  let reverseString = []

  for(let i = tamanhoArray - 1; i >= 0; i--){
    reverseString.push(palavra[i])
  }

  resultado.innerHTML = `A palavra reversa é <span>${reverseString.join('')}</span>`;
})
