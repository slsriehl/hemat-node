'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/
    $('#box1').on("change", function () {
        var sel = $('#box1').val();
        if (sel.indexOf('Other') > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (sel.indexOf('type') > -1) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }
    });

    $('#box4').on("change", function () {
        var sel = $('#box4').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
    });

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box6').on("change", function () {
        var sela = $('#box6').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box6_0').show();
            $('#box6_1').show();
            $('#box6_2').show();
        } else {
            $('#box6_0').hide();
            $('#box6_1').hide();
            $('#box6_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box6_3').show();
        } else {
            $('#box6_3').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf("present") > -1) {

            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
    });

    $('#box10').on("change", function () {
        var sel = $('#box10').val();
        var pos = sel.filter(function (el) {
            return el.indexOf('Other') > -1;
        });

        if (pos.length > 0) {
            $('#box10_2').show();
        } else {
            $('#box10_2').hide();
        }
    });

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        if (sel.indexOf("Other") > -1) {

            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $("#box16").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box15").on("change", function () {
        var sel = $("#box15").val();
        if (sel.indexOf("Not") < 0) {
            $("#box15_2").show();
        } else {
            $("#box15_2").hide();
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
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        // ***************** END VALIDATION ********************//


        var captext = "Ewing Sarcoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else if (box_1.indexOf("type") > -1) {
            captext += "\nProcedure:\n- " + box_1.replace(/\(type\)/, "(type: " + box_1_3 + ")") + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nTumor site:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if ($.inArray("Not applicable", box_4) == -1) {
            if ($.inArray('Other', box_4) > -1) {
                captext += "\n+ Extent of Osseous Tumor:\n- " + box_4.join('\n- ').replace(/Other/, box_4_2) + "\n";
            } else {
                captext += "\n+ Extent of Osseous Tumor:\n- " + box_4.join('\n- ') + "\n";
            }
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if ($.inArray("Not applicable", box_5) == -1) {
            if ($.inArray('Other', box_5) > -1) {
                captext += "\n+ Extent of Extra-osseous Tumor:\n- " + box_5.join('\n- ').replace(/Other/, box_5_2) + "\n";
            } else {
                captext += "\n+ Extent of Extra-osseous Tumor:\n- " + box_5.join('\n- ') + "\n";
            }
        }

        var box_6 = $("#box6").val();
        var box_6_0 = $("#box6_1").val();
        var box_6_1 = $("#box6_1").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        if (box_6.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_6 + "\n";
            if (box_6_0.length > 0) {
                captext += "\t- Distance to nearest bone margin: " + box_6_0.replace(/mm/, "") + "mm\n";
            }
            if (box_6_1.length > 0) {
                captext += "\t- Distance to nearest soft tissue margin: " + box_6_1.replace(/mm/, "") + "mm\n";
            }
            if (box_6_2.length > 0) {
                captext += "\t- Distance to nearest parenchymal margin: " + box_6_2.replace(/mm/, "") + "mm\n";
            }
        } else if (box_6.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- " + box_6 + ": " + box_6_3 + "\n";
        } else {
            captext += "\nMargins:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        captext += "\n+ Lymph-Vascular Invasion:\n- " + box_7 + "\n";

        var box_8 = $("#box8").val();
        captext += "\nPreresection Treatment:\n- " + box_8.join('\n- ') + "\n";

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9 != "Not applicable") {
            if (box_9.indexOf("present") > -1) {
                captext += "\nTreatment effect:\n- Necrosis present: " + box_9_2 + "% tumor necrosis\n";
            } else {
                captext += "\nTreatment effect:\n- " + box_9 + "\n";
            }
        }

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        captext += '\nMetastasis:\n- ';
        if (box_15 != "Not applicable") {
            if (box_15 != "pMx") {
                captext += box_15 + " (metastatic site(s): " + box_15_2 + ")\n";
            } else {
                captext += box_15 + "\n";
            }
        }

        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_17 + "\n\tLymph nodes involved: " + box_18 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        var pos = box_10.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        captext += "\n-ANCILLARY STUDIES-";
        if (pos.length > 0) {
            captext += "\n+ Cyto-molecular Genetics:\n- " + box_10.join('\n- ').replace(/Other/, box_10_2) + "\n";
        } else {
            captext += "\n+ Cyto-molecular Genetics:\n- " + box_10.join('\n- ') + "\n";
        }

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_11.indexOf("Other") > -1) {
            captext += "\n+ Cyto-molecular Genetics - method:\n- " + box_11_2 + "\n";
        } else {
            captext += "\n+ Cyto-molecular Genetics - method:\n- " + box_11 + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/19/2017.
 */