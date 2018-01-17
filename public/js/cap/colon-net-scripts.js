'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/

    $('#box1').on("change", function () {
        var site = $('#box1').find(':selected').data("location");
        console.log(site);
        if (site == "resection") {
            // resection
            $(".segmental").show();
            $(".emr").hide();
        } else {
            $(".emr").show();
            $(".segmental").hide();
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

    $('#box8').on("change", function () {
        var sel = $('#box8').val();
        if (sel.indexOf("structures") > -1) {

            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box10').on("change", function () {
        var sel = $('#box10').val();
        if (sel.indexOf('uninvolved') > -1) {
            $('.negmargins').show();
            $('.posmargins').hide();
        } else {
            $('.negmargins').hide();
            $('.posmargins').show();
        }
    });

    $('#box22').on("change", function () {
        var sel = $('#box22').val();
        if (sel.indexOf("Not") < 0) {
            $('#box22_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $("#box29").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box28").on("change", function () {
        var sel = $("#box28").val();
        if (sel == "pMx") {
            $("#box28_2").hide();
        } else {
            $("#box28_2").show();
        }
    });

    $('#box32').on("change", function () {
        var sel = $('#box32').val();
        if (sel.indexOf("Other") > -1) {

            $('#box32_2').show();
        } else {
            $('#box32_2').hide();
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



        var captext = "Colorectal Neuroendocrine Tumor Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        captext += "\nTumor Site:\n- " + box_2.join('\n- ') + "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Multifocal") > -1) {
            captext += "\nTumor Focality:\n- Multifocal: " + box_4_2 + "tumors\n";
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
        var box_8_2 = $("#box8_2").val();
        if (box_8.indexOf("structures") > -1) {
            captext += "\nTumor Extension:\n- " + box_8.replace(/structures/, "structures: " + box_8_2) + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_8 + "\n";
        }

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        var site = $("#box1").find(":selected").data("location");
        if (box_10.indexOf("uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_10;
            if ($.inArray('Other', box_11) > -1) {
                captext += "\n- Margins examined: " + box_11.join(', ').replace(/Other/, box_11_2) ;
            } else {
                captext += "\n- Margins examined: " + box_11.join(', ') ;
            }
        } else if (box_10.indexOf("involved") > -1) {
            captext += "\nMargins:";
            console.log("margins involved");
            if (site.indexOf('resection') > -1) {
                // segmental resection
                var box_12 = $("#box12").val();
                captext += "\n- Proximal: " + box_12 ;

                var box_13 = $("#box13").val();
                captext += "\n- Distal: " + box_13 ;

                var box_14 = $("#box14").val();
                captext += "\n- Radial: " + box_14 ;
            } else {
                // emr
                var box_20 = $("#box20").val();
                captext += "\n- Mucosal: " + box_20 ;

                var box_21 = $("#box21").val();
                captext += "\n- Deep: " + box_21 ;
            }
        }

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if (box_22.indexOf('Not') < 0) {
            captext += "\n- " + box_22_2 + ": " + box_22;
        }

        var box_23 = $("#box23").val();
        captext += "\n\nLymphovascular Invasion:\n- " + box_23 + "\n";

        var box_24 = $("#box24").val();
        if (box_24.length  > 0){
            captext += "\n+ Perineural Invasion:\n- " + box_24 + "\n";
        }

        var box_25 = $("#box25").val();
        var box_26 = $("#box26").val();
        var box_27 = $("#box27").val();
        var box_28 = $("#box28").val();
        var box_28_2 = $("#box28_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_25 != "Not applicable") {
            if (box_28 != "pMx") {
                captext += box_25.join("") + " " + box_26 + " " + box_27 + " " + box_28 + " (metastatic site(s): " + box_28_2 + ")\n";
            } else {
                captext += box_25.join("") + " " + box_26 + " " + box_27 + " " + box_28 + "\n";
            }
        } else {
            if (box_28 != "pMx") {
                captext += box_26 + " " + box_27 + " " + box_28 + " (metastatic site(s): " + box_28_2 + ")\n";
            } else {
                captext += box_26 + " " + box_27 + " " + box_28 + "\n";
            }
        }
        if ($("#box29").is(':checked')) {
            var box_30 = $("#box30").val();
            var box_31 = $("#box31").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_30 + "\n\tLymph nodes involved: " + box_31 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_32 = $("#box32").val();
        var box_32_2 = $("#box32_2").val();
        if (box_32.length  > 0){
            if (box_32.indexOf("Other") > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_32_2 + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_32 + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/30/2017.
 */