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
            if (sel.indexOf("segmental") > -1 || sel.indexOf("cyst") > -1) {
                $(".segmental").show();
            } else {
                $(".segmental").hide();
            }
            if (sel.indexOf("hilar") > -1) {
                console.log("hilar done");
                $(".partial").show();
                $(".bileduct").show();
            } else if (sel.indexOf("total") > -1) {
                $(".bileduct").show();
            } else {
                $(".partial").hide();
                $(".bileduct").hide();
            }
        }
    });

    $('#box1_2').on("input", function () {
        var sel = $('#box1_2').val().toLowerCase();
        if (sel.indexOf("segmental") > -1 || sel.indexOf("cyst") > -1) {
            $(".segmental").show();
        } else {
            $(".segmental").hide();
        }
        if (sel.indexOf("hilar") > -1) {
            console.log("hilar done");
            $(".partial").show();
            $(".bileduct").show();
        } else if (sel.indexOf("total") > -1) {
            $(".bileduct").show();
        } else {
            $(".partial").hide();
            $(".bileduct").hide();
        }
    });

    $('#box4').on("change", function () {
        var sel = $('#box4').val();
        if (sel.indexOf("Other") > -1) {

            $('#box4_2').show();
        } else {
            $('#box4_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sela = $('#box7').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        if (neg.length > 0) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved') > -1;
        });
        if (neg.length > 0 && pos.length == 0) {
            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box9').on("change", function () {
        var sel = $('#box9').val();
        if (sel.indexOf("Uninvolved") > -1) {

            $('#box9_2').show();
        } else {
            $('#box9_2').hide();
        }
    });

    $('#box10').on("change", function () {
        var sela = $('#box10').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved') > -1;
        });
        if (neg.length > 0 && pos.length == 0) {
            $('#box10_2').show();
        } else {
            $('#box10_1').hide();
            $('#box10_2').hide();
        }
    });

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        if (sel.indexOf("Uninvolved") > -1) {

            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $('#box12').on("change", function () {
        var sel = $('#box12').val();
        if (sel.indexOf("Not") < 0) {

            $('#box12_2').show();
        } else {
            $('#box12_2').hide();
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
                $(this).addClass('empty');
                $('#cap-valid').show();
            }
        });

        // ***************** END VALIDATION ********************//


        var captext = "Perihilar Bile Duct Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

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
        if (box_4.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_4_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        if (box_5 != "Not applicable") {
            captext += "\nHistologic Grade:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        captext += "\nTumor Extension:\n- " + box_6.join('\n- ') + "\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var negbox_7 = box_7.filter(function (el) {
            return el.indexOf("Uninvolved") > -1;
        });
        var posbox_7 = box_7.filter(function (el) {
            return el.indexOf("Involved") > -1;
        });
        if (negbox_7.length > 0 && posbox_7.length == 0) {
            captext += "\nProximal Margin:\n- " + box_7 + "\n- Distance of invasive carcinoma to this margin: " + box_7_2.replace(/mm/, "") + "mm\n";
        } else if (negbox_7.length == 0 && posbox_7.length > 0) {
            captext += "\nProximal Margin:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        var negbox_8 = box_8.filter(function (el) {
            return el.indexOf("Uninvolved") > -1;
        });
        var posbox_8 = box_8.filter(function (el) {
            return el.indexOf("Involved") > -1;
        });
        if (negbox_8.length > 0 && posbox_8.length == 0) {
            captext += "\nDistal Margin:\n- " + box_8 + "\n- Distance of invasive carcinoma to this margin: " + box_8_2.replace(/mm/, "") + "mm\n";
        } else if (negbox_8.length == 0 && posbox_8.length > 0) {
            captext += "\nDistal Margin:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_2 = $("#box9_2").val();
        if (box_9.indexOf("Uninvolved") > -1) {
            captext += "\nHepatic Parenchymal Margin:\n- " + box_9 + "\n- Distance of invasive carcinoma to this margin: " + box_9_2.replace(/mm/, '') + "mm\n";
        } else {
            captext += "\nHepatic Parenchymal Margin:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        var box_10_2 = $("#box10_2").val();
        var negbox_10 = box_10.filter(function (el) {
            return el.indexOf("Uninvolved") > -1;
        });
        var posbox_10 = box_10.filter(function (el) {
            return el.indexOf("Involved") > -1;
        });
        if (negbox_10.length > 0 && posbox_10.length == 0) {
            captext += "\nBile Duct Margin:\n- " + box_10 + "\n- Distance of invasive carcinoma to this margin: " + box_10_2.replace(/mm/, "") + "mm\n";
        } else if (negbox_10.length == 0 && posbox_10.length > 0) {
            captext += "\nBile Duct Margin:\n- " + box_10 + "\n";
        }

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if (box_11.indexOf("Uninvolved") > -1) {
            captext += "\nRadial Margin:\n- " + box_11 + "\n- Distance of invasive carcinoma to this margin: " + box_11_2.replace(/mm/, '') + "mm\n";
        } else {
            captext += "\nRadial Margin:\n- " + box_11 + "\n";
        }

        var box_12 = $("#box12").val();
        var box_12_2 = $("#box12_2").val();
        if (box_12.indexOf("Not") < 0) {
            captext += "\n" + box_12_2 + " Margin:\n- " + box_12 + "\n";
        }

        var box_13 = $("#box13").val();
        captext += "\nLymphovascular Invasion:\n- " + box_13 + "\n";

        var box_14 = $("#box14").val();
        captext += "\nPerineural Invasion:\n- " + box_14 + "\n";

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
        if ($("#box19").is(':checked')) {
            var box_20 = $("#box20").val();
            var box_21 = $("#box21").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_20 + "\n\tLymph nodes involved: " + box_21 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if ($.inArray('Other', box_22) > -1) {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_22.join('\n- ').replace(/Other/, box_22_2) + "\n";
        } else {
            captext += "\n+ Additional Pathologic Findings:\n- " + box_22.join('\n- ') + "\n";
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 12/19/2017.
 */