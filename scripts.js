document.getElementById('char3').addEventListener('click', function(){
    if(src="char3.png"){
        document.getElementById('char3run').src="char3run.png";
        document.getElementById('char3').src="";
        document.getElementById('char3').style.width = "0";
    }
})

document.getElementById('char4').addEventListener('click', function(){
    if(src="char4.png"){
        document.getElementById('char4run').src="char4run.png";
        document.getElementById('char4').src="";
        document.getElementById('char4').style.width = "0";
    }
})

document.getElementById('lights').addEventListener('click', function(){
    document.body.style.backgroundImage = "url('background-red.jpg')";
    setTimeout(function(){
        document.body.style.backgroundImage = "url('background-green.jpg')";

      },400);
    

    var pos1 = 0;
    var pos2 = 0;
var myvar = setInterval(startrace, 10);
function startrace () {

    
    var ranNum = Math.floor((Math.random()) * 50);
    random = Math.floor((Math.random()) * 100);

  if(ranNum == 0){

    var jump1 = pos1 + random;
    pos1 += random;
    document.getElementById("char3run").style.left = jump1 + "px";

    } 

    else if (ranNum == 1){

    var jump2 = pos2 + random;
    pos2+=random;
    document.getElementById("char4run").style.left = jump2 + "px";

  }


if (pos1 >= 1400)
  {
   
    document.getElementById('char3victory').src = "char3victory.png";
    clearInterval(myvar);
  }
  else if (pos2 >= 1400)
  {
    
    document.getElementById('char4victory').src = "char4victory.png";
    clearInterval(myvar);
  }
  
}
})


document.getElementById('char3victory').addEventListener('click', function reset(){
    window.location.reload();
    });
    document.getElementById('char4victory').addEventListener('click', function reset(){
        window.location.reload();
        });

