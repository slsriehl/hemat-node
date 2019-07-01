// scripts for div popups here
$(window).on('load', function() {

	//date-time pickers


	$('#timestart').datetimepicker({
			format: 'MM/DD/YYYY HH:mm',
			icons: datePickerIcons,
			collapse: false,
			sideBySide: true,
			allowInputToggle: true,
			widgetPositioning: {
				vertical: 'bottom'
			},
			showTodayButton: true
	});

	$('#timeformalin').datetimepicker({
			format: 'MM/DD/YYYY HH:mm',
			icons: datePickerIcons,
			collapse: false,
			sideBySide: true,
			allowInputToggle: true,
			widgetPositioning: {
				vertical: 'bottom'
			},
			useCurrent: false
	});

	$('#processorstart').datetimepicker({
			format: 'MM/DD/YYYY HH:mm',
			icons: datePickerIcons,
			collapse: false,
			sideBySide: true,
			allowInputToggle: true,
			widgetPositioning: {
				vertical: 'bottom'
			},
			stepping: 5
	});

	$('#timestart').on('dp.change', function(e) {
		$('#timeformalin').data('DateTimePicker').minDate(e.date);
	});

	$('#timestart').on('dp.change', function(e) {
		$('#timeformalin').data('DateTimePicker').date(e.date);
	});

	$('#timeformalin').on('dp.change', function(e) {
		$('#processorstart').data('DateTimePicker').minDate(e.date);
	});
// http://trentrichardson.com/examples/timepicker/
});

$('#writeReport').on('click', function () {
	console.log('timestart ' + $('#timestart').data('DateTimePicker').viewDate());
	console.log('timeformalin ' + $('#timeformalin').data('DateTimePicker').viewDate());
	console.log('processorstart ' + $('#processorstart').data('DateTimePicker').viewDate());
		var start = $('#timestart').data('DateTimePicker').viewDate();
		// var startdate = start.format('MMMM D, YYYY');
		// var start_timeb = start.getHours() + ':' + ((start.getMinutes()<10?'0':'') + start.getMinutes());
		var end = $('#timeformalin').data('DateTimePicker').viewDate();
		// var end_timeb = end.getHours() + ':' + ((end.getMinutes()<10?'0':'') + end.getMinutes());
		var proc = $('#processorstart').data('DateTimePicker').viewDate();
		var cold_difference = moment.duration(end.diff(start)).asMinutes();
		var fix_diff_mins = moment.duration(proc.diff(end)).asMinutes();
		var fix_hours = Math.floor(fix_diff_mins / 60);
		var fix_mins = Math.floor(fix_diff_mins % 60);

		// US date format
		if ($("#dateUS").hasClass("active")) {
            var _starttxt = "Collection time: \t" + start.format('MM/DD/YYYY [at] HH:mm');
            var _timeinfix = "Time in fixative: \t" + end.format('MM/DD/YYYY [at] HH:mm');
        } else {
            var _starttxt = "Collection time: \t" + start.format('DD/MM/YYYY [at] HH:mm');
            var _timeinfix = "Time in fixative: \t" + end.format('DD/MM/YYYY [at] HH:mm');
		}
            var _coldischtxt = "Cold ischemia time: \t" + cold_difference + " minutes";
            var _fixdurtxt = "Fixation time: \t\t" + fix_hours + ' hours, ' + fix_mins + ' minutes';

		// EU date format

		$('#outPut-1').val(_starttxt+"\n"+_timeinfix+'\n'+_coldischtxt +'\n'+_fixdurtxt);

		dataObj.singleSection = $('#outPut-1').val();
		makeCreatePdfBtn();

});

/**
 * Created by chandrakrishnan on 4/29/2017.
 */
