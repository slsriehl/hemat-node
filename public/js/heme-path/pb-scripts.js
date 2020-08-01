// ################## CUSTOM JS SCRIPTS FOR PB SMEARS ###################//

//***************** ADD MICROS WITH ONE-CLICK UNDO **********************//
//***********************************************************************//
//***********************************************************************//

// temporary holder for checkbox id
var part_choice  = null;
var micro_choice  = null;
var final_choice = null;
var comm_choice  = null;

// new text
var micro_text = $('#outPut-2').val();
var final_text = $('#outPut-3').val();
var comm_text  = $('#outPut-4').val();

// old micro text to revert to
var final_old = '';
var micro_old = '';
var comm_old  = '';

// fill micro description textbox
function print_micro() {
    if (part_choice !== null) {
        micro_text += partTypes[part_choice] + '';
        part_choice = null;
        $('#outPut-2').val(micro_text);
    }
    else if (micro_choice !== null) {
        micro_text += mxLines[micro_choice] + '';
        micro_choice = null;
        $('#outPut-2').val(micro_text);
    }
}

// fill comment textbox
function print_comm() {
    if (comm_choice !== null) {
        comm_text += commLines[comm_choice] + '';
        comm_choice = null;
        $('#outPut-4').val(comm_text);
    }
}

// fill final diagnosis textbox
function print_final() {
    if (final_choice !== null) {
        final_text += dxOuts[final_choice] + '';
        final_choice = null;
        $('#outPut-3').val(final_text);
    }
}
// Retain any manual edits within textarea
$('textarea').on('change', function(){
    if ($(this).is('#outPut-2')){
        micro_text = $(this).val();}
    else if ($(this).is('#outPut-4')){
        comm_text = $(this).val();}
    else if ($(this).is('#outPut-3')){
        final_text = $(this).val();}
});

// Micros: add new selection to list, unless unchecked
$('input:checkbox').on('change', function () {
    if ($(this).attr('id').indexOf('partType') > -1){
        if ($(this).is(':checked')) {
            part_choice = $(this).attr('id');
            micro_old = micro_text;
            print_micro();
        } else {
            var del = $(this).attr('id');
            var re = new RegExp(partTypes[del]); // assign RegExp to this value + '$' last occurrence
            micro_old = micro_text.replace(re, ''); // replace last occurrence
            micro_text = micro_old;
            $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
        }
    }
    else if ($(this).attr('id').indexOf('mxLine') > -1){
        if ($(this).is(':checked')) {
            micro_choice = $(this).attr('id');
            micro_old = micro_text;
            print_micro();
        } else {
            var del = $(this).attr('id');
            var re = new RegExp(mxLines[del]); // assign RegExp to this value + '$' last occurrence
            micro_old = micro_text.replace(re, ''); // replace last occurrence
            micro_text = micro_old;
            $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
        }
    }
    else if ($(this).attr('id').indexOf('commLine') > -1){
        if ($(this).is(':checked')) {
            comm_choice = $(this).attr('id');
            comm_old = comm_text;
            print_comm();
        } else {
            var del = $(this).attr('id');
            comm_old = comm_text.replace(commLines[del], '');
            comm_text = comm_old;
            $('#outPut-4').val(comm_old); // if unchecked, textarea = prior text
        }
    }
    else if ($(this).attr('id').indexOf('dxOut') > -1){
        if ($(this).is(':checked')) {
            final_choice = $(this).attr('id');
            final_old = final_text;
            print_final();
        } else {
            var del = $(this).attr('id');
            final_old = final_text.replace(dxOuts[del], '');
            final_text = final_old;
            $('#outPut-3').val(final_old); // if unchecked, textarea = prior text
        }
    }
});
//********************************************************************//
//********************************************************************//

// ************** Disable abs#s if % checkbox is checked ****************//
    $("#CBCswitch").on('change', function() {
        $("#NEUT").prop("disabled", !$("#NEUT").prop("disabled"));
        $("#LYMPH").prop("disabled", !$("#LYMPH").prop("disabled"));
        $("#MONO").prop("disabled", !$("#MONO").prop("disabled"));
        $("#PNEUT").prop("disabled", !$("#PNEUT").prop("disabled"));
        $("#PLYMPH").prop("disabled", !$("#PLYMPH").prop("disabled"));
        $("#PMONO").prop("disabled", !$("#PMONO").prop("disabled"));

    });
// ======================================================================//

