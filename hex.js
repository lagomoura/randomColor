const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumber () {
    return Math.floor(Math.random() * hex.length)
}
// Criamos essa funcao para pegar um numero aleatorio entre 0.1 e 0.99, multiplicamos pela quantidade de variaveis dentro do array hex e arredondamos para baixo. Com isso podemos criar dado suficiente para gerar uma cor hex aleatoria. Usando esse dado como valor para indice de array hex


// Crio um evento que a cada vez que click no btn me genera um hexColor composto por um # ja guardado no hexColor e soma qualquer valor aleatorio do array hex ate chegar a 6 caracteres.
btn.addEventListener('click', () => {
let hexColor = '#';
for (let i = 0; i<6;i++){
    hexColor = hexColor + hex[getRandomNumber()]
    // Pode escrever assim tbm hexColor += hex[0]
    // hexColor =  # + hex[aleatorio ate chegar em 6 dados] => #B82D3C
}
color.textContent = hexColor;
// Faz aparecer o mesmo codigo da cor como texto
document.body.style.backgroundColor = hexColor
// Coloca a cor do background a mesma cor gerada no hexColor
})

