var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>Qual seu nome, aprendiz?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>Olá, ' + input + '!</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>Quantos anos você tem?</h1>';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>Isso significa que você nasceu em ' + (2020 - input) + ' ou '+ (2019 - input) +'</h1>';
    document.getElementById("input").value = "";   

    question = '<h1>O que você deseja saber mais sobre? Temos as seguintes opções: </h1>';					      	
    setTimeout(timedQuestion, 2000);
    question = '<h2> Esconde-Esconde Usando Bots</h2>';					      	
    setTimeout(timedQuestion, 4000);
    question = '<h2> Esconde-Esconde Usando Bots</h2> <br> <h2> Replicação da Mente Humana</h2>';					      	
    setTimeout(timedQuestion, 4000);
    question = '<h2> Esconde-Esconde Usando Bots</h2> <br> <h2> Replicação da Mente Humana</h2> <br> <h2> O que é Imitation Learning?</h2>';					      	
    setTimeout(timedQuestion, 4000);

    question = 'Digite o numero da opção que você deseja, entre 1,2 e 3';					      	
    setTimeout(timedQuestion, 4000);

    question = 'Ainda não implementei daqui em diante';					      	
    setTimeout(timedQuestion, 4000);

    
    }   
    else if (questionNum == 2){
      
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
