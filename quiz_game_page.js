localStorage.getItem("player1_name" , player1_name);
localStorage.getItem("player2_name" , player2_name);

player1_score = 0;
player2_score = 0;

player1_name = document.getElementById("player1_name").innerHTML = player1_name + ":";
player2_name = document.getElementById("player2_name").innerHTML = player1_name + ":";


player1_name = document.getElementById("player1_score").innerHTML = player1_score;
player2_name = document.getElementById("player2_score").innerHTML = player1_score;


player1_name = document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
player2_name = document.getElementById("player2_answer").innerHTML = "Answer Turn -" + player2_name;