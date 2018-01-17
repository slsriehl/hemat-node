"use strict";

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

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
        if (sel == "Sacrococcygeal") {
            $(".sacro").show();
        } else {
            $(".sacro").hide();
        }
    });

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        if (sel.indexOf('additional malignant somatic component') > -1) {
            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
        if (sel.indexOf('Mixed germ cell tumor') > -1) {
            $('#box5_3').show();
        } else {
            $('#box5_3').hide();
        }
        if (sel.indexOf("Immature") > -1){
            $(".it").show();
        } else {
            $(".it").hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("Grade 3") > -1) {

            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box9_1').show();
            $('#box9_2').show();
        } else {
            $('#box9_1').hide();
            $('#box9_2').hide();
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
        if (sel != "pMx") {
            $("#box15_2").show();
        } else {
            $("#box15_2").hide();
        }
    });

    $("#box18").on("input", function () {
        var sel = $(this).val();
        if (sel > 0) {
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


        var captext = "Extra-gonadal Germ Cell Tumor Synoptic\n(COG staging system)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nPatient Age:\n- " + box_2 + "\n";

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
        var box_5_3 = $("#box5_3").val();
        if (box_5.indexOf("additional malignant somatic component") > -1) {
            captext += "\nHistologic Type:\n- " + box_5.replace(/additional malignant somatic component/, ": " + box_5_2) + "\n";
        } else if (box_5.indexOf("Mixed germ cell tumor") > -1) {
            captext += "\nHistologic Type:\n- " + box_5 + " with: " + box_5_3 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.length > 0) {
            if (box_7.indexOf("Grade 3") > -1) {
                captext += "\n+ Histologic Grade:\n- " + box_7 + "\n- Percentage of immature elements: " + box_7_2 + "%\n";
            } else {
                captext += "\n+ Histologic Grade:\n- " + box_7 + "\n";
            }
        }

        var box_8 = $("#box8").val();
        if (box_8.indexOf("Not") < 0) {
            captext += "\nMicroscopic Tumor Extension:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_9 + "\n- Nearest margin: " + box_9_1 + "\n- Distance to this margin: " + box_9_2.replace(/mm/, "") + "mm\n";
        } else {
            captext += "\nMargins:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        if (box_10.length > 0) {
            captext += "\n+ Lymph-Vascular Invasion:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        if (box_11.length > 0) {
            captext += "\n+ Perineural Invasion:\n- " + box_11 + "\n";
        }

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        if (box_15 != "Not applicable") {
            captext += '\nDistant Metastasis: ';
            if (box_15 == "Present") {
                captext += "\n- " + box_15 + "\n- Metastatic site(s): " + box_15_2 + "\n";
            } else {
                captext += "\n- " + box_15 + "\n";
            }
        }
        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_17 + "\n\tLymph nodes involved: " + box_18 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_19 = $("#box19").val();
        captext += "\nSpecify nodes involved:\n- " + box_19 + "\n";

        var box_20 = $("#box20").val();
        captext += "\nPathologic Staging:\n- " + box_20 + "\n";

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});