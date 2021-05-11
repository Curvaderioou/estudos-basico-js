//const myText = String("Hello Prototype")

//console.log(myText.__proto__.split === String.prototype.split);

//podemos assumir entao que o constructor do myText é o String

//console.log(myText.constructor === String);

// myText.constructor -> String
// myText.__proto__ -> String.prototype

//function Animal(){}

//console.log(Animal.constructor)

/*
function Animal(){
  this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas)
*/
/*
function Pessoa(name) {
  this.name = name
}
const p = new Pessoa ("Guilherme")
console.log(p)

function Pessoa(name) {
  this.name = name

  return {
    name: "Teste",
  };
}
const p = new Pessoa ("Guilherme")
console.log(p)
*/


/* opção com o call
function Animal (qtdePatas){
  this.qtdePatas = qtdePatas;
  this.movimentar = function(){}
}

function Cachorro(morde){
  Animal.call(this, 4);

  this.morde = morde;
  this.latir = function() {
    console.log("Au Au")
  }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro (true)

console.log(pug)
*/

/* função construtora na pratica

function Animal (){}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function(){}


function Cachorro(morde){
this.qtdePatas = 4;
this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
  console.log("Au Au");
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug)
console.log(pitbull)

*/

function Cachorro() {};

Cachorro.prototype.latir = function(){
  console.log("AUUUU")
};

const viraLata = new Cachorro();

Cachorro.prototype.xixi = function(){}



console.log(viraLata.__proto__)