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


        var captext = "Urinary Bladder (Biopsy/TURBT) Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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

        // var box_3 = $("#box3").val();
        // captext += "\nTumor Size: " + box_3.replace(/cm/, '') + "cm\n";

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if ($.inArray('Other', box_4) > -1) {
            captext += "\nHistologic Type:\n- " + box_4.join('\n- ').replace(/Other/, box_4_2) + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4.join('\n- ') + "\n";
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

        var box_9 = $("#box9").val();
        captext += "\nMuscularis Propria Presence:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        captext += "\nTumor Extension:\n- " + box_10 + "\n";

        var box_11 = $("#box11").val();
        captext += "\nLymphovascular Invasion:\n- " + box_11 + "\n";

        /*  Removed from 2020 protocol
            var box_12 = $("#box12").val();
            var box_13 = $("#box13").val();
            var box_14 = $("#box14").val();
            captext += '\nPathologic Staging (pTNM):\n- ';
            if (box_12 != "Not applicable") {
                captext += box_12.join("") + ' ' + box_13 + " " + box_14 + "\n";
            } else {
                captext += box_13 + " " + box_14  + "\n";
            }
        */
        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 11/23/2017.
 */