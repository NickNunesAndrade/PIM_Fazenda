const fruta = document.querySelector('.produto:nth-child(2)');
const desc = document.querySelector('.descricao');
const desc2 = document.getElementById('pro');
const aberto = document.querySelectorAll('.aberto');
const titulo = document.querySelector('.nome');
const fechar = document.querySelector('.confirma');

desc2.onclick = () => {
    console.log("Deu certo");
    desc.classList.add("aberto");
}

fruta.addEventListener("click", () => {
    desc.classList.add("aberto");
})


console.log(fruta);
console.log(desc);
console.log(titulo);
console.log(aberto);