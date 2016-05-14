var Character = require('../Game/characters');
var assert = require('chai').assert;

describe('character', function(){



  it('should have a character name', function(){
    var character = new Character({name:'Alfred',hair:'ginger', eyes:'blue', gender:'male'});
    assert.equal(character.name, 'Alfred');

  });

  it('should have ginger hair', function(){
    var character = new Character({name:'Alfred',hair:'ginger', eyes:'blue', gender:'male'});
    assert.equal(character.hair, 'ginger');
  });

  it('should have be male', function(){
    var character = new Character({name:'Alfred',hair:'ginger', eyes:'blue', gender:'male'});
    assert.equal(character.gender, 'male');
  });



})