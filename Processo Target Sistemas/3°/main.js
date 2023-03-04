const dados = fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const removeZeros = data.filter(item => item.valor !== 0);
        console.log(removeZeros);

        const soma = removeZeros.reduce((acc, curr) => {
            return acc + curr.valor;
        }, 0);

        const media = soma / removeZeros.length;
        console.log(soma, media);

        const valores = removeZeros.map(({ valor }) => valor);
        const maior = Math.max(...valores);
        const menor = Math.min(...valores);

        let maiorQueMedia = removeZeros.filter(dia => dia.valor > media);

        let diasAcimaDaMedia = maiorQueMedia.map(dia => dia.dia)

        console.log(`Maior valor ${maior}`);
        console.log(`Menor valor ${menor}`);
        console.log(`Dias acima da média ${diasAcimaDaMedia.join(', ')}`);

    });
