var Game = function(){
  this.characters = [];
}

Game.prototype={
  addCharacter: function(character){
    this.characters.push(character);
  },

}



module.exports = Game;