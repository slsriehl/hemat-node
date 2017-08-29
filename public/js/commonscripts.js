
$(window).on('load', function() {
// instantiate copy button
    new Clipboard('.copy');


// instantiate date picker
    $('.datepicker').datepicker({
        todayBtn: "linked",
        orientation: "bottom auto",
        todayHighlight: true,
        autoclose: true
    });

// Add highlight to checkboxes
    $('input:checkbox').click(function () {
        $(this).parent().toggleClass('highlight');
    });


// Filter nav bar links with search box
    // create new expression for case insensitive search
    jQuery.expr[':'].casecontains = function(a, i, m) {
        return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

// Case insensitive method for filter
    jQuery.expr[":"].caseontains = jQuery.expr.createPseudo(function(arg) {
        return function( elem ) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

 // nav-bar search filter - ##note! nav.php must be loaded in nav to work.
    $('#nav-search').on('keyup', function() {
        var input = $('.search-filter').val();
        console.log('input: ' + input);
        if (input.length >1) {
            console.log('input not zero');
            // first hide the links lists from view
            $('.link-search li').hide();
            // but secretly unhide the collapsed links
            // using .show, so the nested uls can be viewed
            $('.link-search .collapse').show();
            // then filter in the matching links only
            $('.link-search').find('li:casecontains("' + input + '")').show();
        } else {
            // secretly unhide the collapsed links
            $('.link-search .collapse').hide();
            // if search is empty, show the div and reset columns
            $('.link-search li').show();
        }
    });


// reset form button via quick page reload
    $('#Reset').on('click', function(){
        location.reload();
    });

// load tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// load popovers
$(function () {
    $('[data-toggle="popover"]').popover()
});


//immuno/ihc box moved to immuno script

		// //initialize bootstrap select
		// $('.selectpicker').selectpicker();

		//dismiss messages: hide and ajax to add to dismissed messages table
		$('.message-dismiss h2').on('click', function(event) {
			console.log('foo');
			$(this).parent().parent().slideUp(500, function() {
				$.ajax({
					type: 'POST',
					url: '/message/dismiss',
					data: {
						id: $(this).attr('id')
					}
				})
				.done(function(response) {
					console.log(response);
					if(response == true) {
						console.log('message dismissed!');
					} else {
						console.log('message not dismissed, try again');
					}
				})
			});
		});

		//show new case reference popup if new selected
		$('#caseRefSelect').on('change', function() {
			if($(this).val() == '-1') {
				$('#new-case-reference').modal('show');
				return;
			} else {
				return;
			}
		});

		//handler to submit new case reference to obj to be sent to back end
		$('#add-case-reference').on('submit', function(event) {
			event.preventDefault();
			console.log(event);
			$('#new-case-reference').modal('hide');
			dataObj.newCaseRef = $('#newCaseReference').val();
			console.log(dataObj);
			var newRefOption = $('<option value="new" selected="selected">');
			newRefOption.append(dataObj.newCaseRef);
			$('#caseRefSelect').append(newRefOption);
			//return false;
		});

		//create a failure message
		var failureMessage = function(id, message) {
			var failMessage = $('<div class="message-box message-fail" id="' + id + '"> \
							<div class="message-dismiss"> \
								<h2>&times;</h2> \
				<!-- end message-dismiss --> \
				</div> \
				<div class="message-item"> \
					<span>' + message + '</span> \
					<!-- / message-item--> \
				</div> \
				<!-- /message-box --> \
			</div>')
			$('.message-center').append(failMessage);
		}

		//send a report to the back end for storage and PDFing
		$(document).off('click', '#pdf-report').on('click', '#pdf-report', function(event) {
			if($('#caseRefSelect').val() != 'new') {
				dataObj.referenceId = $('#caseRefSelect').val()
			}
			console.log(dataObj);
			console.log('foo');
			//send the report to the back end to be PDFed and saved
			$.ajax({
				url: '/report/submit',
				type: 'POST',
				data: dataObj
			})
			.done(function(response) {
				console.log(response);
				if(response.report) {
					//pdf was successfully created and the data saved in the database
					if($('.message-fail')) {
						//hide any previous error messages
						$('.message-fail').slideUp(400);
					}
					//create a button to download the pdf
					var downloadPdfBtn = $('<a href="/report/download/' + response.report + '" download class="btn btn-lg btn-outline-success p-2 ml-4 download-pdf">');
					var downloadBtnText = $('<small>Download</small>')
					downloadPdfBtn.append(downloadBtnText);
					$('.report-button-box').append(downloadPdfBtn);
				} else {
					//create a pdf create error message
					failureMessage('create-pdf-fail', 'Creating your PDF failed.  Please try again.  If this problem persists, please <a href="/mail">contact our admin</a>.');
				}
			});
		});

    /*/Google analytics
     var _gaq = _gaq || [];
     _gaq.push(['_setAccount', 'UA-37125342-1']);
     _gaq.push(['_trackPageview']);

     (function() {
     var ga = document.createElement('script');
     ga.type = 'text/javascript';
     ga.async = true;
     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(ga, s);
     })();
     */

});
