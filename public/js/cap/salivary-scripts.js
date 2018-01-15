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
            return el.indexOf('Other') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('dissection') > -1;
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
    });$('#box2').on("change", function () {
        var sel = $('#box2').val();
        if (sel.indexOf("Other") > -1) {

            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf("Other") > -1) {

            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
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

    $("#box17").on("input", function () {
        var sel = $(this).val();
        if (sel > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $('#box21').on("change", function () {
        var sel = $('#box21').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box21_2').show();
        } else {
            $('#box21_2').hide();
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

        var captext = "Salivary Gland Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        var trig1_box_1 = box_1.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        var trig2_box_1 = box_1.filter(function (el) {
            return el.indexOf("dissection") > -1;
        });
        if (trig1_box_1.length > 0 && trig2_box_1.length == 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/Other/, box_1_2) + "\n";
        } else if (trig1_box_1.length == 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/dissection/, "dissection: " + box_1_3) + "\n";
        } else if (trig1_box_1.length > 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/Other/, box_1_2).replace(/dissection/, "dissection: " + box_1_3) + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join("\n- ") + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Laterality:\n- " + box_3 + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Focality:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Size:\n- " + box_5.replace(/cm/, '') + "cm\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        captext += "\nTumor Extension:\n- " + box_7 + "\n";

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_8 + "\n- Nearest margin: " + box_8_1 + "\n- Distance to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
        } else if (box_8.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- " + box_8 + "\n- Margin involved: " + box_8_3 + "\n";
        } else {
            captext += "\nMargins:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        captext += "\nLymphovascular Invasion:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        captext += "\nPerineural Invasion:\n- " + box_10 + "\n";

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

            if (box_17 > 0) {
                var box_18 = $("#box18").val();
                captext += "\n\tLaterality of Lymph Nodes Involved: " + box_18 + "\n";

                var box_19 = $("#box19").val();
                captext += "\n\tSize of Largest Metastatic Deposit: " + box_19.replace(/cm/, '') + "cm\n";

                var box_20 = $("#box20").val();
                captext += "\n\tExtranodal Extension: " + box_20 + "\n";
            }
        }

        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        if (box_21.length > 0) {
            if ($.inArray('Other', box_21) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_21.join('\n- ').replace(/Other/, box_21_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_21.join('\n- ') + "\n";
            }

        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});