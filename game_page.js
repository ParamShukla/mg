player1 = localStorage.getItem("pk1");
player2 = localStorage.getItem("pk2");

sp1 = 0;
sp2 = 0;


document.getElementById("ps1").innerHTML=player1+" : " ;
document.getElementById("ps2").innerHTML=player2+" : " ;
document.getElementById("sp1").innerHTML=sp1;
document.getElementById("sp2").innerHTML=sp2;




function send(){
    num1 = document.getElementById("word").value;
    num2 = document.getElementById("word2").value;   
    aa = parseInt(word) * parseInt(word2);
    questionnumber = "<h4 id='head'>"+num1+"X"+num2+"</h4>"; 
    input ="<br>Answer:<input type='number' id='icb'>";
    cb="<br> <button class=' btn btn-info' onclick='click()'>Check </button>";
row = questionnumber+input+cb;
     document.getElementById("output").innerHTML = row;
     document.getElementById("word").value="";
     document.getElementById("word2").value="";
}