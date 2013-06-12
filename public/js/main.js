
var isMobile = function() {
  return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPod|IEMobile/i) ? true : false;
};

var changeSlides = function() {
  var slides = $('#home .slides');
  if (slides.hasClass('number-3')) {
    slides.removeClass('number-3');
    slides.addClass('number-1');
  } else if (slides.hasClass('number-2')) {
    slides.removeClass('number-2');
    slides.addClass('number-3');
  } else {
    slides.removeClass('number-1');
    slides.addClass('number-2');
  }
  scheduleNextSlide();
};

var scheduleNextSlide = function() {
  setTimeout(changeSlides, 5000);
};

if (!isMobile()) {
  var pinFooter = function() {
    $('.footer-container').pinFooter();
  };
  $(window).load(pinFooter);
  $(window).resize(pinFooter);

  scheduleNextSlide();
}

var setupScrolling = function() {
  $.localScroll({
    offset:-67
  });
};
$(window).load(setupScrolling);

$('.speaker').click(function() {
  var bio = $(this).siblings('.bio.expanded');
  if (bio.length>0) {
    $(this).removeClass('expanded');
    bio.removeClass('expanded');
  } else {
    bio = $(this).siblings('.bio');
    $(this).addClass('expanded');
    bio.addClass('expanded');
  }
});

$('.session .title').click(function() {
  var desc = $(this).siblings('.description.expanded');
  if (desc.length>0) {
    $(this).removeClass('expanded');
    desc.removeClass('expanded');
  } else {
    desc = $(this).siblings('.description');
    $(this).addClass('expanded');
    desc.addClass('expanded');
  }
});