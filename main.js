function adduser(){
  a=document.getElementById("player1_name_input").value;
  b=document.getElementById("player2_name_input").value;
  localStorage.setItem("player1-name",a);
  localStorage.setItem("player2-name",b);
  window.location="game_page.html"; 
}