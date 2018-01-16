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
        if (sel.indexOf('Enucleation') > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (sel.indexOf('Other') > -1) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }
    });

    $('#box3').on("change", function () {
        var sela = $('#box3').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Between') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
        if (trig2.length > 0) {
            $('#box3_3').show();
        } else {
            $('#box3_3').hide();
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

    $('#box13').on("change", function () {
        var sel = $('#box13').val();
        var trig1 = sel.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box13_2').show();
        } else {
            $('#box13_2').hide();
        }
    });

    $("#box18").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box17").on("change", function () {
        var sel = $("#box17").val();
        if (sel != "pMx") {
            $("#box17_2").show();
        } else {
            $("#box17_2").hide();
        }
    });

    $('#box21').on("change", function () {
        var sela = $('#box21').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Mitotic') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box21_2').show();
        } else {
            $('#box21_2').hide();
        }
        if (trig2.length > 0) {
            $('#box21_3').show();
        } else {
            $('#box21_3').hide();
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

        var captext = "Retinoblastoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1.indexOf("Enucleation") > -1) {
            captext += "\nProcedure:\n- " + box_1 + ", optic nerve length: " + box_1_2.replace(/mm/, '') + "mm\n";
        } else if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1 + "\n- " + box_1_3 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        var box_3_3 = $("#box3_3").val();
        var trig1_box_3 = box_3.filter(function (el) {
            return el.indexOf("Between") > -1;
        });
        var trig2_box_3 = box_3.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1_box_3.length > 0 && trig2_box_3.length == 0) {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ").replace(/Between -- and -- o’clock/, "Between" + box_3_2 + " o'clock") + "\n";
        } else if (trig1_box_3.length == 0 && trig2_box_3.length > 0) {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ").replace(/Other/, box_3_3) + "\n";
        } else if (trig1_box_3.length > 0 && trig2_box_3.length > 0) {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ").replace(/Between -- and -- o’clock/, "Between " + box_3_2 + " o'clock").replace(/Other/, box_3_3) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_3.join("\n- ") + "\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nTumor size - Greatest basal diameter:\n- " + box_4.replace(/mm/, '') + "mm\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor size - Greatest thickness:\n- " + box_5.replace(/mm/, '') + "mm\n";

        var box_6 = $("#box6").val();
        captext += "\nTumor Site After Sectioning:\n- " + box_6 + "\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if ($.inArray('Other', box_7) > -1) {
            captext += "\nTumor Involvement of Other Ocular Structures:\n- " + box_7.join('\n- ').replace(/Other/, box_7_2) + "\n";
        } else {
            captext += "\nTumor Involvement of Other Ocular Structures:\n- " + box_7.join('\n- ') + "\n";
        }

        var box_8 = $("#box8").val();
        captext += "\nGrowth Pattern:\n- " + box_8 + "\n";

        var box_9 = $("#box9").val();
        captext += "\nExtent of Optic Nerve Invasion:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        captext += "\nHistologic Grade:\n- " + box_10 + "\n";

        var box_11 = $("#box11").val();
        if (box_11.length > 0) {
            captext += "\n+ Anaplasia Grade:\n- " + box_11 + "\n";

        }

        var box_12 = $("#box12").val();
        if (box_12.length > 0) {
            captext += "\n+ Cytologic Features Suggesting MYCN Amplification:\n- " + box_12 + "\n";

        }

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        if ($.inArray('Other margin(s) involved', box_13) > -1) {
            captext += "\nMargins:\n- " + box_13.join('\n- ').replace(/Other margin\(s\) involved/, box_13_2) + "\n";
        } else {
            captext += "\nMargins:\n- " + box_13.join('\n- ') + "\n";
        }

        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_14 != "Not applicable") {
            if (box_17 != "pMx") {
                captext += box_14.join("") + " " + box_15 + " " + box_16 + " " + box_17 + " (metastatic site(s): " + box_17_2 + ")\n";
            } else {
                captext += box_14.join("") + " " + box_15 + " " + box_16 + " " + box_17 + "\n";
            }
        } else {
            if (box_17 != "pMx") {
                captext += box_15 + " " + box_16 + " " + box_17 + " (metastatic site(s): " + box_17_2 + ")\n";
            } else {
                captext += box_15 + " " + box_16 + " " + box_17 + "\n";
            }
        }
        if ($("#box18").is(':checked')) {
            var box_19 = $("#box19").val();
            var box_20 = $("#box20").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_19 + "\n\tLymph nodes involved: " + box_20 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        var box_21_3 = $("#box21_3").val();
        var trig1_box_21 = box_21.filter(function (el) {
            return el.indexOf("Mitotic") > -1;
        });
        var trig2_box_21 = box_21.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (box_21.length > 0) {
            if (trig1_box_21.length > 0 && trig2_box_21.length == 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_21.join("\n- ").replace(/rate/, "rate: " + box_21_2 + " per 10 hpf") + "\n";
            } else if (trig1_box_21.length == 0 && trig2_box_21.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_21.join("\n- ").replace(/Other/, box_21_3) + "\n";
            } else if (trig1_box_21.length > 0 && trig2_box_21.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_21.join("\n- ").replace(/rate/, "rate: " + box_21_2 + " per 10 hpf").replace(/Other/, box_21_3) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_21.join("\n- ") + "\n";
            }

        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});