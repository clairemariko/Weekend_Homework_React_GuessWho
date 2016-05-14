var React = require('react');
var sampleCharacter = require('../sample.json');

  

  var GameBox = React.createClass({
    getInitialState:function(){
      return {characters: sampleCharacter};
    },


    render: function(){
      return(
        <h1>hellllooooooo</h1>
        );
      }

});


  module.exports=GameBox;