let questionNum = 0;													// keep count of question, used for IF condition.
const output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = '<h1>Qual seu nome, aprendiz?</h1>';	;													// ouput first question

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});


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


async function questaoZero(input){
  let question = '<h1>Olá, ' + input + '!</h1>';// output response
  await printarAtraso(question, 1);	
  document.getElementById("input").value = "";   
  question = '<h1>Quantos anos você tem?</h1>';			    	// load next question		
  await printarAtraso(question, 2000);	
}

async function questaoUm(input){
  let question ='<h1>Isso significa que você nasceu em ' + (2020 - input) + ' ou '+ (2019 - input) +'</h1>';
  await printarAtraso(question, 1000);
  document.getElementById("input").value = "";  
  question = "<h1> Pressione enter para continuar. </h1>"
   
}

 async function questaoDois(input){
  document.getElementById("input").value = "";   		// clear text box
  let question = '<h1>O que você deseja saber mais sobre? Temos as seguintes opções: </h1>';	

   await printarAtraso(question, 3000)

  question = '<h2> Esconde-Esconde Usando Bots</h2> ';	

   await printarAtraso(question);
  question += '<h2> Replicação da Mente Humana</h2>';					      	
   await printarAtraso(question);
  question += ' <h2> O que é Imitation Learning?</h2>';	

   await printarAtraso(question);

  question = '<h2>Digite o numero da opção que você deseja, entre 1,2 e 3 </h2>';					      	
   await printarAtraso(question);

}

function questaoTres(){
  document.getElementById("input").value = "";   		// clear text box
}
function mudarHTML(question = "nenhuma questao inserida") {
  console.log("Questão inserida: "+question);
  output.innerHTML = question;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printarAtraso(question, time = 3000) {
  mudarHTML(question);
  await sleep(time);
  
}