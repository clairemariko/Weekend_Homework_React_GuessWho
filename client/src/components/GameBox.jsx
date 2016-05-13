var React = require('react');

  var sampleData = [
    {id:1, name:'Rick', hair:'blond', gender: 'male'},
    {id:2, name:'Keith', hair:'brown', gender: 'male'},
    {id:3, name:'Beth', hair:'red', gender: 'female'}
  ];


  var GameBox = React.createClass({
    getInitialState:function(){
      return {data: []};
    },


    render: function(){
      return(
        <h1>hellllooooooo</h1>
        );
      }

});


  module.exports=GameBox;