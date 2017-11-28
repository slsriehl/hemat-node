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

    $('#box3').on("change", function () {
        var sela = $('#box3').val();
        var trig1 = sela.filter(el => el.indexOf('Between') > -1
        )
        ;
        var trig2 = sela.filter(el => el.indexOf('Other') > -1
        )
        ;
        if (trig1.length > 0) {
            $('#box3_2').show();
        }
        else {
            $('#box3_2').hide();
        }
        if (trig2.length > 0) {
            $('#box3_3').show();
        }
        else {
            $('#box3_3').hide();
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

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        if (sel.indexOf("Other") > -1) {

            $('#box11_2').show();
        }
        else {
            $('#box11_2').hide();
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

    $('#box19').on("change", function () {
        var sela = $('#box19').val();
        var trig1 = sela.filter(el => el.indexOf('Mitotic') > -1
        )
        ;
        var trig2 = sela.filter(el => el.indexOf('Other') > -1
        )
        ;
        if (trig1.length > 0) {
            $('#box19_2').show();
        }
        else {
            $('#box19_2').hide();
        }
        if (trig2.length > 0) {
            $('#box19_3').show();
        }
        else {
            $('#box19_3').hide();
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


        var captext = "Uveal Melanoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        }
        else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }


        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        var box_3_3 = $("#box3_3").val();
        var trig1_box_3 = box_3.filter(el => el.indexOf("Between") > -1
        )
        ;
        var trig2_box_3 = box_3.filter(el => el.indexOf("Other") > -1
        )
        ;
        if ((trig1_box_3.length > 0 ) && (trig2_box_3.length == 0  )) {
            captext += "\nTumor Site - macroscopic examination/transillumination (:\n- " + box_3.join("\n- ").replace(/Between/, box_3_2) + "\n";
        }
        else if ((trig1_box_3.length == 0 ) && (trig2_box_3.length > 0  )) {
            captext += "\nTumor Site - macroscopic examination (:\n- " + box_3.join("\n- ").replace(/Other/, box_3_3) + "\n";
        }
        else if ((trig1_box_3.length > 0 ) && (trig2_box_3.length > 0  )) {
            captext += "\nTumor Site - macroscopic examination/transillumination (:\n- " + box_3.join("\n- ").replace(/Between/, box_3_2).replace(/Other/, box_3_3) + "\n";
        }
        else {
            captext += "\nTumor Site - macroscopic examination/transillumination (:\n- " + box_3.join("\n- ") + "\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nTumor Size After Sectioning - Greatest basal diameter:\n- " + box_4.replace(/mm/, '') + "mm\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Size After Sectioning - Greatest thickness (mm) :\n- " + box_5.replace(/mm/, '') + "mm\n";

        var box_6 = $("#box6").val();
        captext += "\nTumor Site After Sectioning:\n- " + box_6 + "\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 == 'Other') {
            captext += "\nTumor Involvement of Other Ocular Structures:\n- " + box_7_2 + "\n";
        }
        else {
            captext += "\nTumor Involvement of Other Ocular Structures:\n- " + box_7 + "\n";
        }


        var box_8 = $("#box8").val();
        captext += "\nGrowth Pattern:\n- " + box_8 + "\n";

        var box_9 = $("#box9").val();
        captext += "\nHistologic Type:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        captext += "\nScleral Involvement:\n- " + box_10 + "\n";

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_11 == 'Other') {
            captext += "\nMargins:\n- " + box_11_2 + "\n";
        }
        else {
            captext += "\nMargins:\n- " + box_11 + "\n";
        }


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
        var box_19_2 = $("#box19_2").val();
        var box_19_3 = $("#box19_3").val();
        var trig1_box_19 = box_19.filter(el => el.indexOf("Mitotic") > -1
        )
        ;
        var trig2_box_19 = box_19.filter(el => el.indexOf("Other") > -1
        )
        ;
        if ((trig1_box_19.length > 0 ) && (trig2_box_19.length == 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join("\n- ").replace(/Mitotic/, box_19_2) + " per 10 hpf\n";
        }
        else if ((trig1_box_19.length == 0 ) && (trig2_box_19.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join("\n- ").replace(/Other/, box_19_3) + "\n";
        }
        else if ((trig1_box_19.length > 0 ) && (trig2_box_19.length > 0  )) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join("\n- ").replace(/Mitotic/, box_19_2 + "per 10 hpf ").replace(/Other/, box_19_3) + "\n";
        }
        else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join("\n- ") + "\n";
        }


        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 11/22/2017.
 */
