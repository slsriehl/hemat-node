$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/




//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').on("change", function () {
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();}
        else {
            $('#box1_2').hide();
        }
    });

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();}
        else {
            $('#box3_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box8_1').show();
            $('#box8_2').show();
        }
        else {
            $('#box8_1').hide();
            $('#box8_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box8_3').show();
        }
        else {
            $('#box8_3').hide();
        }
    });

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box9_1').show();
            $('#box9_2').show();}
        else {$('#box9_1').hide();
            $('#box9_2').hide();}
        if (sela.indexOf("Involved") > -1) {
            $('#box9_3').show();}
        else {$('#box9_3').hide();}
    });

    $('#box10').on("change", function () {
        var sela = $('#box10').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box10_1').show();
            $('#box10_2').show();}
        else {$('#box10_1').hide();
            $('#box10_2').hide();}
        if (sela.indexOf("Involved") > -1) {
            $('#box10_3').show();}
        else {$('#box10_3').hide();}
    });

    $('#box12').on("change", function () {
        var sel = $('#box12').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box12_2').show();
        }
        else {
            $('#box12_2').hide();
        }
    });




//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('.writeReport').on('click', function () {

        // ***************** INPUT VALIDATION ********************//
        $('select[multiple]:visible').each(function () {
            // Check if at least one selection is made
            if ($(this).val().length > 0) {
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        $('input[type="text"]:visible').each(function () {
            // Check if at least one selection is made
            if ($.trim($(this).val()).length > 0) {
                $(this).removeClass('empty');
            } else {
                if ($(this).attr('placeholder').indexOf('applicable') < 0) {
                    $(this).addClass('empty');
                    $('#cap-valid').show();
                }
            }
        });

        // ***************** END VALIDATION ********************//


        var captext = "Cervical (LEEP/Excision) Cancer Synoptic\n(requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        }
        else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }


        var box_2 = $("#box2").val();
        captext += "\nTumor Size:\n- " + box_2.replace(/cm/, '') + "cm\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3 == 'Other') {
            captext += "\nHistologic Type:\n- " + box_3_2 + "\n";
        }
        else {
            captext += "\nHistologic Type:\n- " + box_3 + "\n";
        }


        var box_4 = $("#box4").val();
        captext += "\nHistologic Grade:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nDepth of stromal invasion (mm):\n- " + box_5.replace(/mm/, '') + "mm\n";

        var box_6 = $("#box6").val();
        if (box_6.length > 0) {
            captext += "\nHorizontal extent longitudinal/length:\n- " + box_6.replace(/mm/, '') + "mm\n";
        }

        var box_7 = $("#box7").val();
        if (box_7.length > 0) {
            captext += "\nHorizontal extent circumferential/width:\n- " + box_7.replace(/mm/, '') + "mm\n";
        }

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Endocervical:\n- " + box_8 + "\n- Nearest margin: " + box_8_1 + "\n- Distance to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
        }
        else if (box_8.indexOf("Involved") > -1) {
            captext += "\nMargins - Endocervical:\n- " + box_8 + "\n- Margin involved: " + box_8_3 + "\n";
        }
        else {
            captext += "\nMargins - Endocervical:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Ectocervical:\n- " + box_9 + "\n- Nearest margin: " + box_9_1 + "\n- Distance to this margin: " + box_9_2.replace(/mm/, "") + "mm\n";
        }
        else if (box_9.indexOf("Involved") > -1) {
            captext += "\nMargins - Ectocervical:\n- " + box_9 + "\n- Margin involved: " + box_9_3 + "\n";
        }
        else {
            captext += "\nMargins - Ectocervical:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Deep:\n- Margins uninvolved by tumor\n- Nearest margin: " + box_10_1 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        }
        else if (box_10.indexOf("Involved") > -1) {
            captext += "\nMargins - Deep:\n- Margins involved by tumor\n- Margin involved: " + box_10_3 + "\n";
        }
        else {
            captext += "\nMargins - Deep:\n- " + box_10 + "\n";
        }

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if ($.inArray('Other', box_12) > -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join('\n- ').replace(/Other/, box_12_2) + "\n";
        }
        else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join('\n- ') + "\n";
        }


        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