// *************** Write CBC to text area function **********************//
$('#cbcWrite').on('click', function () {

    var cbcText = '';
    var mySite = $('#site').val();
    var dateIx = $('#date-pick').val();
    var wbcIx = $('#WBC').val();
    var rbcIx = $('#RBC').val();
    var hbIx = $('#HB').val();
    var hctIx = $('#HCT').val();
    var mcvIx = $('#MCV').val();
    var mchcIx = $('#MCHC').val();
    var rdwIx = $('#RDW').val();
    var pltIx = $('#PLT').val();
    var neutIx = $('#NEUT').val();
    var lymphIx = $('#LYMPH').val();
    var monoIx = $('#MONO').val();
    var eosIx = $('#EOS').val();
    var pneutIx = $('#PNEUT').val();
    var plymphIx = $('#PLYMPH').val();
    var pmonoIx = $('#PMONO').val();
    var aneut = (parseFloat(wbcIx) * (parseFloat(pneutIx) / 100)).toFixed(2);
    var alym = (parseFloat(wbcIx) * (parseFloat(plymphIx) / 100)).toFixed(2);
    var amono = (parseFloat(wbcIx) * (parseFloat(pmonoIx) / 100)).toFixed(2);

    if ($('#CBCswitch').is(':checked')){
        cbcText = "LABORATORY DATA (" + mySite + ", " + dateIx +"):" + " WBC: " + wbcIx + " K/ul;" + " RBC: " + rbcIx + " MIL;" + " HB: " + hbIx + " gm/dl;" + " HCT: " + hctIx + " %;" + " MCV: " + mcvIx + " fl;" + mchcIx + " g/dl;" + " RDW: " + rdwIx + " %;" + " PLT: " + pltIx + " K/ul;" + " ABS NEUT*: " + aneut + " K/ul;" + " ABS LYMPH*: " + alym + " K/ul;" + " ABS MONO*: " + amono + " K/ul.  *Values calculated from percentage distribution";
        $('#outPut-1').val(cbcText);
    }
    else {
        if (eosIx !== ''){
            cbcText = "LABORATORY DATA (" + mySite + ", " + dateIx +"):" + " WBC: " + wbcIx + " K/ul;" + " RBC: " + rbcIx + " MIL;" + " HB: " + hbIx + " gm/dl;" + " HCT: " + hctIx + " %;" + " MCV: " + mcvIx + " fl;" + mchcIx + " g/dl;" +  " RDW: " + rdwIx + " %;" + " PLT: " + pltIx + " K/ul;" + " ABS NEUT: " + neutIx + " K/ul;" + " ABS LYMPH: " + lymphIx + " K/ul;" + " ABS MONO: " + monoIx + " K/ul; ABS EOS: "+eosIx+" K/uL.";
            $('#outPut-1').val(cbcText);
        } else {
            cbcText = "LABORATORY DATA (" + mySite + ", " + dateIx +"):" + " WBC: " + wbcIx + " K/ul;" + " RBC: " + rbcIx + " MIL;" + " HB: " + hbIx + " gm/dl;" + " HCT: " + hctIx + " %;" + " MCV: " + mcvIx + " fl;" + mchcIx + " g/dl;" +  " RDW: " + rdwIx + " %;" + " PLT: " + pltIx + " K/ul;" + " ABS NEUT: " + neutIx + " K/ul;" + " ABS LYMPH: " + lymphIx + " K/ul;" + " ABS MONO: " + monoIx + " K/ul.";
            $('#outPut-1').val(cbcText);
        }
        }

});
// ======================================================================//

// ********************* Combined report function ***********************//
$('#writeReport').on('click', function () {
    // store your text to localStorage when someone click the link
    var textToPass = $('#outPut-1').val() +'\n\n'+$('#outPut-2').val()+'\n\n'+$('#outPut-3').val()+'\n\n'+$('#outPut-4').val();

    $('#outPut-combine').val(textToPass);
    $('#combined-report').modal("show");
		dataObj.singleSection = $('#outPut-combine').val();
		// dataObj.cbcData = $('#outPut-1').val();
		// dataObj.micro = $('#outPut-2').val();
		// dataObj.finals = $('#outPut-3').val();
		// dataObj.comments = $('#outPut-4').val();
		makeCreatePdfBtn();

});

$('#mysisReport').on('click', function () {
    // store your text to localStorage when someone click the link
        var mysis_diag = $("#outPut-3").val();
        mysis_diag = mysis_diag.replace(/PERIPHERAL BLOOD/g, "DIAGNOSIS");
        var textToPass = ' \n'+ $('#outPut-2').val() +' \n \n \n'+mysis_diag+' \n \nCOMMENT: '+ $('#outPut-4').val() +' \n ';

				dataObj.cbcData = $('#outPut-1').val();
				dataObj.micro = $('#outPut-2').val();
				dataObj.finals = mysis_diag;
				dataObj.comments = $('#outPut-4').val();
				makeCreatePdfBtn();

    // $('#outPut-combine').val(textToPass);
    // $('#combined-report').modal("show");

});

// ======================================================================//


// *********************   ***********************//

// ======================================================================//
/**
 * Created by chandrakrishnan on 4/27/2017.
 */
