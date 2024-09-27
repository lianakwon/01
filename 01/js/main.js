$(document).ready( function() {

   // top bottom on.off

   $(window).scroll( function(){

      var top = $(window).scrollTop();

      if ( top == 0 ) {
         $("#top").removeClass("off");
         $("#bottom").addClass("off");

      } else if ( top > 0 && top <=2000 ) {
         $("#top").removeClass("off");
         $("#bottom").addClass("off");

      } else if ( top > 2000 ) {
         $("#top").addClass("off");
         $("#bottom").removeClass("off");
      };
   });

});