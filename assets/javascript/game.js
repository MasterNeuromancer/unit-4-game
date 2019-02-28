$( document ).ready(function(){
    var ComputerGuess=Math.floor(Math.random()*101+19)
    $("#rng").text(ComputerGuess);
    console.log(ComputerGuess);

    var redNumber= Math.floor(Math.random()*18+1)
    var blueNumber= Math.floor(Math.random()*18+1)
    var yellowNumber= Math.floor(Math.random()*18+1)
    var greenNumber= Math.floor(Math.random()*18+1)

    var score= 0; 
    var wins= 0;
    var losses = 0;

  $("winCount").text(wins);
  $("#lossCount").text(losses);

  function reset(){
        ComputerGuess=Math.floor(Math.random()*101+19);
        console.log(ComputerGuess)
        $("#rng").text(ComputerGuess);
        redNumber= Math.floor(Math.random()*18+1);
        blueNumber= Math.floor(Math.random()*18+1);
        yellowNumber= Math.floor(Math.random()*18+1);
        greenNumber= Math.floor(Math.random()*18+1);
        score= 0;
        $("#scoreTotal").text(score);
        } 

  function won(){
    wins++; 
    $("#winCount").text(wins);
    reset();
  }

  function lost(){
    losses++;
    $("#lossCount").text(losses);
    reset()
  }

    $("#red").on ("click", function(){
      score = score + redNumber;
      $("#scoreTotal").text(score); 
          if (score == ComputerGuess){
            won();
          }
          else if ( score > ComputerGuess){
            lost();
          }   
    })  
    $("#blue").on("click", function(){
      score = score + blueNumber;
      $("#scoreTotal").text(score); 
          if (score == ComputerGuess){
            won();
          }
          else if ( score > ComputerGuess){
            lost();
          } 
    })  
    $("#yellow").on("click", function(){
      score = score + yellowNumber;
      $("#scoreTotal").text(score);
            if (score == ComputerGuess){
            won();
          }
          else if ( score > ComputerGuess){
            lost();
          } 
    })  
    $("#green").on("click", function(){
      score = score + greenNumber;
      $("#scoreTotal").text(score); 
        
            if (score == ComputerGuess){
            won();
          }
          else if ( score > ComputerGuess){
            lost();
          }
    });   
  }); 