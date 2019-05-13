(function($){
    let winnersArray = [],
        players = [],
        userCurrentlyRolling = {},
        hasGameEnded = true,
        playerScore = {};

    $("#btnStartGame").click(function(event){
        //we add players to the players array
        let player1 = new  User ($("#player1").val(),1);
        let player2 = new User ($("#player2").val(),2); 
        players.push(player1,player2);
        userCurrentlyRolling = player1;
        userCurrentlyRolling.isMyTurn = true;
        hasGameEnded = false;
        setUp(player1,player2);

    });

    $("#btnRollDice").click(function(evnt){
        let diceRoll = userCurrentlyRolling.rollDice();
        $("#dice").attr("src",`images/dice-${diceRoll}.png`);
        $("#dice-rolled").text(diceRoll);
        $("#current-score").text(userCurrentlyRolling.cumulativeScore);

    });



})($);