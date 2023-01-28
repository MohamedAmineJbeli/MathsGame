var questions=[];

function start(){
    var nbq=document.getElementById("nbq").value;

    if(nbq<=0 || isNaN(nbq)){
        alert("You can't answer a question if you don't have one. Enter a number larger than 0!");
        return;
    }


    for(var i=0;i<nbq;i++){
        var nb1=Math.floor(Math.random()*10);
        var nb2=Math.floor(Math.random()*10);
        var symb=Math.floor(Math.random()*4);
        var question,answer;

        if(symb==0){
            question="What is "+nb1+"+"+nb2+"?";
            answer=nb1+nb2;
        }else if(symb==1){
            question="What is "+nb1+"-"+nb2+"?";
            answer=nb1-nb2;
        }else if(symb==2){
            question="What is "+nb1+"*"+nb2+"?";
            answer=nb1*nb2;
        }else{
            question="What is "+nb1+"/"+nb2+"?";
            answer=nb1/nb2;
        }

        questions.push({question:question,answer:answer});
    }

    var html="";

    for(var i=0;i<questions.length;i++){
        html+=(i+1)+". "+ questions[i].question +" <input type='text' id='answer" + i + "'><br>";
    }

    document.getElementById("questions").innerHTML=html;
}

function check(){
    var correctAnswers=0;
    var wrongAnswers=0;
    var table="<table border='1'><tr><th>Question</th><th>Answer</th><th>Results</th></tr>";

    for(var i=0; i<questions.length;i++){
        var userAnswer=document.getElementById("answer"+i).value;
        var result="Incorrect";
        if(userAnswer==questions[i].answer){
            result="Correct";
            correctAnswers++;
        }else{
            wrongAnswers++;
        }
        table+="<tr><td>" + questions[i].question + "</td><td>" + userAnswer + "</td><td>" + result + "</td></tr>";
    }
    table+= "</table>"

    document.getElementById("results").innerHTML=table;

    if(correctAnswers==questions.length){
        correctsound.play();
    }
    if(wrongAnswers==questions.length){
        wrongsound.play();
    }

}

var bonusAnswer="2003-12-30";
function checkbonus(){
    var userAnswer=document.getElementById("bonusAnswer").value;
    if(userAnswer==bonusAnswer){
        alert("sa77itek");
    }else{
        alert("Zid thabbet")
    }
}