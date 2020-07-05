$(document).ready(function () {

var magic8Ball = {};

var onClick = function () {
$("#answer").hide();
$("#answer").fadeIn(4000);
var question = prompt("Yes, No, Maybe So?");
setTimeout(function () {
	$("#answer").hide();
magic8Ball.askQuestion(question);
$("#8ball").effect("shake");
}, 500);
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
};

$("#questionButton").click(onClick);

magic8Ball.answers = ["It is certain.","It is decidedly so.","Without a doubt.","Yes – definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes."," Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];

magic8Ball.askQuestion = function (question) {
		var randomNumber = Math.random();
		var randomNumberArray = randomNumber * this.answers.length;
		var randomIndex = Math.floor(randomNumberArray);
		var randomAnswer = this.answers[randomIndex];
		$("#answer").text(randomAnswer);
		$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

		console.log(question);
		console.log(randomAnswer);
};
$("#answer").hide();



});
