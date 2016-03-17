$(document).ready(function() {

  var firstClick = '';
  var secondClick = '';

  function clicks() {
    if (firstClick == '') {
      firstClickFun();
    } else if (secondClick == '') {
      secondClickFun();
    } else checkClicks();
  }

  function firstClickFun() {
    $('.box').click(function () {
      firstClick = $(this).attr('class');
      changeClass = (firstClick + '-clicked');
      $(this).addClass(changeClass);
      clicks();
    });
  }

  function secondClickFun() {
    $('.box').click(function () {
      secondClick = $(this).attr('class');
      changeClass = (secondClick + '-clicked');
      $(this).addClass(changeClass);
      clicks();
    });
  }

  function checkClicks() {
    if (firstClick == secondClick) {
      console.log("MATCH " + "1: " + firstClick + " 2: " + secondClick);
      reset();
    } else {
      console.log("NO MATCH " + "1: " + firstClick + " 2: " + secondClick);
      reset();
    }
  }

  function reset() {
    firstClick = '';
    secondClick = '';
    clicks();
  }


  clicks();
});
