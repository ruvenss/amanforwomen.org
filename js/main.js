jQuery(document).ready(function($) {
   
   'use strict';
   
   //ON-DEMAND STICKY HEADER
	var options = {
    offset: 300,
    classes: {
        clone:   'banner--clone',
        stick:   'banner--stick',
        unstick: 'banner--unstick'
    	}
	};
	
	// Initialise with options
	var banner = new Headhesive('.banner', options);
	
	/**
	 * Need to use the JS version, rather than the data-* attributes.
	 */
	$('.navbar-toggle').on('click', function () {
		$('.collapse').collapse('toggle');
	});


   
	
	//SMOOTH SCROLL
	smoothScroll.init({
		speed: 500, // How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	 });
	 
	  
	//MILESTONE
    $('.timer').countTo();
	
	
	////MAGNIFIC POPUP LOAD CONTENT VIA AJAX
	$('.popup-html').magnificPopup({type: 'ajax'});


	//MAGNIFIC POPUP IMAGE
	$('.image-link').magnificPopup({
		type:'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});	
	
	
	//OWLCAROUSEL SERVICES
	var owl = $("#services");
 
	  owl.owlCarousel({
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
			[1000, 4],
			[1200, 4],
			[1600, 4]
		  ],
		  pagination : true,
		  navigation : false,
	  });
	
	
	//OWLCAROUSEL PROGRAM
	var owl = $(".programs");
 
	  owl.owlCarousel({
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
			[1000, 3],
			[1200, 3],
			[1600, 3]
		  ],
		  pagination : true,
		  navigation : false,
	  });
	  
	  
	//OWLCAROUSEL STORIES
	var owl = $(".stories");
 
	  owl.owlCarousel({
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
			[1000, 4],
			[1200, 4],
			[1600, 4]
		  ],
		  pagination : true,
		  navigation : false,
	  });
	
	
	//OWLCAROUSEL IMAGE GALLERY
	var owl = $("#gallery");
 
	  owl.owlCarousel({
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 4],
			[700, 4],
			[1000, 6],
			[1200, 6],
			[1600, 6]
		  ],
		  pagination : true,
		  navigation : false,
	 });
	  
	  
	// UPCOMING EVENTS SLIDER
	$("#upcoming-events").owlCarousel({
 
		navigation : true, // Show next and prev buttons
		navigationText : ['<div class="icon"><i class="fa fa-lg fa-angle-left"></i></div>','<div class="icon"><i class="fa fa-lg fa-angle-right"></i></div>'],
		slideSpeed : 300,
		pagination:false,
		paginationSpeed : 400,
		singleItem:true
		 
		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
		 
	});
	
	
	// PARTNERS SLIDER
	var owl = $(".partners");
 
	  owl.owlCarousel({
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 4],
			[1000, 4],
			[1200, 4],
			[1600, 4]
		  ],
		  pagination : true,
		  navigation : false,
		  navigationText : ['<i class="fa fa-4x fa-chevron-circle-left"></i>','<i class="fa fa-4x  fa-chevron-circle-right"></i>'],
	  });
	  

	//OWLCAROUSEL NEWS
	var owl = $(".news");
 
	  owl.owlCarousel({
		  autoPlay: false,
		  
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
			[1000, 3],
			[1200, 3],
			[1600, 4]
		  ],
		  pagination : false,
		  navigation : false,
	  });
	  
	
	//FIX HOVER EFFECT ON IOS DEVICES
	document.addEventListener("touchstart", function(){}, true);
	

	 
});


$(window).load(function(){
	
	
	//PARALLAX BACKGROUND
	$(window).stellar({
		horizontalScrolling: false,
	});
    
	
    //PRELOADER
    $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	
});

	// DONATE FORM FUNCTION
	var donate_send = function(){
	
	'use strict';
	
	var name  = $("#name").val();
	var email = $("#email").val();
	var type = $("#type").val();
	var amount  = $("#amount").val();
	
		 if ( name=="" ){ alert("name area is empty!"); $("#name").focus(); }
	else if ( email=="" ){ alert("email address area is empty!"); $("#email").focus(); }
	else if ( type=="" ){ alert("type is not selected!"); $("#type").focus(); }
	else if ( amount=="" ){ alert("amount area isn't selected!"); $("#amount").focus(); }
	else {
		$.post("donate.send.php", { name:name, email:email, type:type, amount:amount }, function( result ){
			if ( result=="SUCCESS" ){
				alert("Your donate form is sent.");
				setTimeout(function(){
					$("#name").val("");
					$("#email").val("");
					$("#type").val("");
					$("#amount").val("");
				}, 3000);
			} else {
				alert("Your donate form isn't sent. Please check fields and try again.");
			}
		});
	}

};

	/* Newsletter Functions */
	var newsletter_send = function(){
	
		'use strict';
		
		var email 	= $("#newsletter_email").val();
		if ( email=="" ){ alert("Your email address is empty!"); $("#newsletter_email").focus(); }
		else {
			$.post("donate.send.php", { email:email }, function( result ){
				
				console.log( result );
				
				if ( result=="SUCCESS" ){
					alert("Thank you. Your email is added to our database.");
					setTimeout(function(){ $("#newsletter_email").val(""); }, 3000);
				}
				
				else if ( result=="EXIST" ){
					alert("Error. Your email address is already exist our database.");
					$("#newsletter_email").focus();
				}
				
				else {
					alert("Error. Your email isn't added to our database.");
					$("#newsletter_email").focus();
				}
				
			});
		}
	
	};

	

	