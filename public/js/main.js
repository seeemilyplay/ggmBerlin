
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

var links = $('a[href^="#"]'),
    lock;

var selectLink = function() {
  links.removeClass('selected');
  $(this).addClass('selected');
};

links.click(selectLink);

var pos = links.map(function(index, link) {
  return $(link.hash).position().top;
});

$(window).bind('scroll', function() {
  if (lock) {
    if (window.scrollY === lock) {
      lock = undefined;
    }
    return;
  }

  if (window.scrollY < pos[0]) {
    return links.removeClass('selected');
  }
  pos.each(function(i,p){
    if ((window.scrollY + 67)>= p) {
      selectLink.apply(links[i]);
    }
  });
}).bind('notify.serialScroll', function(ev, elm){
    lock = $(elm).position().top;
});

$('.speaker.expandable').click(function() {
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

$('.title.expandable').click(function() {
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