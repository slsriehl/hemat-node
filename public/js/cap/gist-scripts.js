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
        if (sel.indexOf('Resection') > -1) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }
    });

    $('#box4').on("change", function () {
        var sel = $('#box4').val();
        if (sel.indexOf("Multifocal") > -1) {

            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
    });

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        if (sel.indexOf("other") > -1) {

            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("Present") > -1) {

            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box10').on("change", function () {
        var sela = $('#box10').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box10_1').show();
            $('#box10_2').show();
        } else {
            $('#box10_1').hide();
            $('#box10_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box10_3').show();
        } else {
            $('#box10_3').hide();
        }
    });

    $("#box15").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box14").on("change", function () {
        var sel = $("#box14").val();
        if (sel != "pMx") {
            $("#box14_2").show();
        } else {
            $("#box14_2").hide();
        }
    });

    $('#box20').on("change", function () {
        var sel = $('#box20').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box20_2').show();
        } else {
            $('#box20_2').hide();
        }
    });

    $('#box21').on("change", function () {
        var sel = $('#box21').val();
        if (sel.indexOf("Performed") > -1) {

            $('#box21_2').show();
        } else {
            $('#box21_2').hide();
        }
    });

    $('#box22').on("change", function () {
        var sel = $('#box22').val();
        if (sel.indexOf("Present") > -1) {

            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
    });

    //************************************************************//
    // Script to populate the template data in the output textarea//
    // *************************************************************/
    $('.writeReport').on('click', function () {


        // ***************** INPUT VALIDATION ********************//
                    // reset validation alert, if all goes to plan, it won't show
                    $('#cap-valid').hide();
                    $('#opt-valid').hide();


                    $('select:visible').each(function () {
                        // ignore class=opt
                        if (!$(this).hasClass("opt")) {
                            // Check if at least one selection is made
                            if ($(this).val().length > 0) {
                                $(this).removeClass('empty');
                            } else {
                                $(this).addClass('empty');
                                $('#cap-valid').show();
                            }
                        }
                        if ($(this).hasClass("opt")) {
                            // Check if at least one selection is made
                            if ($.trim($(this).val()).length > 0) {
                                $(this).removeClass('empty-opt');
                            } else {
                                $(this).addClass('empty-opt');
                                $('#opt-valid').show();
                            }
                        }
                    });

                    $('input:visible').each(function () {
                        // ignore search bar in menu
                        if ($(this).prop('type') != "search"){
                            // ignore class=opt
                            if (!$(this).hasClass("opt")) {
                                // Check if at least one selection is made
                                if ($.trim($(this).val()).length > 0) {
                                    $(this).removeClass('empty');
                                } else {
                                    $(this).addClass('empty');
                                    $('#cap-valid').show();
                                }
                            }
                            if ($(this).hasClass("opt")) {
                                // Check if at least one selection is made
                                if ($.trim($(this).val()).length > 0) {
                                    $(this).removeClass('empty-opt');
                                } else {
                                    $(this).addClass('empty-opt');
                                    $('#opt-valid').show();
                                }
                            }
                        }

                    });

                    // *************************** END VALIDATION ******************************//


        var captext = "GI Stromal Tumor Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1 + "\n- " + box_1_2 + "\n";
        } else if (box_1.indexOf("Resection") > -1) {
            captext += "\nProcedure:\n- " + box_1 + " (" + box_1_3 + ")\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Multifocal") > -1) {
            captext += "\nTumor Focality:\n- Multple\n";

            var box_4_3 = $("#box4_3").val();
            captext += "\t- Number of tumors: " + box_4_3 + "\n";

            var box_4_4 = $("#box4_4").val();
            captext += "\t- Size of additional tumors: " + box_4_4 + "\n";
        } else {
            captext += "\nTumor Focality:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("other") > -1) {
            captext += "\nHistologic Type:\n- " + box_5.replace(/, other/, ": " + box_5_2) + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        captext += "\nMitotic Rate:\n- " + box_6 + " per 10 hpf\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.length > 0) {
            if (box_7.indexOf("Present") > -1) {
                captext += "\n+ Necrosis:\n- Present: " + box_7_2 + "% necrosis\n";
            } else {
                captext += "\n+ Necrosis:\n- " + box_7 + "\n";
            }
        }

        var box_8 = $("#box8").val();
        captext += "\nHistologic Grade:\n- " + box_8 + "\n";

        var box_9 = $("#box9").val();
        captext += "\nRisk Assessment:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_10 + "\n- Nearest margin: " + box_10_1 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else if (box_10.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- " + box_10 + "\n- Margin involved: " + box_10_3 + "\n";
        } else {
            captext += "\nMargins:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_11 != "Not applicable") {
            if (box_14 != "pMx") {
                captext += box_11.join("") + " " + box_12 + " " + box_13 + " " + box_14 + " (metastatic site(s): " + box_14_2 + ")\n";
            } else {
                captext += box_11.join("") + " " + box_12 + " " + box_13 + " " + box_14 + "\n";
            }
        } else {
            if (box_14 != "pMx") {
                captext += box_12 + " " + box_13 + " " + box_14 + " (metastatic site(s): " + box_14_2 + ")\n";
            } else {
                captext += box_12 + " " + box_13 + " " + box_14 + "\n";
            }
        }
        if ($("#box15").is(':checked')) {
            var box_16 = $("#box16").val();
            var box_17 = $("#box17").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_16 + "\n\tLymph nodes involved: " + box_17 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        captext += "\n-- ANCILLARY TESTING --\n";

        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        if ($.inArray('Other', box_20) > -1) {
            captext += "\nImmunohistochemical Studies:\n- " + box_20.join('\n- ').replace(/Other/, box_20_2) + "\n";
        } else {
            captext += "\nImmunohistochemical Studies:\n- " + box_20.join('\n- ') + "\n";
        }

        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        var box_21_split = box_21_2.split("; ");
        if (box_21.length > 0) {
            if (box_21.indexOf("Performed") > -1) {
                captext += "\n+ Molecular Genetic Studies:\n- Performed:\n\t- " + box_21_split.join("\n\t- ") + "\n";
            } else {
                captext += "\n+ Molecular Genetic Studies:\n- " + box_21 + "\n";
            }
        }

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if (box_22.indexOf("Present") > -1) {
            captext += "\nTreatment Effect:\n- Present: " + box_22_2 + "% viable tumor\n";
        } else {
            captext += "\nTreatment Effect:\n- " + box_22 + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/19/2017.
 */