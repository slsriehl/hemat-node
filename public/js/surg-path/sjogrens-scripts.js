// Sjogren's focus score app scripts

$(window).on('load', function () {

    // NUMBERS TO WORDS
// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

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


// TEXT MODIFIERS

// Hide micro based on atropy
$("#partType101").on('input', function (){
    // get num atrophic lobules
    var num = parseInt($(this).val(), 10);
    // get num total lobules
    var lobs = parseInt($('#partType100').val(), 10);
    var rat = num / lobs;
    if (num > 0 && rat <= 0.5){  // if <50% atrophy is present
        $('#_mxLine200').hide();
        $('#_mxLine201').show();
        $('#_mxLine209').hide();
    } else if (num > 0 && rat > 0.5){ // if > 50% atrophy is present
        $('#_mxLine200').hide();
        $('#_mxLine201').hide();
        $('#_mxLine209').show();
    } else { // if no atrophic lobules seen
        $('#_mxLine200').show();
        $('#_mxLine201').hide();
        $('#_mxLine209').hide();
    }
    if (num == lobs){
        $("#_partType202").show();
        $("#_partType202").css("background", "yellow");
    } else {
        $("#_partType202").hide();
        $("#_partType202").css("background", "none");

    }
}) ;

// Focus score
    $('#mxLine221').on('change', function () {
        console.log("Focus script fired!");
        var inf_foci = parseInt($('#mxLine101').val(), 10).toFixed(0);
        var surf_area = parseInt($('#mxLine100').val(), 10).toFixed(1);
        var foci_words = toWords(inf_foci);

        var fs = ((inf_foci / surf_area) * 4).toFixed(1);

        for (var i = 220; i < 222; i++) {
            if (mxLines.hasOwnProperty("mxLine" + i)) {
                mxLines['mxLine' + i] = mxLines['mxLine' + i].replace(/#SSS#/, surf_area).replace(/#TTT# /, foci_words).replace(/#UUU#/, fs);
            }
        }

        dxOuts.dxOut200 = dxOuts.dxOut200.replace(/#FFF#/, fs);

        $('#focus_score').html('Focus Score = ' + fs);

        if (fs < 1) {
            $('#outPut-4').val(commLines.commLine100);
        }
        else if (fs >= 1) {
            $('#outPut-4').val(commLines.commLine101);
        }
    });

    $('#mxLine220').on('change', function () {
        $('#outPut-4').val(commLines.commLine102);
    });

// Lobules description
    $('#mxLine100').on('blur', function () {
        var lobs = parseInt($('#partType100').val(), 10);
        var atrophy = parseInt($('#partType101').val(), 10);
        var area = parseInt($('#mxLine100').val(), 10) + " mm^2";
        lobs = toWords(lobs);
        atrophy = toWords(atrophy);

        if (atrophy == 0){
            $.each(partTypes, function (key, val) {
                partTypes[key] = partTypes[key].replace(/#AAA# /, lobs).replace(/#BBB# /, 'none ').replace(/#CCC#/, area);
            });
        } else {
            $.each(partTypes, function (key, val) {
                partTypes[key] = partTypes[key].replace(/#AAA# /, lobs).replace(/#BBB# /, atrophy).replace(/#CCC#/, area);
            });
        }

        /*
        for (var i = 200; i < 204; i++) {
            if (atrophy == 0) {
                partTypes['partType' + i] = partTypes['partType' + i].replace(/#AAA# /, lobs).replace(/#BBB# /, 'none ').replace(/#CCC#/, area);
            } else {
                partTypes['partType' + i] = partTypes['partType' + i].replace(/#AAA# /, lobs).replace(/#BBB# /, atrophy)replace(/#CCC#/, area);
            }
        }
        */

    });


// **** ADD MICROS WITH ONE-CLICK UNDO *****//
//											//
//											//
// temporary holder for checkbox id
    var part_choice = null;
    var diag_choice = null;
    var micro_choice = null;
    var comm_choice = null;

// new text
    var micro_text = $('#outPut-2').val();
    var final_text = $('#outPut-3').val();
    var comm_text = $('#outPut-4').val();

// old micro text to revert to
    var micro_old = '';
    var final_old = '';
    var comm_old = '';

// fill final diagnosis textbox
    function print_final() {
        if (diag_choice !== null) {
            final_text += dxOuts[diag_choice] ;
            diag_choice = null;
            if ($("#mxLine221").is(":checked")) { // add focus score
                $('#outPut-3').val(final_text + dxOuts.dxOut200);

            } else {
                $('#outPut-3').val(final_text);
            }
        }
    }

// fill micros textbox
    function print_micro() {
        if (part_choice !== null) {
            micro_text += partTypes[part_choice] + '';
            part_choice = null;
            $('#outPut-2').val(micro_text);
        }
        else if (micro_choice !== null) {
            micro_text += mxLines[micro_choice];
            micro_choice = null;
            $('#outPut-2').val(micro_text);
        }
    }

// fill comment textbox
    function print_comm() {
        if (comm_choice !== null) {
            comm_text += comLines[comm_choice] + '';
            comm_choice = null;
            $('#outPut-4').val(comm_text);
        }
    }

// Retain any manual edits within textarea
    $('textarea').on('input', function(){
        if ($(this).is('#outPut-2')){
            micro_text = $(this).val();}
        else if ($(this).is('#outPut-4')){
            comm_text = $(this).val();}
        else if ($(this).is('#outPut-3')){
            final_text = $(this).val();}
    });

// Micros: add new selection to list, unless unchecked
    $('input:checkbox').change(function () {
        if ($(this).attr('id').indexOf('partType') > -1) {
            if ($(this).is(':checked')) {
                part_choice = $(this).attr('id');
                micro_old = micro_text;
                print_micro();
            } else {
                var del = $(this).attr('id');
                micro_old = micro_text.replace(partTypes[del], '');
                micro_text = micro_old;
                $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('mxLine') > -1) {
            if ($(this).is(':checked')) {
                micro_choice = $(this).attr('id');
                micro_old = micro_text;
                print_micro();
            } else {
                var del = $(this).attr('id');
                micro_old = micro_text.replace(mxLines[del], '');
                micro_text = micro_old;
                $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('dxOut') > -1) {
            if ($(this).is(':checked')) {
                diag_choice = $(this).attr('id');
                final_old = final_text;
                print_final();
            } else {
                var del = $(this).attr('id');
                var re = new RegExp(dxOuts[del] + '$'); // assign RegExp to this value + '$' last occurrence
                final_old = final_text.replace(re, ''); // replace last occurrence
                final_text = final_old;
                $('#outPut-3').val(final_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('commLine') > -1) {
            if ($(this).is(':checked')) {
                comm_choice = $(this).attr('id');
                comm_old = comm_text;
                print_comm();
            }
            else {
                var del = $(this).attr('id');
                comm_old = comm_text.replace(comLines[del], '');
                comm_text = comm_old;
                $('#outPut-4').val(comm_old); // if unchecked, textarea = prior text
            }
        }
    });
//											//
//											//
// **** ADD MICROS WITH ONE-CLICK UNDO *****//

    $('#writeReport').on('click', function () {
        // store your text to localStorage when someone click the link
        var textToPass = $('#outPut-2').val() + '\n\n' + $('#outPut-3').val() + '\n\n' + $('#outPut-4').val();
        $('#outPut-combine').val(textToPass);
        $('#combined-report').modal("show");

        dataObj.singleSection = $('#outPut-combine').val();
        makeCreatePdfBtn();
    });


});


/**
 * Created by chandrakrishnan on 6/3/2017.
 */

/**
 * Created by Chandra Krishnan on 10/27/2017.
 */
