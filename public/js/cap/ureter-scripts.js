$(window).on('load', function () {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/


//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').on("change", function () {
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();
        }
        else {
            $('#box1_2').hide();
        }
    });


    $('#box4').on("change", function () {
        var sel = $('#box4').val();
        var sq = sel.filter(el => el.indexOf('Squamous cell') > -1);
        var ad = sel.filter(el => el.indexOf('Adenocarcinoma') > -1);
        var diff = $(sel).not(sq).not(ad).get();
        if ($.inArray('Other histologic type', sel) > -1) {
            console.log("other");
            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
        if (sq.length > 0 || ad.length > 0) {
            if (diff.length > 0) {
                $(".uro-grade-1").show();
            } else {
                $(".uro-grade-1").hide();
            }
            $(".uro-grade-2").show();
        } else {
            $(".uro-grade-2").hide();
            if (sq.length == 0 && ad.length == 0) {
                $(".uro-grade-1").show();
            }
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf('Other') > -1) {
            $('#box6_2').show();
        }
        else {
            $('#box6_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("Other") > -1) {

            $('#box7_2').show();
        }
        else {
            $('#box7_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box8_2').show();
        }
        else {
            $('#box8_2').hide();
        }
    });


    $('#box10').on("change", function () {
        var sel = $('#box10').val();
        if (sel.indexOf('Invasive') > -1) {
            $('.margin_hid').show();
        }
        else {
            $('.margin_hid').hide();
        }
        if (sel.indexOf('Non-invasive') > -1) {
            $('.margin2_hid').show();
        }
        else {
            $('.margin2_hid').hide();
        }
    });

    $('#box10_2').on("change", function () {
        var sel = $('#box10_2').val();
        if (sel.indexOf('Other') > -1) {
            $('#box10_3').show();
        }
        else {
            $('#box10_3').hide();
        }
    });
    $('#box10_4').on("change", function () {
        var sel = $('#box10_4').val();
        if (sel.indexOf('Other') > -1) {
            $('#box10_5').show();
        }
        else {
            $('#box10_5').hide();
        }
    });

    $("#box16").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        }
        else {
            $(".lnchk").hide();
        }
    });

    $('#box20').on("change", function () {
        var sela = $('#box20').val();
        var trig1 = sela.filter(el => el.indexOf('Therapy') > -1);
        var trig2 = sela.filter(el => el.indexOf('Other') > -1);
        if (trig1.length > 0) {
            $('#box20_2').show();
        }
        else {
            $('#box20_2').hide();
        }
        if (trig2.length > 0) {
            $('#box20_3').show();
        }
        else {
            $('#box20_3').hide();
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


        var captext = "Ureter/Renal Pelvis Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        }
        else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_30 = $("#box30").val();
        captext += "\nSpecimen Laterality:\n- "  + box_30+ "\n";


        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- "  + box_2+ "\n";


        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if ($.inArray('Other', box_4) > -1) {
            captext += "\nHistologic Type:\n- " + box_4.join('\n- ').replace(/Other/, box_4_2) + "\n";
        }
        else {
            captext += "\nHistologic Type:\n- " + box_4.join('\n- ') + "\n";
        }

        var box_5 = $("#box5").val();
        captext += "\n+ Associated Epithelial Lesions:\n- " + box_5.join('\n- ') + "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 != "Not applicable") {
            if (box_6.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- " + box_6_2 + "\n";
            }
            else {
                captext += "\nHistologic Grade:\n- " + box_6 + "\n";
            }
        }


        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 != "Not applicable") {
            if (box_7.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- " + box_7_2 + "\n";
            }
            else {
                captext += "\nHistologic Grade:\n- " + box_7 + "\n";
            }
        }


        var box_9 = $("#box9").val();
        captext += "\nTumor Extension:\n- "  + box_9+ "\n";


        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if ($.inArray('Other', box_8) > -1) {
            captext += "\n+ Tumor Configuration:\n- " + box_8.join('\n- ').replace(/Other/, box_8_2) + "\n";
        }
        else {
            captext += "\n+ Tumor Configuration:\n- " + box_8.join('\n- ') + "\n";
        }


        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        var box_10_4 = $("#box10_2").val();
        var box_10_5 = $("#box10_3").val();
        if (box_10.indexOf('Invasive') > -1){
            if ($.inArray('Other', box_10_4) > -1){
                captext += "\nMargins:\n- " + box_10 + " "+ box_10_4.join(', ').replace(/Other/, box_10_5) + "\n";
            }else {
                captext += "\nMargins:\n- " + box_10 + " "+ box_10_4.join(', ') + "\n";
            }
        }
        else if (box_10.indexOf('Non-invasive') > -1){
            if ($.inArray('Other', box_10_2) > -1){
                captext += "\nMargins:\n- " + box_10 + " "+ box_10_2.join(', ').replace(/Other/, box_10_3) + "\n";
            }else {
                captext += "\nMargins:\n- " + box_10 + " "+ box_10_2.join(', ') + "\n";
            }
        }
        
        else {captext += "\nMargins:\n- "  + box_10 + "\n";}


        var box_11 = $("#box11").val();
        captext += "\nLymphovascular Invasion:\n- " + box_11 + "\n";

        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12 != "Not applicable") {
            captext += box_12.join("") + ' ' + box_13 + " " + box_14 + " " + box_15 + "\n";
        }
        else {
            captext += box_13 + " " + box_14 + " " + box_15 + "\n";
        }

        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_17 + "\n\tLymph nodes involved: " + box_18 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_19 = $("#box19").val();
        if (box_19 != "Not applicable") {
            captext += "\n+ Extranodal Extension:\n- " + box_19 + "\n";
        }

        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        var box_20_3 = $("#box20_3").val();
        var trig1_box_20 = box_20.filter(el => el.indexOf("Therapy") > -1);
        var trig2_box_20 = box_20.filter(el => el.indexOf("Other") > -1);
        if ((trig1_box_20.length > 0 ) && (trig2_box_20.length == 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Therapy/, box_20_2) + "\n";
        }
        else if ((trig1_box_20.length == 0 ) && (trig2_box_20.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Other/, box_20_3) + "\n";
        }
        else if ((trig1_box_20.length > 0 ) && (trig2_box_20.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Therapy/, box_20_2).replace(/Other/, box_20_3) + "\n";
        }
        else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ") + "\n";
        }


        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 11/23/2017.
 */
