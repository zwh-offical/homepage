$(document).ready(function() {

  // Typing animation plugin
  (function($) {
    $.fn.writeText = function(content) {
      var contentArray = content.split(""),
          current = 0,
          elem = this;
      setInterval(function() {
        if(current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // Typing text trigger
  $("#holder").writeText("Student + Junior Developer");

  // WOW.js initialization
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // Drawer Menu Open/Close Logic
  function openMenu() {
    $('#navScreen').addClass('active');
    $('#menuOverlay').addClass('active');
  }

  function closeMenu() {
    $('#navScreen').removeClass('active');
    $('#menuOverlay').removeClass('active');
  }

  $('#menuToggle').click(function() {
    openMenu();
  });

  $('#menuClose, #menuOverlay, .nav-links a').click(function() {
    closeMenu();
  });

  // FullPage.js initialization
  $('#fullpage').fullpage({
    scrollBar: true,
    responsiveWidth: 500,
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Projects', 'Contact'],
    anchors: ['aboutme', 'about', 'projects', 'contact'],
    menu: '#myMenu',
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      if (index === 1) {
        $('.fa-chevron-down').css('opacity', '1');
      }

      if (index === 2) {
        $('.skillbar').each(function() {
          var percent = $(this).attr('data-percent');
          $(this).find('.skillbar-bar').css('width', percent);
        });
      }
    }
  });

  // Scroll Down Arrow Handler
  $(document).on('click', '#moveDown', function() {
    $.fn.fullpage.moveSectionDown();
  });

});
