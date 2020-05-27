let questionNum = 0;													// keep count of question, used for IF condition.
const output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = '<h1>Qual seu nome, aprendiz?</h1>';	;													// ouput first question

function bot() { 
    let input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    	questaoZero(input);
    }

    else if (questionNum == 1) {
     questaoUm(input);
    
    }   
    else if (questionNum == 2){
    questaoDois(input);
    }
    
}


function questaoZero(input){
  output.innerHTML = '<h1>Olá, ' + input + '!</h1>';// output response
  document.getElementById("input").value = "";   		// clear text box
  let question = '<h1>Quantos anos você tem?</h1>';			    	// load next question		
  setTimeout( delayed => {mudarHTML(question)}, 2000);		
}

function questaoUm(input){
  output.innerHTML = '<h1>Isso significa que você nasceu em ' + (2020 - input) + ' ou '+ (2019 - input) +'</h1>';
  document.getElementById("input").value = "";  
  let question = "<h1> Pressione enter para continuar. </h1>"
  setTimeout( delayed => {mudarHTML(question)}, 3000);
}

function questaoDois(input){
  
  let question = '<h1>O que você deseja saber mais sobre? Temos as seguintes opções: </h1>';					      	
  setTimeout( delayed => {mudarHTML(question)}, 2000);
  question = '<h2> Esconde-Esconde Usando Bots</h2>';	
  				      	
  setTimeout( delayed => {mudarHTML(question)}, 4000);
  question += '<br> <h2> Replicação da Mente Humana</h2>';					      	
  setTimeout( delayed => {mudarHTML(question)}, 4000);
  question += '<br> <h2> O que é Imitation Learning?</h2>';	

  setTimeout( delayed => {mudarHTML(question)}, 4000);

  question = '<h2>Digite o numero da opção que você deseja, entre 1,2 e 3 </h2>';					      	
  setTimeout( delayed => {mudarHTML(question)}, 4000);

 // question = 'Ainda não implementei daqui em diante';					      	
  setTimeout( delayed => {mudarHTML(question)}, 4000);
}

function questaoTres(){
  
}
function mudarHTML(question = "nenhuma questao inserida") {
  console.log("Questão inserida: "+question);
  output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
