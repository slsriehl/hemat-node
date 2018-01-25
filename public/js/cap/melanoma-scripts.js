'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $('#box1').on("change", function () {
        var sela = $('#box1').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('regional nodes') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (trig1.length > 0) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (trig2.length > 0) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel.indexOf('in situ') < 0 && sel.indexOf('No residual') < 0) {
            $('.invasive').show();
        } else {
            $('.invasive').hide();
        }
        if (sel.indexOf("Other") > -1) {

            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box10').on("change", function () {
        var sela = $('#box10').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box10_1').show();
            $('#box10_2').show();
        } else {
            $('#box10_1').hide();
            $('#box10_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box10_3').show();
        } else {
            $('#box10_3').hide();
        }
    });

    $('#box11').on("change", function () {
        var sela = $('#box11').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box11_1').show();
            $('#box11_2').show();
        } else {
            $('#box11_1').hide();
            $('#box11_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box11_3').show();
        } else {
            $('#box11_3').hide();
        }
    });

    $('#box12').on("change", function () {
        var sela = $('#box12').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box12_1').show();
            $('#box12_2').show();
        } else {
            $('#box12_1').hide();
            $('#box12_2').hide();
        }
    });

    $('#box13').on("change", function () {
        var sel = $('#box13').val();
        if (sel.indexOf("least") > -1) {

            $('#box13_2').show();
        } else {
            $('#box13_2').hide();
        }
    });

    $("#box22").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box21").on("change", function () {
        var sel = $("#box21").val();
        if (sel != "pMx") {
            $("#box21_2").show();
        } else {
            $("#box21_2").hide();
        }
    });

    $("#box24").on("input", function () {
        setTimeout(100);
        var sel = parseInt($("#box24").val(), 10);
        if (sel > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
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



        var captext = "Cutaneous Melanoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        var trig1_box_1 = box_1.filter(function (el) {
            return el.indexOf("regional nodes") > -1;
        });
        var trig2_box_1 = box_1.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        if (trig1_box_1.length > 0 && trig2_box_1.length == 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/regional nodes/, "regional nodes: " + box_1_2) + "\n";
        } else if (trig1_box_1.length == 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/Other/, box_1_3) + "\n";
        } else if (trig1_box_1.length > 0 && trig2_box_1.length > 0) {
            captext += "\nProcedure:\n- " + box_1.join("\n- ").replace(/regional nodes/, "regional nodes: " + box_1_2).replace(/Other/, box_1_3) + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1.join("\n- ") + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nSpecimen Laterality:\n- " + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Site:\n- " + box_3 + "\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Size: " + box_4.replace(/mm/, '') + "mm\n";

        var box_5 = $("#box5").val();
        captext += "\nMacroscopic Satellite Nodule(s):\n- " + box_5 + "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_6 + "\n";
        }

        var type = $("#box6").find(":selected").data("type");
        if (type == "invasive"){
            captext += "\n-------------------------\n- Invasive Tumor Profile -\n";

            var box_7 = $("#box7").val();
            captext += "\nMaximum Tumor (Breslow) Thickness: " + box_7.replace(/mm/, '') + "mm\n";

            var box_13 = $("#box13").val();
            var box_13_2 = $("#box13_2").val();
            if (box_13.length  > 0){
                if (box_13.indexOf("least") > -1) {
                    captext += "\n+ Anatomic (Clark) Level: At least " + box_13_2 + ", (tumor transected)\n";
                } else {
                    captext += "\n+ Anatomic (Clark) Level: " + box_13 + "\n";
                }
            }

            var box_8 = $("#box8").val();
            captext += "\nUlceration: " + box_8 + "\n";

            var box_9 = $("#box9").val();
            captext += "\nMicrosatellite(s): " + box_9 + "\n";

            var box_14 = $("#box14").val();
            captext += "\nLymphovascular Invasion: " + box_14 + "\n";

            var box_15 = $("#box15").val();
            captext += "\nNeurotropism: " + box_15 + "\n";

            var box_16 = $("#box16").val();
            if (box_16.length  > 0){
                captext += "\n+ Tumor-Infiltrating Lymphocytes: " + box_16 + "\n";
            }


            captext += "\n-------------------------\n";
        }



        var box_10 = $("#box10").val();
        var box_10_1 = $("#box10_1").val();
        var box_10_2 = $("#box10_2").val();
        var box_10_3 = $("#box10_3").val();
        if (box_10.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Peripheral, Invasive component:\n- " + box_10 + "\n- Nearest margin: " + box_10_1 + "\n- Distance to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else if (box_10.indexOf("Involved") > -1) {
            captext += "\nMargins - Peripheral, Invasive component:\n- " + box_10 + "\n- Margin involved: " + box_10_3 + "\n";
        } else {
            captext += "\nMargins - Peripheral, Invasive component:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_11_1 = $("#box11_1").val();
        var box_11_2 = $("#box11_2").val();
        var box_11_3 = $("#box11_3").val();
        if (box_11.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Peripheral, In-situ component:\n- " + box_11 + "\n- Nearest margin: " + box_11_1 + "\n- Distance to this margin: " + box_11_2.replace(/mm/, "") + "mm\n";
        } else if (box_11.indexOf("Involved") > -1) {
            captext += "\nMargins - Peripheral, In-situ component:\n- " + box_11 + "\n- Margin involved: " + box_11_3 + "\n";
        } else {
            captext += "\nMargins - Peripheral, In-situ component:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if (box_12.indexOf("Uninvolved") > -1) {
            captext += "\nMargins - Deep, Invasive component:\n- " + box_12 + "\n- Distance to this margin: " + box_12_2.replace(/mm/, "") + "mm\n";
        } else {
            captext += "\nMargins - Deep, Invasive component:\n- " + box_12 + "\n";
        }


        var box_17 = $("#box17").val();
        captext += "\nTumor Regression:\n- " + box_17 + "\n";

        var box_18 = $("#box18").val();
        var box_19 = $("#box19").val();
        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_18 != "Not applicable") {
            if (box_21 != "pMx") {
                captext += box_18.join("") + " " + box_19 + " " + box_20 + " " + box_21 + " (metastatic site(s): " + box_21_2 + ")\n";
            } else {
                captext += box_18.join("") + " " + box_19 + " " + box_20 + " " + box_21 + "\n";
            }
        } else {
            if (box_21 != "pMx") {
                captext += box_19 + " " + box_20 + " " + box_21 + " (metastatic site(s): " + box_21_2 + ")\n";
            } else {
                captext += box_19 + " " + box_20 + " " + box_21 + "\n";
            }
        }
        if ($("#box22").is(':checked')) {
            var box_23 = $("#box23").val();
            var box_24 = $("#box24").val();
            var box_25 = $("#box25").val();

            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_23 + "\n\tLymph nodes involved: " + box_24 + "\n";
            captext += "\tNumber of Sentinel Nodes Examined: " + box_25 + "\n";
            if (box_25.length > 0) {
                var box_27 = $("#box27").val();
                captext += "\nNumber of Sentinel Nodes Involved:\n- " + box_27 + "\n";
            }
            if (box_24.length > 0) {
                var box_26 = $("#box26").val();
                captext += "\nMatted Nodes:\n- " + box_26 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});