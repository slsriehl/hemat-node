"use strict";

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    // populate pT and pN select boxes
    var jsonData = {
        "Supraglottis": {
            "pTx": "pTx: Primary tumor cannot be assessed",
            "pTis": "pTis: Carcinoma in situ",
            "pT1": "pT1: Tumor limited to one subsite of supraglottis with normal vocal cord mobility",
            "pT2": "pT2: Tumor invades mucosa of more than one adjacent subsite of supraglottis or glottis or region outside the supraglottis without fixation of the larynx",
            "pT3": "pT3: Tumor limited to larynx with vocal cord fixation and/or invades any of the following: postcricoid area, preepiglottic space, paraglottic space, and/or inner cortex of thyroid cartilage",
            "pT4a": "pT4a: Moderately advanced local disease. Tumor invades through the outer cortex of the thyroid cartilage and/or invades tissues beyond the larynx",
            "pT4b": "pT4b: Very advanced local disease. Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures"
        },
        "Glottis": {
            "pTx": "pTx: Primary tumor cannot be assessed",
            "pTis": "pTis: Carcinoma in situ",
            "pT1a": "pT1a: Tumor limited to one vocal cord",
            "pT1b": "pT1b: Tumor involves both vocal cords",
            "pT2": "pT2: Tumor extends to supraglottis and/or subglottis and/or with impaired vocal cord mobility",
            "pT3": "pT3: Tumor limited to the larynx with vocal cord fixation and/or invasion of paraglottic space and/or inner cortex of the thyroid cartilage",
            "pT4a": "pT4a: Moderately advanced local disease. Tumor invades the larynx, extrinsic muscle of tongue, medial pterygoid, hard palate, or mandible",
            "pT4b": "pT4b: Very advanced local disease. Tumor invades lateral pterygoid muscle, pterygoid plates, lateral nasopharynx, or skull base or encases carotid artery"

        },
        "Subglottis": {
            "pTx": "pTx: Primary tumor cannot be assessed",
            "pTis": "pTis: Carcinoma in situ",
            "pT1": "pT1: Tumor limited to subglottis",
            "pT2": "pT2: Tumor extends to vocal cord(s) with normal or impaired mobility",
            "pT3": "pT3: Tumor limited to larynx with vocal cord fixation and/or invasion of paraglottic space and/or inner cortex of the thyroid cartilage",
            "pT4a": "pT4a: Moderately advanced local disease. Tumor invades cricoid or thyroid cartilage and/or invades tissues beyond the larynx",
            "pT4b": "pT4b: Very advanced local disease. Tumor invades prevertebral space, encases carotid artery, or invades mediastinal structures"
        },
        "Melanoma": {
            "pT3": "pT3: Tumors limited to the mucosa and immediately underlying soft tissue, regardless of thickness or greatest dimension;",
            "pT4a": "pT4a: Moderately advanced disease; Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            "pT4b": "pT4b: Very advanced disease; Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures"
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
            "pN3b  ": "pN3b: Metastasis in a single contralateral node of any size and ENE(+)"
        },
        "Melanoma-node": {
            "pNx": "pNX: Regional lymph nodes cannot be assessed",
            "pN0": "pN0: No regional lymph node metastasis",
            "pN1": "pN1: Regional lymph node metastasis present"
        }
    };

    // set initial values not tied to selection
    $('#box13').find('option').remove();
    $.each(jsonData["Supraglottis"], function (val, text) {
        $('#box13').append($('<option></option>').val(val).html(text));
    });
    $('#box14').find('option').remove();
    $.each(jsonData["Carcinoma-node"], function (val, text) {
        $('#box14').append($('<option></option>').val(val).html(text));
    });

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
    });

    $('#box2').on("change", function () {
        var sel = $('#box2').val();
        if (sel.indexOf("Other") > -1) {
            $('#box13').find('option').remove();
            $.each(jsonData["Not specified"], function (val, text) {
                $('#box13').append($('<option></option>').val(val).html(text));
            });
            $('#box2_2').show();
        } else {
            $('#box13').find('option').remove();
            $.each(jsonData[sel], function (val, text) {
                $('#box13').append($('<option></option>').val(val).html(text));
            });
            $('#box2_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        // populate pT choices
        var site = $('#box2').val();
        var node = '';
        if (sel.indexOf("melanoma") > -1) {
            site = "Melanoma";
            node = "Melanoma-node";
        } else {
            node = "Carcinoma-node";
        }
        $('#box13').find('option').remove();
        $.each(jsonData[site], function (val, text) {
            $('#box13').append($('<option></option>').val(val).html(text));
        });
        $('#box14').find('option').remove();
        $.each(jsonData[node], function (val, text) {
            $('#box14').append($('<option></option>').val(val).html(text));
        });

        if (sel.indexOf('Other') > -1) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
        if (sel.indexOf('composite') > -1) {
            $('#box7_3').show();
        } else {
            $('#box7_3').hide();
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

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box9_1').show();
            $('#box9_2').show();
        } else {
            $('#box9_1').hide();
            $('#box9_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
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
        setTimeout(100);
        var sel = $("#box18").val();
        if (sel > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $('#box22').on("change", function () {
        var sela = $('#box22').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Inflammation') > -1;
        });
        if (trig1.length > 0) {
            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
        if (trig2.length > 0) {
            $('#box22_3').show();
        } else {
            $('#box22_3').hide();
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



        var captext = "Larynx Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/dissection/, box_1_3) + "\n";
        } else if (trig1_box_1.length > 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/Other/, box_1_2).replace(/dissection/, box_1_3) + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join("\n- ") + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- Larynx, other site: " + box_2_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- Larynx, " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTransglottic Extension:\n- " + box_3 + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Laterality:\n- " + box_4.join('\n- ') + "\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Focality:\n- " + box_5 + "\n";

        var box_6 = $("#box6").val();
        captext += "\nTumor Size: " + box_6.replace(/cm/, '') + "cm\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_7 + "\n- " + box_7_2 + "\n";
        } else if (box_7.indexOf("composite") > -1) {
            captext += "\nHistologic Type:\n- " + box_7 + "\n- " + box_7_3 + "\n";
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
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Invasive:\n- " + box_9 + "\n- Nearest margin: " + box_9_1 + "\n- Distance to this margin: " + box_9_2.replace(/mm/, "") + "mm\n";
        } else if (box_9.indexOf("Involved") > -1) {
            captext += "\nMargins - Invasive:\n- " + box_9 + "\n- Margin involved: " + box_9_3 + "\n";
        } else {
            captext += "\nMargins - Invasive:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - high-grade dysplasia/in-situ:\n- " + box_10 + "\n- Nearest margin: " + box_10_1 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else if (box_10.indexOf("Involved") > -1) {
            captext += "\nMargins - high-grade dysplasia/in-situ:\n- " + box_10 + "\n- Margin involved: " + box_10_3 + "\n";
        } else {
            captext += "\nMargins - high-grade dysplasia/in-situ:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        captext += "\nLymphovascular Invasion:\n- " + box_11 + "\n";

        var box_25 = $("#box25").val();
        captext += "\nPerineural Invasion:\n- " + box_25 + "\n";


        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_17 + "\n\tLymph nodes involved: " + box_18 + "\n";
            if (box_18 > 0) {
                var box_19 = $("#box19").val();
                captext += "\tLaterality of Lymph Nodes Involved: " + box_19 + "\n";

                var box_20 = $("#box20").val();
                captext += "\tSize of Largest Metastatic Deposit: " + box_20.replace(/cm/, '') + "cm\n";

                var box_21 = $("#box21").val();
                captext += "\tExtranodal Extension: " + box_21 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
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

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        var box_22_3 = $("#box22_3").val();
        var trig1_box_22 = box_22.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        var trig2_box_22 = box_22.filter(function (el) {
            return el.indexOf("Inflammation") > -1;
        });
        if (box_22.length  > 0){
            if (trig1_box_22.length > 0 && trig2_box_22.length == 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_22.join("\n- ").replace(/Other/, box_22_2) + "\n";
            } else if (trig1_box_22.length == 0 && trig2_box_22.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_22.join("\n- ").replace(/Inflammation/, "Inflammation: " + box_22_3) + "\n";
            } else if (trig1_box_22.length > 0 && trig2_box_22.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_22.join("\n- ").replace(/Other/, box_22_2).replace(/Inflammation/, "Inflammation: " + box_22_3) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_22.join("\n- ") + "\n";
            }
                }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/18/2017.
 */