

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