"use strict";

// var nameSpace = nameSpace || {};
var nameSpace = MU || {}; 

( function () {
	var timeline;
	var wrapper, clickThrough, logo, copy, cta;
	var width = 970;
	var height = 250;
	
	nameSpace.init = function () {
		// Initialize any variables here
		wrapper = nameSpace.$( '#wrapper' );
		clickThrough = nameSpace.$( '#click_through' );
		copy = nameSpace.$( '#copy' );
		cta = nameSpace.$( '#cta' );
		// Add cta, passing in left position, top position, width, and height (all in px) 
		// as well as the selector for the parent element

		//new assets
		var bg1 = nameSpace.$( '#bg1' ); 
		var logo1 = nameSpace.$( '#logo1' ); 
		var f1_copy = nameSpace.$( '#f1_copy' ); 

		var bg2 = nameSpace.$( '#bg2' ); 
		var f2_copy = nameSpace.$( '#f2_copy' );

		var bg3 = nameSpace.$( '#bg3' ); 
		var f3_copy = nameSpace.$( '#f3_copy' ); 

		var bg4 = nameSpace.$( '#bg4' );
		var f4_copy1 = nameSpace.$( '#f4_copy1' );
		var f4_copy2 = nameSpace.$( '#f4_copy2' );
		var logo2 = nameSpace.$( '#logo2' ); 

		var learnMore1 = nameSpace.$( '#learnMore1' ); 
		var learnMore2 = nameSpace.$( '#learnMore2' ); 

		var resolve = nameSpace.$( '#resolve' ); 
		

		wrapper.addClass( 'show' );

		nameSpace.initAnimation();

			if ( nameSpace.useFallback() ) {
			nameSpace.injectFallback();
		}
		else {
			nameSpace.startAnimation();
		}
		document.getElementById("click_through").addEventListener("click", function(){
				timeline.seek(timeline.totalDuration());
				Enabler.exit("Background_Exit");
			})
		};
		
	nameSpace.injectFallback = function() {
		var body = document.body;

		while ( body.firstChild ) {
			body.removeChild( body.firstChild );
		}

		var anchor = document.createElement('a');
			anchor.href = '{{PUB_CLICKTHROUGH}}';
			anchor.target = '_blank';

		var img = new Image();
			img.src = './img/static.jpg';

		anchor.appendChild( img );
		document.body.appendChild( anchor );
	};
	
	nameSpace.initAnimation = function () {
		// TweenMax can be used to set css
		// It will even take care of browser prefixes
		// TweenMax.set(logo, {x:100, y:50, opacity:0});

		TweenMax.set(learnMore1, {z: 0.1, rotationZ: 0.01, force3D:true, y:-120});
		TweenMax.set(learnMore2, {z: 0.1, rotationZ: 0.01, force3D:true, y:-120});

		var click_through = document.getElementById("click_through");
		click_through.onmouseover = function(){
				TweenMax.set(learnMore1, {z: 0.1, rotationZ: 0.01, force3D:true, y:-120}),
				TweenMax.set(learnMore2, {z: 0.1, rotationZ: 0.01, force3D:true, y:-80}),
				TweenMax.to(learnMore1, .15, {z: 0.1, rotationZ: 0.01, force3D:true, y:-160, ease:Linear.easeNone }),
				TweenMax.to(learnMore2, .15, {z: 0.1, rotationZ: 0.01, force3D:true, y:-120, ease:Linear.easeNone })
				
		};

		timeline = new TimelineMax( {
			delay: 0.2,
			onComplete: nameSpace.onAnimationComplete
		} );

		timeline.pause();
		
		timeline.to( bg1, 1.5, {z: 0.1, rotationZ: 0.01, force3D:true,ease: Power1.easeOut, x:-50} )
			.to( f1_copy, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, x: 0, y: 0, ease:Cubic.easeInOut}, "-=1.5")
			.to( f1_copy, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, css:{autoAlpha: 1}, ease:Cubic.easeInOut})
			.to( f1_copy, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, ease:Cubic.easeInOut, autoAlpha:0})
			
			.to( bg1, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, ease:Cubic.easeInOut, x:-970}, "-=.2")
			.to( bg2, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, x:0, ease:Cubic.easeInOut}, "-=.7" )
			.to( bg2, 1.5, {z: 0.1, rotationZ: 0.01, force3D:true, x:-50, ease:Sine.easeOut} )
			.to( f2_copy, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, y:0, autoAlpha:1, ease:Cubic.easeInOut}, "-=1.5")
			.to( f2_copy, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, ease:Cubic.easeInOut, autoAlpha:0,} )
			
			.to( bg2, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, ease:Cubic.easeInOut, x:'-100%'})
			.to( bg3, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, x:0, ease:Cubic.easeInOut} , "-=.7")
			.to( bg3, 1.5, {z: 0.1, rotationZ: 0.01, force3D:true, x:-50, ease:Sine.easeOut} )
			.to( f3_copy, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true, y:0, autoAlpha:1, ease:Cubic.easeInOut}, "-=1.5" )
			.to( f3_copy, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true, ease:Cubic.easeInOut, autoAlpha:0} )
			.to( bg3, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true, x:'-100%', autoAlpha:1, ease:Cubic.easeInOut} )
			.to( bg4, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true,x:0, ease:Cubic.easeInOut}, "-=.7")
			.to( resolve, 0.7, {z: 0.1, rotationZ: 0.01, force3D:true,x:0, ease:Cubic.easeInOut, width:970}, "-=.7")
			.to( f4_copy1, 0.2, {y:0}, "-=.2")
			.to( product, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true,x:0, autoAlpha:1, zIndex:5, ease:Cubic.easeInOut}, "-=.3" )
			.to( logo1, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true,x:0, autoAlpha:0,  zIndex:6, ease:Cubic.easeInOut}, "-=1" ) 
			.to( logo2, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true,x:0, autoAlpha:1,  zIndex:6, ease:Cubic.easeInOut}, "-=.4" ) 
			.to( cta, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true, autoAlpha:1, zIndex:6, ease:Cubic.easeInOut}, "-=.6" ) 
			.to( learnMore1, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true, autoAlpha:1, zIndex:7, ease:Cubic.easeInOut}, "-=.6" )
			.to( learnMore2, 0.6, {z: 0.1, rotationZ: 0.01, force3D:true, autoAlpha:1,  zIndex:7, ease:Cubic.easeInOut}, "-=.6" )
			.to( f4_copy2, 0.2, {z: 0.1, rotationZ: 0.01, force3D:true, autoAlpha:1, zIndex:7, ease:Cubic.easeInOut}, "+=.2")

		// Listener for updating on requestAnimationFrame interval
		TweenMax.ticker.addEventListener( 'tick', nameSpace.onTick );
	};

	nameSpace.startAnimation = function () {
		// Code for animation		
		timeline.play();
	};

	nameSpace.onTick = function () {
		// Interval for updating on requestAnimationFrame
	};

	nameSpace.onAnimationComplete = function () {
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );

	};

	
} ) ();