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
        if (sel.indexOf("Other") > -1) {

            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box5').on("change", function () {
        var sel = $('#box5').val();
        var filt = sel.filter(function (el) {
            return el.indexOf('Nodular') > -1;
        });
        if (filt.length > 0) {
            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf("Present") > -1) {

            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
    });

    $('#box10').on("change", function () {
        var sel = $('#box10').val();
        if (sel.indexOf("present") > -1) {

            $('#box10_2').show();
        } else {
            $('#box10_2').hide();
        }
    });

    $("#box12").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $("#box14").on("input", function () {
        setTimeout(100);
        var sel = $(this).val();
        if (sel > 0) {
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
        }
    });

    $('#box16').on("change", function () {
        var sel = $('#box16').val();
        if (sel.indexOf("Present") > -1) {

            $('#box16_2').show();
        } else {
            $('#box16_2').hide();
        }
    });

    $('#box21').on("change", function () {
        var sel = $('#box21').val();
        if (sel == 'Other') {
            $('#box21_2').show();
        } else {
            $('#box21_2').hide();
        }
    });

    $('#box22').on("change", function () {
        var sel = $('#box22').val();
        if (sel == 'Other') {
            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
    });

    $('#box23').on("change", function () {
        var sel = $('#box23').val();
        if (sel == 'Other') {
            $('#box23_2').show();
        } else {
            $('#box23_2').hide();
        }
    });

    $('#box24').on("change", function () {
        var sel = $('#box24').val();
        if (sel == 'Other') {
            $('#box24_2').show();
        } else {
            $('#box24_2').hide();
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



        var captext = "Neuroblastoma Tumor Synoptic\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nSpecimen:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nSpecimen:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        captext += "\nPatient Age:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if ($.inArray('Nodular', box_5) > -1) {
            captext += "\nHistologic Type:\n- " + box_5.join('\n- ').replace(/Nodular/, "Nodular: " + box_5_2) + " nodules\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5.join('\n- ') + "\n";
        }

        var box_6 = $("#box6").val();
        if (box_6 != "Not applicable") {
            captext += "\nDegree of Differentiation:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        if (box_7 != "Not applicable") {
            captext += "\nMitotic-Karyorrhectic Index:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        captext += "\nTreatment History:\n- " + box_8 + "\n";

        var box_9 = $("#box9").val();
        if (box_9.length  > 0){
            var box_9_2 = $("#box9_2").val();
            if (box_9.indexOf("Present") > -1) {
                captext += "\n+ Treatment Effect:\n- Present with: " + box_9_2 + "% tumor necrosis\n";
            } else {
                captext += "\n+ Treatment Effect:\n- " + box_9 + "\n";
            }
                }

        var box_11 = $("#box11").val();
        captext += "\nPrimary Tumor Extent:\n- " + box_11 + "\n";


        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        var str = box_10_2.split(",");
        if (box_10.indexOf("present") > -1) {
            captext += "\nInternational Neuroblastoma Pathology Classification:\n- Multiple tumors:\n\t- " + str.join("\n\t-") + "\n";
        } else {
            captext += "\nInternational Neuroblastoma Pathology Classification:\n- " + box_10 + "\n";
        }

        var box_25 = $("#box25").val();
        if (box_25 != "Not applicable") {
            captext += "\nINRG staging system:\n- " + box_25 + "\n";
        }


        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        if (box_13 > 0) {
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_13 + "\n\tLymph nodes involved: " + box_14 + "\n";
            if (box_14 > 0) {
                var box_15 = $("#box15").val();
                captext += "\n\tSpecify involved lymph nodes: " + box_15 + "\n";
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_16 = $("#box16").val();
        var box_16_2 = $("#box16_2").val();
        if (box_16 != "Not applicable") {
            if (box_16.indexOf("Present") > -1) {
                captext += "\nDistant Metastasis:\n- Present: " + box_16_2 + "\n";
            } else {
                captext += "\nDistant Metastasis:\n- " + box_16 + "\n";
            }
        }

        captext += '\nRELEVANT BIOMARKER RESULTS\n';
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        if (box_21 == 'Other') {
            captext += "\nMYCN Status:\n- " + box_21_2 + "\n";
        } else {
            captext += "\nMYCN Status:\n- " + box_21 + "\n";
        }

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if (box_22 == 'Other') {
            captext += "\nLOH Status:\n- " + box_22_2 + "\n";
        } else {
            captext += "\nLOH Status:\n- " + box_22 + "\n";
        }

        var box_23 = $("#box23").val();
        var box_23_2 = $("#box23_2").val();
        if (box_23 == 'Other') {
            captext += "\nPloidy:\n- " + box_23_2 + "\n";
        } else {
            captext += "\nPloidy:\n- " + box_23 + "\n";
        }

        var box_24 = $("#box24").val();
        var box_24_2 = $("#box24_2").val();
        if (box_24 != "Not applicable") {
            if (box_24 == 'Other') {
                captext += "\nAlk status:\n- " + box_24_2 + "\n";
            } else {
                captext += "\nAlk status:\n- " + box_24 + "\n";
            }
        }


        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by chandrakrishnan on 5/7/2017.
 */