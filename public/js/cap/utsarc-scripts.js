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
        if ($.inArray("Other", sel) > -1) {
            $("#box1_2").show();
        } else {
            $("#box1_2").hide();
        }
    });

    $("#box2").on("change", function() {
        var sel = $("#box2").val();
        if (sel.indexOf("Other") > -1) {
            $("#box2_2").show();
        } else {
            $("#box2_2").hide();
        }
    });

    $("#box4").on("change", function() {
        var sel = $("#box4").val();
        if (sel.indexOf("heterologous") > -1) {
            $("#box4_2").show();
        } else {
            $("#box4_2").hide();
        }
        if (sel.indexOf("Other") > -1) {
            $("#box4_3").show();
        } else {
            $("#box4_3").hide();
        }
        if (sel.indexOf("Adenosarcoma") > -1) {
            $(".adenosarc").show();
        } else {
            $(".adenosarc").hide();
        }
    });

    $("#box6").on("change", function() {
        var sel = $("#box6").val();
        if (sel.indexOf("Present") > -1) {
            $("#box6_2").show();
            $("#box6_4").show();
            $("#box6_5").show();
        }
        if ($("#box6_2").is(":visible")) {
            $("#box6_4").on("blur", function() {
                var num = $("#box6_2").val();
                var den = $("#box6_4").val();
                var pct = (num / den * 100).toFixed(2);
                $("#box6_5").val(pct);
            });
        } else {
            $("#box6_2").hide();
            $("#box6_4").hide();
            $("#box6_5").hide();
        }
        if (sel.indexOf("Cannot") > -1) {
            $("#box6_3").show();
        } else {
            $("#box6_3").hide();
        }
    });

    $("#box7").on("change", function() {
        var sel = $("#box7").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box7_2").show();
        } else {
            $("#box7_2").hide();
        }
    });

    $("#box8").on("change", function() {
        var sela = $("#box8").val();
        if (sela.indexOf("Uninvolved") > -1) {
            $("#box8_1").show();
            $("#box8_2").show();
        } else {
            $("#box8_1").hide();
            $("#box8_2").hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $("#box8_3").show();
        } else {
            $("#box8_3").hide();
        }
    });

    $("#box14").on("change", function() {
        var sel = $("#box14").val();
        if (sel != "pMx") {
            $("#box14_2").show();
        } else {
            $("#box14_2").hide();
        }
    });

    $("#box15").on("change", function() {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box17, #box18").on("input", function(){
        var nodes = $("#box17").val() + $("#box18").val();
        nodes = parseInt(nodes, 10);
        console.log("nodes positive: "+typeof nodes);
        if (nodes > 0){
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
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


        $('select[multiple]:visible').each(function () {
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
            "Uterine Sarcoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray("Other", box_1) > -1) {
            captext +=
                "\nProcedure:\n- " +
                box_1.join("\n- ").replace(/Other/, box_1_2) +
                "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join("\n- ") + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == "Other") {
            captext += "\nSpecimen Integrity:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nSpecimen Integrity:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, "") + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        var box_4_3 = $("#box4_3").val();
        if (box_4.indexOf("heterologous") > -1) {
            captext += "\nHistologic Type:\n- " + box_4 + "\n- " + box_4_2 + "\n";
        } else if (box_4.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_4 + "\n- " + box_4_3 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        if (box_5 != "Not applicable") {
            captext += "\nHistologic Grade:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        var box_6_4 = $("#box6_4").val();
        var box_6_5 = $("#box6_5").val();
        if (box_5 != "Not applicable") {
            if (box_6.indexOf("Present") > -1) {
                captext +=
                    "\nMyometrial Invasion:\n- " +
                    box_6 +
                    "\n\t- Depth of invasion:  " +
                    box_6_2 +
                    "\n\t- Myometrial thickness: " +
                    box_6_4 +
                    "\n\t- Percentage of myometrial invasion: " +
                    box_6_5 +
                    "%\n";
            } else {
                captext += "\nMyometrial Invasion:\n- " + box_6 + "\n";
            }
        } else if (box_6.indexOf("Cannot") > -1) {
            captext += "\nMyometrial Invasion:\n- " + box_6 + "\n- " + box_6_3 + "\n";
        } else {
            captext += "\nMyometrial Invasion:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if ($.inArray("Other", box_7) > -1) {
            captext +=
                "\nOther Tissue/ Organ Involvement:\n- " +
                box_7.join("\n-").replace("Other", box_7_2) +
                "\n";
        } else {
            captext += "\nOther Tissue/ Organ Involvement:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8.indexOf("Uninvolved") > -1) {
            captext +=
                "\nMargins:\n- " +
                box_8 +
                "\n- Nearest margin: " +
                box_8_1 +
                "\n- Distance to this margin: " +
                box_8_2.replace(/mm/, "") +
                "mm\n";
        } else if (box_8.indexOf("Involved") > -1) {
            captext +=
                "\nMargins:\n- " + box_8 + "\n- Margin involved: " + box_8_3 + "\n";
        } else {
            captext += "\nMargins:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        captext += "\nLymphovascular Invasion:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        if (box_10.length > 0){
            captext += "\n+ Peritoneal/Ascitic Fluid:\n- " + box_10 + "\n";
        }

        var box_21 = $("#box21").val();
        if (box_21.length > 0) {
            captext += "\n+ Ancillary Studies:\n- " + box_21 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        captext += "\nPathologic Staging (pTNM):\n- ";
        if (box_11 != "Not applicable") {
            if (box_14 != "pMx") {
                captext +=
                    box_11.join("") +
                    " " +
                    box_12 +
                    " " +
                    box_13 +
                    " " +
                    box_14 +
                    " (metastatic site(s): " +
                    box_14_2 +
                    ")\n";
            } else {
                captext +=
                    box_11.join("") + " " + box_12 + " " + box_13 + " " + box_14 + "\n";
            }
        } else {
            if (box_14 != "pMx") {
                captext +=
                    box_12 +
                    " " +
                    box_13 +
                    " " +
                    box_14 +
                    " (metastatic site(s): " +
                    box_14_2 +
                    ")\n";
            } else {
                captext += box_12 + " " + box_13 + " " + box_14 + "\n";
            }
        }

        if ($("#box15").is(":checked")) {
            var box_16 = $("#box16").val();
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            var posnode = parseInt(box_17, 10) + parseInt(box_18, 10);
            captext +=
                "\nLymph nodes:\n" +
                "\tTotal Number of Nodes Examined: " +
                box_16 +
                "\n" +
                "\tNumber of Nodes with Metastasis (excludes ITCs): " +
                box_17 +
                "\n";

                captext +=
                    "\tNumber of Nodes with Isolated Tumor Cells: " + box_18 + "\n";

            if (posnode > 0) {
                var box_19 = $("#box19").val();
                captext +=
                    "\tSpecify Lymph Node(s) with Tumor : " + box_19 + "\n";

                var box_20 = $("#box20").val();
                var box_20_2 = $("#box20_2").val();
                if (box_20.length  > 0) {
                    if (box_20 == "Other") {
                        captext +=
                            "\t+ Additional Lymph Node Findings:\n\t- " + box_20_2 + "\n";
                    } else {
                        captext +=
                            "\t+ Additional Lymph Node Findings:\n\t- " + box_20 + "\n";
                    }
                }
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        $("#outPut-1").val(captext);

        dataObj.singleSection = $("#outPut-1").val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/23/2017.
 */
