"use strict";
(function(){

    var game = {
        user: '',
        computer: '',
        currentPlayer: '',
        moves: 1
    };

    //=======selects character=======\\
    //=====Starts Game=====\\

    $('#x').click(function() {
        game.user = 'X';
        game.computer = 'O';
        $('.btn').addClass('invisible');
        alert('Your character is ' + game.user + ' !');
        setCurrPl();
        whoTurn();
    });

    $('#o').click(function() {
        game.user = 'O';
        game.computer = 'X';
        $('.btn').addClass('invisible');
        alert('Your character is ' + game.user + ' !');
        setCurrPl();
        whoTurn()
    });


    //=====Sets Current Player and "should" update html=====\\

    function setCurrPl(curr) {
        game.currentPlayer = 0;
    $('.whosTurn').click(function(){
        $('.whosTurn').text('Current Players Turn: ' + game.currentPlayer);
    });
    }



    //==========variable declaration=======\\

    var $box1 = $('#box-one');
    var $box2 = $('#box-two');
    var $box3 = $('#box-three');
    var $box4 = $('#box-four');
    var $box5 = $('#box-five');
    var $box6 = $('#box-six');
    var $box7 = $('#box-seven');
    var $box8 = $('#box-eight');
    var $box9 = $('#box-nine');

    //===========updates html turn counter=====\\
function whoTurn() {

    if(game.currentPlayer === 1) {
        alert('Your Turn');
        $('.whosTurn').text('Current Players Turn: ' + game.currentPlayer + ' round: ' + game.moves);
        console.log('hello');
    } else {
        alert('Computers Turn');
        $('.whosTurn').text('Current Players Turn: ' + game.currentPlayer + ' round: ' + game.moves);
    }

}




})();