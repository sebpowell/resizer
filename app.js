$.breakpointChecker = function (sizes) {


	// Key concepts to digest:

	// Diference between object and array
	// How to fetch objects inside array etc. 



	// Load from external JSON file
	var breakpoints = sizes;

	// breakpoints.push(sizes);
	// breakpoints.push({small: 50});
	// console.log(sizes);
	$.extend(breakpoints, {"test222": 5});
	// console.log(breakpoints);
	// breakpoints.push({moo: 20});
	console.log(breakpoints);

	var document = $("body");
	$(".toggle").click(function() {
		
		var documentHead = $("head");
		var testingBar = $(".testing-bar");

		$('<div class="phantom"><iframe id="myFrame" name="myFrame" src="about:blank"></div>').appendTo('html');
		var d = $("#myFrame")[0].contentWindow.document; // contentWindow works in IE7 and FF
	  d.open(); 
	  d.close();

	  documentHead.clone().prependTo("html");
	  testingBar.prependTo("html");

	  $("body", d).append(documentHead, document);

	 	// $("html").prepend(documentHead);

	 });


	
	$(".delete").click(function () {
		document.prependTo("html");
		$("iframe").remove();
		$(".testing-bar").remove();
		
	});


	$.each(breakpoints, function(k, v) {
		$('select').append($("<option></option>").attr("value", v).text(k)); 
	});

	function addOptions(key, value) {
		$('select').append($("<option></option>").attr("value", value).text(key)); 
	};


	

	$("input[type='submit']").click(function() {
		
		var newValue = $("#test").val();
		var newValueItem = "Meh";
		$.extend(breakpoints, breakpoints[newValue] = newValueItem);
		
		addOptions(newValue, newValueItem);
		
		console.log(breakpoints);
		// var extended = $.extend(breakpoints, {newValueItem: newValue});
		// console.log(JSON.stringify(extended));
	});

	$("select").on( "change", function() {
		var value = $(this).children("option:selected").attr("value");
		$("iframe").width(value);
	});
};