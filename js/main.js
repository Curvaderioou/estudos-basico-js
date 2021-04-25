/*var nome = "Felipe Portella";
var idade = 28
var idade2 = 10
var frase = "Japão é o melhor time do mundo"

//alert ("Bem vindo " + nome + " e ele tem: " + idade +  " anos");
//alert (idade + idade2)
console.log(frase.replace("Japão", "Brasil"))
*/
//var lista = ["maça", "pera", "uva"];
//lista.push("melancia")
//lista.pop()

//console.log (lista.length)
//console.log (lista.reverse())
//console.log (lista.toString())
/*
var fruta = {nome:"maça", cor: "vermelho", preco: "2"}
console.log (fruta.nome)
console.log (fruta.cor)
console.log (fruta.preco)
*/
//var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"laranja", cor:"laranja"}, {nome:"uva", cor:"roxo"}];
/*
var idade = prompt ("Qual a sua idade")
if (idade >= 18){
  console.log("Maior de idade");
} else {
  console.log("menor de idade");
}


var cont = 0
while (cont <=5){
  console.log(cont);
  cont++
}

var i;
for (i = 1 ; i <= 5 ; i++){
  console.log(i)
}



//var d = new Date();
//alert(d.getMonth())
//var d = new Date();
//alert(d.getMonth()+1)

function soma(n1, n2){
  return n1 + n2;
}

alert (soma(5, 10));

function setReplace (frase, nome, novo_nome){
  return frase.replace(nome, novo_nome)
  }
  console.log (setReplace("Vai Japão", "Japão", "Brasil"))
  

  function validaIdade(idade){
    var validar
    if (idade >=18){
      validar = true;
    } else {
      validar = false
    }
    return validar;
  }
  var idade = prompt ("Digite a sua idade: ");
  console.log(validaIdade(idade));
  

  function clicking(){
    alert("Obrigado por Clicar");
  }
  

  function clicking(){
    document.getElementById("thankyou").innerHTML = "Obrigado por clicar";
  }


  

  function clicking(){
    document.getElementById("thankyou").innerHTML = "Obrigado por clicar";
  }

  function redirecionar(){
    window.location.href ="https://www.origamid.com/"
  }

  function trocar(element){
    //document.getElementById("mousemove").innerHTML = "Agora Mudou o texto";
    element.innerHTML = "Agora Mudou o texto";
  }
  function voltar(element){
    //document.getElementById("mousemove").innerHTML = "Agora voltou, passe o mouse sobre"
    element.innerHTML = "Agora voltou, passe o mouse sobre"
  }

  function load(){
    alert("página carregada")
  }

  function change(element){
    console.log(element.value)
  }
  */

function clicking() {
  document.getElementById("thankyou").innerHTML = "Obrigado por clicar";
}
function redirecionar() {
  window.open("https://www.origamid.com/")
}