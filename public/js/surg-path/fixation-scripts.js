// scripts for div popups here
$(window).on('load', function() {

	//date-time pickers


	$('#timestart').datetimepicker({
			format: 'MM-DD-YYYY h:mm a',
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
			format: 'MM-DD-YYYY h:mm a',
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
			format: 'MM-DD-YYYY h:mm a',
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
		var start = new Date($('#timestart').val())
		var startdate = start.toLocaleString("en-us", { month: "long" }) + " " + start.getDate() + ", "  + start.getFullYear();
		var start_timeb = start.getHours() + ':' + ((start.getMinutes()<10?'0':'') + start.getMinutes());
		var end = new Date($('#timeformalin').val());
		var end_timeb = end.getHours() + ':' + ((end.getMinutes()<10?'0':'') + end.getMinutes());
		var proc = new Date($('#processorstart').val());
		var cold_difference = (end - start) / 1000 / 60;
		var fix_difference = (proc - end) / 1000 / 60;
		var fix_hours = Math.floor(fix_difference / 60);
		var fix_minutes = fix_difference % 60;

		var _starttxt = "Collection time: \t"+startdate+"; "+start_timeb;
		var _timeinfix = "Time in fixative: \t"+startdate+"; "+end_timeb;
		var _coldischtxt = "Cold ischemia time: \t" + cold_difference + " minutes";
		var _fixdurtxt = "Fixation time: \t\t" + fix_hours + " hours, " + fix_minutes + " minutes";

		$('#outPut-1').val(_starttxt+"\n"+_timeinfix+'\n'+_coldischtxt +'\n'+_fixdurtxt);

		dataObj.singleSection = $('#outPut-1').val();
		makeCreatePdfBtn();

});/**
 * Created by chandrakrishnan on 4/29/2017.
 */
