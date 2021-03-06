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


// ********************** convert numbers to words with toWords function ********************** //
	
// NUMBERS TO WORDS
// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];
    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function toWords(s) {
        s = s.toString();
        s = s.replace(/[\, ]/g, '');
        if (s != parseFloat(s)) return 'not a number';
        var x = s.indexOf('.');
        if (x == -1) x = s.length;
        if (x > 15) return 'too big';
        var n = s.split('');
        var str = '';
        var sk = 0;
        for (var i = 0; i < x; i++) {
            if ((x - i) % 3 == 2) {
                if (n[i] == '1') {
                    str += tn[Number(n[i + 1])] + ' ';
                    i++;
                    sk = 1;
                } else if (n[i] != 0) {
                    str += tw[n[i] - 2] + ' ';
                    sk = 1;
                }
            } else if (n[i] != 0) {
                str += dg[n[i]] + ' ';
                if ((x - i) % 3 == 0) str += 'hundred ';
                sk = 1;
            }
            if ((x - i) % 3 == 1) {
                if (sk) str += th[(x - i - 1) / 3] + ' ';
                sk = 0;
            }
        }
        if (x != s.length) {
            var y = s.length;
            str += 'point ';
            for (var i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
        }
        return str.replace(/\s+/g, ' ');
    }

//onload
$(document).ready(function() {

	// logic to dismiss cookies button
	$(document).off('click', '#acknowledgePrivacy').on('click', '#acknowledgePrivacy', function(event) {
		$.ajax({
			type: 'DELETE',
			url: '/message/acknowledge-privacy'
		})
		.done(function(response) {
			console.log(response);
			var message = $(this).parent().parent();
			message.slideUp(500);
		});
	});

// instantiate copy button
    new Clipboard('.copy');


// instantiate date picker
    $('.my-date-picker').datetimepicker({
			format: 'MM/DD/YYYY',
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
        location.reload(true);
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

		//dismiss messages: hide and ajax to add to dismissed messages table
		$(document).off('click', '.message-dismiss i').on('click', '.message-dismiss i', function(event) {
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

        // Expand select[multiple] for option.length > 6
        $('select[multiple]').each(function () {
            if (this.options.length > 6) {
                $(this).attr('size', "8");
            } else {
                $(this).attr('size', "6");
                $(this).css("overflow", "hidden");
            }
        });


    // Check if IE11 or less
    function isIE()
    {
        var isIE11 = navigator.userAgent.indexOf(".NET CLR") > -1;
        var isIE11orLess = isIE11 || navigator.appVersion.indexOf("MSIE") != -1;
        return isIE11orLess;
    }

    if (!isIE()) { // check to make sure it is not IE11
        // Make multiple select options without need for ctrl or shift
        $("select[multiple]").mousedown(function (e) {
            e.preventDefault();

            var select = this;
            var scroll = select.scrollTop;

            e.target.selected = !e.target.selected;

            setTimeout(function () {
                select.scrollTop = scroll;
            }, 0);

            $(select).trigger("change").focus();
        }).mousemove(function (e) {
            e.preventDefault()
        });
        console.log("isIE?:"+isIE());
    } else {
        console.log("isIE?:"+isIE());
    }
//******************* END check IE11 or less **********************//


	// validate lymph nodes to max on total submitted
    $(".maxnode").on("input", function() {
        var totnode = Number($(this).val()) || 0;
        	$(".subnode").attr({max:totnode});

    });

    $(".maxinv").on("input", function() {
        var totinv = Number($(this).val()) || 0;
            $(".subinv").attr({
                max: totinv
            });

    });

	var totinput = 0; // staring node involved
    $(".subnode").on("input", function(e){
        var num = Number($(this).val()); // this input
        var max = Number($(this).attr("max")); // get max input
            if (num > max){ // prevent any inputs
                console.log("node numeric validation error");
                e.preventDefault();
                $(this).val('')
            }
    })
	//************ End lymph node validation *****************//


	// collapse final output
    $(".switch").on("click", function(){
    	var text = $("#outPut-1").val();
        var text_new = "";
        if (this.id == "switchto"){
            text_new = text
						.replace(/:\r?\n-\h*(.*)$(?!\r?\n-)/gm, ": $1" )
						.replace(/\n-/gm, "\n   -" )
						.replace(/^\s*\r?\n/gm,'');
            $("#outPut-1").val(text_new);
            console.log("switched: "+text_new);
        }
        if (this.id == "switchback"){
            $(".writeReport").trigger("click");
        }
    });


	//****************** End collapse final output

	//******************* Move anchor jumps below the fixed top navbar
	var shiftWindow = function() { scrollBy(0, -75) };
	if (location.hash) shiftWindow();
	window.addEventListener("hashchange", shiftWindow);

	//****************** End move anchor jumps


	// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
	// Run if IE only
	if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
		// repeat polyfill
		if (!String.prototype.repeat) {
		  String.prototype.repeat = function(count) {
		    'use strict';
		    if (this == null) { // check if `this` is null or undefined
		      throw new TypeError('can\'t convert ' + this + ' to object');
		    }
		    var str = '' + this;
		    // To convert string to integer.
		    count = +count;
		    if (count < 0) {
		      throw new RangeError('repeat count must be non-negative');
		    }
		    if (count == Infinity) {
		      throw new RangeError('repeat count must be less than infinity');
		    }
		    count |= 0; // floors and rounds-down it.
		    if (str.length == 0 || count == 0) {
		      return '';
		    }
		    // Ensuring count is a 31-bit integer allows us to heavily optimize the
		    // main part. But anyway, most current (August 2014) browsers can't handle
		    // strings 1 << 28 chars or longer, so:
		    if (str.length * count >= (1 << 28)) {
		      throw new RangeError('repeat count must not overflow maximum string size');
		    }
		    while (count >>= 1) { // shift it by multiple of 2 because this is binary summation of series
		       str += str; // binary summation
		    }
		    str += str.substring(0, str.length * count - str.length);
		    return str;
		  }
		}
		
		if (!String.prototype.padEnd) {
		    String.prototype.padEnd = function padEnd(targetLength,padString) {
			targetLength = targetLength>>0; //floor if number or convert non-number to 0;
			padString = String((typeof padString !== 'undefined' ? padString : ' '));
			if (this.length > targetLength) {
			    return String(this);
			}
			else {
			    targetLength = targetLength-this.length;
			    if (targetLength > padString.length) {
				padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
			    }
			    return String(this) + padString.slice(0,targetLength);
			}
		    };
		}
	}


});

//****************** Add padding to create right sided text column
String.prototype.rpad = function (num, brk = 45) {
    // .rpad() function to right pad block of text,
    // num = #of spaces to pad right
    // Explanation of regex: https://stackoverflow.com/questions/14484787/wrap-text-in-javascript/51506718#51506718
    // Here, capture group is 45 chars, to account for 72 char courier 11pt standard width in word document
    // To change the width of text being broken, pass through a value for the 2nd argument brk. ie. .rpad(25, 30) adds 25 spaces and breaks up paragraph into chunks of 30 chars

	var re = `((?![^\\n]{1,${brk}}$)([^\\n]{1,${brk}})\\s)|(.{1,${brk}}$)`;
	console.log("regex: ", re);
	var str = new RegExp(re, "g");
    var text = (this).match(str);
    console.log("Matched text", text);
    if (text) {
        var padded = text[0]; // get first line, don't pad
		if (text.length > 1){
            for (var i = 1; i < text.length; i++) {
                padded += "\n".padEnd(num) + text[i]; // pad subsequent lines
            }
        }

        return padded;
    } else {
        return text;
    }

};

//****************** Convert array contents to grammatically correct string
function arrayToSentence (arr) {
    var len = arr.length;
    return arr.reduce(function(a,b,c){
        return a + (c + 1 !== len ? ', ' : ' and ') + b;
    });
}
//******************

//*********************VALIDATE FINAL DIAGNOSIS FIELD ALWAYS HAS A DIAGNOSIS  ********//
// ********************THAT FOLLOWS A PART TYPE (CORRECT FOR BLANK DIAGNOSES *********//
function validate_finals(){
    var finalText = $("#outPut-3").val();
    // count # of times a colon+space occur
    var reg1 = finalText.match(/\:.$/gm);
    console.log("Matches of parts: "+reg1.length);
    // count # of times dash+space occur
    var reg2 = finalText.match(/(\:.$)\n\- /gm);
    console.log("Matches of finals: "+reg2.length);
    if (reg1.length > reg2.length){
        alert("Oops, one of your parts doesn't have a diagnosis. Please check your report.");
        return ;
    }
}
// ********************END CORRECTION FOR BLANK DIAGNOSES *********//

//*********************ADD PART DESIGNATION IF USER DESIRES  ********//
function add_label(orig, modified){
    // add letter labels to parts
    let lastCharCode = 64; // charcode for capital A
    // regex = matches start of a line that starts with a letter; function appends ascending charcode and period space
    modified = orig.replace(/^\b/gm, () => String.fromCharCode(++lastCharCode) + '. ');
    console.log(modified);
    return modified;
}
// ********************END OPTIONAL PART DESIGNATION *********//



//*********************MAKE ALL MODALS DRAGGABLE*******************//
$(".modal-dialog").draggable({
    handle: ".modal-header"
});
//*********************END DRAGGABLE******************************//
