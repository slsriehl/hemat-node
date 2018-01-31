"use strict";

$(window).on("load", function() {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $("#box1").on("change", function() {
        var sel = $("#box1").val();
        if (sel == "Other") {
            $("#box1_2").show();
        } else {
            $("#box1_2").hide();
        }
    });

    $("#box4").on("change", function() {
        var sel = $("#box4").val();
        if (sel == "Other") {
            $("#box4_2").show();
        } else {
            $("#box4_2").hide();
        }
    });

    $("#box5").on("change", function() {
        var sel = $("#box5").val();
        if (sel == "Other") {
            $("#box5_2").show();
        } else {
            $("#box5_2").hide();
        }
    });

    $("#box6").on("change", function() {
        var sel = $("#box6").val();
        if ($.inArray("Other organs", sel) > -1) {
            $("#box6_2").show();
        } else {
            $("#box6_2").hide();
        }
    });

    $("#box7").on("change", function() {
        var sela = $("#box7").val();
        var neg = sela.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var pos = sela.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });
        if (neg.length > 0 && pos.length == 0) {
            $("#box7_1").show();
            $("#box7_2").show();
        } else {
            $("#box7_1").hide();
            $("#box7_2").hide();
        }
        if (neg.length == 0 && pos.length > 0) {
            $("#box7_3").show();
        } else {
            $("#box7_3").hide();
        }
    });

    $("#box8").on("change", function() {
        var sela = $("#box8").val();
        var neg = sela.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var pos = sela.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });

        if (neg.length > 0 && pos.length == 0) {
            $("#box8_1").show();
            $("#box8_2").show();
        } else {
            $("#box8_1").hide();
            $("#box8_2").hide();
        }
        if (neg.length == 0 && pos.length > 0) {
            $("#box8_3").show();
        } else {
            $("#box8_3").hide();
        }
    });

    $("#box13").on("change", function() {
        var sel = $("#box13").val();
        if (sel != "pMx") {
            $("#box13_2").show();
        } else {
            $("#box13_2").hide();
        }
    });

    $("#box14").on("change", function() {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });


    $("#box15, #box16").on("input", function () {
        setTimeout(100);
        var nodes = $("#box15").val() + $("#box16").val();
        nodes = parseInt(nodes, 10);
        console.log("nodes positive: "+typeof nodes);
        if (nodes > 0){
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }

    });

    $("#box19").on("change", function() {
        var sel = $("#box19").val();
        if (sel == "Other") {
            $("#box19_2").show();
        } else {
            $("#box19_2").hide();
        }
    });

    $("#box20").on("change", function() {
        var sel = $("#box20").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box20_2").show();
        } else {
            $("#box20_2").hide();
        }
    });

    //************************************************************//
    // Script to populate the template data in the output textarea//
    // *************************************************************/
    $(".writeReport").on("click", function() {


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

        var captext =
            "Vaginal Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == "Other") {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- " + box_2.join("\n- ") + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, "") + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4 == "Other") {
            captext += "\nHistologic Type:\n- " + box_4_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 == "Other") {
            captext += "\nHistologic Grade:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Grade:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray("Other organs", box_6) > -1) {
            captext +=
                "\nOther Tissue/ Organ Involvement:\n- " +
                box_6.join("\n- ").replace(/Other organs/, box_6_2) +
                "\n";
        } else {
            captext +=
                "\nOther Tissue/ Organ Involvement:\n- " + box_6.join("\n- ") + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_1 = $("#box7_1").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        var negbox_7 = box_7.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var posbox_7 = box_7.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });
        if (negbox_7.length > 0 && posbox_7.length == 0) {
            captext +=
                "\nMargins - Peripheral:\n- " +
                box_7.join("\n- ") +
                "\n- Nearest margin to invasive carcinoma: " +
                box_7_1 +
                "\n- Distance to this margin: " +
                box_7_2.replace(/mm/, "") +
                "mm\n";
        } else if (negbox_7.length == 0 && posbox_7.length > 0) {
            captext +=
                "\nMargins - Peripheral:\n- " +
                box_7.join("\n- ") +
                "\n- Margin involved: " +
                box_7_3 +
                "\n";
        }

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        var negbox_8 = box_8.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var posbox_8 = box_8.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });
        if (negbox_8.length > 0 && posbox_8.length == 0) {
            captext +=
                "\nMargins - Deep:\n- " +
                box_8.join("\n- ") +
                "\n- Nearest margin to invasive carcinoma: " +
                box_8_1 +
                "\n- Distance to this margin: " +
                box_8_2.replace(/mm/, "") +
                "mm\n";
        } else if (negbox_8.length == 0 && posbox_8.length > 0) {
            captext +=
                "\nMargins - Deep:\n- " +
                box_8.join("\n- ") +
                "\n- Margin involved: " +
                box_8_3 +
                "\n";
        }

        var box_9 = $("#box9").val();
        captext += "\nLymphovascular Invasion:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        captext += "\nPathologic Staging (pTNM):\n- ";
        if (box_10 != "Not applicable") {
            if (box_13 != "pMx") {
                captext +=
                    box_10.join("") +
                    " " +
                    box_11 +
                    " " +
                    box_12 +
                    " " +
                    box_13 +
                    " (metastatic site(s): " +
                    box_13_2 +
                    ")\n";
            } else {
                captext +=
                    box_10.join("") + " " + box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        } else {
            if (box_13 != "pMx") {
                captext +=
                    box_11 +
                    " " +
                    box_12 +
                    " " +
                    box_13 +
                    " (metastatic site(s): " +
                    box_13_2 +
                    ")\n";
            } else {
                captext += box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        }

        if ($("#box14").is(":checked")) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            var box_18 = $("#box18").val();
            captext +=
                "\nLymph nodes:\n" +
                "\tTotal Number of Nodes Examined: " +
                box_18 +
                "\n" +
                "\tNumber of Nodes with Metastasis: " +
                box_15 +
                "\n";

            if (box_16.length > 0) {
                captext +=
                    "\tNumber of Nodes with Isolated Tumor Cells: " + box_16 + "\n";
            }

            var box_17 = $("#box17").val();
            if (box_17 != "Not applicable") {
                captext +=
                    "\n\tSpecify Lymph Node(s) with Tumor :\n\t- " + box_17 + "\n";
            }

            var box_19 = $("#box19").val();
            var box_19_2 = $("#box19_2").val();
            if (box_19.length > 0) {
                if (box_19 == "Other") {
                    captext +=
                        "\t+ Additional Lymph Node Findings:\n\t- " + box_19_2 + "\n";
                } else {
                    captext +=
                        "\t+ Additional Lymph Node Findings:\n\t- " + box_19 + "\n";
                }
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }


        var box_25 = $("#box25").val();
        if (box_25.length > 0) {
            captext += "\n+ FIGO Stage (2015):\n- "  + box_25+ "\n";

        }

        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        if (box_20.length > 0){
            if ($.inArray("Other", box_20) > -1) {
                captext +=
                    "\n+ Additional Pathologic Findings:\n- " +
                    box_20.join("\n- ").replace(/Other/, box_20_2) +
                    "\n";
            } else {
                captext +=
                    "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ") + "\n";
            }

        }

        $("#outPut-1").val(captext);

        dataObj.singleSection = $("#outPut-1").val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/20/2017.
 */
