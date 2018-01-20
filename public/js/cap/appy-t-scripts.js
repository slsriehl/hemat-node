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
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box2').on("change", function () {
        var sel = $('#box2').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box4').on("change", function () {
        var sel = $('#box4').val();
        if (sel.indexOf("Other") > -1) {

            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
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

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if ($.inArray('organs', sel) > -1) {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        var filt = sel.filter(function (el) {
            return el.indexOf('Uninvolved by invasive') > -1;
        });
        if (filt.length > -1) {
            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf("Not") < 0) {

            $('#box9_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        if (sel.indexOf("Present") > -1) {

            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $("#box17").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box16").on("change", function () {
        var sel = $("#box16").val();
        if (sel == "pM1c") {
            $("#box16_2").show();
        } else {
            $("#box16_2").hide();
        }
    });

    $('#box20').on("change", function () {
        var sel = $('#box20').val();
        if ($.inArray('Present', sel) > -1) {
            $('#box20_2').show();
        } else {
            $('#box20_2').hide();
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


        var captext = "Appendix Carcinomas Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.length > 0) {
            if ($.inArray('Other', box_2) > -1) {
                captext += "\n+ Tumor Site:\n- " + box_2.join('\n- ').replace(/Other/, box_2_2) + "\n";
            } else {
                captext += "\n+ Tumor Site:\n- " + box_2.join('\n- ') + "\n";
            }
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_4_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Grade:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Grade:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('organs', box_6) > -1) {
            captext += "\nTumor Extension:\n- " + box_6.join('\n- ').replace(/organs/, "organs: " + box_6_2) + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_6.join('\n- ') + "\n";
        }

        captext += "\nMargins:";
        var box_7 = $("#box7").val();
        captext += "\nProximal Margin:\n- " + box_7.join('\n- ') + "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if ($.inArray("Not applicable", box_8) == -1) {
            if ($.inArray('Uninvolved by invasive carcinoma', box_8) > -1) {
                captext += "\nMesenteric Margin:\n- " + box_8.join('\n- ')+ "\n- Distance of carcinoma to this margin: "+ box_8_2 + "mm\n";
            } else {
                captext += "\n Mesenteric Margin:\n- " + box_8.join('\n- ') + "\n";
            }
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9.indexOf('Not') < 0) {
            captext += "\t- " + box_9_2 + ": " + box_9 + "\n";
        }var box_10 = $("#box10").val();
        captext += "\nLymphovascular Invasion:\n- " + box_10 + "\n";

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_11.indexOf("Present") > -1) {
            captext += "\nTumor Deposits:\n- Present: " + box_11_2 + " tumor deposits\n";
        } else {
            captext += "\nTumor Deposits:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        if (box_12.length > 0) {
            captext += "\n+ Perineural Invasion:\n- " + box_12 + "\n";
        }

        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_13 != "Not applicable") {
            if (box_16 == "pMx1c") {
                captext += box_13.join("") + " " + box_14 + " " + box_15 + " " + box_16 + " (metastatic site(s): " + box_16_2 + ")\n";
            } else {
                captext += box_13.join("") + " " + box_14 + " " + box_15 + " " + box_16 + "\n";
            }
        } else {
            if (box_16 == "pM1c") {
                captext += box_14 + " " + box_15 + " " + box_16 + " (metastatic site(s): " + box_16_2 + ")\n";
            } else {
                captext += box_14 + " " + box_15 + " " + box_16 + "\n";
            }
        }
        if ($("#box17").is(':checked')) {
            var box_18 = $("#box18").val();
            var box_19 = $("#box19").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_18 + "\n\tLymph nodes involved: " + box_19 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        if (box_20.length > 0) {
            if ($.inArray('Present', box_20) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join('\n- ').replace(/Present/, box_20_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join('\n- ') + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});