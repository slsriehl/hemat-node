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
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box2').on("change", function () {
        var sel = $('#box2').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box4').on("change", function () {
        var sel = $('#box4').val();
        var sq = sel.filter(function (el) {
            return el.indexOf('Squamous cell') > -1;
        });
        var ad = sel.filter(function (el) {
            return el.indexOf('Adenocarcinoma') > -1;
        });
        var diff = $(sel).not(sq).not(ad).get();
        console.log("sq:" + sq.length);
        console.log("ad:" + ad.length);
        console.log("filter: diff = " + diff);
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

        if ($.inArray('Other', sel) > -1) {
            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf('Other') > -1) {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
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
        var sel = $('#box8').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf('adjacent') > -1) {
            $('.invade1_hid').show();
        } else {
            $('.invade1_hid').hide();
        }
    });

    $('#box9_2').on("change", function () {
        var sel = $('#box9_2').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box9_3').show();
        } else {
            $('#box9_3').hide();
        }
    });

    $('#box10').on("change", function () {
        var marg_arr = [];
        $("#box10 :selected").each(function(i, sel){
            marg_arr.push($(sel).data("marg"));
        });

        console.log(marg_arr);
        if ($.inArray("hide", marg_arr) < 0) {
            if ($.inArray("invasive", marg_arr) > -1){
                $('.margin_hid').show();
            } else {
                $('.margin_hid').hide();
            }
            if ($.inArray("hgdys", marg_arr) > -1){
                $('.margin_hid_2').show();
            } else {
                $('.margin_hid_2').hide();
            }
            if ($.inArray("lgdys", marg_arr) > -1){
                $('.margin_hid_3').show();
            } else {
                $('.margin_hid_3').hide();
            }
        }

    });

    $('#box10_2').on("change", function () {
        var sel = $('#box10_2').val();
        if (sel.indexOf('Other') > -1) {
            $('#box10_3').show();
        } else {
            $('#box10_3').hide();
        }
    });

    $('#box10_4').on("change", function () {
        var sel = $('#box10_4').val();
        if (sel.indexOf('Other') > -1) {
            $('#box10_5').show();
        } else {
            $('#box10_5').hide();
        }
    });

    $('#box10_6').on("change", function () {
        var sel = $('#box10_6').val();
        if (sel.indexOf('Other') > -1) {
            $('#box10_7').show();
        } else {
            $('#box10_7').hide();
        }
    });

    $("#box15").on("change", function () {
        var sel = $("#box15").val();
        if (sel == "pMx") {
            $("#box15_2").hide();
        } else {
            $("#box15_2").show();
        }
    });
    
    $("#box16").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box18").on("input", function () {
        var num = parseInt($(this).val());
        if (num > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $('#box20').on("change", function () {
        var sela = $('#box20').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Therapy') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box20_2').show();
        } else {
            $('#box20_2').hide();
        }
        if (trig2.length > 0) {
            $('#box20_3').show();
        } else {
            $('#box20_3').hide();
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


        var captext = "Urinary Bladder Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if ($.inArray('Other', box_2) > -1) {
            captext += "\nTumor Site:\n- " + box_2.join('\n- ').replace(/Other/, box_2_2) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_2.join('\n- ') + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if ($.inArray('Other', box_4) > -1) {
            captext += "\nHistologic Type:\n- " + box_4.join('\n- ').replace(/Other/, box_4_2) + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4.join('\n- ') + "\n";
        }

        var box_5 = $("#box5").val();
        if (box_5.length > 0) {
            captext += "\n+ Associated Epithelial Lesions:\n- " + box_5.join('\n- ') + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 != "Not applicable") {
            if (box_6.indexOf("Other") > -1) {
                captext += "\nHistologic Grade (non-squamous):\n- " + box_6_2 + "\n";
            } else {
                captext += "\nHistologic Grade (non-squamous):\n- " + box_6 + "\n";
            }
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 != "Not applicable") {
            if (box_7.indexOf("Other") > -1) {
                captext += "\nHistologic Grade (Squamous component):\n- " + box_7_2 + "\n";
            } else {
                captext += "\nHistologic Grade (Squamous component):\n- " + box_7 + "\n";
            }
        }

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8.length > 0) {
            if ($.inArray('Other', box_8) > -1) {
                captext += "\n+ Tumor Configuration:\n- " + box_8.join('\n- ').replace(/Other/, box_8_2) + "\n";
            } else {
                captext += "\n+ Tumor Configuration:\n- " + box_8.join('\n- ') + "\n";
            }
        }

        captext += "\nTumor Extension:\n";

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf('adjacent') > -1) {
            if ($.inArray('Other', box_9_2) > -1) {
                captext += "- Tumor invades the following adjacent structures: " + box_9_2.join(', ').replace(/Other/, box_9_3) + "\n";
            } else {
                captext += "- Tumor invades the following adjacent structures: " + box_9_2.join(', ') + "\n";
            }
        } else {
            captext += "- " + box_9 + "\n";
        }

        captext += "\nMargins:";
        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val(); // inv
        var box_10_3 = $("#box10_3").val();
        var box_10_4 = $("#box10_4").val(); // hg dys
        var box_10_5 = $("#box10_5").val();
        var box_10_6 = $("#box10_6").val(); // lg dys
        var box_10_7 = $("#box10_7").val();
        var negbox_10 = box_10.filter(function (el) {
                            return el.indexOf('and') > -1;
                        });
        console.log("neg filter:" + negbox_10.length);
        var mar_inv = "\n- Invasive carcinoma involving:\n\t"+box_10_2.join("\n\t").replace(/Other/, box_10_3);
        var mar_cis = "\n- Non-invasive high-grade dysplasia involving:\n\t"+box_10_4.join("\n\t").replace(/Other/, box_10_5);
        var mar_lgd = "\n- Non-invasive low-grade dysplasia involving:\n\t"+box_10_6.join("\n\t").replace(/Other/, box_10_7);
        if (negbox_10.length == 0){ // not uninvolved
            console.log("margins: not all neg");
            if ($.inArray("Uninvolved by invasive carcinoma", box_10) > -1) {
                console.log("margins: not inv");
                captext += "\n- Uninvolved by invasive carcinoma";
            }
            if ($.inArray("Invasive carcinoma involving: ", box_10) > -1){
                console.log("margins: yes inv");
                captext += mar_inv;
            }
            if ($.inArray("Non-invasive high-grade dysplasia involving: ", box_10) > -1){
                console.log("margins: yes cis");
                captext += mar_cis;
            }
            if ($.inArray("Non-invasive low-grade dysplasia involving: ", box_10) > -1){
                console.log("margins: yes lgd");
                captext += mar_lgd;
            }
        } else {
            console.log("margins: all neg");
            captext += "- Uninvolved by invasive carcinoma and carcinoma in situ/ noninvasive urothelial carcinoma";
        }

        var box_11 = $("#box11").val();
        captext += "\n\nLymphovascular Invasion:\n- " + box_11 + "\n";

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

            var box_19 = $("#box19").val();
            if (box_19.length > 0) {
                captext += "\t+ Extranodal Extension: " + box_19 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }


        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        var box_20_3 = $("#box20_3").val();
        var trig1_box_20 = box_20.filter(function (el) {
            return el.indexOf("Therapy") > -1;
        });
        var trig2_box_20 = box_20.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (box_20.length > 0) {
            if (trig1_box_20.length > 0 && trig2_box_20.length == 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Therapy/, box_20_2) + "\n";
            } else if (trig1_box_20.length == 0 && trig2_box_20.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Other/, box_20_3) + "\n";
            } else if (trig1_box_20.length > 0 && trig2_box_20.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ").replace(/Therapy/, box_20_2).replace(/Other/, box_20_3) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_20.join("\n- ") + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/23/2017.
 */