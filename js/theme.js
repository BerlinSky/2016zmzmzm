//#########################################################################
// 
// THEME.JS
// 
//#########################################################################



// jQuery.noConflict();
// (function( $ ) {


//============================================================
//  FIXED HEADER
//============================================================

$(function() {

  $('.grid-item').matchHeight();

  var navfixed = $('#page-header > .container').offset();

  var $window = $(window);
  
  $window.scroll(function() {
      if ( $window.scrollTop() >= navfixed.top) {
        $("#page-header").addClass("fixed");
      } else {
        $("#page-header").removeClass("fixed");
      }
  }); 

  $(window).on('resize',function() {
    if ($(".body-nav.fixed").length > 0){
      var bnfh = $(".body-nav.fixed").outerHeight();
      $('#wrapper').css('padding-bottom', bnfh);
    }
    $(".body-nav.fixed .content-nav-toggle:not(.collapsed)").trigger( "click" );
  }).trigger('resize');

//============================================================
//  NAVIGATION
//============================================================ 

  $(".nav-toggle").click(function() {
    $("html").toggleClass("nav-on");
  });

  $("#navigation a, .side-navigation a, .nav-zamily-playlist a").each(function() { 
    if (this.href == window.location) {
      $(this).parents('li').addClass('active');
    };
  }); 

  $('.content-nav ul a').click(function() {
    $(".content-nav-toggle").trigger( "click" );
  });

  $('.content-nav-tabs ul a').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
  });


  // add a hash to the URL when the user clicks on a tab
  $('a[data-toggle="tab"]').on('click', function(e) {
    history.pushState(null, null, $(this).attr('href'));
  });
  // navigate to a tab when the history changes
  window.addEventListener("popstate", function(e) {
    var activeTab = $('[href=' + location.hash + ']');
    if (activeTab.length) {
      activeTab.tab('show');
    } else {
      $('.content-nav-tabs .nav a:first').tab('show');
    }
  });

  // Javascript to enable link to tab
  var url = document.location.toString();
  if (url.match('#')) {
      $('.content-nav-tabs .nav a[href=#'+url.split('#')[1]+']').tab('show') ;
  } 

  // Change hash for page-reload
  $('.content-nav-tabs .nav a').on('shown.bs.tab', function (e) {
      window.location.hash = e.target.hash;
      window.scrollTo(0, 0);
  })


//============================================================
//  SMOOTH SCROLLING TO ANCHOR
//============================================================

  $('.anchor').on('click',function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top
    }, 1000, 'easeOutCirc');
  });

//============================================================
//  GENERIC FANCYBOX
//============================================================

  $(".fancy-modal").fancybox({
    'padding' : 0,
    'transitionOut' : 'fade',
    'maxWidth' : '600',
    'autoSize' : true,
    'fitToView' : true
  });
  
  $(".fancy-iframe").fancybox({
    'padding' : 0,
    'transitionOut' : 'fade',
    'type'      : 'iframe',
    'maxWidth' : '100%',
    'maxHeight' : '100%',
    'autoSize' : false,
    'fitToView' : true
  });

//============================================================
//  BILLBOARD
//============================================================

  $('.billboard').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    mobileFirst: true,
    prevArrow: '<span class="billboard-prev"></span>',
    nextArrow: '<span class="billboard-next"></span>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false
      }
    }
    ]
  });



//============================================================
//  .. end of function
//============================================================

});
// })(jQuery);