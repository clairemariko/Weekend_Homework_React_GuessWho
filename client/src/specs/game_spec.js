var assert = require('chai').assert;
var Game = require('../Game/game');
var Character = require('../Game/characters');

import characters = require('../sample.json');

  describe('game', function(){

    it('should have start off with no characters', function(){
      var game = new Game();
      assert.equal(0, game.characters.length);
    });

    it('should be able to add characters', function(){
      var game = new Game();
      var character = new Character({name:'Alfred',hair:'ginger', eyes:'blue', gender:'male'});
      game.addCharacter(character);
      assert.deepEqual(character, game.characters[0]);
    });

    it('should have two character in a game', function(){
      var game = new Game();
      var characterOne = new Character({name:'Alfred',hair:'ginger', eyes:'blue', gender:'male'});
      var characterTwo = new Character({name:'Anita',hair:'blonde', eyes:'blue', gender:'female'});
      game.addCharacter(characterOne);
      game.addCharacter(characterTwo);
      assert.equal(2, game.characters.length);
    });

    it('should be able to select a guest randomly from the array of characters', function(){
      var game = new Game([characterOne, characterTwo]);
      var guest = null;
      var characterOne = new Character({name:'Alfred',hair:'ginger', eyes:'blue', gender:'male'});
      var characterTwo = new Character({name:'Anita',hair:'blonde', eyes:'blue', gender:'female'});
      game.addGuest(characterOne, characterTwo);
      assert.equal(guest, game.addGuest[0])
    });

    //use booleans to check that the game will return true or false given specifics. 

    it('should return true that guest has ginger hair', function(){
      var guest = ({name:'Alfred',hair:'ginger', eyes:'blue', gender:'male'});
      assert.equal(guest.hair, true);

    });

    it('should return false that guest has brown hair', function(){
      var guest =
      assert.equal()
    });

    it('should return true if the guest is guessed', function(){

    });



 })






