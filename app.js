const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumber () {
    // Math.random() da sempre um numero aleatorio entre 0.1 e 0.99 mas nunca sera 1.
    return Math.floor(Math.random() * colors.length);
    // ja que sempre da o resulado menor a 1 e precisamos que seja de 0 a 3, ja que temos um array que tem 4 variaveis, multiplicando entao por 4, so que esse numero nunca chegara a 4.
    // Colocando Math.floor antes do Math.random(), faz com que todos estos numeros seja arredondeados para baixo. 0.99 sera arredondeado para 0. 3.99 sera arredondado para 3. Assim fica entre 0 e 3.
}

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    // get random number between 0 and 3 colors[0,1,2,3] - De essa maneira pode escolher de maneira random as cores no array color que vai desde indice 0 ate indice 3.      
    document.body.style.backgroundColor = colors[randomNumber];
    // agrego a mesma cor escolhida no colors e coloca essa cor como fundo diretamente no body. Colors[randomNumber] siguinifica que vai ser escolhida de maneira aleatoria o indice do array, baseado na funcao getRandomNumber()
    color.textContent = colors[randomNumber];
    // faz que apareca o texto com o nome da cor. Puxa essa informacao desde o array colors.
});