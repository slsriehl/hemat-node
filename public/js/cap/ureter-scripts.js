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

    $("#box4").on("change", function() {
        var sel = $("#box4").val();
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
        if ($.inArray("Other histologic type", sel) > -1) {
            console.log("other");
            $("#box4_2").show();
        } else {
            $("#box4_2").hide();
        }
        if (sq.length > 0 || ad.length > 0) {
            if (diff.length > 0) {
                $(".uro-grade-1").show();
            } else {
                $(".uro-grade-1").hide();
            }
            $(".uro-grade-2").show();
        } else {
            $(".uro-grade-2").hide();
            if (sq.length == 0 && ad.length == 0) {
                $(".uro-grade-1").show();
            }
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
        if (sel.indexOf("Other") > -1) {
            $("#box7_2").show();
        } else {
            $("#box7_2").hide();
        }
    });

    $("#box8").on("change", function() {
        var sel = $("#box8").val();
        if ($.inArray("Other", sel) > -1) {
            $("#box8_2").show();
        } else {
            $("#box8_2").hide();
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

    $("#box50").on("change", function() {
        var sel = $("#box50").val();
        if (sel.indexOf("involving") > -1) {
            $(".situ_hid").show();
        } else {
            $(".situ_hid").hide();
        }
    });

    $("#box50_2").on("change", function() {
        var sel = $("#box50_2").val();
        if (sel.indexOf("Other") > -1) {
            $("#box50_3").show();
        } else {
            $("#box50_3").hide();
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

    $("#box20").on("change", function() {
        var sela = $("#box20").val();
        var trig1 = sela.filter(function(el) {
            return el.indexOf("Therapy") > -1;
        });
        var trig2 = sela.filter(function(el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1.length > 0) {
            $("#box20_2").show();
        } else {
            $("#box20_2").hide();
        }
        if (trig2.length > 0) {
            $("#box20_3").show();
        } else {
            $("#box20_3").hide();
        }
    });

    $("#box23").on("change", function() {
        var box23arr = [];
        $("#box23 :selected").each(function(i, sel){
            box23arr.push($(sel).data("type"));
        });
        if ($.inArray("glom", box23arr) > -1){
            $("#box23_2").show();
        } else {
            $("#box23_2").hide();
        }
        if ($.inArray("tubulo", box23arr) > -1){
            $("#box23_3").show();
        } else {
            $("#box23_3").hide();
        }
        if ($.inArray("vasc", box23arr) > -1){
            $("#box23_4").show();
        } else {
            $("#box23_4").hide();
        }
        if ($.inArray("infl", box23arr) > -1){
            $("#box23_5").show();
        } else {
            $("#box23_5").hide();
        }
        if ($.inArray("other", box23arr) > -1){
            $("#box23_6").show();
        } else {
            $("#box23_6").hide();
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
            "Ureter/Renal Pelvis Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == "Other") {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_30 = $("#box30").val();
        captext += "\nSpecimen Laterality:\n- " + box_30 + "\n";

        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, "") + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if ($.inArray("Other", box_4) > -1) {
            captext +=
                "\nHistologic Type:\n- " +
                box_4.join("\n- ").replace(/Other/, box_4_2) +
                "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4.join("\n- ") + "\n";
        }

        var box_5 = $("#box5").val();
        if (box_5.length > 0) {
            captext +=
                "\n+ Associated Epithelial Lesions:\n- " + box_5.join("\n- ") + "\n";

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

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 != "Not applicable") {
            if (box_7.indexOf("Other") > -1) {
                captext += "\nHistologic Grade:\n- " + box_7_2 + "\n";
            } else {
                captext += "\nHistologic Grade:\n- " + box_7 + "\n";
            }
        }

        var box_9 = $("#box9").val();
        captext += "\nTumor Extension:\n- " + box_9 + "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8.length > 0) {
            if ($.inArray("Other", box_8) > -1) {
                captext +=
                    "\n+ Tumor Configuration:\n- " +
                    box_8.join("\n- ").replace(/Other/, box_8_2) +
                    "\n";
            } else {
                captext += "\n+ Tumor Configuration:\n- " + box_8.join("\n- ") + "\n";
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

        var box_50 = $("#box50").val();
        var box_50_2 = $("#box50_2").val();
        var box_50_3 = $("#box50_3").val();
        if (box_10.indexOf("and") < 0){
            if (box_50.indexOf("involving") > -1) {
                if ($.inArray("Other", box_50_2) > -1) {
                    captext += "- " +  box_50 + " " + box_50_2.join(", ").replace(/Other/, box_50_3) +
                        "\n";
                } else {
                    captext += "- " + box_50 + " " + box_50_2.join(", ") + "\n";
                }
            }
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
            var box_60 = $("#box60").val();
            captext +=
                "\nLymph nodes:\n\tLymph Nodes Examined: " +
                box_17 +
                "\n\tLymph nodes involved: " +
                box_18 +"\n";
            if (box_18.indexOf("0") < 0){
                if (box_60.length > 0) {
                    captext += "\t+ Size of Largest Deposit: "+box_60+"cm\n";
                }

                var box_19 = $("#box19").val();
                if (box_19.length > 0) {
                    captext += "\t+ Extranodal Extension: " + box_19 + "\n";
                }
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }



        var box_23 = $("#box23").val();
        var box23arr = [];
        $("#box23 :selected").each(function(i, sel){
            box23arr.push($(sel).data("type"));
        });
        var box_23_2 = $("#box23_2").val(); //glom
        var box_23_3 = $("#box23_3").val(); //tubulo
        var box_23_4 = $("#box23_4").val(); //vasc
        var box_23_5 = $("#box23_5").val(); //infl
        var box_23_6 = $("#box23_6").val(); //other
            captext += "\nPathologic Findings in Ipsilateral Nonneoplastic Renal Tissue:";
        if ($.inArray("none", box23arr) < 0) {
            if ($.inArray("glom", box23arr) > -1) {
                captext += "\n- Glomerular disease: " + box_23_2;
            }
            if ($.inArray("tubulo", box23arr) > -1) {
                captext += "\n- Tubulointerstitial disease: " + box_23_3;
            }
            if ($.inArray("vasc", box23arr) > -1) {
                captext += "\n- Vascular disease: " + box_23_4;
            }
            if ($.inArray("infl", box23arr) > -1) {
                captext += "\n- Inflammation: " + box_23_5;
            }
            if ($.inArray("other", box23arr) > -1) {
                captext += "\n- " + box_23_6;
            }
        } else {
            captext += "- " + box_23;
        }


        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        var box_20_3 = $("#box20_3").val();
        var trig1_box_20 = box_20.filter(function(el) {
            return el.indexOf("Therapy") > -1;
        });
        var trig2_box_20 = box_20.filter(function(el) {
            return el.indexOf("Other") > -1;
        });
        if (box_20.length > 0) {
            if (trig1_box_20.length > 0 && trig2_box_20.length == 0) {
                captext +=
                    "\n\n+ Additional Pathologic Findings:\n- " +
                    box_20.join("\n- ").replace(/Therapy/, box_20_2) +
                    "\n";
            } else if (trig1_box_20.length == 0 && trig2_box_20.length > 0) {
                captext +=
                    "\n\n+ Additional Pathologic Findings:\n- " +
                    box_20.join("\n- ").replace(/Other/, box_20_3) +
                    "\n";
            } else if (trig1_box_20.length > 0 && trig2_box_20.length > 0) {
                captext +=
                    "\n\n+ Additional Pathologic Findings:\n- " +
                    box_20
                        .join("\n- ")
                        .replace(/Therapy/, box_20_2)
                        .replace(/Other/, box_20_3) +
                    "\n";
            } else {
                captext +=
                    "\n\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ") + "\n";
            }
        }


        $("#outPut-1").val(captext);

        dataObj.singleSection = $("#outPut-1").val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/23/2017.
 */
