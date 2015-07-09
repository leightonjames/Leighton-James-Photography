/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
function init() {
"use strict";
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 50,
                header = document.querySelector(".navbar");
            if (distanceY > shrinkOn) {
                classie.add(header,"fixed");
            } else {
                if (classie.has(header,"fixed")) {
                    classie.remove(header,"fixed");
                }
            }
        });
    }
    window.onload = init();
    
    
    $(document).ready(function() {
	$('.offset').css('padding-top', $('.navbar').height() + 'px');
       
}); 
$(window).resize(function() {
	$('.offset').css('padding-top', $('.navbar').height() + 'px');        
}); 
/*-----------------------------------------------------------------------------------*/
/*	RETINA
/*-----------------------------------------------------------------------------------*/
$(function() {
			$('.retina').retinise();
		});
/*-----------------------------------------------------------------------------------*/
/*	STICKY FILTER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
      $("#sticky-filter").sticky({ topSpacing: 58, className:"sfilter", responsiveBreakpoint: 767 });
    });
   
/*-----------------------------------------------------------------------------------*/
/*	SWIPER
/*-----------------------------------------------------------------------------------*/
  $('.swiper-container.gallery').each(function(){
  $(this).swiper({
     grabCursor: true,
    slidesPerView: 'auto',
    wrapperClass: 'swiper',
    slideClass: 'item',
    offsetPxBefore: 15,
     offsetPxAfter: 15
  });

  var $swipers = $(this);

  $swipers.siblings('.arrow-left').click(function(e){
   e.preventDefault();
   $swipers.data('swiper').swipePrev();
  });
  $swipers.siblings('.arrow-right').click(function(e){
   e.preventDefault();
   $swipers.data('swiper').swipeNext();
  });
});

  $('.swiper-container.clients').each(function(){
  $(this).swiper({
     grabCursor: true,
    slidesPerView: 'auto',
    wrapperClass: 'swiper',
    slideClass: 'item'
  });
});
/*-----------------------------------------------------------------------------------*/
/*	INSTAGRAM
/*-----------------------------------------------------------------------------------*/
var instagramFeed = new Instafeed({
        get: 'user',
        userId: 1494098406,
        accessToken: '1494098406.8b0bff2.6033d145db434bea8ec3680ce5307447',
        resolution: 'low_resolution',
        template: '<div class="item"><figure><img src="{{image}}" /><a href="{{link}}" class="ins-link" target="_blank"><i class="icon-link"></i></a></figure></div>',
        after: function () {    
		    $('.swiper-container.instagram').each(function(){
		  $(this).swiper({
		     grabCursor: true,
		    slidesPerView: 'auto',
		    wrapperClass: 'swiper',
		    slideClass: 'item',
		    offsetPxBefore: 15,
     offsetPxAfter: 15
		  });
		
		  var $swipers = $(this);
		
		  $swipers.siblings('.arrow-left').click(function(e){
		   e.preventDefault();
		   $swipers.data('swiper').swipePrev();
		  });
		  $swipers.siblings('.arrow-right').click(function(e){
		   e.preventDefault();
		   $swipers.data('swiper').swipeNext();
		  });
		});
		  }
    });
    
    $('#instafeed').each(function() {
    instagramFeed.run();
});


