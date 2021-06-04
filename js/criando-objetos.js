/*
function Shining(){
  Shining.prototype.qtdadePernas = 0;
  Shining.prototype.qtdadeBracos = 0;
  Shining.prototype.movimenta = function(){};
}

function Heroe(genero){
  this.genero = genero;
}

Heroe.prototype = Object.create(Shining);
Heroe.prototype.magic = function(i){
  if (i === true){(console.log("Tem MANA"))
}else (console.log("Não tem MANA"))
}
Heroe.prototype.hP = function(i){
  if (i === true){
    console.log("É Tanker")
  } else {
    console.log("É DPS")
  }
}

const Centauro = new Heroe(false);
Centauro.qtdadePernas = 4;
Centauro.qtdadeBracos = 2;

*/
/*
function Shining(){
  Shining.prototype.qtdpernas = 0
  Shining.prototype.qtdbracos = 0
  Shining.prototype.movimento = function(){}
}

function Heroe(magic){
this.magic = magic
}

Shining.prototype = Object.create(Heroe);
Heroe.prototype.tanker = function(){
  console.log("Sou tanker")
};

const Centauro = new Heroe(false);

*/
/*
const carro = {
marca: "Marca",
preco: 0,
}

const honda = carro;

honda.marca = "honda"
honda.preco = 2000

console.log(carro.marca)
console.log(carro.preco)

const fiat = carro;

fiat.marca = "fiat"
fiat.preco = 1500

console.log(carro.marca)
console.log(carro.preco)

*/
/*
function Carro(){
  this.marca = "Marca";
  this.preco = 0
};

const honda = new Carro();

honda.marca = "Honda"
honda.preco = 3000

console.log(honda.marca, honda.preco)
  
const fiat = new Carro();

fiat.marca = "FIAT";
fiat.preco = 1100

console.log(fiat.marca, fiat.preco);

console.log(Carro)
*/
/*
O new cria um novo objeto baseado no nome que eu dei, por exemplo 
honda = new carro, entao ele vai criar um novo objeto vazio com o nome honda se baseando no seu construtor que é o Carro.
depois ele define os prototipos, ou seja,
honda.prototype = Carro.prototype, ou seja o honda vai herdar os prototipos de Carro.
Após isso ele vai apontar o this para o honda.
Após isso ele vai executar a função, substituindo o this pelo objeto, o que era this.marca agora é honda.marca, o que era this.preco agora é honda.preco.
e por fim ele retorna o novo objeto, honda ={
  marca:"Marca"
  preco:"0"
}
*/

//podemos entao criar parametros 

/*
function Cachorro (raca, preco){
  const precoFinal = preco * 2
  this.raca = raca;
  this.preco = precoFinal;
}

const cachorroPequeno = new Cachorro("viralata", 4000);
const cachorroMedio = new Cachorro("boxer", 6000);
const cachorroGrande = new Cachorro("Pastor", 14000);
*/

// Transforme o objeto abaixo em um Constructor Function
/*
const pessoa = {
  nome:"Nome pessoa",
  Idade: 0,
  andar(){
    console.log(`${this.nome} andou`)
  }
}
*/
function Pessoa(nome, idade) {
  this.nome = nome;
  this.Idade = idade;
  this.andar = function(){
    console.log(`${this.nome} andou`)
  }
}


const joao = new Pessoa("joao", 20)
const maria = new Pessoa("Maria", 25)
const bruno = new Pessoa("Bruno", 15)

// crie 3 pessoas, joao - 20 anos, Maria - 25 anos e bruno de 15 anos.




//Crie um Constructor Fcuntion (DOM) para manipular listas de elementos do dom, deve conter as seguintes propriedades e metodos.

// elements, retorna nodelist com os elementos selecionados, add class(classe, adiciona a classe a todos os elementos, remove Class, remove a class de todos os elementos

function Dom(seletor){
 const elementList = document.querySelectorAll(seletor);
 this.elements = elementList;
 this.addClass = function(classe) {
   elementList.forEach((element)=>{
     element.classList.add(classe)
  })
 }
 this.removeClass = function(classe){
  elementList.forEach((element)=>{
    element.classList.remove(classe)
  })
 }
}

const list = new Dom("li")