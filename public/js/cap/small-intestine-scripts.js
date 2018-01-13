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
        if (sel.indexOf('resection') > -1) {
            $('.segmental').show();
            $('.whipple').hide();
        } else if (sel.indexOf('Whipple') > -1) {
            $('.segmental').hide();
            $('.whipple').show();
        } else if (sel.indexOf("Other") > -1) {
            $('#box1_2').show();
            $('.segmental').hide();
            $('.whipple').hide();
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

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("other") > -1) {

            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if (sel.indexOf("neoplasia") > -1) {
            $(".margins").show();
        } else {
            $(".margins").hide();
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

    $('#box17').on("change", function () {
        var sela = $('#box17').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('polyps') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('findings') > -1;
        });
        if (trig1.length > 0) {
            $('#box17_2').show();
        } else {
            $('#box17_2').hide();
        }
        if (trig2.length > 0) {
            $('#box17_3').show();
        } else {
            $('#box17_3').hide();
        }
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


        var captext = "Small Intestine Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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

        var box_3 = $("#box3").val();
        captext += "\nTumor Size (cm):\n- " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        captext += "\nMacroscopic Tumor Perforation:\n- " + box_4 + "\n";

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
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("other") > -1) {
            captext += "\nTumor Extension:\nStructures invaded: " + box_7_2 + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        if (box_8.indexOf('uninvolved') < 0) {
            captext += "\nMargin Status:";
            // default margins
            var box_8_2 = $("#box8_2").val();
            captext += "- Proximal Margin:  " + box_8_2 + "\n";

            var box_8_3 = $("#box8_3").val();
            captext += "- Distal Margin:  " + box_8_3 + "\n";

            // segmental resection margins
            if (box_1.indexOf('resection') > -1) {
                var box_8_4 = $("#box8_4").val();
                captext += "- Radial Margin:  " + box_8_4 + "\n";
            }

            // whipple margins
            if (box_1.indexOf('Whipple') > -1) {
                var box_8_5 = $("#box8_5").val();
                captext += "- Uncinate Margin:  " + box_8_5 + "\n";

                var box_8_6 = $("#box8_6").val();
                captext += "- Bile Duct Margin:  " + box_8_6 + "\n";

                var box_8_7 = $("#box8_7").val();
                captext += "- Pancreatic Margin:  " + box_8_7 + "\n";
            }

            // any other margins
            if (box_8_8 != 'Not applicable') {
                var box_8_8 = $("#box8_8").val();
                var box_8_8_2 = $("#box8_8_2").val();
                captext += "- " + box_8_8_2 + "Margin: " + box_8_8 + "\n";
            }
        } else {
            captext += "\nMargins:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        captext += "\nLymphovascular Invasion:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable") {
            if (box_13 != "pMx") {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        } else {
            if (box_13 != "pMx") {
                captext += box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        }
        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_15 + "\n\tLymph nodes involved: " + box_16 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        var box_17_3 = $("#box17_3").val();
        var trig1_box_17 = box_17.filter(function (el) {
            return el.indexOf("polyps") > -1;
        });
        var trig2_box_17 = box_17.filter(function (el) {
            return el.indexOf("findings") > -1;
        });
        if (trig1_box_17.length > 0 && trig2_box_17.length == 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_17.join("\n- ").replace(/polyps/, "polyps: " + box_17_2) + "\n";
        } else if (trig1_box_17.length == 0 && trig2_box_17.length > 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_17.join("\n- ").replace(/findings/, "findings: " + box_17_3) + "\n";
        } else if (trig1_box_17.length > 0 && trig2_box_17.length > 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_17.join("\n- ").replace(/polyps/, "polyps: " + box_17_2).replace(/findings/, "findings: " + box_17_3) + "\n";
        } else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_17.join("\n- ") + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/9/2017.
 */