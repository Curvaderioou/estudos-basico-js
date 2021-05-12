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






 

  
