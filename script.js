console.log("linked");
window.onload = function() {


function postQuestions() {
	var questionText = document.getElementById('type-here').value;
    var len = Number(questionText.length);
    var answer= '';

    function checkLen() {
    if (len%20===0) {
    	answer = "Very Doubtful";
    } else if (len%19 === 0) {
    	answer = "Outlook not so good";
    } else if (len%18 === 0) {
    	answer = "My sources say NO";
    } else if (len%17 === 0) {
    	answer = "My reply is no";
    } else if (len%16 === 0) {
  		answer = "Don't count on it";
  	} else if (len%15 === 0) {
  		answer = "Concentrate and ask again";
  	} else if (len%14 === 0) {
  		answer = "Cannot predict now";
  	} else if (len%13 === 0) { 
  		answer = "Better not tell you now";
  	} else if (len%12 === 0) {
  		answer = "Ask again later";
  	} else if (len%11 === 0) {
  		answer = "Reply hazy, try again";
  	} else if (len%10 === 0) {
  		answer = "Signs point to YES";
  	} else if (len%9 === 0) {
        answer = "YES!!!";
    } else if (len%8 === 0) {
    	answer = "Outlook good";
    } else if (len%7 === 0) {
    	answer = "Most likely";
    } else if (len%6 === 0) {
    	answer = "As I see it, yes";
    } else if (len%5 === 0) {
    	answer = "You may rely on it";
    } else if (len%4 === 0) {
    	answer = "Yes, definaitely";
    } else if (len%3 === 0) {
    	answer = "Without a doubt";
    } else if (len%2 === 0) {
    	answer = "It is decidely so";
    } else {
    	answer = "It is certain!";
    	}
    }
    checkLen();

    var node = document.createElement("DIV");
    var textnode= document.createTextNode(answer);
    node.appendChild(textnode);
 
	document.getElementById("lil-questions-list").appendChild(node);

	}

	document.getElementById("click-here").addEventListener("click", function() {
	postQuestions();	
});
};