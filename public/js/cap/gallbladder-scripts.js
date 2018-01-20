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
        if (sel.indexOf("structures") > -1) {

            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sela = $('#box7').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        if (neg.length > 0) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if (sel.indexOf("Uninvolved") > -1) {

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

    $('#box19').on("change", function () {
        var sel = $('#box19').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box19_2').show();
        } else {
            $('#box19_2').hide();
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


        var captext = "Gallbladder Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other', box_2) > -1) {
            captext += "\nTumor Site:\n- " + box_2.join(', ').replace(/Other/, box_2_2) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2.join(', ') + "\n";
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
        if (box_6.indexOf("structures") > -1) {
            captext += "\nTumor Extension:\n- " + box_6 + ": " + box_6_2 + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_6 + "\n";
        }

        captext += "\nMargins:\n";
        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var negbox_7 = box_7.filter(function (el) {
            return el.indexOf("Uninvolved") > -1;
        });
        if (negbox_7.length > 0) {
            captext += "Cystic Duct Margin:\n- " + box_7.join("\n- ") + "\n- Distance of invasive carcinoma to this margin: " + box_7_2.replace(/mm/, "") + "mm\n";
        } else {
            captext += "Cystic Duct Margin:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8 != "Not applicable") {
            if (box_8.indexOf("Uninvolved") > -1) {
                captext += "\nLiver Parenchymal Margin:\n- " + box_8 + "\n- Distance of invasive carcinoma to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
            } else {
                captext += "\nLiver Prenchymal Margin:\n- " + box_8 + "\n";
            }
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9.indexOf('Not') < 0) {
            captext += "\n"+box_9_2+" Margin:\n- " + box_9 + "\n";
        }
        var box_10 = $("#box10").val();
        if (box_10.length > 0) {
            captext += "\n+ Lymphovascular Invasion:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        if (box_11.length > 0) {
            captext += "\n+ Perineural Invasion:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12 != "Not applicable") {
            if (box_15 != "pMx") {
                captext += box_12.join("") + " " + box_13 + " " + box_14 + " " + box_15 + " (metastatic site(s): " + box_15_2 + ")\n";
            } else {
                captext += box_12.join("") + " " + box_13 + " " + box_14 + " " + box_15 + "\n";
            }
        } else {
            if (box_15 != "pMx") {
                captext += box_13 + " " + box_14 + " " + box_15 + " (metastatic site(s): " + box_15_2 + ")\n";
            } else {
                captext += box_13 + " " + box_14 + " " + box_15 + "\n";
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
        var box_19_2 = $("#box19_2").val();
        if (box_19.length > 0) {
            if ($.inArray('Other', box_19) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join('\n- ').replace(/Other/, box_19_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join('\n- ') + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/28/2017.
 */