var widgetFeed = new Instafeed({
		target: 'instawidget',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.467ede5.aa54392aa9eb46f0b9e7191f7211ec3a',
        resolution: 'thumbnail',
        template: '<li><span class="icon-overlay"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></span></li>',
        after: function () {    
		    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
		  }
    });
    
        $('#instawidget').each(function() {
    widgetFeed.run();
});
/*-----------------------------------------------------------------------------------*/
/*	ONEPAGE ANCHOR SCROLL
/*-----------------------------------------------------------------------------------*/
/**
* jQuery.LocalScroll - Animated scrolling navigation, using anchors.
* Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
* Dual licensed under MIT and GPL.
* Date: 3/11/2009
* @author Ariel Flesler
* @version 1.2.7
**/
(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.5 BETA
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
$(document).ready(function(){ 
    $('#sticky-filter ul').localScroll({
	    offset: {top:-116, left:0}
    });
  });
/*-----------------------------------------------------------------------------------*/
/*	SCROLL NAV
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	headerWrapper		= parseInt($('#sticky-filter').height());
	offsetTolerance	= 60;
	
	//Detecting user's scroll
	$(window).scroll(function() {
	
		//Check scroll position
		scrollPosition	= parseInt($(this).scrollTop());
		
		//Move trough each menu and check its position with scroll position then add current class
		$('#sticky-filter a').each(function() {

			thisHref				= $(this).attr('href');
			thisTruePosition	= parseInt($(thisHref).offset().top);
			thisPosition 		= thisTruePosition - headerWrapper - offsetTolerance;
			
			if(scrollPosition >= thisPosition) {
				
				$('.current').removeClass('current');
				$('#sticky-filter a[href='+ thisHref +']').parent('li').addClass('current');
				
			}
		});
		
		
		//If we're at the bottom of the page, move pointer to the last section
		bottomPage	= parseInt($(document).height()) - parseInt($(window).height());
		
		if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
		
			$('.current').removeClass('current');
			$('#sticky-filter a:last').parent('li').addClass('current');
		}
	});
	
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE FULLSCREEN PORTFOLIO
/*-----------------------------------------------------------------------------------*/

var isotopeBreakpoints = [
                            { min_width: 1680, columns: 5 },
                            { min_width: 1440, max_width: 1680, columns: 5 },
                            { min_width: 1024, max_width: 1440, columns: 4 },
                            { min_width: 768, max_width: 1024, columns: 3 },
                            { max_width: 768, columns: 1 }
                            
                         ];

$(document).ready(function () {
    var $container = $('.full-portfolio .items');

    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
    });

    // hook to window resize to resize the portfolio items for fluidity / responsiveness
    $(window).smartresize(function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        for ( var i = 0; i < isotopeBreakpoints.length; i++ ) {
            if (windowWidth >= isotopeBreakpoints[i].min_width || !isotopeBreakpoints[i].min_width) {
                if (windowWidth < isotopeBreakpoints[i].max_width || !isotopeBreakpoints[i].max_width) {
                    $container.find('.item').each(function() {
                        $(this).width( Math.floor( $container.width() / isotopeBreakpoints[i].columns ) );
                    });

                    break;
                }
            }
        }
    });

    $(window).trigger( 'smartresize' );


    $('.grid-portfolio .filter li a').click(function () {

        $('.grid-portfolio .filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE CLASSIC PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.fix-portfolio .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item'
        });
    });

    $(window).on('resize', function () {
        $('.fix-portfolio .items').isotope('reLayout')
    });
    
    $('.fix-portfolio .filter li a').click(function () {

        $('.fix-portfolio .filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE GRID BLOG
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.grid-blog');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.col'
        });
    });

    $(window).on('resize', function () {
        $('.grid-blog').isotope('reLayout')
    });
});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });

});
/*-----------------------------------------------------------------------------------*/
/*	REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
jQuery('.fullscreenbanner').revolution(
	{
		delay: 9000,
		startwidth: 1170,
		startheight: 550,
		hideThumbs: 200,
		fullWidth:"off",
		fullScreen:"on",
		fullScreenOffsetContainer: ".mode-xs .navbar"
	});
});
/*-----------------------------------------------------------------------------------*/
/*	FLICKR
/*-----------------------------------------------------------------------------------*/	
$(document).ready(function($){
	$('.flickr-feed').dcFlickr({
		limit: 15, 
        q: { 
            id: '51789731@N07',
			lang: 'en-us',
			format: 'json',
			jsoncallback: '?'
        },
		onLoad: function(){
			$('.swiper-container.flickr').each(function(){
		  $(this).swiper({
		     grabCursor: true,
		    slidesPerView: 'auto',
		    wrapperClass: 'swiper',
		    slideClass: 'item'
		  });
		
		  var $swipers = $(this);
		
		  $swipers.siblings('.arrow-left').click(function(e){
		   e.preventDefault();
		   $swipers.data('swiper').swipePrev();
		  });
		  $swipers.siblings('.arrow-right').click(function(e){
		   e.preventDefault();
		   $swipers.data('swiper').swipeNext();
		  });
		});
		}
	});
});	
/*-----------------------------------------------------------------------------------*/
/*	FANCYBOX
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});


/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {
    $('.forms').dcSlickForms();
});
$(document).ready(function () {
    $('.comment-form input[title], .comment-form textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function () {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
});
/*-----------------------------------------------------------------------------------*/
/*	IMAGE ICON HOVER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	TESTIMONIALS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('#testimonials').easytabs({
        animationSpeed: 500,
        updateHash: false,
        cycle: 5000
    });

});
/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
});
/*-----------------------------------------------------------------------------------*/
/*	DATA REL
/*-----------------------------------------------------------------------------------*/
$('a[data-rel]').each(function () {
    $(this).attr('rel', $(this).data('rel'));
});
/*-----------------------------------------------------------------------------------*/
/*	TOOLTIP
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
});
/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    jQuery('.player').fitVids();
});
/*-----------------------------------------------------------------------------------*/
/*	PRETTIFY
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    window.prettyPrint && prettyPrint()
});
/*-----------------------------------------------------------------------------------*/
/*	PARALLAX MOBILE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
});
/*-----------------------------------------------------------------------------------*/
/* NAV BASE LINK
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
jQuery('a.js-activated').not('a.js-activated[href^="#"]').click(function(){
var url = $(this).attr('href');
window.location.href = url;
return true;
});
});
/*-----------------------------------------------------------------------------------*/
/* WIDTH CLASS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    assign_bootstrap_mode();
    $(window).resize(function() {
        assign_bootstrap_mode();
    });
});

function assign_bootstrap_mode() {
    width = $( window ).width();
    var mode = '';
    if (width<768) {
        mode = "mode-xs";
    }
    else if (width<992) {
        mode = "mode-sm";
    }
    else if (width<1200) {
        mode = "mode-md";
    }
    else if (width>1200) {
        mode = "mode-lg";
    }
    $("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(mode);
}