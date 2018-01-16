'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/


    $('#box1').on("change", function () {
        var sela = $('#box1').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('regional') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (trig2.length > 0) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }
    });

    $('#box4').on("change", function () {
        var sela = $('#box4').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box4_1').show();
            $('#box4_2').show();
        } else {
            $('#box4_1').hide();
            $('#box4_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box4_3').show();
        } else {
            $('#box4_3').hide();
        }
    });

    $('#box5').on("change", function () {
        var sela = $('#box5').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box5_1').show();
            $('#box5_2').show();
        } else {
            $('#box5_1').hide();
            $('#box5_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box5_3').show();
        } else {
            $('#box5_3').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $("#box14").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box13").on("change", function () {
        var sel = $("#box13").val();
        if (sel != "pMx") {
            $("#box13_2").show();
        } else {
            $("#box13_2").hide();
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

        var captext = "Merkel Cell Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        var trig1_box_1 = box_1.filter(function (el) {
            return el.indexOf("regional") > -1;
        });
        var trig2_box_1 = box_1.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1_box_1.length > 0 && trig2_box_1.length == 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/nodes/, "nodes: " + box_1_2) + "\n";
        } else if (trig1_box_1.length == 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/Other/, box_1_3) + "\n";
        } else if (trig1_box_1.length > 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/nodes/, "nodes: " + box_1_2).replace(/Other/, box_1_3) + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join("\n- ") + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, '') + "cm\n";

        var box_18 = $("#box18").val();
        if (box_18.length > 0) {
            captext += "\n+ Tumor thickness:\n- " + box_18.replace(/mm/, '') + "mm\n";

        }

        var box_4 = $("#box4").val();
        var box_4_1 = $("#box4_1").val();
        var box_4_2 = $("#box4_2").val();
        var box_4_3 = $("#box4_3").val();
        if (box_4.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Peripheral:\n- " + box_4 + "\n- Nearest margin: " + box_4_1 + "\n- Distance to this margin: " + box_4_2.replace(/mm/, "") + "mm\n";
        } else if (box_4.indexOf("Involved") > -1) {
            captext += "\nMargins - Peripheral:\n- " + box_4 + "\n- Margin involved: " + box_4_3 + "\n";
        } else {
            captext += "\nMargins - Peripheral:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        var box_5_1 = $("#box5_1").val();
        var box_5_2 = $("#box5_2").val();
        var box_5_3 = $("#box5_3").val();
        if (box_5.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Deep:\n- " + box_5 + "\n- Nearest margin: " + box_5_1 + "\n- Distance to this margin: " + box_5_2.replace(/mm/, "") + "mm\n";
        } else if (box_5.indexOf("Involved") > -1) {
            captext += "\nMargins - Deep:\n- " + box_5 + "\n- Margin involved: " + box_5_3 + "\n";
        } else {
            captext += "\nMargins - Deep:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        captext += "\nLymphovascular Invasion:\n- " + box_6 + "\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if ($.inArray('Other', box_7) > -1) {
            captext += "\nTumor Extension:\n- " + box_7.join('\n- ').replace(/Other/, "Tumor invades: " + box_7_2) + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_7.join('\n- ') + "\n";
        }

        var box_8 = $("#box8").val();
        if (box_8.length > 0) {
            captext += "\n+ Tumor-Infiltrating Lymphocytes:\n- " + box_8 + "\n";

        }

        var box_9 = $("#box9").val();
        if (box_9.length > 0) {
            captext += "\n+ Tumor Growth Pattern:\n- " + box_9 + "\n";

        }

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable") {
            if (box_13 == "pM1c") {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        } else {
            if (box_13 == "pM1c") {
                captext += box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        }
        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            var box_17 = $("#box17").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_15 + "\n\tLymph nodes involved: " + box_16 + "\n\tSentinel Nodes Examined: " + box_17 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/9/2017.
 */