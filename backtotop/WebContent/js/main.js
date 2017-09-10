require.config({
   paths:{
       jquery:'https://cdn.bootcss.com/jquery/3.2.1/jquery'
   }
});

require(['jquery', 'backtop'], function($, BackTop){
    /*new BackTop($('#backtop'),{
        pos: 100,
        speed: 2000
    });*/
    $('#backtop').backtop({
        pos: 100,
        speed: 2000
    });
    /*function checkPosition(pos) {
        $(window).scrollTop() > pos ? $('#backtop').fadeIn() : $('#backtop').fadeOut();
    }
    var scroll = new scrollto({
        dest: 50,
        speed: 800
    });
    $('#backtop').on('click', $.proxy(scroll.move, scroll));*/
  /* $('#backtop').on('click', function(){
       if($(window).scrollTop() && !$('html body').is(':animated')){
           $('html body').animate({
               scrollTop: 0
           }, 800);
       }
   });*/

   /*$(window).on('scroll', function() {
       checkPosition($(window).height());
   });

   checkPosition($(window).height());*/


});