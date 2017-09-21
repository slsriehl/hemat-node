$(document).ready(function() {
	var order = 'desc';
	//definition for sorting function to be called by click handlers
	var sortDivsAndStripe = function(sortType) {
		//add and remove classes from the report parent container to indicate the sort type and order, and set the order variable to indicate the order that the reports will be sorted
		if((!$("#report-history").hasClass(sortType + '-asc') && !$("#report-history").hasClass(sortType + '-desc')) || $("#report-history").hasClass(sortType + '-asc') || ($("#report-history").hasClass('date-desc') && $("#report-history").hasClass('init'))) {
			//function calls to remove all previous sorting classes
			killClass($('#report-history'), '-asc');
			killClass($('#report-history'), '-desc');
			//add current sort class
			$('#report-history').addClass(sortType + '-desc');
			//remove the init class if this is the first sort after load and it's on the date criteria
			if($("#report-history").hasClass('init')) {
				$("#report-history").removeClass('init');
			}
			//set order variable
			order = 'desc';
		} else {
			//function calls to remove all previous sorting classes
			killClass($('#report-history'), '-desc');
			killClass($('#report-history'), '-asc');
			//add current sort class
			$('#report-history').addClass(sortType + '-asc');
			//set order variable
			order = 'asc';
		}
		//function call to sort the rows of reports based on the values of the date, reference, or app used
		sortUsingNestedText($('#report-history'), ".previous-report", spanName(sortType), order);
		//remove the ids that allow the math to stripe in prep for new striping ids
		$('.previous-report').removeAttr('id');
		//remove the style that stripes
		$('.previous-report').removeAttr('style');
		//create an array of the divs with the previous-report class to iterate through and stripe
		var prevRepArr = $('.previous-report').toArray();
		//console.log(prevRepArr);
		//function call to iterate report-history, add new striping class, stripe
		iterateReports(prevRepArr, 'rgba(100, 176, 228, 0.2)');
	}

	//definition to return the name of the span class to sort on
	var spanName = function(sortType) {
		return 'span.' + sortType + '-to-sort';
	}

	//definition to escape a regex
	var regexEscape = function(str) {
	    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
	}

	//definition create a regex for classname with suffix with a variable
	var reg = function(input) {
	    input = regexEscape(input);
			var result = new RegExp('^\\w*' + input);
	    return result;
	}

	//definition for striping loop
	var iterateReports = function(arr, color) {
		for(var i = 0; i < arr.length; i++) {
			$(arr[i]).attr('id', 'pr-' + i);
			if(i%2 != 0) {
				$('#pr-' + i).attr('style', 'background-color: ' + color + ';');
			}
		}
	}

	//definition for sorting function
	var sortUsingNestedText = function(parent, childSelector, keySelector, order) {
		var items, vA, vB;
		if(order === 'asc') {
			items = parent.children(childSelector).sort(function(a, b) {
		  	vA = $(keySelector, a).text();
		    vB = $(keySelector, b).text();
		    return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
			});
		} else  {
			items = parent.children(childSelector).sort(function(a, b) {
		  	vA = $(keySelector, a).text();
		    vB = $(keySelector, b).text();
		    return (vB < vA) ? -1 : (vB > vA) ? 1 : 0;
			});
		}
	  parent.append(items);
	}

	//function definition to remove the classnames of the overall sorting container on sort
	var killClass = function(el, suffix) {
		// console.log('inside kill class suffix ' + suffix)
		var classes = el.attr('class').split(/\s+/);
		// console.log(classes);
		for(var k = 0; k < classes.length; k++) {
			// console.log(classes[k]);
			// console.log(suffix);
			if (classes[k].match(reg(suffix))) {
				// console.log('if to remove class');
				el.removeClass(classes[k]);
				// console.log(el.attr('class'));
			}
		}
	}

	//handlers for sorting on button clicks
	$('#date-sort').on('click', function(event) {
		sortDivsAndStripe('date');
	});

	$('#ref-sort').on('click', function(event) {
		sortDivsAndStripe('ref');
	});

	$('#app-sort').on('click', function(event) {
		sortDivsAndStripe('app');
	});
});
