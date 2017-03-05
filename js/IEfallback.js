var MU = MU || {};

(function() {
	"use strict";
	
	MU.useFallback = function() {
		var IE_FALLBACK_VERSION = 9;

		var rv = -1;
		var ua = navigator.userAgent;
		var re = new RegExp( 'MSIE ([0-9]{1,}[\.0-9]{0,})' );

		if ( re.exec( ua ) !== null )
			rv = parseFloat( RegExp.$1 );

		if ( rv > 0 && rv <= IE_FALLBACK_VERSION ) 
			return true;
		else
			return false;
	};
})();