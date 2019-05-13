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

    let rolledOneEventHandler = (event) => {
        //update player score   
        console.log("updating scores of the game");
        playerScore.name =  event.detail.name;
        playerScore.score = userCurrentlyRolling.totalScore;     
        switchUser(event);
        alert(`Oops ${event.detail.name},you have rolled one`);
       
        //To do: check if user has over 100pts
    };
    let holdEventHandler = (evnt) => {
        let event = userCurrentlyRolling.hasHold();
        playerScore.name =  event.detail.name; 
        playerScore.score = userCurrentlyRolling.totalScore; 
        playerScore.score >= 100 ? userCurrentlyRolling.haveIWon() : switchUser(event);
        
    };
    let switchUser = (event) => {
        

        //change user currently rolling
        userCurrentlyRolling.isMyTurn = !userCurrentlyRolling.isMyTurn;
        console.log("turned off user's turn");
        console.log(userCurrentlyRolling);
        userCurrentlyRolling = event.detail.id === players[0].id ? players[1] : players[0];
        console.log(`changed user from player${event.detail.id} to player${userCurrentlyRolling.id}`);
        userCurrentlyRolling.isMyTurn = !userCurrentlyRolling.isMyTurn;
        console.log("current player");
        console.log(userCurrentlyRolling);
        $("#dice").attr("src",`images/dice-1.png`);
        $("#current-name").text(userCurrentlyRolling.name);
        $("#score-0").text(userCurrentlyRolling.totalScore);
        
        $(".score-player1").text(players[0].totalScore);
        $(".score-player2").text(players[1].totalScore);
        $("#dice-rolled").text(0);
        $("#current-score").text(userCurrentlyRolling.cumulativeScore);
        $(".scores-box>.player1-name").toggleClass("text-muted");
        $(".scores-box>.score-player1").toggleClass("text-muted");
        $(".scores-box>.player1-name").toggleClass("text-danger");
        $(".scores-box>.score-player1").toggleClass("text-danger");

        $(".scores-box>.player2-name").toggleClass("text-muted");
        $(".scores-box>.score-player2").toggleClass("text-muted");
        $(".scores-box>.player2-name").toggleClass("text-danger");
        $(".scores-box>.score-player2").toggleClass("text-danger");

    };


})($);