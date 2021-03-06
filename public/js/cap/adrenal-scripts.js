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
        if (sel.indexOf('directed biopsy') > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
        if (sel.indexOf('Other') > -1) {
            $('#box1_3').show();
        } else {
            $('#box1_3').hide();
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
        if (sel.indexOf("Other") > -1) {

            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box8').on("change", function(){
        var sela = $('#box8').val();
        var trig1 = sela.filter(el => el.indexOf('structures') > -1);
        var trig2 = sela.filter(el => el.indexOf('organs') > -1);
        if (trig1.length > 0) {
            $('#box8_2').show();}
        else {$('#box8_2').hide();}
        if (trig2.length > 0) {
            $('#box8_3').show();}
        else {$('#box8_3').hide();}
    });

    $('#box9').on("change", function () {
        var sela = $('#box9').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box9_1').show();
            $('#box9_2').show();
        } else {
            $('#box9_1').hide();
            $('#box9_2').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box9_3').show();
        } else {
            $('#box9_3').hide();
        }
    });

    $("#box14").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });


    $("#box13").on("change", function () {
        var sel = $("#box13").val();
        if (sel != "pMx") {
            $("#box13_2").show();
        } else {
            $("#box13_2").hide();
        }
    });

    $('#box17').on("change", function () {
        var sel = $('#box17').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box17_2').show();
        } else {
            $('#box17_2').hide();
        }
    });

    $('#box18').on("change", function () {
        var sel = $('#box18').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box18_2').show();
        } else {
            $('#box18_2').hide();
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



        var captext = "Adrenal Carcinoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1.indexOf("directed biopsy") > -1) {
            captext += "\nProcedure:\n- " + box_1 + "\n- Endoscopic directed biopsy via: " + box_1_2 + "\n";
        } else if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_1 + "\n- " + box_1_3 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nSpecimen Laterality:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nSpecimen Laterality:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Weight: " + box_4 + "g\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        captext += "\nHistologic Grade:\n- " + box_6 + "\n";

        var box_7 = $("#box7").val();
        captext += "\nLymphovascular Invasion:\n- " + box_7.join('\n- ') + "\n";

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        var trig1_box_8 = box_8.filter(el => el.indexOf("structures") > -1);
        var trig2_box_8 = box_8.filter(el => el.indexOf("organs") > -1);
        if ((trig1_box_8.length > 0 ) && (trig2_box_8.length == 0  )) {
            captext += "\nTumor Extension:\n- "+box_8.join("\n- ").replace(/structures/, "structures: "+box_8_2)+"\n";}
        else if ((trig1_box_8.length == 0 ) && (trig2_box_8.length > 0  )) {
            captext += "\nTumor Extension:\n- "+box_8.join("\n- ").replace(/organs/, "organs: "+box_8_3)+"\n";}
        else if ((trig1_box_8.length > 0 ) && (trig2_box_8.length > 0  )) {
            captext += "\nTumor Extension:\n- "+box_8.join("\n- ").replace(/structures/, "structures: "+box_8_2).replace(/organs/, "organs: "+box_8_3)+"\n";}
        else {captext += "\nTumor Extension:\n- "+box_8.join("\n- ")+"\n";}

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_9 + "\n- Nearest margin: " + box_9_1 + "\n- Distance to this margin: " + box_9_2.replace(/mm/, "") + "mm\n";
        } else if (box_9.indexOf("Involved") > -1) {
            captext += "\nMargins:\n- " + box_9 + "\n- Margin involved: " + box_9_3 + "\n";
        } else {
            captext += "\nMargins:\n- " + box_9 + "\n";
        }

        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            var box_16_2 = $("#box16_2").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_15 + "\n\tLymph nodes involved: " + box_16 + "\n";
            if(box_16_2 != "Not applicable"){
                captext += "\t+ Extranodal extension: "  + box_16_2+ "\n";}

        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        if ($("#box14").is(":checked")) {
            var box14_1_1 = $("#box14_1").val();
            var box14_2_2 = $("#box14_2").val();
            var box14_3_3 = $("#box14_3").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box14_1_1 + "\n\tLymph nodes involved: " + box14_2_2 + "\n";
            if(box14_3_3 != "Not applicable"){
            captext += "\t+ Extranodal extension: "  + box14_3_3 + "\n"};
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable") {
            if (box_13 != "pMx") {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_10.join("") + " " + box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        } else {
            if (box_13 != "pMx") {
                captext += box_11 + " " + box_12 + " " + box_13 + " (metastatic site(s): " + box_13_2 + ")\n";
            } else {
                captext += box_11 + " " + box_12 + " " + box_13 + "\n";
            }
        }


        var box_17 = $("#box17").val();
        var box_17_2 = $("#box17_2").val();
        if (box_17.length  > 0){
            if ($.inArray('Other', box_17) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_17.join('\n- ').replace(/Other/, box_17_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_17.join('\n- ') + "\n";
            }
        }

        var box_18 = $("#box18").val();
        var box_18_2 = $("#box18_2").val();
        if (box_18.length  > 0){
            if ($.inArray("Not applicable", box_18) == -1) {
                if ($.inArray('Other', box_18) > -1) {
                    captext += "\n+ Functional Status (select all that apply:\n- " + box_18.join('\n- ').replace(/Other/, box_18_2) + "\n";
                } else {
                    captext += "\n+ Functional Status (select all that apply:\n- " + box_18.join('\n- ') + "\n";
                }
            }
        }

        var box_19 = $("#box19").val();
        if (box_19.length  > 0){
            captext += "\n+ Ki67 proliferaiton index:\n- " + box_19 + "%\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 1/3/2018.
 */