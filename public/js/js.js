$(document).ready(function(){
  // hide our element on page load
  $('#row1').css('opacity', 0);
 
  $('#row1').waypoint(function() {
      $('#row1').addClass('fadeInRight');
  }, { offset: '80%' });
 
});
$(document).ready(function(){
  // hide our element on page load
  $('#row2').css('opacity', 0);
 
  $('#row2').waypoint(function() {
      $('#row2').addClass('fadeInLeft');
  }, { offset: '80%' });
 
});
$(document).ready(function(){
  // hide our element on page load
  $('#row3').css('opacity', 0);
 
  $('#row3').waypoint(function() {
      $('#row3').addClass('fadeInRight');
  }, { offset: '80%' });
 
});
$(document).ready(function(){
  // hide our element on page load
  $('#row4').css('opacity', 0);
 
  $('#row4').waypoint(function() {
      $('#row4').addClass('fadeInLeft');
  }, { offset: '80%' });
 
});
$(document).ready(function(){
  // hide our element on page load
  $('#row5').css('opacity', 0);
 
  $('#row5').waypoint(function() {
      $('#row5').addClass('fadeInRight');
  }, { offset: '80%' });
 
});
$(document).ready(function(){
  // hide our element on page load
  $('#row6').css('opacity', 0);
 
  $('#row6').waypoint(function() {
      $('#row6').addClass('fadeInLeft');
  }, { offset: '80%' });
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -70
        }, 1000);
        return false;
      }
    }
  });
});
});
