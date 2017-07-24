jQuery(document).ready(function($) {
		"use strict";

/*  - for fixed-top  
--------------------------------------*/
$(window).scroll(function() { 
	$(".navbar").removeClass("fixed-top");
	var scroll = $(window).scrollTop();
	if (scroll > 110) {
		$(".navbar").addClass("fixed-top");
	}
});

$(window).scroll(function() { 
	$(".mobile-menu").removeClass("fixed-top");
	var scroll = $(window).scrollTop();
	if (scroll > 110) {
		$(".mobile-menu").addClass("fixed-top");
	}
});


// search bar  
$('.search-icon').on("click",function() {
	$( this ).toggleClass( "opened" );
}
);


$('.carousel').carousel({
	interval: 8000
})


// swiper for we do section
var swiper = new Swiper('.swiper-container-we-do', {
	scrollbar: '.swiper-scrollbar',
	scrollbarHide: false,
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	slidesPerView: 5,

// Responsive breakpoints
breakpoints: {

	1024: {
		slidesPerView: 4
	},

	768: {
		slidesPerView: 3
	},

	640: {
		slidesPerView: 2
	},

	400: {
		slidesPerView: 1
	}
}
});


// swiper for client logo
$('.owl-carousel').owlCarousel({
	loop:true,
	margin:0,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
})

//owl carousel 
	var owl = $('.owl-carousel-1');
	owl.owlCarousel({
	    items:1,
	    nav: false,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	});


// counter up
$('.number').counterUp({
	delay: 10,
	time: 2000
});


// Can also be used with $(document).ready()
$('.flexslider').flexslider({
	animation: "slide",
	controlNav: "thumbnails",
	directionNav: "false",
	animation: "fade"
});


// wow
new WOW().init();
});

$(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

// for lightbox  
$(".lightbox").lightbox();

// boxer
$(".boxer").boxer();


//initiate the plugin and pass the id of the div containing gallery images 
$("#img_01").elevateZoom({
	gallery:'gal1',  
	galleryActiveClass: 'active', 
	imageCrossfade: true, 
	zoomWindowWidth:566,
	zoomWindowHeight:510,
	scrollZoom : true ,
	zoomType:'inner'
}); 


//pass the images to Fancybox 
$("#img_01").bind("click", function(e) { 
var ez = $('#img_01').data('elevateZoom');	
$.fancybox(ez.getGalleryList());
return false;
 });



// increase decrease  

		$('#max_name_up').on('click', function(event) {
	    var required = false;
	    var min = true;
	    var max = true;
	    var valueMin,valueMax;
	    $this = $(event.target);
	    var input = $this.parent().find('input');
	    var num = +input.val();//+ for convert from string to number
	    num++;
	    input.val(num);
	    
	    var $thisID = $this.attr('id').split('_')[1];
	    //Set Input data value
	    var formInput = $('#'+$thisID);
	    var formInputDataV = formInput.data('jqv-verify');
	    
	    if(formInputDataV.indexOf("required") != -1) {
	        required = true;
	    }
	    if(formInputDataV.indexOf("min") != -1) {
	        min = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("min") != -1) {
	                valueMin = value;
	            }
	        });
	    };
	    if(formInputDataV.indexOf("max") != -1) {
	        max = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("max" != -1)) {
	                valueMax = 'max='+num;
	            }
	        });
	    }
	    if(required) {
	        // need required added
	        if (min && max) {
	            formInput.attr('data-jqv-verify','required,'+valueMin+','+valueMax);
	        }
	    } else if (min && max) {
	        formInput.attr('data-jqv-verify',valueMin+','+valueMax);
	    }
	    
	});





		$('#max_name_down').on('click', function(event) {
	    var required = false;
	    var min = true;
	    var max = true;
	    var valueMin,valueMax;
	    $this = $(event.target);
	    var input = $this.parent().find('input');
	    var num = +input.val();//+ for convert from string to number
	    num = Math.max(0, (num - 1) || 0);
	    input.val(num);
	    
	    var $thisID = $this.attr('id').split('_')[1];
	    //Set Input data value
	    var formInput = $('#'+$thisID);
	    var formInputDataV = formInput.data('jqv-verify');
	    var formInputDataVArr = formInputDataV.split(',');
	    if(formInputDataV.indexOf("required") != -1) {
	        required = true;
	    }
	    if(formInputDataV.indexOf("min") != -1) {
	        min = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("min") != -1) {
	                valueMin = value;
	            }
	        });
	    }
	    if(formInputDataV.indexOf("max") != -1) {
	        max = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("max" != -1)) {
	                valueMax = 'max='+num;
	            }
	        });
	    }
	    if(required) {
	        // need required added
	        if (min && max) {
	            formInput.attr('data-jqv-verify','required,'+valueMin+','+valueMax);
	        }
	    } else if (min && max) {
	        formInput.attr('data-jqv-verify',valueMin+','+valueMax);
	    } 
	});






//  another increase 
// increase decrease  

		$('#max_name_up2').on('click', function(event) {
	    var required = false;
	    var min = true;
	    var max = true;
	    var valueMin,valueMax;
	    $this = $(event.target);
	    var input = $this.parent().find('input');
	    var num = +input.val();//+ for convert from string to number
	    num++;
	    input.val(num);
	    
	    var $thisID = $this.attr('id').split('_')[1];
	    //Set Input data value
	    var formInput = $('#'+$thisID);
	    var formInputDataV = formInput.data('jqv-verify');
	    
	    if(formInputDataV.indexOf("required") != -1) {
	        required = true;
	    }
	    if(formInputDataV.indexOf("min") != -1) {
	        min = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("min") != -1) {
	                valueMin = value;
	            }
	        });
	    };
	    if(formInputDataV.indexOf("max") != -1) {
	        max = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("max" != -1)) {
	                valueMax = 'max='+num;
	            }
	        });
	    }
	    if(required) {
	        // need required added
	        if (min && max) {
	            formInput.attr('data-jqv-verify','required,'+valueMin+','+valueMax);
	        }
	    } else if (min && max) {
	        formInput.attr('data-jqv-verify',valueMin+','+valueMax);
	    }
	    
	});





		$('#max_name_down2').on('click', function(event) {
	    var required = false;
	    var min = true;
	    var max = true;
	    var valueMin,valueMax;
	    $this = $(event.target);
	    var input = $this.parent().find('input');
	    var num = +input.val();//+ for convert from string to number
	    num = Math.max(0, (num - 1) || 0);
	    input.val(num);
	    
	    var $thisID = $this.attr('id').split('_')[1];
	    //Set Input data value
	    var formInput = $('#'+$thisID);
	    var formInputDataV = formInput.data('jqv-verify');
	    var formInputDataVArr = formInputDataV.split(',');
	    if(formInputDataV.indexOf("required") != -1) {
	        required = true;
	    }
	    if(formInputDataV.indexOf("min") != -1) {
	        min = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("min") != -1) {
	                valueMin = value;
	            }
	        });
	    }
	    if(formInputDataV.indexOf("max") != -1) {
	        max = true;
	        $.each(formInputDataVArr, function(key,value) {
	            if(value.indexOf("max" != -1)) {
	                valueMax = 'max='+num;
	            }
	        });
	    }
	    if(required) {
	        // need required added
	        if (min && max) {
	            formInput.attr('data-jqv-verify','required,'+valueMin+','+valueMax);
	        }
	    } else if (min && max) {
	        formInput.attr('data-jqv-verify',valueMin+','+valueMax);
	    } 
	});





	      
