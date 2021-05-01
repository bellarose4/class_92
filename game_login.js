function a(){
x=localStorage.getItem("player1-name");
y=localStorage.getItem("player2-name");
player1score=0;
player2score=0;
document.getElementById("player1_name").innerHTML=x+":";
document.getElementById("player2_name").innerHTML=y+":";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="question turn -"+x;
document.getElementById("player_answer").innerHTML="answer turn -"+y;
}
function send(){
    a=document.getElementById("word").value;
    v=a.toLowerCase();
    console.log("word in LowerCase :-"+v);
    firstdash=v.charAt(1);
    console.log("first dash :-"+firstdash);
    l=Math.floor(v.length/2);
    seconddash=v.charAt(l);
    console.log("second dash :-"+seconddash);
    minus=v.length-1;
    thirddash=v.charAt(minus);
    console.log("third dash :-"+thirddash);
    a1=v.replace(firstdash,"_");
    a2=a1.replace(seconddash,"_");
    a3=a2.replace(thirddash,"_");
    console.log(a3);
    questionword="<h4 id='b'> question:- "+a3+"</h4>";
    inputbox="<br> answer:- <input type='text' id='box'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";
function check(){
    m=document.getElementById("box").value;
    p=m.toLowerCase();
    console.log("answer in LowerCase :-"+p);  
    if(v==p){
        if(answerturn=="player1"){
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("player_question").innerHTML="question turn -"+y;
    }
    else{
        questionturn="player1";
        document.getElementById("player_question").innerHTML="question turn -"+x;
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="answer turn -"+y;
    }
    else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="answer turn -"+x;
    }
    document.getElementById("output").innerHTML="";
}