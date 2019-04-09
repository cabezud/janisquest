var init = function() {
  var box = document.querySelector('.container').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-monday',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }    
};

window.addEventListener( 'DOMContentLoaded', init, false);

$(document).ready(function(){

  var d = new Date();
  var n = d.getDay();
  $('#show-buttons button')[n-1].focus();
  $('#show-buttons button')[n-1].click();

});