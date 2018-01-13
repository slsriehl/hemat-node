"use strict";

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    // populate pT and pN select boxes
    var jsonData = {
        "Carcinoma": {
            "pTx": "pTx: Primary tumor cannot be assessed",
            "pTis": "pTis: Carcinoma in situ",
            "pT1": "pT1: Tumor ≤2 cm, ≤5 mm depth of invasion",
            "pT2": "pT2: Tumor ≤2 cm, depth of invasion >5 mm and ≤10 mm ",
            "pT2 ": "pT2: Tumor >2 cm but ≤4 cm, and depth of invasion ≤10 mm ",
            "pT3": "pT3: Tumor >4 cm  or any tumor with depth of invasion >10 mm",
            "pT4a": "pT4a: Moderately advanced local disease",
            "pT4b": "pT4b: Very advanced local disease"
        },
        "Not specified": {
            "pTx": "Cannot be determined"
        },
        "Carcinoma-node": {
            "pNx": "pNx: Regional lymph nodes cannot be assessed",
            "pN0": "pN0: No regional lymph node metastasis",
            "pN1": "pN1: Metastasis in a single ipsilateral lymph node, ENE(−), 3 cm or smaller in greatest dimension",
            "pN2a": "pN2a: Metastasis in single ipsilateral node 3 cm or smaller in greatest dimension and ENE(+)",
            "pN2a ": "pN2a: Metastasis in a single ipsilateral node larger than 3 cm but not larger than 6 cm in greatest dimension and ENE(−)",
            "pN2b": "pN2b: Metastasis in multiple ipsilateral nodes, none larger than 6 cm in greatest dimension and ENE(−)",
            "pN2c": "pN2c: Metastasis in bilateral or contralateral lymph node(s), none larger than 6 cm in greatest dimension and ENE(−)",
            "pN3a": "pN3a: Metastasis in a lymph node larger than 6 cm in greatest dimension and ENE(−)",
            "pN3b": "pN3b: Metastasis in a single ipsilateral node larger than 3 cm in greatest dimension and ENE(+)",
            "pN3b ": "pN3b: Metastasis in multiple ipsilateral, contralateral or bilateral nodes any with ENE(+)",
            "pN3b  ": "pN3b: Metastasis in a single contralateral node 3 cm or smaller and ENE(+)"
        },
        "Melanoma": {
            "pT3": "pT3: Tumors limited to the mucosa and immediately underlying soft tissue, regardless of thickness or greatest dimension",
            "pT4a": "pT4a: Moderately advanced disease. Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            "pT4b": "pT4b: Very advanced disease. Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures"
        },
        "Melanoma-node": {
            "pNx": "pNx: Regional lymph nodes cannot be assessed",
            "pN0": "pN0: No regional lymph node metastase",
            "pN1": "pN1: Regional lymph node metastases present"
        }
    };

    // set initial values not tied to selection
    $('#box19').find('option').remove();
    $.each(jsonData["Carcinoma"], function (val, text) {
        $('#box19').append($('<option></option>').val(val).html(text));
    });
    $('#box20').find('option').remove();
    $.each(jsonData["Carcinoma-node"], function (val, text) {
        $('#box20').append($('<option></option>').val(val).html(text));
    });

    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $('#box1').on("change", function () {
        var sel = $('#box1').val();
        var filt = sel.filter(function (el) {
            return el.indexOf('specify') > -1;
        });
        if (filt.length > 0) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box2').on("change", function () {
        var sel = $('#box2').val();
        if (sel.indexOf("specify") > -1) {

            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf('Other') > -1) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
        if (sel.indexOf('Combined') > -1) {
            $('#box7_3').show();
        } else {
            $('#box7_3').hide();
        }
        if (sel.indexOf('melanoma') > -1) {
            $('#box19').find('option').remove();
            $.each(jsonData["Melanoma"], function (val, text) {
                $('#box19').append($('<option></option>').val(val).html(text));
            });
            $('#box20').find('option').remove();
            $.each(jsonData["Melanoma-node"], function (val, text) {
                $('#box20').append($('<option></option>').val(val).html(text));
            });
        } else {
            $('#box19').find('option').remove();
            $.each(jsonData["Carcinoma"], function (val, text) {
                $('#box19').append($('<option></option>').val(val).html(text));
            });
            $('#box20').find('option').remove();
            $.each(jsonData["Carcinoma-node"], function (val, text) {
                $('#box20').append($('<option></option>').val(val).html(text));
            });
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if (sel.indexOf("Other") > -1) {

            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
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
            $('#box11_1').show();
            $('#box11_2').show();
        } else {
            $('#box11_1').hide();
            $('#box11_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box11_3').show();
        } else {
            $('#box11_3').hide();
        }
    });

    $('#box12').on("change", function () {
        var sel = $(this).val();
        if (sel.indexOf("Not") < 0) {
            $('.tumorbed').show();
        } else {
            $('.tumorbed').hide();
        }
    });

    $('#box13').on("change", function () {
        var sela = $('#box13').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box13_2').show();
        } else {
            $('#box13_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box13_3').show();
        } else {
            $('#box13_3').hide();
        }
    });

    $('#box14').on("change", function () {
        var sela = $('#box14').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box14_2').show();
        } else {
            $('#box14_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box14_3').show();
        } else {
            $('#box14_3').hide();
        }
    });

    $('#box17').on("change", function () {
        var sel = $('#box17').val();
        if (sel.indexOf("Present") > -1) {

            $('#box17_2').show();
        } else {
            $('#box17_2').hide();
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
        if (sel != "pMx") {
            $("#box21_2").show();
        } else {
            $("#box21_2").hide();
        }
    });

    $("#box24").on("input", function () {
        var sel = $(this).val();
        if (sel > 0) {
            $('.posnodes').show();
        } else {
            $('.posnodes').hide();
        }
    });
    $('#box28').on("change", function () {
        var sela = $('#box28').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('type') > -1;
        });
        if (trig1.length > 0) {
            $('#box28_2').show();
        } else {
            $('#box28_2').hide();
        }
        if (trig2.length > 0) {
            $('#box28_3').show();
        } else {
            $('#box28_3').hide();
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


        var captext = "Lip and Oral cavity Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var filt = box_1.filter(function (el) {
            return el.indexOf('specify') > -1;
        });
        var oth = box_1.filter(function (el) {
            return el.indexOf('Other') > -1;
        });

        if (oth.length > 0) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else if (filt.length > 0) {
            captext += "\nProcedure:\n- " + box_1_2 + ", including: \n\t- " + box_1.join('\n\t- ').replace(/, specify/g, '') + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join('\n- ') + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Laterality:\n- " + box_3.join('\n- ') + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Focality:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Size:\n- " + box_5.replace(/cm/, '') + "cm\n";

        var box_6 = $("#box6").val();
        captext += "\nTumor Depth of Invasion:\n- " + box_6.replace(/mm/, '') + "mm\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_7_2 + "\n";
        } else if (box_7.indexOf("Combined") > -1) {
            captext += "\nHistologic Type:\n- " + box_7.replace(/carcinoma/, "carcinoma with: " + box_7_3) + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8 != "Not applicable") {
            if (box_8.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- " + box_8_2 + "\n";
            } else {
                captext += "\nHistologic Grade:\n- " + box_8 + "\n";
            }
        }

        var box_9 = $("#box9").val();
        if (box_9.indexOf("Not") < 0) {
            captext += "\n+ Tumor Extension:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Invasive tumor:\n\t- " + box_10 + "\n\t- Nearest margin: " + box_10_1 + "\n\t- Distance of invasive carcinoma to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else if (box_10.indexOf("Involved") > -1) {
            captext += "\nMargins - Invasive tumor:\n\t- " + box_10 + "\n\t- Margin involved: " + box_10_3 + "\n";
        } else {
            captext += "\nMargins - Invasive tumor:\n\t- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_11_1 = $("#box11_1").val();
        var box_11_2 = $("#box11_2").val();
        var box_11_3 = $("#box11_3").val();
        if (box_11.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - In-situ tumor:\n\t- " + box_11 + "\n\t- Nearest margin: " + box_11_1 + "\n\t- Distance of in-situ disease to this margin: " + box_11_2.replace(/mm/, "") + "mm\n";
        } else if (box_11.indexOf("Involved") > -1) {
            captext += "\nMargins - In-situ tumor:\n\t- " + box_11 + "\n\t- Margin involved: " + box_11_3 + "\n";
        } else {
            captext += "\nMargins - In-situ tumor:\n\t- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        if (box_12 != "Not applicable") {
            captext += "\nMargins - Separately Submitted Tumor Bed, Orientation:\n- " + box_12 + "\n";

            var box_13 = $("#box13").val();
            var box_13_2 = $("#box13_2").val();
            var box_13_3 = $("#box13_3").val();
            if (box_13.indexOf("Uninvolved") > -1) {
                captext += "\nMargins - Separately Submitted Tumor Bed, Invasive:\n\t- " + box_13 + "\n\t- Distance of invasive carcinoma to this margin: " + box_13_2.replace(/mm/, "") + "mm\n";
            } else if (box_13.indexOf("Involved") > -1) {
                captext += "\nMargins - Separately Submitted Tumor Bed, Invasive:\n\t- " + box_13 + "\n\t- Margin involved: " + box_13_3 + "\n";
            } else {
                captext += "\nMargins - Separately Submitted Tumor Bed, Invasive:\n\t- " + box_13 + "\n";
            }

            var box_14 = $("#box14").val();
            var box_14_2 = $("#box14_2").val();
            var box_14_3 = $("#box14_3").val();
            if (box_14.indexOf("Uninvolved") > -1) {
                captext += "\nMargins - Separately Submitted Tumor Bed, In-Situ:\n\t- " + box_14 + "\n\t- Distance of in-situ disease to this margin: " + box_14_2.replace(/mm/, "") + "mm\n";
            } else if (box_14.indexOf("Involved") > -1) {
                captext += "\nMargins - Separately Submitted Tumor Bed, In-Situ:\n\t- " + box_14 + "\n\t- Margin involved: " + box_14_3 + "\n";
            } else {
                captext += "\nMargins - Separately Submitted Tumor Bed, In-Situ:\n\t- " + box_14 + "\n";
            }
        }

        var box_16 = $("#box16").val();
        captext += "\nLymphovascular Invasion:\n- " + box_16 + "\n";

        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        if (box_17.indexOf("Present") > -1) {
            captext += "\nPerineural Invasion:\n- Present, extent: " + box_17_2 + "\n";
        } else {
            captext += "\nPerineural Invasion:\n- " + box_17 + "\n";
        }

        var box_18 = $("#box18").val();
        var box_19 = $("#box19").val();
        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_18 != "Not applicable") {
            if (box_21 != "pMx") {
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
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_23 + "\n\tLymph nodes involved: " + box_24 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_25 = $("#box25").val();
        captext += "\nLaterality of Lymph Nodes Involved:\n- " + box_25 + "\n";

        var box_x26 = $("#boxx26").val();
        captext += "\nSize of Largest Metastatic Deposit:\n- " + box_x26.replace(/cm/, '') + "cm\n";

        var box_27 = $("#box27").val();
        captext += "\nExtranodal Extension:\n- " + box_27 + "\n";

        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        var box_28_3 = $("#box28_3").val();
        var trig1_box_28 = box_28.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        var trig2_box_28 = box_28.filter(function (el) {
            return el.indexOf("type") > -1;
        });
        if (trig1_box_28.length > 0 && trig2_box_28.length == 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_28.join("\n- ").replace(/Other/, box_28_2) + "\n";
        } else if (trig1_box_28.length == 0 && trig2_box_28.length > 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_28.join("\n- ").replace(/type/, "type: " + box_28_3) + "\n";
        } else if (trig1_box_28.length > 0 && trig2_box_28.length > 0) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_28.join("\n- ").replace(/Other/, box_28_2).replace(/type/, "type: " + box_28_3) + "\n";
        } else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_28.join("\n- ") + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/25/2017.
 */