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
        if (sel.indexOf('Amputation') > -1) {
            $('#box1_2').show();
            $('.margins').show();
        } else if (sel.indexOf('Other') > -1) {
            $('#box1_3').show();
        } else if (sel.indexOf('resection') > -1) {
            $('.margins').show();
        } else {
            $('#box1_3').hide();
            $('#box1_2').hide();
            $('.margins').hide();
        }
    });

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
    });

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        if (sel.indexOf("Other") > -1) {

            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("Other") > -1) {

            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box8_1').show();
            $('#box8_2').show();
        } else {
            $('#box8_1').hide();
            $('#box8_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box8_3').show();
        } else {
            $('#box8_3').hide();
        }
    });

    $("#box13").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $('#box12').on("change", function () {
        var sel = $('#box12').val();
        if (sel.indexOf("Present") > -1) {

            $('#box12_2').show();
        } else {
            $('#box12_2').hide();
        }
    });

    $('#box16').on("change", function () {
        var sel = $('#box16').val();
        if (sel.indexOf("Present") > -1) {

            $('#box16_2').show();
        } else {
            $('#box16_2').hide();
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


        var captext = "Rhabdomyosarcoma Cancer Synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1.indexOf("Amputation") > -1) {
            captext += "\nProcedure:\n- " + box_1 + "\n- " + box_1_2 + "\n";
        } else if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1 + "\n- " + box_1_3 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- " + box_3_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_3 + "\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- " + box_4.replace(/cm/, '') + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        if (box_6 != "Not applicable") {
            captext += "\nAnaplasia:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Other") > -1) {
            captext += "\nFusion Status:\n- " + box_7_2 + "\n";
        } else {
            captext += "\nFusion Status:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8 != "Not applicable") {
            if (box_8.indexOf("Uninvolved") > -1) {
                captext += "\nMargins (for resections only):\n- " + box_8 + "\n- Nearest margin: " + box_8_1 + "\n- Distance to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
            } else if (box_8.indexOf("Involved") > -1) {
                captext += "\nMargins (for resections only):\n- " + box_8 + "\n- Margin involved: " + box_8_3 + "\n";
            } else {
                captext += "\nMargins (for resections only):\n- " + box_8 + "\n";
            }
        }

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if (box_12.indexOf("Present") > -1) {
            captext += "\nDistant Metastasis:\n- " + box_12_2 + "\n";
        } else {
            captext += "\nDistant Metastasis:\n- " + box_12 + "\n";
        }

        if ($("#box13").is(':checked')) {
            var box_14 = $("#box14").val();
            var box_15 = $("#box15").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_14 + "\n\tLymph nodes involved: " + box_15 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_2 = $("#box2").val();
        if (box_2.length > 0) {
            captext += "\n+ Preoperative Treatment:\n- " + box_2 + "\n";
        }

        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        if (box_16.length > 0) {
                if (box_16.indexOf("Present") > -1) {
                    captext += "\n+ Treatment Effect:\n- Present: " + box_16_2.replace(/%/, '') + "% necrosis\n";
                } else {
                    captext += "\n+ Treatment Effect:\n- " + box_16 + "\n";
                }
        }

        var box_17 = $("#box17").val();
        captext += "\nThe Intergroup Rhabdomyosarcoma Study Postsurgical Clinical Grouping System:\n- " + box_17 + "\n";

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});