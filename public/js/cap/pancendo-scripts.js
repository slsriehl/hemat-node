'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $('#box1').on("change", function () {
        var sel = $('#box1').val().toLowerCase();
        console.log(sel);
        if (sel.indexOf("other") > -1) {
            console.log("Other chosen");
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
            $(".parenchymal").hide();
            $(".whipple").hide();
            $(".proximal").hide();
            $(".distal").hide();
            if (sel.indexOf("whipple") > -1) {
                $(".parenchymal").show();
                $(".whipple").show();
                $(".proximal").hide();
                $(".distal").hide();
            } else if (sel.indexOf("tail") > -1) {
                $(".parenchymal").hide();
                $(".whipple").hide();
                $(".proximal").show();
                $(".distal").hide();
            } else if (sel.indexOf("body") > -1) {
                $(".parenchymal").hide();
                $(".whipple").hide();
                $(".proximal").show();
                $(".distal").show();
            } else if (sel.indexOf("enucleation") > -1) {
                $(".parenchymal").show();
                $(".whipple").hide();
                $(".proximal").hide();
                $(".distal").hide();
            } else {
                $(".parenchymal").hide();
                $(".whipple").hide();
                $(".proximal").hide();
                $(".distal").hide();
            }
        }
    });

    $('#box1_2').on("input", function () {
        var sel = $('#box1_2').val().toLowerCase();
        if (sel.indexOf("whipple") > -1) {
            $(".parenchymal").show();
            $(".whipple").show();
            $(".proximal").hide();
            $(".distal").hide();
        } else if (sel.indexOf("tail") > -1) {
            $(".parenchymal").hide();
            $(".whipple").hide();
            $(".proximal").show();
            $(".distal").hide();
        } else if (sel.indexOf("body") > -1) {
            $(".parenchymal").hide();
            $(".whipple").hide();
            $(".proximal").show();
            $(".distal").show();
        } else if (sel.indexOf("enucleation") > -1) {
            $(".parenchymal").show();
            $(".whipple").hide();
            $(".proximal").hide();
            $(".distal").hide();
        } else {
            $(".parenchymal").hide();
            $(".whipple").hide();
            $(".proximal").hide();
            $(".distal").hide();
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
        if (sel.indexOf("Multifocal") > -1) {

            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
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

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf("Cannot") < 0) {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf("Cannot") < 0) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('organs') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('vessels') > -1;
        });
        if (trig1.length > 0) {
            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
        if (trig2.length > 0) {
            $('#box9_3').show();
        } else {
            $('#box9_3').hide();
        }
    });

    $('#box10').on("change", function () {
        var sel = $('#box10').val();
        if (sel.indexOf('uninvolved') > -1) {
            $('#box10_2').show();
        } else {
            $('#box10_2').hide();
        }
        if (sel.indexOf('margin involved') > -1) {
            $('#box10_3').show();
        } else {
            $('#box10_3').hide();
        }
    });

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        var neg = sel.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (neg.length > 0) {
            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $('#box19').on("change", function () {
        var sel = $('#box19').val();
        if ($.inArray('Not applicable', sel) < 0) {
            $('#box19_2').show();
        } else {
            $('#box19_2').hide();
        }
    });

    $("#box26").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box25").on("change", function () {
        var sel = $("#box25").val();
        if (sel == "pM1b" || sel == "pM1c") {
            $("#box25_2").show();
        } else {
            $("#box25_2").hide();
        }
    });

    $('#box30').on("change", function () {
        var sel = $('#box30').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box30_2').show();
        } else {
            $('#box30_2').hide();
        }
    });

    $('#box31').on("change", function () {
        var sel = $('#box31').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box31_2').show();
        } else {
            $('#box31_2').hide();
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


        var captext = "Pancreatic Endocrine Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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
        captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Multifocal") > -1) {
            captext += "\nTumor Focality:\n- Multifocal: " + box_4_2 + " tumors\n";
        } else {
            captext += "\nTumor Focality:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type and Grade:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Type and Grade:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Cannot") < 0) {
            captext += "\nMitotic Rate:\n- " + box_6 + " (enumerated at " + box_6_2 + " per 2 mm^2)\n";
        } else {
            captext += "\nMitotic Rate:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Cannot") < 0) {
            captext += "\nKi-67 Labeling Index:\n- " + box_7 + " (enumerated at " + box_7_2 + " %)\n";
        } else {
            captext += "\nKi-67 Labeling Index:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        if (box_8.length > 0) {
            captext += "\n+ Tumor Necrosis:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        var trig1_box_9 = box_9.filter(function (el) {
            return el.indexOf("organs") > -1;
        });
        var trig2_box_9 = box_9.filter(function (el) {
            return el.indexOf("vessels") > -1;
        });
        if (trig1_box_9.length > 0 && trig2_box_9.length == 0) {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ").replace(/organs/, "organs: " + box_9_2) + "\n";
        } else if (trig1_box_9.length == 0 && trig2_box_9.length > 0) {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ").replace(/vessels/, "vessels: " + box_9_3) + "\n";
        } else if (trig1_box_9.length > 0 && trig2_box_9.length > 0) {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ").replace(/organs/, "organs: " + box_9_2).replace(/vessels/, "vessels: " + box_9_3) + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ") + "\n";
        }

        // margins
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_17 = $("#box17").val();
        var box_18 = $("#box18").val();

        if (box_10.indexOf("uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_10;
            if ($.inArray('Other', box_11) > -1) {
                captext += "\n- Margins examined:\n\t" + box_11.join('\n\t').replace(/Other/, box_11_2) + "\n";
            } else {
                captext += "\n- Margins examined:\n\t" + box_11.join('\n\t') + "\n";
            }
        } else if (box_10.indexOf("margin involved") > -1) {
            console.log("pos margins");
            captext += "\nMargins:\n";
            if (box_1.indexOf("Whipple") > -1) {
                captext += "- Proximal Parenchymal Pancreatic Margin: " + box_12 + "\n";
                captext += "- Distal Parenchymal Pancreatic Margin: " + box_13 + "\n";
                captext += "- Pancreatic Neck/Parenchymal Margin: " + box_14 + "\n";
                captext += "- Uncinate Margin: " + box_15 + "\n";
                captext += "- Bile Duct Margin: " + box_16 + "\n";
            } else if (box_1.indexOf("tail") > -1) {
                captext += "- Proximal Parenchymal Pancreatic Margin: " + box_12 + "\n";
            } else if (box_1.indexOf("body") > -1) {
                captext += "-Proximal Parenchymal Pancreatic Margin: " + box_12 + "\n";
                captext += "- Distal Parenchymal Pancreatic Margin: " + box_13 + "\n";
            } else if (box_1.indexOf("enucleation") > -1) {
                captext += "- Pancreatic Neck/Parenchymal Margin: " + box_14 + "\n";
            }
        }

        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
        if (box_19.indexOf('Not') < 0) {
            captext += "- " + box_19_2 + " Margin: " + box_19 + "\n";
        }
        var box_20 = $("#box20").val();
        captext += "\nLymphovascular Invasion:\n- " + box_20 + "\n";

        var box_21 = $("#box21").val();
        captext += "\nPerineural Invasion:\n- " + box_21 + "\n";

        var box_22 = $("#box22").val();
        var box_23 = $("#box23").val();
        var box_24 = $("#box24").val();
        var box_25 = $("#box25").val();
        var box_25_2 = $("#box25_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_22 != "Not applicable") {
            if (box_25 != "pMx" || box_25 != "pM1a") {
                captext += box_22.join("") + " " + box_23 + " " + box_24 + " " + box_25 + " (metastatic site(s): " + box_25_2 + ")\n";
            } else {
                captext += box_22.join("") + " " + box_23 + " " + box_24 + " " + box_25 + "\n";
            }
        } else {
            if (box_25 != "pMx") {
                captext += box_23 + " " + box_24 + " " + box_25 + " (metastatic site(s): " + box_25_2 + ")\n";
            } else {
                captext += box_23 + " " + box_24 + " " + box_25 + "\n";
            }
        }
        if ($("#box26").is(':checked')) {
            var box_27 = $("#box27").val();
            var box_28 = $("#box28").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_27 + "\n\tLymph nodes involved: " + box_28 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_30 = $("#box30").val();
        var box_30_2 = $("#box30_2").val();
        if (box_30.length > 0) {
            if ($.inArray('Other', box_30) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_30.join('\n- ').replace(/Other/, box_30_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_30.join('\n- ') + "\n";
            }
        }

        var box_31 = $("#box31").val();
        var box_31_2 = $("#box31_2").val();
        if (box_31.length > 0) {
            if ($.inArray('Other', box_31) > -1) {
                captext += "\n+ Clinical History:\n- " + box_31.join('\n- ').replace(/Other/, box_31_2) + "\n";
            } else {
                captext += "\n+ Clinical History:\n- " + box_31.join('\n- ') + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/22/2017.
 */