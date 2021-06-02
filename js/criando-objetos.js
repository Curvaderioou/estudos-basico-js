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

function Cachorro (raca, preco){
  this.raca = raca;
  this.preco = preco;
}

const cachorroPequeno = new Cachorro("viralata", 4000);
const cachorroMedio = new Cachorro("boxer", 6000);
const cachorroGrande = new Cachorro("Pastor", 14000);
