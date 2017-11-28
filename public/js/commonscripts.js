//share with specific scripts (must be outside page load)
var dataObj = {};

var makeCreatePdfBtn = function() {
	var makePdfBtn = $('<a class="btn btn-lg btn-outline-success p-2 ml-4" id="pdf-report">');
	var pdfBtnText = $('<small>Save & Create PDF</small>');
	if(!$('#pdf-report').length && $('.report-button-box').length) {
		makePdfBtn.append(pdfBtnText);
		$('.report-button-box').append(makePdfBtn);
	} else if(!$('#pdf-report').length && $('.combined-button-box').length && $('.logged-in').length) {
		makePdfBtn.append(pdfBtnText);
		$('.combined-button-box').prepend(makePdfBtn);
	}
}

var datePickerIcons = {
	time: 'fa fa-clock-o',
	date: 'fa fa-calendar-plus-o',
	up: 'fa fa-chevron-up',
	down: 'fa fa-chevron-down',
	previous: 'fa fa-chevron-left',
	next: 'fa fa-chevron-right',
	today: 'fa fa-window-restore',
	clear: 'fa fa-trash-o',
	close: 'fa fa-window-close'
}

//remove old front end messages

var slideUpOldMsgs = function() {
	history.pushState("", document.title, window.location.pathname + window.location.search);
	if($('.message-fail')) {
		$('.message-fail').slideUp(100);
	}
	if($('.message-success')) {
		$('.message-success').slideUp(100);
	}
}

//create a front end message
var frontEndMessage = function(id, message, className) {
	slideUpOldMsgs();
	var fEMessage = $('<div class="message-box">');
	if(className) {
		fEMessage.addClass(className)
	}
	if(id) {
		fEMessage.attr('id', id);
	}
	var fEMessageInner = '<div class="message-dismiss"> \
			<h2>&times;</h2> \
			<!-- end message-dismiss --> \
			</div> \
			<div class="message-item"> \
				<span>' + message + '</span> \
				<!-- / message-item--> \
			</div> \
			<!-- /message-box --> \
		</div>';
	fEMessage.append(fEMessageInner);
	$('.message-center').append(fEMessage);
	//jump to message box
	window.location.hash = '#bc-jump';
}

