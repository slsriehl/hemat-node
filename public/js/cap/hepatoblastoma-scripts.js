'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $('#box1').on("change", function () {
        var sel = $("#box1").val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box2').on("change", function () {
        var sel = $('#box2').val();
        if (sel.indexOf("Other") > -1) {

            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box6').on("change", function () {
        var sela = $('#box6').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('organs') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
        if (trig2.length > 0) {
            $('#box6_3').show();
        } else {
            $('#box6_3').hide();
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if (sel.indexOf("other") > -1) {

            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf("Present") > -1) {

            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
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

    $('#box11').on("change", function () {
        var sela = $('#box11').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $('#box18').on("input", function () {
        var sela = $(this).val();
        if (sela > 0) {
            $('#box19').show();
        } else {
            $('#box19').hide();
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
        if (sel.indexOf('Not') < 0) {
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

    $('#box20').on("change", function () {
        var sela = $('#box20').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Hepatitis') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box20_2').show();
        } else {
            $('#box20_2').hide();
        }
        if (trig2.length > 0) {
            $('#box20_3').show();
        } else {
            $('#box20_3').hide();
        }
    });

    $('#box22').on("change", function () {
        var sel = $('#box22').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
    });

    $('.add').on('click', function () {
        $(this).parent().next('.nod').show();
    });

    $('.remove').on('click', function () {
        $(this).closest('.nod').hide();
    });
    //************************************************************//
    // Script to populate the template data in the output textarea//
    // *************************************************************/
    $('.writeReport').on('click', function () {

        // ***************** INPUT VALIDATION ********************//
        $('select[multiple]:visible').each(function () {
            // Check if at least one selection is made
            if ($(this).val().length > 0) {
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        $('input[type="text"]:visible').each(function () {
            // Check if at least one selection is made
            if ($.trim($(this).val()).length > 0) {
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        // ***************** END VALIDATION ********************//


        var captext = "Hepatoblastoma Tumor Synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2 + "\n";
        }

        var box_3_1 = $("#box3_1").val();
        captext += "\nTumor Size:\n- Primary nodule: " + box_3_1.replace(/cm/, '') + "cm\n";

        var box_3_2 = $("#box3_2").val();
        if (box_3_2.length > 0) {
            captext += "- Nodule #2: " + box_3_2.replace(/cm/, '') + "cm\n";
        }

        var box_3_3 = $("#box3_3").val();
        if (box_3_3.length > 0) {
            captext += "- Nodule #3: " + box_3_3.replace(/cm/, '') + "cm\n";
        }

        var box_4 = $("#box4").val();
        captext += "\n+ Tumor Focality:\n- " + box_4 + "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        var trig1_box_6 = box_6.filter(function (el) {
            return el.indexOf("organs") > -1;
        });
        var trig2_box_6 = box_6.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1_box_6.length > 0 && trig2_box_6.length == 0) {
            captext += "\n+ Macroscopic Extent of Tumor:\n- " + box_6.join("\n- ").replace(/organs/, "organs: " + box_6_2) + "\n";
        } else if (trig1_box_6.length == 0 && trig2_box_6.length > 0) {
            captext += "\n+ Macroscopic Extent of Tumor:\n- " + box_6.join("\n- ").replace(/Other/, box_6_3) + "\n";
        } else if (trig1_box_6.length > 0 && trig2_box_6.length > 0) {
            captext += "\n+ Macroscopic Extent of Tumor:\n- " + box_6.join("\n- ").replace(/organs/, "organs: " + box_6_2).replace(/Other/, box_6_3) + "\n";
        } else {
            captext += "\n+ Macroscopic Extent of Tumor:\n- " + box_6.join("\n- ") + "\n";
        }

        var box_7 = $("#box7").val();
        captext += "\nPreoperative Treatment:\n- " + box_7 + "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8.indexOf("other") > -1) {
            captext += "\nHistologic Type:\n- " + box_8_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9 != "Not applicable") {
            if (box_9.indexOf("Present") > -1) {
                captext += "\n+ Treatment Effect:\n- Present: " + box_9_2 + "% tumor necrosis\n";
            } else {
                captext += "\n+ Treatment Effect:\n- " + box_9 + "\n";
            }
        }

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Resection:\n- " + box_10 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else {
            captext += "\nMargins - Resection:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_11_1 = $("#box11_1").val();
        var box_11_2 = $("#box11_2").val();
        var box_11_3 = $("#box11_3").val();
        if (box_11.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Capsular Surface:\n- " + box_11 + "\n- Nearest margin: " + box_11_1 + "\n- Distance to this margin: " + box_11_2.replace(/mm/, "") + "mm\n";
        } else if (box_11.indexOf("Involved") > -1) {
            captext += "\nMargins - Capsular Surface:\n- " + box_11 + "\n- Margin involved: " + box_11_3 + "\n";
        } else {
            captext += "\nMargins - Capsular Surface:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        captext += "\n+ Lymph-Vascular Invasion, Macroscopic:\n- " + box_12.join('\n- ') + "\n";

        var box_13 = $("#box13").val();
        captext += "\nLymph-Vascular Invasion, Microscopic:\n- " + box_13 + "\n";

        var box_14 = $("#box14").val();
        captext += "\n+ Staging (Children's Oncology Group):\n- " + box_14 + "\n";

        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        captext += '\nDistant Metastasis:\n- ';
        if (box_15.indexOf('Not') < 0) {
            captext += box_15 + " (metastatic site(s): " + box_15_2 + ")\n";
        } else {
            captext += box_15 + "\n";
        }

        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_17 + "\n\tLymph nodes involved: " + box_18 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_19 = $("#box19").val();
        captext += "\nSpecify involved nodes:\n- " + box_19 + "\n";

        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        var box_20_3 = $("#box20_3").val();
        var trig1_box_20 = box_20.filter(function (el) {
            return el.indexOf("Hepatitis") > -1;
        });
        var trig2_box_20 = box_20.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1_box_20.length > 0 && trig2_box_20.length == 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Hepatitis/, "Hepatitis: " + box_20_2) + "\n";
        } else if (trig1_box_20.length == 0 && trig2_box_20.length > 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Other/, box_20_3) + "\n";
        } else if (trig1_box_20.length > 0 && trig2_box_20.length > 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Hepatitis/, "Hepatitis: " + box_20_2).replace(/Other/, box_20_3) + "\n";
        } else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ") + "\n";
        }

        var box_21 = $("#box21").val();
        captext += "\nSerum Alpha Fetoprotein Level:\n- " + box_21 + "\n";

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if ($.inArray('Other', box_22) > -1) {
            captext += "\n+ Ancillary Studies:\n- " + box_22.join('\n- ').replace(/Other/, box_22_2) + "\n";
        } else {
            captext += "\n+ Ancillary Studies:\n- " + box_22.join('\n- ') + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/19/2017.
 */