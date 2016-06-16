var Game = function(){
  this.characters = [];
  this.guest = null;
}

Game.prototype={
  addCharacter: function(character){
    this.characters.push(character);
  },
  addGuest:function(character){
    this.guest = this.characters[Math.floor(Math.random()*this.characters.length)];
  },
  checkHair:function(hair){
    if(!hair) return 'False'
  }
  checkGuest:function(character){
    if(!character) return 'False'
  }

}



module.exports = Game;