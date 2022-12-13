<<<<<<< HEAD
// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
=======
// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
$(document).ready(function() {
  $('#about, #about1').hide();
  $('#showdetail').click(function() {
      $('#about, #about1').toggle("slide");
  });
});
>>>>>>> my second commit
