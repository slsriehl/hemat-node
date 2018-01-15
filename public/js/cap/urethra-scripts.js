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
        if (sel.indexOf("Other") > -1) {
            $("#box1_2").show();
        } else {
            $("#box1_2").hide();
        }
    });

    $("#box3").on("change", function() {
        var sel = $("#box3").val();
        var sq = sel.filter(function(el) {
            return el.indexOf("Squamous cell") > -1;
        });
        var ad = sel.filter(function(el) {
            return el.indexOf("Adenocarcinoma") > -1;
        });
        var diff = $(sel)
            .not(sq)
            .not(ad)
            .get();
        console.log("sq:" + sq.length);
        console.log("ad:" + ad.length);
        console.log("filter: diff = " + diff);
        if (sq.length > 0 || ad.length > 0) {
            if (diff.length > 0) {
                $(".histo-grade-1").show();
            } else {
                $(".histo-grade-1").hide();
            }
            $(".histo-grade-2").show();
        } else {
            $(".histo-grade-2").hide();
            if (sq.length == 0 && ad.length == 0) {
                $(".histo-grade-1").show();
            }
        }

        if ($.inArray("Other", sel) > -1) {
            $("#box3_2").show();
        } else {
            $("#box3_2").hide();
        }
    });

    $("#box5").on("change", function() {
        var sel = $("#box5").val();
        if (sel.indexOf("Other") > -1) {
            $("#box5_2").show();
        } else {
            $("#box5_2").hide();
        }
    });

    $("#box6").on("change", function() {
        var sel = $("#box6").val();
        if (sel.indexOf("Other") > -1) {
            $("#box6_2").show();
        } else {
            $("#box6_2").hide();
        }
    });

    $("#box7").on("change", function() {
        var sel = $("#box7").val();
        if (sel.indexOf("adjacent") > -1) {
            $(".invade1_hid").show();
        } else {
            $(".invade1_hid").hide();
        }
    });

    $("#box7_2").on("change", function() {
        var sel = $("#box7_2").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box7_3").show();
        } else {
            $("#box7_3").hide();
        }
    });

    $("#box8").on("change", function() {
        var sel = $("#box8").val();
        if (sel.indexOf("adjacent") > -1) {
            $(".invade2_hid").show();
        } else {
            $(".invade2_hid").hide();
        }
    });

    $("#box8_2").on("change", function() {
        var sel = $("#box8_2").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box8_3").show();
        } else {
            $("#box8_3").hide();
        }
    });

    $("#box9").on("change", function() {
        var sel = $("#box9").val();
        if (sel.indexOf("adjacent") > -1) {
            $(".invade3_hid").show();
        } else {
            $(".invade3_hid").hide();
        }
    });

    $("#box9_2").on("change", function() {
        var sel = $("#box9_2").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box9_3").show();
        } else {
            $("#box9_3").hide();
        }
    });

    $("#box10").on("change", function() {
        var sel = $("#box10").val();
        if (sel.indexOf("involving") > -1) {
            $(".margin_hid").show();
        } else {
            $(".margin_hid").hide();
        }
        if (sel.indexOf("and")<0){
            $(".dys").show();
        } else {
            $(".dys").hide();
        }
    });

    $("#box10_2").on("change", function() {
        var sel = $("#box10_2").val();
        if (sel.indexOf("Other") > -1) {
            $("#box10_3").show();
        } else {
            $("#box10_3").hide();
        }
    });

    $("#box11").on("change", function() {
        var sel = $("#box11").val();
        if (sel.indexOf("involving") > -1) {
            $(".situ_hid").show();
        } else {
            $(".situ_hid").hide();
        }
    });

    $("#box11_2").on("change", function() {
        var sel = $("#box11_2").val();
        if (sel.indexOf("Other") > -1) {
            $("#box11_3").show();
        } else {
            $("#box11_3").hide();
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

    $("#box19").on("change", function() {
        var sel = $("#box19").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box19_2").show();
        } else {
            $("#box19_2").hide();
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
            "Urethral Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == "Other") {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        if (box_2.length > 0) {
            captext += "\n+ Tumor Size:\n- " + box_2 + "cm\n";

        }

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray("Other", box_3) > -1) {
            captext +=
                "\nHistologic Type:\n- " +
                box_3.join("\n- ").replace(/Other/, box_3_2) +
                "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_3.join("\n- ") + "\n";
        }

        var box_4 = $("#box4").val();
        if (box_4.length > 0) {
            captext += "\n+ Associated Epithelial Lesions:\n- " + box_4 + "\n";

        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 != "Not applicable") {
            if (box_5.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- " + box_5_2 + "\n";
            } else {
                captext += "\nHistologic Grade:\n- " + box_5 + "\n";
            }
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 != "Not applicable") {
            if (box_6.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- " + box_6_2 + "\n";
            } else {
                captext += "\nHistologic Grade:\n- " + box_6 + "\n";
            }
        }

        captext += "\nTumor Extension:\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7.indexOf("Not applicable") == -1) {
            if (box_7.indexOf("adjacent") > -1) {
                if ($.inArray("Other", box_7_2) > -1) {
                    captext +=
                        "- Tumor invades adjacent structures, including: " +
                        box_7_2.replace(/Other/, box_7_3) +
                        "\n";
                } else {
                    captext +=
                        "- Tumor invades adjacent structures, including: " + box_7_2.join(", ") + "\n";
                }
            } else {
                captext += "- " + box_7 + "\n";
            }
        }

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8.indexOf("Not applicable") == -1) {
            if (box_8.indexOf("adjacent") > -1) {
                if ($.inArray("Other", box_8_2) > -1) {
                    captext +=
                        "- Tumor invades adjacent structures, including: " +
                        box_8_2.replace(/Other/, box_8_3) +
                        "\n";
                } else {
                    captext +=
                        "- Tumor invades adjacent structures, including: " + box_8_2.join(", ") + "\n";
                }
            } else {
                captext += "- " + box_8 + "\n";
            }
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Not applicable") == -1) {
            if (box_9.indexOf("adjacent") > -1) {
                if ($.inArray("Other", box_9_2) > -1) {
                    captext +=
                        "- Tumor invades adjacent structures, including: " +
                        box_9_2.replace(/Other/, box_9_3) +
                        "\n";
                } else {
                    captext +=
                        "- Tumor invades adjacent structures, including: " + box_9_2.join(", ") + "\n";
                }
            } else {
                captext += "- " + box_9 + "\n";
            }
        }

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("involving") > -1) {
            if ($.inArray("Other", box_10_2) > -1) {
                captext +=
                    "\nMargins:\n- " + box_10 +  " " + box_10_2.join(", ").replace(/Other/, box_10_3) +
                    "\n";
            } else {
                captext += "\nMargins:\n- " + box_10 + " " + box_10_2.join(", ") + "\n";
            }
        } else {
            captext += "\nMargins:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        var box_11_3 = $("#box11_3").val();
        if (box_10.indexOf("and") < 0){
            if (box_11.indexOf("involving") > -1) {
                if ($.inArray("Other", box_11_2) > -1) {
                    captext += "- " +  box_11 + " " + box_11_2.join(", ").replace(/Other/, box_11_3) +
                        "\n";
                } else {
                    captext += "- " + box_11 + " " + box_11_2.join(", ") + "\n";
                }
            }
        }

        
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
                "\nLymph nodes:\n\tLymph Nodes Examined: " +
                box_17 +
                "\n\tLymph nodes involved: " +
                box_18 +
                "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
        if (box_19.length > 0) {
            if ($.inArray("Other", box_19) > -1) {
                captext +=
                    "\n+ Additional Pathologic Findings:\n- " +
                    box_19.join("\n- ").replace(/Other/, box_19_2) +
                    "\n";
            } else {
                captext +=
                    "\n+ Additional Pathologic Findings:\n- " + box_19.join("\n- ") + "\n";
            }

        }

        $("#outPut-1").val(captext);

        dataObj.singleSection = $("#outPut-1").val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/27/2017.
 */