//onload
$(document).ready(function() {
// instantiate copy button
    new Clipboard('.copy');


// instantiate date picker
    $('.my-date-picker').datetimepicker({
			format: 'MM-DD-YYYY',
			icons: datePickerIcons,
			collapse: false,
			allowInputToggle: true,
			viewMode: 'days',
			widgetPositioning: {
				vertical: 'bottom'
			},
			showTodayButton: true
        // todayBtn: "linked",
        // orientation: "bottom auto",
        // todayHighlight: true,
        // autoclose: true
    });
//instantiate time picker
	$('.my-time-picker').datetimepicker({
		format: 'HH:mm',
		icons: datePickerIcons,
		collapse: false,
		allowInputToggle: true,
		viewDate: false,
		widgetPositioning: {
			vertical: 'bottom'
		}
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
        var input = $(this).val();
        console.log('input: ' + input);
        if (input.length > 1) {
            console.log('input not zero');
            // first hide the links lists from view
            $('.link-search .nav-item').hide();
            // but secretly unhide the collapsed links
            // using .show, so the nested uls can be viewed
            $('.link-search .collapse').show();
            // then filter in the matching links only
            $('.link-search').find('.nav-item:casecontains("' + input + '")').show();
        } else {
            // secretly unhide the collapsed links
            $('.link-search .collapse').hide();
            // if search is empty, show the div and reset columns
            $('.link-search .nav-item').show();
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


//immuno/ihc box moved to ihc-script

		// //initialize bootstrap select
		// $('.selectpicker').selectpicker();

		//dismiss messages: hide and ajax to add to dismissed messages table
		$(document).off('click', '.message-dismiss h2').on('click', '.message-dismiss h2', function(event) {
			console.log('foo');
			var message = $(this).parent().parent();
			var messageId = message.attr('id');
			message.slideUp(500, function() {
				if(!isNaN(messageId)) {
					$.ajax({
						type: 'POST',
						url: '/message/dismiss',
						data: {
							id: messageId
						}
					})
					.done(function(response) {
						console.log(response);
						if(response == 'messages updated') {
							console.log('message dismissed!');
						} else {
							console.log('message not dismissed, try again');
						}
					})
				}
			});
		});

		//show new case reference popup if new selected
			$('.caseRefSelect').on('change', function() {
				$('.caseRefSelect').val() == $(this).val();
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
			$('.caseRefSelect').append(newRefOption);
			//return false;
		});


		//send a report to the back end for storage and PDFing
		$(document).off('click', '#pdf-report').on('click', '#pdf-report', function(event) {
			if($(this).parents().find('.caseRefSelect').val() != 'new') {
				dataObj.referenceId = $('.caseRefSelect').val()
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
				//hide any previous error messages and reset the page location so the hash jump to error messages will work again
				slideUpOldMsgs();
				if(response.report) {
					//pdf was successfully created and the data saved in the database

					//create a button to download the pdf
					if($('#download-pdf').length) {
						removeDLAndSend();
						addDLAndSend(response);
					} else {
						addDLAndSend(response);
					}
				} else {
					//create a pdf create error message
					frontEndMessage('pdf-create-fail', 'Creating your PDF failed.  Please try again.  If this problem persists, please <a href="/mail">contact our admin</a>.', 'message-fail');
				}
			});
		});

		var removeDLAndSend = function() {
			$('#download-pdf').remove();
			$('#send-pdf').remove();
		}

		var addDLAndSend = function(response) {
			//pdfbtn
			var downloadPdfBtn = $('<a href="/report/download/' + response.report + '" download class="btn btn-lg btn-outline-success p-2 ml-4 download-pdf" id="download-pdf">');
			var downloadBtnText = $('<small>Download</small>')
			downloadPdfBtn.append(downloadBtnText);
			//sendbtn
			var sendPdfBtn = $('<a href="#" data-report="' + response.report + '" class="btn btn-lg btn-outline-success p-2 ml-4 send-pdf" id="send-pdf">');
			var sendBtnText = $('<small>Email</small>')
			sendPdfBtn.append(sendBtnText);
			if($('.report-button-box').length) {
				$('.report-button-box').append(sendPdfBtn);
				$('.report-button-box').append(downloadPdfBtn);
			} else {
				$('.combined-button-box').prepend(sendPdfBtn);
				$('.combined-button-box').prepend(downloadPdfBtn);
			}
		}
		$(document).off('click', '.send-pdf').on('click', '.send-pdf', function(event) {
			console.log('send-pdf click fired');
			let reportId = $(this).attr('data-report');
			$.ajax({
				url: '/report/mail/' + reportId,
				type: 'GET'
			})
			.done(function(response) {
				$('#combined-report').modal('hide');
				if(response.status) {
					frontEndMessage(response.msgType, response.msg, 'message-success');
				} else {
					frontEndMessage(response.msgType, response.msg, 'message-fail');
				}
			});
		});

		$(document).off('click', '#view-all-previous').on('click', '#view-all-previous', function(event) {
			window.location.href = '/reports/history';
		});

		//focus on field in new case ref modal
		$('#new-case-reference').on('shown.bs.modal', function () {
    	$('#newCaseReference').focus();
		});

		//show/hide previous-reports
		$('#toggle-prev-rep').on('click', function(event) {
			$('#previous-reports').toggle();
		});

    // show/hide cap validation alert, instead of destroying with close
    $(function () {
        $("[data-hide]").on("click", function () {
            $(this).closest("." + $(this).attr("data-hide")).hide();
        });
    });

    // smooth scroll to top on cap 'write report' click
    $('.writeReport').click(function () {
        $("html, body").animate({scrollTop: 125}, 600);
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
