# Usability testing instructions

## Inject script
Copy and paste the following code snippet to the *cjs* Chrome extension.

	(function () {
	    function loadScript(url, callback) {
	        var script = document.createElement("script")
	        script.type = "text/javascript";

	        script.onload = function () {
	            callback();
	        };

	        script.src = url;
	        document.getElementsByTagName("head")[0].appendChild(script);
	    }

	    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", function () {
	        loadScript('//localhost:8000/script.js', function() {
	            console.clear();
	            console.log('%cUSER TESTING SCRIPT LOADED', 
	            	'color:#2980b9;padding:2px 50px;font-size:20px;line-height: 60px;border:1px dashed #2980b9');
	        })
	    });
	})();

## Version 1

If any items are locked on the first page, the user can navigate to the second page, on which items can be purchased.

#### Developer console command:

	localStorage.omVersion = 1

## Version 2

If any items are locked on the first page, `Save outfit` button becomes available. Saved outfits can be seen on the second page.

#### Developer console command:

	localStorage.omVersion = 2

## Version 3

No second screen is available, the user can only generate outfits and navigate to them from the first page.

#### Developer console command:

	localStorage.omVersion = 3
