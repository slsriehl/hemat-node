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
            if (sel.indexOf("circ") > -1) {
                $(".circ").show();
            } else {
                $(".circ").hide();
            }
            if (sel.indexOf("penectomy") > -1) {
                console.log("penectomy done");
                $(".penectomy").show();
            } else {
                $(".penectomy").hide();
            }
        }
    });

    $('#box1_2').on("input", function () {
        var sel = $('#box1_2').val().toLowerCase();
        if (sel.indexOf("circ") > -1) {
            $(".circ").show();
        } else {
            $(".circ").hide();
        }
        if (sel.indexOf("penectomy") > -1) {
            console.log("penectomy done");
            $(".penectomy").show();
        } else {
            $(".penectomy").hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sel = $('#box7').val();
        if (sel.indexOf('Adnexal') > -1) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
        if (sel.indexOf('Other') > -1) {
            $('#box7_3').show();
        } else {
            $('#box7_3').hide();
        }
    });

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('adjacent') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('other') > -1;
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
        if (sel.indexOf("Involved") > -1) {

            $('#box10_2').show();
        } else {
            $('#box10_2').hide();
        }
    });

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        if (sel.indexOf("Other") > -1) {

            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $("#box19").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box18").on("change", function () {
        var sel = $("#box18").val();
        if (sel != "pMx") {
            $("#box18_2").show();
        } else {
            $("#box18_2").hide();
        }
    });


    $('#box21').on("input", function () {
        setTimeout(100);
        var num =  parseInt($('#box21').val());
        if (num > 0) {
            $('.posnodes').show();
        } else {
            $('.posnodes').hide();
        }
    });

    $('#box22').on("change", function () {
        var sel = $('#box22').val();
        var ing = sel.filter(function (el) {
                            return el.indexOf('Inguinal') > -1;
                        });
        if ($.inArray('Other', sel) > -1) {
            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
        if (ing.length > 0) {
            $('.inguinal').show();
        } else {
            $('.inguinal').hide();
        }

    });

    $('#box28').on("change", function () {
        var sel = $('#box28').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box28_2').show();
        } else {
            $('#box28_2').hide();
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


        var captext = "Penis Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nForeskin:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Site:\n- " + box_3.join('\n- ') + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Size: " + box_4.replace(/cm/, '') + "cm\n";

        var box_5 = $("#box5").val();
        if (box_5.length > 0) {
            captext += "\n+ Tumor Focality:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.length > 0) {
            if ($.inArray('Other', box_6) > -1) {
                captext += "\n+ Tumor Macroscopic Features:\n- " + box_6.join('\n- ').replace(/Other/, box_6_2) + "\n";
            } else {
                captext += "\n+ Tumor Macroscopic Features:\n- " + box_6.join('\n- ') + "\n";
            }
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7.indexOf("Adnexal") > -1) {
            captext += "\nHistologic Type:\n- " + box_7 + ": " + box_7_2 + "\n";
        } else if (box_7.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_7 + "\n- " + box_7_3 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        captext += "\nHistologic Grade:\n- " + box_8 + "\n";

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        var trig1_box_9 = box_9.filter(function (el) {
            return el.indexOf("adjacent") > -1;
        });
        var trig2_box_9 = box_9.filter(function (el) {
            return el.indexOf("other") > -1;
        });
        if (trig1_box_9.length > 0 && trig2_box_9.length == 0) {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ").replace(/structures/, "structures: " + box_9_2) + "\n";
        } else if (trig1_box_9.length == 0 && trig2_box_9.length > 0) {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ").replace(/structures/, "structures: " + box_9_3) + "\n";
        } else if (trig1_box_9.length > 0 && trig2_box_9.length > 0) {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ").replace(/structures/, "structures: " + box_9_2).replace(/structures/, "structures: " + box_9_3) + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_9.join("\n- ") + "\n";
        }


        var box_30 = $("#box30").val();
        if (box_30.length > 0) {
            captext += "\n+ Tumor Thickness: "  + box_30.replace(/mm/,'') + "mm\n";
        }


        var box_10 = $("#box10").val();
        if (box_10.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- "+box_10+"\n";

            // penectomy
            var box_11 = $("#box11").val();
            var box_11_2 = $("#box11_2").val();
            if (box_11.indexOf('Not') < 0) {
                if (box_11.indexOf("Other") > -1) {
                    captext += "- Margins involved: " + box_11_2 + "\n";
                } else {
                    captext += "- Margins involved: " + box_11 + "\n";
                }
            }

            //circumcision
            var box_12 = $("#box12").val();
            if (box_12.indexOf('Not') < 0) {
                captext += "- Margins involved: " + box_12 + "\n";
            }
        } else {
            captext += "\nMargins:\n- " + box_10 + "\n";
        }

        var box_13 = $("#box13").val();
        captext += "\nLymphovascular Invasion:\n- " + box_13 + "\n";

        var box_14 = $("#box14").val();
        captext += "\nPerineural Invasion:\n- " + box_14 + "\n";


        if ($("#box19").is(':checked')) {
            var box_20 = $("#box20").val();
            var box_21 = $("#box21").val();
            var box_22 = $("#box22").val();
            var box_22_2 = $("#box22_2").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_20 + "\n\tLymph nodes involved: " + box_21 + "\n";

            if (box_21 != "0"){
                if ($.inArray('Other', box_22) > -1) {
                    captext += "\tLymph nodes sampled: " + box_22.join(', ').replace(/Other/, box_22_2) + "\n";
                } else {
                    captext += "\tLymph nodes sampled: " + box_22.join(', ') + "\n";
                }

                var box_23 = $("#box23").val();
                if (box_23 > 0) {
                    captext += "\tNumber of inguinal nodes involved: " + box_23 + "\n";
                }

                var box_25 = $("#box25").val();
                if (box_25.length > 0) {
                    captext += "\t+ Largest Metastatic Deposit: "  + box_25.replace(/cm/,'') + "cm\n";
                }

                var box_27 = $("#box27").val();
                captext += "\tExtranodal Extension: " + box_27 + "\n";
            }

        } else {
            captext += "\nLymph nodes: None submitted\n";
        }


        var box_15 = $("#box15").val();
        var box_16 = $("#box16").val();
        var box_17 = $("#box17").val();
        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_15 != "Not applicable") {
            if (box_18 != "pMx") {
                captext += box_15.join("") + " " + box_16 + " " + box_17 + " " + box_18 + " (metastatic site(s): " + box_18_2 + ")\n";
            } else {
                captext += box_15.join("") + " " + box_16 + " " + box_17 + " " + box_18 + "\n";
            }
        } else {
            if (box_18 != "pMx") {
                captext += box_16 + " " + box_17 + " " + box_18 + " (metastatic site(s): " + box_18_2 + ")\n";
            } else {
                captext += box_16 + " " + box_17 + " " + box_18 + "\n";
            }
        }

        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        if (box_28.length > 0) {
            if ($.inArray('Other', box_28) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_28.join('\n- ').replace(/Other/, box_28_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_28.join('\n- ') + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/20/2017.
 */