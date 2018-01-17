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
        if (sel.indexOf("Endoscopic") > -1) {
            $('.emr').show();
            $('.resection').hide();
        } else {
            $('.emr').hide();
            $('.resection').show();
        }
    });

    $('#box1_2').on("input", function () {
        var sel = $(this).val();
        var site = sel.toLowerCase();
        if (site.indexOf("endoscopic") > -1) {
            $('.emr').show();
            $('.resection').hide();
        } else {
            $('.emr').hide();
            $('.resection').show();
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

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        if (sel.indexOf("Other") > -1) {

            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("structures") > -1) {

            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if (sel.indexOf("uninvolved") > -1) {
            $('.posmargin').hide();
            $('.negmargin').show();
        } else {
            $('.posmargin').show();
            $('.negmargin').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if ($.inArray('Other', sel) > -1) {

            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
    });

    $('#box16').on("change", function () {
        var sel = $('#box16').val();
        if (sel.indexOf("Not") < 0) {

            $('#box16_2').show();
        } else {
            $('#box16_2').hide();
        }
    });

    $("#box24").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box23").on("change", function () {
        var sel = $("#box23").val();
        if (sel != "pMx") {
            $("#box23_2").show();
        } else {
            $("#box23_2").hide();
        }
    });

    $('#box27').on("change", function () {
        var sela = $('#box27').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('type') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box27_2').show();
        } else {
            $('#box27_2').hide();
        }
        if (trig2.length > 0) {
            $('#box27_3').show();
        } else {
            $('#box27_3').hide();
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


        var captext = "Esophageal Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
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
        captext += "\nRelationship of Tumor to Esophagogastric Junction:\n- " + box_3 + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- " + box_4.replace(/cm/, '') + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        if (box_6 != "Not applicable") {
            captext += "\nHistologic Grade:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("structures") > -1) {
            captext += "\nTumor Extension:\n- Tumor invades the following structure(s): " + box_7_2 + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        captext += "\nMargins:\n";

        if (box_8.indexOf('uninvolved') > -1) {
            captext += "- "+box_8;
            var box_9 = $("#box9").val();
            var box_9_2 = $("#box9_2").val();
            if ($.inArray('Other', box_9) > -1) {
                captext += "\n- Margins examined: " + box_9.join(", ").replace(/Other/, box_9_2) + "\n";
            } else {
                captext += "\n- Margins examined: " + box_9.join(", ") + "\n";
            }

            var box_10 = $("#box10").val();
            captext += "- Distance of invasive carcinoma from closest margin: " + box_10 + "\n";
        } else if (box_8.indexOf('margin involved') > -1) {
            var site = (box_1 + box_1_2).toLowerCase();
            console.log(site);
            // emr
            if (site.indexOf('endoscopic') > -1) {
                var box_14 = $("#box14").val();
                captext += "\n- Mucosal Margin:\n\t" + box_14.join('\n\t') + "\n";

                var box_15 = $("#box15").val();
                captext += "\n- Deep Margin:\n\t" + box_15 + "\n";
            } else {
                // everything else
                var box_11 = $("#box11").val();
                captext += "\n- Proximal Margin:\n\t" + box_11.join('\n\t') + "\n";

                var box_12 = $("#box12").val();
                captext += "\n- Distal Margin:\n\t" + box_12.join('\n\t') + "\n";

                var box_13 = $("#box13").val();
                captext += "\n- Radial Margin:\n\t" + box_13 + "\n";
            }
            // other
            var box_16 = $("#box16").val();
            var box_16_2 = $("#box16_2").val();
            if (box_16 != "Not applicable") {
                if (box_16.indexOf("Not") < 0) {
                    captext += "\n- " + box_16_2 + " Margin:\n\t" + box_16 + "\n";
                }
            }
        } else {
            captext += "- " + box_8;
        }

        var box_17 = $("#box17").val();
        captext += "\nTreatment Effect:\n- " + box_17 + "\n";

        var box_18 = $("#box18").val();
        captext += "\nLymphovascular Invasion:\n- " + box_18 + "\n";

        var box_19 = $("#box19").val();
        if (box_19.length > 0) {
            captext += "\n+ Perineural Invasion:\n- " + box_19 + "\n";
        }

        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_22 = $("#box22").val();
        var box_23 = $("#box23").val();
        var box_23_2 = $("#box23_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_20 != "Not applicable") {
            if (box_23 != "pMx") {
                captext += box_20.join("") + " " + box_21 + " " + box_22 + " " + box_23 + " (metastatic site(s): " + box_23_2 + ")\n";
            } else {
                captext += box_20.join("") + " " + box_21 + " " + box_22 + " " + box_23 + "\n";
            }
        } else {
            if (box_23 != "pMx") {
                captext += box_21 + " " + box_22 + " " + box_23 + " (metastatic site(s): " + box_23_2 + ")\n";
            } else {
                captext += box_21 + " " + box_22 + " " + box_23 + "\n";
            }
        }
        if ($("#box24").is(':checked')) {
            var box_25 = $("#box25").val();
            var box_26 = $("#box26").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_25 + "\n\tLymph nodes involved: " + box_26 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_27 = $("#box27").val();
        var box_27_2 = $("#box27_2").val();
        var box_27_3 = $("#box27_3").val();
        var trig1_box_27 = box_27.filter(function (el) {
            return el.indexOf("type") > -1;
        });
        var trig2_box_27 = box_27.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (box_27.length > 0) {
            if (trig1_box_27.length > 0 && trig2_box_27.length == 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_27.join("\n- ").replace(/type/, "type: " + box_27_2) + "\n";
            } else if (trig1_box_27.length == 0 && trig2_box_27.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_27.join("\n- ").replace(/Other/, box_27_3) + "\n";
            } else if (trig1_box_27.length > 0 && trig2_box_27.length > 0) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_27.join("\n- ").replace(/type/, "type: " + box_27_2).replace(/Other/, box_27_3) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_27.join("\n- ") + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});