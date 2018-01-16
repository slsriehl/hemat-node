'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/


    $('#box2').change(function () {
        var sel = $('#box2').val();
        if (sel == 'Other') {
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box6').change(function () {
        var sel = $('#box6').val();
        if (sel == 'Other') {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
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

        var captext = "Plasmacytoma Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        captext += "\nSpecimen:\n- " + box_1 + ": " + box_1_2 + "\n";

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other') {
            captext += "\nProcedure:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        if (box_3.length > 0) {
            captext += "\n+ Tumor size:\n- " + box_3.replace(/cm/, '') + "cm\n";
        } else {
            captext += "\n+ Tumor size: Cannot be determined\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nCytology:\n- " + box_4 + "\n";

        var box_5 = $("#box5").val();
        captext += "\nImmunoglobulin deposits:\n- " + box_5 + "\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == 'Other') {
            captext += "\nWHO Classification Subtype:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nWHO Classification Subtype:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        captext += "\nImmunoglobulin light-chain type:\n- " + box_7 + "\n";

        var box_8 = $("#box8").val();
        if (box_8.length > 0) {
            captext += "\n+ Cytogenetic results:\n- " + box_8.join('\n- ') + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});