

function User(name,id){
    this.name = name[0].toUpperCase()+ name.slice(1);
    this.isMyTurn = false;
    //this.rollScore = 0;
    this.cumulativeScore = 0;
    this.holdScore =  false;
    this.totalScore = 0;
    this.id = id;
    this.rolledOneEvent = new CustomEvent("rolledOne",{
        detail: {
            name: name,
            id: id
        }});
    this.winEvent = new CustomEvent("won",{
        detail: {
            name: name,
            id: id
        }});
}
User.prototype.updateCumulativeScore = function(rollScore){
    this.cumulativeScore += rollScore;
};
User.prototype.hasHold = function(){
    this.updateTotalScore();
    return {
        detail: {
            id: this.id,
            name: this.name
        }
    }
};
User.prototype.rollDice = function(){
    let diceScore;    
    if(this.isMyTurn){
        diceScore = Math.floor(Math.random()*6) + 1;
        this.checkRolledOne(diceScore);
        return diceScore;                        
    }
    return 0;
};
User.prototype.checkRolledOne = function(rollScore){
    if(rollScore > 1){
        this.updateCumulativeScore(rollScore);
        
    }
    else{
        this.cumulativeScore = 0;
        this.dispatchEventRolledOne();
    }
};
User.prototype.dispatchEventRolledOne = function(){
    document.dispatchEvent(this.rolledOneEvent);
    
};
User.prototype.updateTotalScore = function(){
    this.totalScore += this.cumulativeScore;
    this.cumulativeScore = 0;
    return this.totalScore;
};