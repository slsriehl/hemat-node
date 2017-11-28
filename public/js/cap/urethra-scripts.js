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

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
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
        if (sel.indexOf("Other") > -1) {

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
        if (sel.indexOf("Other") > -1) {

            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf("Other") > -1) {

            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
    });

    $('#box10').on("change", function () {
        var sel = $('#box10').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box10_2').show();
        } else {
            $('#box10_2').hide();
        }
    });

    $("#box16").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $('#box19').on("change", function () {
        var sel = $('#box19').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box19_2').show();
        } else {
            $('#box19_2').hide();
        }
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('.writeReport').on('click', function () {

        // ***************** INPUT VALIDATION ********************//
        $('select[multiple]:visible').each(function () {
            // Check if at least one selection is made
            if ($(this).val().length > 0) {
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        $('input[type="text"]:visible').each(function () {
            // Check if at least one selection is made
            if ($.trim($(this).val()).length > 0) {
                $(this).removeClass('empty');
            } else {
                if ($(this).attr('placeholder').indexOf('applicable') < 0) {
                    $(this).addClass('empty');
                    $('#cap-valid').show();
                }
            }
        });

        // ***************** END VALIDATION ********************//
        var captext = "Urethral Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }


        var box_2 = $("#box2").val();
        captext += "\n+ Tumor Size:\n- " + box_2.replace(/cm/, '') + "cm\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) > -1) {
            captext += "\nHistologic Type:\n- " + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_3.join('\n- ') + "\n";
        }

        var box_4 = $("#box4").val();
        if ($.inArray("Not applicable", box_4) == -1) {
            captext += "\n+ Associated Epithelial Lesions:\n- " + box_4.join('\n- ') + "\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5 == 'Other') {
            captext += "\nHistologic Grade:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic Grade - For urothelial carcinoma, other variants, or divergent differentiation:\n- " + box_5 + "\n";
        }


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == 'Other') {
            captext += "\nHistologic Grade - For squamous cell carcinoma or adenocarcinoma:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nHistologic Grade - For squamous cell carcinoma or adenocarcinoma:\n- " + box_6 + "\n";
        }


        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 != "Not applicable") {
            if (box_7.indexOf("Other") > -1) {
                captext += "\nTumor Extension:\n- " + box_7_2 + "\n";
            } else {
                captext += "\nTumor Extension:\n- " + box_7 + "\n";
            }
        }


        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        if (box_8 != "Not applicable") {
            if (box_8.indexOf("Other") > -1) {
                captext += "\nTumor Extension:\n- " + box_8_2 + "\n";
            } else {
                captext += "\nTumor Extension:\n- " + box_8 + "\n";
            }
        }


        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9 != "Not applicable") {
            if (box_9.indexOf("Other") > -1) {
                captext += "\nTumor Extension:\n- " + box_9_2 + "\n";
            } else {
                captext += "\nTumor Extension - For Female:\n- " + box_9 + "\n";
            }
        }


        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        if (box_10_2.length > 0) {
            box_10.replace('Other', box_10_2);
        }
        var inv = box_10.filter(el = > el.indexOf('Invasive') > -1
        )
        ; // FILTER KEYWORD #1
        $.each(inv, function (index, value) {
            var str = "Invasive carcinoma involving:"; // REPLACE TERM FOR FILTERED SET
            inv[index] = value.replace(str, '');
        });
        var cis = box_10.filter(el = > el.indexOf('situ') > -1
        )
        ;// FILTER KEYWORD #2
        $.each(cis, function (index, value) {
            var str = "In situ/noninvasive high - grade urothelial carcinoma involving:"; // REPLACE TERM FOR FILTERED SET
            cis[index] = value.replace(str, '');
        });
        var dys = box_10.filter(el = > el.indexOf('dysplasia') > -1
        )
        ;// FILTER KEYWORD #3
        $.each(dys, function (index, value) {
            var str = "Noninvasive low-grade urothelial carcinoma/urothelial dysplasia involving: "; // REPLACE TERM FOR FILTERED SET
            dys[index] = value.replace(str, '');
        });
        captext += "\nMargins:";
        if (inv.length > 0) {
            captext += "\n- Invasive carcinoma involving: " + inv.join(', ') + "\n";
        }
        if (cis.length > 0) {
            captext += "\n- Carcinoma in situ involving: " + cis.join(', ') + "\n";
        }
        if (dys.length > 0) {
            captext += "\n- Low-grade urothelial dysplasia involving: " + dys.join(', ') + "\n";
        }
        else {
            captext += "\n- " + box_10.join('\n- ') + "\n";
        }


        var box_11 = $("#box11").val();
        captext += "\n+ Lymphovascular Invasion:\n- " + box_11 + "\n";

        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_14 = $("#box14").val();
        var box_15 = $("#box15").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_12 != "Not applicable") {
            captext += box_12.join("") + ' ' + box_13 + " " + box_14 + " " + box_15 + "\n";
        } else {
            captext += box_13 + " " + box_14 + " " + box_15 + "\n";
        }

        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_17 + "\n\tLymph nodes involved: " + box_18 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_19 = $("#box19").val();
        var box_19_2 = $("#box19_2").val();
        if ($.inArray("Not applicable", box_19) == -1) {
            if ($.inArray('Other', box_19) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join('\n- ').replace(/Other/, box_19_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_19.join('\n- ') + "\n";
            }
        }


        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


/**
 * Created by Chandra Krishnan on 11/27/2017.
 */
