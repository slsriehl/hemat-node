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
        if ($.inArray('Other', sel) > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box1').on("change", function () {
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
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
        if (sel.indexOf("Other") > -1) {

            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });
    $('#box10').on("change", function () {
        var sela = $('#box10').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Mixed') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box10_2').show();
        } else {
            $('#box10_2').hide();
        }
        if (trig2.length > 0) {
            $('#box10_3').show();
        } else {
            $('#box10_3').hide();
        }

    });

    $('#box13').on("change", function () {
        var sel = $('#box13').val();
        if (sel.indexOf("Present") > -1) {

            $('#box13_2').show();
        } else {
            $('#box13_2').hide();
        }
    });

    $('#box14').on("change", function () {
        var sel = $('#box14').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box14_2').show();
        } else {
            $('#box14_2').hide();
        }
    });

    $('#box15').on("change", function () {
        var sel = $('#box15').val();
        if (sel.indexOf("Not") > -1) {

            $('#box15_2').show();
        } else {
            $('#box15_2').hide();
        }
    });

    $("#box22").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box21").on("change", function () {
        var sel = $("#box21").val();
        if (sel == "pM1b") {
            $("#box21_2").show();
        } else {
            $("#box21_2").hide();
        }
    });

    $(".node").on("input", function () {
		setTimeout(300);
        var sel_1 = parseInt($("#box24").val()) || 0;
        var sel_2 = parseInt($("#box25").val()) || 0;
        var sel_3 = parseInt($("#box26").val()) || 0;
        var tot = sel_1 + sel_2 + sel_3;
        console.log("total pos nodes:"+tot);
        if (tot > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
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


        var captext = "Ovarian/Fallopian Tube/Primary Peritoneum Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other', box_1) > -1) {
            captext += "\nProcedure:\n- " + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join('\n- ') + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 != "Not applicable") {
            if (box_2.indexOf("Other") > -1) {
                captext += "\nIntegrity of Right Ovary:\n- " + box_2_2 + "\n";
            } else {
                captext += "\nIntegrity of Right Ovary:\n- " + box_2 + "\n";
            }
        }

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3 != "Not applicable") {
            if (box_3.indexOf("Other") > -1) {
                captext += "\nIntegrity of Left Ovary:\n- " + box_3_2 + "\n";
            } else {
                captext += "\nIntegrity of Left Ovary:\n- " + box_3 + "\n";
            }
        }

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4 != "Not applicable") {
            if (box_4.indexOf("Other") > -1) {
                captext += "\nIntegrity of Right Fallopian Tube:\n- " + box_4_2 + "\n";
            } else {
                captext += "\nIntegrity of Right Fallopian Tube:\n- " + box_4 + "\n";
            }
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 != "Not applicable") {
            if (box_5.indexOf("Other") > -1) {
                captext += "\nIntegrity of Left Fallopian Tube:\n- " + box_5_2 + "\n";
            } else {
                captext += "\nIntegrity of Left Fallopian Tube:\n- " + box_5 + "\n";
            }
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        if (box_7 != "Not applicable") {
            captext += "\nOvarian Surface Involvement:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        if (box_8 != "Not applicable") {
            captext += "\nFallopian Tube Surface Involvement:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        captext += "\nTumor Size: " + box_9.replace(/cm/, '') + "cm\n";

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        var trig1_box_10 = box_10.filter(function (el) {
            return el.indexOf("Mixed") > -1;
        });
        var trig2_box_10 = box_10.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1_box_10.length > 0 && trig2_box_10.length == 0) {
            captext += "\nHistologic Type:\n- " + box_10.join("\n- ").replace(/\(s.*\)/, ": " + box_10_2) + "\n";
        } else if (trig1_box_10.length == 0 && trig2_box_10.length > 0) {
            captext += "\nHistologic Type:\n- " + box_10.join("\n- ").replace(/\(s.*\)/, ": " + box_10_3) + "\n";
        } else if (trig1_box_10.length > 0 && trig2_box_10.length > 0) {
            captext += "\nHistologic Type:\n- " + box_10.join("\n- ").replace(/\(s.*\)/, ": " + box_10_2).replace(/\(s.*\)/, ": " + box_10_3) + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_10.join("\n- ") + "\n";
        }

        var box_11 = $("#box11").val();
        if (box_11 != "Not applicable") {
            captext += "\nWHO Grading System:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        if (box_12 != "Not applicable") {
            captext += "\nTwo-Tier Grading System:\n- " + box_12 + "\n";
        }

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        if (box_13 != "Not applicable") {
            if (box_13.indexOf("Present") > -1) {
                captext += "\nImplants:\n- Present, sites: " + box_13_2 + "\n";
            } else {
                captext += "\nImplants:\n- " + box_13 + "\n";
            }
        }

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if ($.inArray('Other', box_14) > -1) {
            captext += "\nOther Tissue/ Organ Involvement:\n- " + box_14.join('\n- ').replace(/Other/, box_14_2) + "\n";
        } else {
            captext += "\nOther Tissue/ Organ Involvement:\n- " + box_14.join('\n- ') + "\n";
        }

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        if (box_15 != "Not applicable") {
            captext += "\nLargest Extrapelvic Peritoneal Focus:\n- " + box_15 + ": " + box_15_2 + "\n";
        }

        var box_16 = $("#box16").val();
        captext += "\nPeritoneal/Ascitic Fluid:\n- " + box_16 + "\n";

        var box_17 = $("#box17").val();
        if (box_17 != "Not applicable") {
            captext += "\nTreatment Effect:\n- " + box_17 + "\n";
        }

        var box_18 = $("#box18").val();
        var box_19 = $("#box19").val();
        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_18 != "Not applicable") {
            if (box_21 == "pM1b") {
                captext += box_18.join("") + " " + box_19 + " " + box_20 + " " + box_21 + " (metastatic site(s): " + box_21_2 + ")\n";
            } else {
                captext += box_18.join("") + " " + box_19 + " " + box_20 + " " + box_21 + "\n";
            }
        } else {
            if (box_21 != "pMx") {
                captext += box_19 + " " + box_20 + " " + box_21 + " (metastatic site(s): " + box_21_2 + ")\n";
            } else {
                captext += box_19 + " " + box_20 + " " + box_21 + "\n";
            }
        }
        if ($("#box22").is(':checked')) {
            var box_23 = $("#box23").val();
            var box_24 = $("#box24").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_23 + "\n\tLymph nodes with metastasis > 10mm: " + box_24 + "\n";

            var box_25 = $("#box25").val();
            captext += "\tNumber of lymph nodes with metastasis <10mm: " + box_25 + "\n";

            var box_26 = $("#box26").val();
            captext += "\tNumber of Nodes with Isolated Tumor Cells: " + box_26 + "\n";

            if (box_24 > 0 || box_25 > 0 || box_26 > 0) {
                var box_27 = $("#box27").val();
                captext += "\tSize of Largest Metastatic Deposit: " + box_27.replace(/mm/, '') + "mm\n";

                var box_28 = $("#box28").val();
                captext += "\tLocation of Largest Deposit: " + box_28 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_30 = $("#box30").val();
        if (box_30.length > 0){
            captext += "\n+ FIGO Stage (2015):\n- "  + box_30+ "\n";
        }


        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});