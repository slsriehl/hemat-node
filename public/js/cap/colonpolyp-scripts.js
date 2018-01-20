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

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        if (sel.indexOf("Other") > -1) {

            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $('#box12').on("change", function () {
        var sela = $('#box12').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('specify') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box12_2').show();
        } else {
            $('#box12_2').hide();
        }
        if (trig2.length > 0) {
            $('#box12_3').show();
        } else {
            $('#box12_3').hide();
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



        var captext = "Colon Cancer (Polypectomy) Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        if (box_2.length  > 0){
            captext += "\n+ Specimen Integrity:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        if (box_3.length > 0) {
            captext += "\n+ Polyp Size: " + box_3.replace(/cm/, '') + "cm\n";
        }

        var box_4 = $("#box4").val();
        if (box_4.length > 0) {
            captext += "\n+ Size of Invasive Carcinoma:\n- " + box_4.replace(/cm/, '') + "cm\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Grade:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nHistologic Grade:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        captext += "\nTumor Extension:\n- " + box_7 + "\n";

        var box_13 = $("#box13").val();
        captext += '\nPathologic Staging (pTNM): ' + box_13 + " pNx pMx"+"\n";

        captext += "\nMargins:";
        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8.indexOf("Uninvolved") > -1) {
            captext += "\nDeep Margin:\n- " + box_8 + "\n- Distance of invasive carcinoma to this margin: " + box_8_2 + "mm\n";
        } else {
            captext += "\nDeep Margin:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        if (box_9 != "Not applicable") {
            captext += "\nMucosal Margin:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        captext += "\nLymphovascular Invasion:\n- " + box_10 + "\n";

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_11.length  > 0){
            if (box_11.indexOf("Other") > -1) {
                captext += "\n+ Type of Polyp in Which Invasive Carcinoma Arose:\n- " + box_11_2 + "\n";
            } else {
                captext += "\n+ Type of Polyp in Which Invasive Carcinoma Arose:\n- " + box_11 + "\n";
            }
        }

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        var box_12_3 = $("#box12_3").val();
        var trig1_box_12 = box_12.filter(function (el) {
            return el.indexOf("specify") > -1;
        });
        var trig2_box_12 = box_12.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (box_12.length  > 0){
            if (trig1_box_12.length > 0 && trig2_box_12.length == 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join("\n- ").replace(/, specify/, ": " + box_12_2) + "\n";
            } else if (trig1_box_12.length == 0 && trig2_box_12.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join("\n- ").replace(/Other/, box_12_3) + "\n";
            } else if (trig1_box_12.length > 0 && trig2_box_12.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join("\n- ").replace(/, specify/, ": " + box_12_2).replace(/Other/, box_12_3) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join("\n- ") + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});