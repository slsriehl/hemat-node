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
        var proc = $("#box1").find(":selected").data("proc");
        if (sel.indexOf("Other") > -1) {
            $("#box1_2").show();
        } else {
            $("#box1_2").hide();
        }
        if (proc != "bx"){
            $(".weight").show();
        } else {
            $(".weight").hide();
        }
    });

    $("#box5").on("change", function() {
        var sela = $("#box5").val();
        var trig1 = sela.filter(function(el) {
            return el.indexOf("#2") > -1;
        });
        var trig2 = sela.filter(function(el) {
            return el.indexOf("#3") > -1;
        });
        var trig3 = sela.filter(function(el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1.length > 0) {
            $("#box5_2").show();
        } else {
            $("#box5_2").hide();
        }
        if (trig2.length > 0) {
            $("#box5_3").show();
        } else {
            $("#box5_3").hide();
        }
        if (trig3.length > 0) {
            $("#box5_4").show();
        } else {
            $("#box5_4").hide();
        }
    });

    $("#box6").on("change", function() {
        var sel = $("#box6").val();
        if (sel.indexOf("Multifocal") > -1) {
            $("#box6_2").show();
        } else {
            $("#box6_2").hide();
        }
    });

    $("#box9").on("change", function() {
        var sel = $("#box9").val();
        if (sel.indexOf("present") > -1) {
            $("#box9_2").show();
        } else {
            $("#box9_2").hide();
        }
    });

    $("#box10").on("change", function() {
        var sela = $("#box10").val();
        if (sela.indexOf("Uninvolved") > -1) {
            $("#box10_1").show();
            $("#box10_2").show();
        } else {
            $("#box10_1").hide();
            $("#box10_2").hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $("#box10_3").show();
        } else {
            $("#box10_3").hide();
        }
    });

    $("#box11").on("change", function() {
        var sel = $("#box11").val();
        if (sel.indexOf("Other") > -1) {
            $("#box11_2").show();
        } else {
            $("#box11_2").hide();
        }
    });

    $("#box16").on("change", function() {
        var sel = $("#box16").val();
        if (sel.indexOf("Present") > -1) {
            $("#box16_2").show();
        } else {
            $("#box16_2").hide();
        }
    });

    $("#box18").on("change", function() {
        var sel = $("#box18").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box18_2").show();
        } else {
            $("#box18_2").hide();
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
            "Pediatric Renal Tumors Cancer Synoptic\n(2016 update, COG staging system)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == "Other") {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        if (box_2.length > 0) {
            captext += "\nSpecimen Weight (g):\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nSpecimen Laterality:\n- " + box_3 + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Size: " + box_4.replace(/cm/, "") + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        var box_5_3 = $("#box5_3").val();
        var box_5_4 = $("#box5_4").val();
        var trig1_box_5 = box_5.filter(function(el) {
            return el.indexOf("#2") > -1;
        });
        var trig2_box_5 = box_5.filter(function(el) {
            return el.indexOf("#3") > -1;
        });
        var trig3_box_5 = box_5.filter(function(el) {
            return el.indexOf("Other") > -1;
        });
        if (box_5.length> 0){
            if (trig1_box_5.length > 0 && trig2_box_5.length == 0) {
                captext +=
                    "\nAdditional dimensions of multiple tumors:\n- Tumor #2 maximum size: " +
                    box_5_2.replace(/cm/, "") +
                    "cm\n";
            } else if (trig1_box_5.length == 0 && trig2_box_5.length > 0) {
                captext +=
                    "\nAdditional dimensions of multiple tumors:\n- Tumor #3 maximum size: " +
                    box_5_3.replace(/cm/, "") +
                    "cm\n";
            } else if (trig1_box_5.length > 0 && trig2_box_5.length > 0) {
                captext +=
                    "\nAdditional dimensions of multiple tumors:\n- Tumor #2 maximum size: " +
                    box_5_2.replace(/cm/, "") +
                    "cm\n- Tumor #3 maximum size: " +
                    box_5_3.replace(/cm/, "") +
                    "cm\n";
            } else if (
                trig3_box_5.length > 0 &&
                trig1_box_5.length > 0 &&
                trig2_box_5.length > 0
            ) {
                captext +=
                    "\nAdditional dimensions of multiple tumors:\n- Tumor #2 maximum size: " +
                    box_5_2.replace(/cm/, "") +
                    "cm\n- Tumor #3 maximum size: " +
                    box_5_3.replace(/cm/, "") +
                    "cm\n- Other tumors maximum size: " +
                    box_5_4.replace(/cm/, "") +
                    "cm\n";
            } else {
                captext +=
                    "\nAdditional dimensions of multiple tumors:\n- " +
                    box_5.join("\n- ") +
                    "\n";
            }
        }


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == "Multifocal") {
            captext +=
                "\nTumor Focality:\n- Multifocal: " + box_6_2 + " tumors identified\n";
        } else {
            captext += "\nTumor Focality:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_8 = $("#box8").val();
        var box_9 = $("#box9").val();
        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        captext += "\nTumor Extent:\n";
        captext += "\tGerota’s Fascia: " + box_7 + "\n";

        captext += "\tRenal Sinus: " + box_8 + "\n";

        captext += "\tRenal Vein: " + box_9 + "\n";

        captext += "\tRenal Capsule: " + box_20 + "\n";

        if (box_21 == "present") {
            captext += "\tAdjacent Organ Involvement: Present: " + box_21_2 + "\n";
        } else {
            captext += "\tAdjacent Organ Involvement: " + box_21 + "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext +=
                "\nMargins:\n- Margins uninvolved by tumor\n- Nearest margin: " +
                box_10_1 +
                "\n- Distance to this margin: " +
                box_10_2.replace(/mm/, "") +
                "mm\n";
        } else if (box_10.indexOf("Involved") > -1) {
            captext +=
                "\nMargins:\n- Margins involved by tumor\n- Margin involved: " +
                box_10_3 +
                "\n";
        } else {
            captext += "\nMargins:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_11 == "Other") {
            captext += "\nHistologic Type:\n- " + box_11_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        if (box_12.length > 0) {
            if (box_12.length > 0){
                captext += "\n+ Nephrogenic Rests:\n- " + box_12.join("\n- ") + "\n";
            }

        }

        var box_13 = $("#box13").val();
        if (box_13.length > 0) {
            if (box_13.length > 0){
                if ($.inArray("Not applicable", box_13) == -1) {
                    captext +=
                        "\n+ Posttherapy Histologic Classification:\n- " +
                        box_13.join("\n- ") +
                        "\n";
                }
            }
        }

        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        if (box_14 != 0) {
            captext +=
                "\nLymph nodes:\n\tLymph Nodes Examined: " +
                box_14 +
                "\n\tLymph nodes involved: " +
                box_15 +
                "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        if (box_16 != "Not applicable") {
            if (box_16.indexOf("Present") > -1) {
                captext += "\nDistant Metastasis:\n- " + box_16_2 + "\n";
            } else {
                captext += "\nDistant Metastasis:\n- " + box_16 + "\n";
            }
        }

        var box_17 = $("#box17").val();
        captext +=
            "\nChildren’s Oncology Group Staging System:\n- " +
            box_17 +
            "\n";

        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        if (box_18.length > 0) {
            if (box_18.length > 0){
                if ($.inArray("Other", box_18) > -1) {
                    captext +=
                        "\n+ Ancillary Molecular/Genetic Studies:\n- " +
                        box_18.join("\n- ").replace(/Other/, box_18_2) +
                        "\n";
                } else {
                    captext +=
                        "\n+ Ancillary Molecular/Genetic Studies:\n- " +
                        box_18.join("\n- ") +
                        "\n";
                }

            }

        }

        var box_19 = $("#box19").val();
        if (box_19.length > 0){
            captext += "\n+ Known Underlying Genetic Syndrome:\n- " + box_19 + "\n";

        }

        $("#outPut-1").val(captext);

        dataObj.singleSection = $("#outPut-1").val();
        makeCreatePdfBtn();
    });
});
