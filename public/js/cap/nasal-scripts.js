"use strict";

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    // populate pT and pN select boxes
    var jsonData = {
        "Maxillary": {
            "pTx": "pTx: Primary tumor cannot be assessed",
            "pTis": "pTis: Carcinoma in situ",
            "pT1": "pT1: Tumor limited to maxillary sinus mucosa with no erosion or destruction of bone",
            "pT2": "pT2: Tumor causing bone erosion or destruction including extension into the hard palate and/or middle nasal meatus, except extension to posterior wall of maxillary sinus and pterygoid plates",
            "pT3": "pT3: Tumor invades any of the following: bone of the posterior wall of maxillary sinus, subcutaneous tissues, floor or medial wall of orbit, pterygoid fossa, ethmoid sinuses",
            "pT4a": "pT4a: Moderately advanced local disease. Tumor invades any of the following: anterior orbital contents, skin of nose or cheek, minimal extension to anterior cranial fossa, pterygoid plates, sphenoid or frontal sinuses",
            "pT4b": "pT4b: Very advanced local disease. Tumor invades any of the following: orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus"
        },
        "Nasal": {
            "pTx": "pTx: Primary tumor cannot be assessed",
            "pTis": "pTis: Carcinoma in situ",
            "pT1": "pT1: Tumor restricted to any one subsite, with or without bone invasion",
            "pT2": "pT2: Tumor invading two subsites in a single region or extending to involve an adjacent region within the nasoethmoidal complex, with our without bony invasion",
            "pT3": "pT3: Tumor extends to invade the medial wall or floor of the orbit, maxillary sinus, palate, or cribriform plate",
            "pT4a": "pT4a: Moderately advanced local disease. Tumor invades any of the following: anterior orbital contents, skin of nose or cheek, minimal extension to anterior cranial fossa, pterygoid plates, sphenoid or frontal sinuses",
            "pT4b": "pT4b: Very advanced local disease. Tumor invades any of the following: orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus"
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
    $('#box13').find('option').remove();
    $.each(jsonData["Nasal"], function (val, text) {
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
        var site = sel.filter(function (el) {
            return el.indexOf('maxillary') > -1;
        });
         if ($.inArray('Other', sel) > -1) {
            $('#box2_2').show();
        } else {
             $('#box2_2').hide();
        }
        console.log(site);
        if (site.length > 0) {
            console.log("maxillary choice");
            $('#box13').find('option').remove();
            $.each(jsonData["Maxillary"], function (val, text) {
                $('#box13').append($('<option></option>').val(val).html(text));
            });
            $('#box14').find('option').remove();
            $.each(jsonData["Carcinoma-node"], function (val, text) {
                $('#box14').append($('<option></option>').val(val).html(text));
            });
        } else {
            $('#box13').find('option').remove();
            $.each(jsonData["Nasal"], function (val, text) {
                $('#box13').append($('<option></option>').val(val).html(text));
            });
            $('#box14').find('option').remove();
            $.each(jsonData["Carcinoma-node"], function (val, text) {
                $('#box14').append($('<option></option>').val(val).html(text));
            });
        }
    });

    $('#box2_2').on("input", function () {
        var sel = $('#box2_2').val().toLowerCase();
        if (sel.indexOf("maxillary") < 0) {
            $('#box13').find('option').remove();
            $.each(jsonData["Maxillary"], function (val, text) {
                $('#box13').append($('<option></option>').val(val).html(text));
            });
            $('#box14').find('option').remove();
            $.each(jsonData["Carcinoma-node"], function (val, text) {
                $('#box14').append($('<option></option>').val(val).html(text));
            });
        } else {
            $('#box13').find('option').remove();
            $.each(jsonData["Nasal"], function (val, text) {
                $('#box13').append($('<option></option>').val(val).html(text));
            });
            $('#box14').find('option').remove();
            $.each(jsonData["Carcinoma-node"], function (val, text) {
                $('#box14').append($('<option></option>').val(val).html(text));
            });
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf('Other') > -1) {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
        if (sel.indexOf('with') > -1) {
            $('#box6_3').show();
        } else {
            $('#box6_3').hide();
        }
        if (sel.indexOf('melanoma') > -1) {
            $('#box13').find('option').remove();
            $.each(jsonData["Melanoma"], function (val, text) {
                $('#box13').append($('<option></option>').val(val).html(text));
            });
            $('#box14').find('option').remove();
            $.each(jsonData["Melanoma-node"], function (val, text) {
                $('#box14').append($('<option></option>').val(val).html(text));
            });
        } else {
            var site = $("#box2").val();
            if ($.inArray('maxillary', site) > -1) {
                $('#box13').find('option').remove();
                $.each(jsonData["Maxillary"], function (val, text) {
                    $('#box13').append($('<option></option>').val(val).html(text));
                });
                $('#box14').find('option').remove();
                $.each(jsonData["Carcinoma-node"], function (val, text) {
                    $('#box14').append($('<option></option>').val(val).html(text));
                });
            } else {
                $('#box13').find('option').remove();
                $.each(jsonData["Nasal"], function (val, text) {
                    $('#box13').append($('<option></option>').val(val).html(text));
                });
                $('#box14').find('option').remove();
                $.each(jsonData["Carcinoma-node"], function (val, text) {
                    $('#box14').append($('<option></option>').val(val).html(text));
                });

            }
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("Other") > -1) {

            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box8_1').show();
            $('#box8_2').show();
            $('.negmargins').show();
        } else {
            $('#box8_1').hide();
            $('#box8_2').hide();
            $('.negmargins').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box8_3').show();
        } else {
            $('#box8_3').hide();
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

    $('#box25').on("change", function () {
        var sel = $('#box25').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box25_2').show();
        } else {
            $('#box25_2').hide();
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



        var captext = "Nasal and Paranasal Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/dissection/, "dissection:" + box_1_3) + "\n";
        } else if (trig1_box_1.length > 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/Other/, box_1_2).replace(/dissection/, "dissection:" + box_1_3) + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join("\n- ") + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other', box_2) > -1) {
            captext += "\nTumor Site:\n- " + box_2.join('\n- ').replace(/Other/, box_2_2) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2.join('\n- ') + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Laterality:\n- " + box_3.join('\n- ') + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Focality:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Size: " + box_5.replace(/cm/, '') + "cm\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_6_2 + "\n";
        } else if (box_6.indexOf("with") > -1) {
            captext += "\nHistologic Type:\n- " + box_6 + ": " + box_6_3 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 != "Not applicable") {
            if (box_7.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- " + box_7_2 + "\n";
            } else {
                captext += "\nHistologic Grade:\n- " + box_7 + "\n";
            }
        }

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Invasive component:\n- " + box_8 + "\n- Nearest margin: " + box_8_1 + "\n- Distance to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
        } else if (box_8.indexOf("Involved") > -1) {
            captext += "\nMargins - Invasive component:\n- " + box_8 + "\n- Margin involved: " + box_8_3 + "\n";
        } else {
            captext += "\nMargins - Invasive component:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf('Not') < 0) {
            if (box_9.indexOf("Uninvolved") > -1) {
                captext += "\nMargins - In-situ component:\n- " + box_9 + "\n- Nearest margin: " + box_9_1 + "\n- Distance to this margin: " + box_9_2.replace(/mm/, "") + "mm\n";
            } else if (box_9.indexOf("Involved") > -1) {
                captext += "\nMargins - In-situ component:\n- " + box_9 + "\n- Margin involved: " + box_9_3 + "\n";
            } else {
                captext += "\nMargins - In-situ component:\n- " + box_9 + "\n";
            }
        }

        var box_10 = $("#box10").val();
        captext += "\nLymphovascular Invasion:\n- " + box_10 + "\n";

        var box_11 = $("#box11").val();
        captext += "\nPerineural Invasion:\n- " + box_11 + "\n";

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

            if (box_18 > 0) {
                var box_19 = $("#box19").val();
                captext += "\n\tLaterality of Lymph Nodes Involved: " + box_19 + "\n";

                var box_20 = $("#box20").val();
                captext += "\n\tSize of Largest Metastatic Deposit: " + box_20.replace(/cm/, '') + "cm\n";

                var box_21 = $("#box21").val();
                captext += "\n\tExtranodal Extension: " + box_21 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_25 = $("#box25").val();
        var box_25_2 = $("#box25_2").val();
        if (box_25.length  > 0){
            if ($.inArray('Other', box_25) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_25.join('\n- ').replace(/Other/, box_25_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_25.join('\n- ') + "\n";
            }
                }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/24/2017.
 */