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

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved by invasive') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved by invasive') > -1;
        });
        if (neg.length > 0) {
            $('#box8_1').show();
            $('#box8_2').show();
        } else {
            $('#box8_1').hide();
            $('#box8_2').hide();
        }
        if (pos.length > 0) {
            $('#box8_3').show();
        } else {
            $('#box8_3').hide();
        }
    });

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved by invasive') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved by invasive') > -1;
        });
        if (neg.length > 0) {
            $('#box9_1').show();
            $('#box9_2').show();
        } else {
            $('#box9_1').hide();
            $('#box9_2').hide();
        }
        if (pos.length > 0) {
            $('#box9_3').show();
        } else {
            $('#box9_3').hide();
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

    $('#box12').on("change", function () {
        var sel = $('#box12').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box12_2').show();
        } else {
            $('#box12_2').hide();
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


        var captext = "Cervical (LEEP/Excision) Cancer Synoptic\n(requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nTumor Size: " + box_2.replace(/cm/, '') + "cm\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3 == 'Other') {
            captext += "\nHistologic Type:\n- " + box_3_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_3 + "\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nHistologic Grade:\n- " + box_4 + "\n";

        captext += "\nStromal invasion:";
        var box_5 = $("#box5").val();
        captext += "\nDepth of stromal invasion (mm): " + box_5.replace(/mm/g, '') + "mm\n";

        var box_6 = $("#box6").val();
        if (box_6.length > 0) {
            captext += "Horizontal extent longitudinal/length: " + box_6.replace(/mm/g, '') + "mm\n";
        }

        var box_7 = $("#box7").val();
        if (box_7.length > 0) {
            captext += "Horizontal extent circumferential/width: " + box_7.replace(/mm/g, '') + "mm\n";
        }

        captext += "\nMargins:\n";
        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        var negbox_8 = box_8.filter(function (el) {
            return el.indexOf('Uninvolved by invasive') > -1;
        });
        var posbox_8 = box_8.filter(function (el) {
            return el.indexOf('Involved by invasive') > -1;
        });
        if (negbox_8.length > 0) {
            captext += "Endocervical:\n- " + box_8.join("\n- ") + "\n- Nearest margin: " + box_8_1 + "\n- Distance to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
        } else if (posbox_8.length > 0) {
            captext += "Endocervical:\n- " + box_8.join("\n- ") + "\n- Margin involved: " + box_8_3 + "\n";
        } else {
            captext += "Endocervical:\n- " + box_8.join("\n- ") + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        var negbox_9 = box_9.filter(function (el) {
            return el.indexOf('Uninvolved by invasive') > -1;
        });
        var posbox_9 = box_9.filter(function (el) {
            return el.indexOf('Involved by invasive') > -1;
        });
        if (negbox_9.length > 0) {
            captext += "\nEctocervical:\n- " + box_9.join("\n- ") + "\n- Nearest margin: " + box_9_1 + "\n- Distance to this margin: " + box_9_2.replace(/mm/, "") + "mm\n";
        } else if (posbox_9.length > 0) {
            captext += "\nEctocervical:\n- " + box_9.join("\n- ") + "\n- Margin involved: " + box_9_3 + "\n";
        } else {
            captext += "\nEctocervical:\n- " + box_9.join("\n- ") + "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\n Deep:\n- Margins uninvolved by tumor\n- Nearest margin: " + box_10_1 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else if (box_10.indexOf("Involved") > -1) {
            captext += "\nDeep:\n- Margins involved by tumor\n- Margin involved: " + box_10_3 + "\n";
        } else {
            captext += "\nDeep:\n- " + box_10 + "\n";
        }

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if (box_12.length > 0) {
            if ($.inArray('Other', box_12) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join('\n- ').replace(/Other/, box_12_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_12.join('\n- ') + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});