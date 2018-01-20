"use strict";

$(window).on("load", function() {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/

    $("#box1").on("change", function() {
        var sel = $("#box1").val();
        if (sel == "Other") {
            $("#box1_2").show();
        } else {
            $("#box1_2").hide();
        }
    });

    $("#box2").on("change", function() {
        var sel = $("#box2").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box2_2").show();
        } else {
            $("#box2_2").hide();
        }
    });

    $("#box5").on("change", function() {
        var sel = $("#box5").val();
        if (sel == "Other histologic type not listed") {
            $("#box5_2").show();
        } else {
            $("#box5_2").hide();
        }
    });

    $("#box6").on("change", function() {
        var sel = $("#box6").val();
        if (sel == "Other") {
            $("#box6_2").show();
        } else {
            $("#box6_2").hide();
        }
    });

    $("#box9").on("change", function() {
        var sela = $("#box9").val();
        var neg = sela.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var pos = sela.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });
        if (neg.length > 0 && pos.length == 0) {
            $("#box9_1").show();
            $("#box9_2").show();
        } else {
            $("#box9_1").hide();
            $("#box9_2").hide();
        }
        if (neg.length == 0 && pos.length > 0) {
            $("#box9_3").show();
        } else {
            $("#box9_3").hide();
        }
    });

    $("#box10").on("change", function() {
        var sela = $("#box10").val();
        var neg = sela.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var pos = sela.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });
        if (neg.length > 0 && pos.length == 0) {
            $("#box10_1").show();
            $("#box10_2").show();
        } else {
            $("#box10_1").hide();
            $("#box10_2").hide();
        }
        if (neg.length == 0 && pos.length > 0) {
            $("#box10_3").show();
        } else {
            $("#box10_3").hide();
        }
    });

    $("#box15").on("change", function() {
        var sel = $("#box15").val();
        if (sel != "pMx") {
            $("#box15_2").show();
        } else {
            $("#box15_2").hide();
        }
    });

    $("#box16").on("change", function() {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box18").on("input", function() {
        var num = parseInt($(this).val(), 10);
        if (num > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $("#box25").on("change", function() {
        var sel = $("#box25").val();
        if ($.inArray("Other", sel) >-1) {
            $("#box25_2").show();
        } else {
            $("#box25_2").hide();
        }
    });

    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

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
            "Vulvar Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == "Other") {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray("Other", box_2) > -1) {
            captext +=
                "\nTumor Site:\n- " +
                box_2.join("\n- ").replace(/Other/, box_2_2) +
                "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2.join("\n- ") + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, "") + "cm\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Focality:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 == "Other histologic type not listed") {
            captext += "\nHistologic Type:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == "Other") {
            captext += "\nHistologic Grade:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nHistologic Grade:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        captext += "\nDepth of Invasion:\n- " + box_7.replace(/mm/, "") + "mm\n";

        var box_8 = $("#box8").val();
        if (box_8.length >0){
            captext += "\n+ Tumor Border:\n- " + box_8 + "\n";

        }

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        var negbox_9 = box_9.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var posbox_9 = box_9.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });
        if (negbox_9.length > 0 && posbox_9.length == 0) {
            captext +=
                "\nMargins - Peripheral:\n- " +
                box_9.join("\n- ") +
                "\n- Nearest margin to invasive carcinoma: " +
                box_9_1 +
                "\n- Distance to this margin: " +
                box_9_2.replace(/mm/, "") +
                "mm\n";
        } else if (negbox_9.length == 0 && posbox_9.length > 0) {
            captext +=
                "\nMargins - Peripheral:\n- " +
                box_9.join("\n- ") +
                "\n- Margin involved by invasive carcinoma: " +
                box_9_3 +
                "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        var negbox_10 = box_10.filter(function(el) {
            return el.indexOf("Uninvolved by invasive") > -1;
        });
        var posbox_10 = box_10.filter(function(el) {
            return el.indexOf("Involved by invasive") > -1;
        });
        if (negbox_10.length > 0 && posbox_10.length == 0) {
            captext +=
                "\nMargins - Deep:\n- " +
                box_10.join("\n- ") +
                "\n- Nearest margin to invasive carcinoma: " +
                box_10_1 +
                "\n- Distance to this margin: " +
                box_10_2.replace(/mm/, "") +
                "mm\n";
        } else if (negbox_10.length == 0 && posbox_10.length > 0) {
            captext +=
                "\nMargins - Deep:\n- " +
                box_10.join("\n- ") +
                "\n- Margin involved by invasive carcinoma: " +
                box_10_3 +
                "\n";
        }

        var box_11 = $("#box11").val();
        captext += "\nLymphovascular Invasion:\n- " + box_11 + "\n";

        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        captext += "\nPathologic Staging (pTNM):\n- ";
        if (box_12 != "Not applicable") {
            if (box_15 != "pMx") {
                captext +=
                    box_12.join("") +
                    " " +
                    box_13 +
                    " " +
                    box_14 +
                    " " +
                    box_15 +
                    " (metastatic site(s): " +
                    box_15_2 +
                    ")\n";
            } else {
                captext +=
                    box_12.join("") + " " + box_13 + " " + box_14 + " " + box_15 + "\n";
            }
        } else {
            if (box_15 != "pMx") {
                captext +=
                    box_13 +
                    " " +
                    box_14 +
                    " " +
                    box_15 +
                    " (metastatic site(s): " +
                    box_15_2 +
                    ")\n";
            } else {
                captext += box_13 + " " + box_14 + " " + box_15 + "\n";
            }
        }

        if ($("#box16").is(":checked")) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext +=
                "\nLymph Nodes:\n\tTotal Lymph nodes examined: " + box_17 + "\n";
            var box_19 = $("#box19").val();
            captext += "\tNumber of Sentinel Nodes Examined: " + box_19 + "\n";

            captext += "\tLymph nodes involved: " + box_18 + "\n";

            if (box_18 != "0") {
                var box_20 = $("#box20").val();
                captext +=
                    "\tNumber of Nodes with Metastasis 5 mm or Greater: " + box_20 + "\n";

                var box_21 = $("#box21").val();
                captext +=
                    "\tNumber of Nodes with Metastasis Less than 5 mm: " + box_21 + "\n";

                var box_22 = $("#box22").val();
                captext +=
                    "\tNumber of Nodes with Isolated Tumor Cells: " + box_22 + "\n";

                var box_23 = $("#box23").val();
                captext += "\tLymph Node(s) involved by Tumor: " + box_23 + "\n";
            }

            var box_24 = $("#box24").val();
            var box_24_2 = $("#box24_2").val();
            if ($.inArray("Not applicable", box_24) == -1) {
                if ($.inArray("Other", box_24) > -1) {
                    captext +=
                        "\nAdditional Lymph Node Findings:\n- " +
                        box_24.join("\n- ").replace(/Other/, box_24_2) +
                        "\n";
                } else {
                    captext +=
                        "\nAdditional Lymph Node Findings:\n- " +
                        box_24.join("\n- ") +
                        "\n";
                }
            }
        } else {
            captext += "\nLymph node sampling:\n- No lymph nodes are submitted\n";
        }

        var box_25 = $("#box25").val();
        var box_25_2 = $("#box25_2").val();
        if (box_25.length > 0){
            if ($.inArray("Other", box_24) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_25.join("\n- ").replace(/Other/, box_25_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_25.join("\n- ") + "\n";
            }

        }

        $("#outPut-1").val(captext);

        dataObj.singleSection = $("#outPut-1").val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/19/2017.
 */
