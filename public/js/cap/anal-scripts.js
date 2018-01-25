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
        if ($.inArray('Other', sel) > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box2').on("change", function () {
        var sel = $('#box2').val().toLowerCase();
        var proc = $("#box2").find(":selected").data("proc");
        console.log(sel);
        if (sel.indexOf("other") > -1) {
            console.log("Other chosen");
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
            $(".resection").hide();
            $(".emr").hide();
            if (proc == "resection") {
                // resection
                $(".segmental").show();
                $(".emr").hide();
            } else {
                // emr
                $(".emr").show();
                $(".segmental").hide();
            }
        }
    });

    $('#box2_2').on("input", function () {
        var sel = $('#box2_2').val().toLowerCase();
        $(".resection").hide();
        $(".emr").hide();
        if (sel.indexOf("resection") > -1) {
            // whipple
            $(".segmental").show();
        } else {
            $(".segmental").hide();
        }
        if (sel.indexOf("mucosal") > -1) {
            // whipple
            $(".emr").show();
        } else {
            $(".emr").hide();
        }
    });

    $('#box3').on("change", function () {
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();
        } else {
            $('#box3_2').hide();
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

    $('#box11').on("change", function () {
        var sel = $('#box11').val();
        if (sel.indexOf("Other") > -1) {

            $('#box11_2').show();
        } else {
            $('#box11_2').hide();
        }
    });

    $('#box15').on("change", function () {
        var sel = $('#box15').val();
        if (sel.indexOf("Not") < 0) {

            $('#box15_2').show();
        } else {
            $('#box15_2').hide();
        }
    });

    $('#box16').on("change", function () {
        var sela = $('#box16').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box16_2').show();
        } else {
            ;
            $('#box16_2').hide();
        }
    });

    $('#box17').on("change", function () {
        var sela = $('#box17').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box17_2').show();
        } else {
            ;
            $('#box17_2').hide();
        }
        if (sela.indexOf("Cannot") < 0 && sela.indexOf("intramucosal") < 0) {
            $('#box17_3').show();
        } else {
            $('#box17_3').hide();
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
        if (sel != "pMx") {
            $("#box25_2").show();
        } else {
            $("#box25_2").hide();
        }
    });

    $('#box29').on("input", function () {
        setTimeout(100);
        var sel = parseInt($('#box29').val(), 10);
        if (sel > 0) {
            $('.posnodes').show();
        } else {
            $('.posnodes').hide();
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

    $('#box32').on("change", function () {
        var sel = $('#box32').val();
        if ($.inArray('Other', sel) > -1) {
            $('#box32_2').show();
        } else {
            $('#box32_2').hide();
        }
    });

    $('#box33').on("change", function () {
        var sela = $('#box33').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        var trig2 = sela.filter(function (el) {
            return el.indexOf('therapy') > -1;
        });
        if (trig1.length > 0) {
            $('#box33_2').show();
        } else {
            $('#box33_2').hide();
        }
        if (trig2.length > 0) {
            $('#box33_3').show();
        } else {
            $('#box33_3').hide();
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



        var captext = "Anal Carcinoma Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- " + box_2_2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_2 + "\n";
        }

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.length > 0) {
            if ($.inArray('Other', box_1) > -1) {
                captext += "\nSpecimen:\n- " + box_1.join('\n- ').replace(/Other/, box_1_2) + "\n";
            } else {
                captext += "\nSpecimen:\n- " + box_1.join('\n- ') + "\n";
            }
        }

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3.indexOf("Other") > -1) {
            captext += "\nSpecimen Integrity:\n- " + box_3_2 + "\n";
        } else {
            captext += "\nSpecimen Integrity:\n- " + box_3 + "\n";
        }

        var box_4 = $("#box4").val();
        var box_4_2 = $("#box4_2").val();
        if (box_4.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- " + box_4_2 + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_4 + "\n";
        }

        var box_5 = $("#box5").val();
        captext += "\nTumor Size: " + box_5.replace(/cm/, '') + "cm\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6.indexOf("Other") > -1) {
            captext += "\nHistologic Type:\n- " + box_6_2 + "\n";
        } else {
            captext += "\nHistologic Type:\n- " + box_6 + "\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Other") > -1) {
            captext += "\nHistologic Grade:\n- " + box_7_2 + "\n";
        } else {
            captext += "\nHistologic Grade:\n- " + box_7 + "\n";
        }

        var box_8 = $("#box8").val();
        captext += "\nTumor Extension:\n- " + box_8 + "\n";

        captext += "\nMargins:";
        // resection vars-------------------------//
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        var box_11_3 = $("#box11_3").val();
        var proc = $("#box2").find(":selected").data("proc");
        if (proc == 'resection') {
            if (box_10.indexOf("uninvolved") > -1) {
                captext += "- " + box_10 + "\n";
                if ($.inArray('Other', box_11) > -1) {
                    captext += "- Margins examined: " + box_11.join(', ').replace(/Other/, box_11_2) + "\n";
                    if (box_11_3.length  > 0){
                        captext += "- Distance of invasive carcinoma to closest margin: " + box_11_3.replace(/mm/, "") + "mm\n";
                    }

                } else {
                    captext += "- Margins examined: " + box_11.join(', ') + "\n";
                    if (box_11_3.length  > 0){
                        captext += "- Distance of invasive carcinoma to closest margin: " + box_11_3.replace(/mm/, "") + "mm\n";
                    }
                }
            } else {
                var box_12 = $("#box12").val();
                captext += "\nProximal Margin:\n- " + box_12.join("\n- ") + "\n";

                var box_13 = $("#box13").val();
                captext += "\nDistal Margin:\n- " + box_13.join("\n- ") + "\n";

                var box_14 = $("#box14").val();
                captext += "\nCircumferential Margin:\n- " + box_14 + "\n";

                var box_15 = $("#box15").val();
                var box_15_2 = $("#box15_2").val();
                if (box_15.indexOf('Not') < 0) {
                    captext += "\n" + box_15_2 + " Margin:\n- " + box_15 + "\n";
                }
            }
        } else {
            // emr vars ---------------------------------------------//

            var box_16 = $("#box16").val();
            var box_16_2 = $("#box16_2").val();
            if (box_16.indexOf("Uninvolved") > -1) {
                captext += "\nDeep Margin:\n- " + box_16 + "\n- Distance of invasive carcinoma to deep margin: " + box_16_2.replace(/mm/, "") + "mm\n";
            } else {
                captext += "\nDeep Margin:\n-  " + box_16 + "\n";
            }

            var box_17 = $("#box17").val();
            var box_17_2 = $("#box17_2").val();
            var box_17_3 = $("#box17_3").val();
            var box_18 = $("#box18").val();
            var dys = box_18.filter(function (el) {
                        return el.indexOf('Uninvolved') > -1;
                    });
            if (box_17.indexOf("Cannot") < 0) {
                captext += "\nMucosal Margin:\n- " + box_17 + "\n";
                if (box_17.indexOf("intramucosal") < 0) {
                    if (dys.length == 0) {
                        captext += "- Involved by " + box_18.join(' and ') + "\n";
                    } else {
                        captext += "- " + box_18 + "\n";
                    }
                    captext += "- Distance of invasive carcinoma to mucosal margin: " + box_17_2.replace(/mm/, "") + "mm\n";
                } else {
                    captext += "- Distance of invasive carcinoma to mucosal margin: " + box_17_2.replace(/mm/, "") + "mm\n";
                }
            } else {
                captext += "\nMucosal Margin:\n- " + box_17 + "\n";
            }
        }

        var box_19 = $("#box19").val();
        captext += "\nTreatment Effect:\n- " + box_19 + "\n";

        var box_20 = $("#box20").val();
        if (box_20.length  > 0){
            captext += "\n+ Lymphovascular Invasion:\n- " + box_20 + "\n";
        }

        var box_21 = $("#box21").val();
        if (box_21.length  > 0){
            captext += "\n+ Perineural Invasion:\n- " + box_21 + "\n";
        }

        var box_22 = $("#box22").val();
        var box_23 = $("#box23").val();
        var box_24 = $("#box24").val();
        var box_25 = $("#box25").val();
        var box_25_2 = $("#box25_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_22 != "Not applicable") {
            if (box_25 != "pMx") {
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
            var box_29 = $("#box29").val();
            var box_30 = $("#box30").val();
            var box_31 = $("#box31").val();
            var box_31_2 = $("#box31_2").val();
            captext += "\nLymph nodes:\n\tExternal Iliac Lymph Nodes Examined: " + box_27 + "\n\tExternal Iliac Lymph nodes Involved: " + box_28 + "\n";

            if (parseInt(box_29, 10) > 0) {
                if ($.inArray('Other', box_31) > -1) {
                    captext += "\n\tOther Regional Lymph Nodes Examined: " + box_29 + "\n\tOther Regional Lymph nodes Involved: " + box_30 + "\n\tRegional Node Sites: " + box_31.join(", ").replace(/Other/, box_31_2) + "\n";
                } else {
                    captext += "\n\tOther Regional Lymph Nodes Examined: " + box_29 + "\n\tOther Regional Lymph nodes Involved: " + box_30 + "\n\tRegional Node Sites: " + box_31.join(", ") + "\n";
                }
            }
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_32 = $("#box32").val();
        var box_32_2 = $("#box32_2").val();
        if (box_32.length  > 0){
            if ($.inArray('Other', box_32) > -1) {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_32.join('\n- ').replace(/Other/, box_32_2) + "\n";
            } else {
                captext += "\n+ Additional Pathologic Findings:\n- " + box_32.join('\n- ') + "\n";
            }
        }

        var box_33 = $("#box33").val();
        var box_33_2 = $("#box33_2").val();
        var box_33_3 = $("#box33_3").val();
        var trig1_box_33 = box_33.filter(function (el) {
            return el.indexOf("Other") > -1;
        });
        var trig2_box_33 = box_33.filter(function (el) {
            return el.indexOf("therapy") > -1;
        });
        if (box_33.length  > 0){
            if (trig1_box_33.length > 0 && trig2_box_33.length == 0) {
                captext += "\n+ Clinical History:\n- " + box_33.join("\n- ").replace(/Other/, box_33_2) + "\n";
            } else if (trig1_box_33.length == 0 && trig2_box_33.length > 0) {
                captext += "\n+ Clinical History:\n- " + box_33.join("\n- ").replace(/therapy/, box_33_3) + "\n";
            } else if (trig1_box_33.length > 0 && trig2_box_33.length > 0) {
                captext += "\n+ Clinical History:\n- " + box_33.join("\n- ").replace(/Other/, box_33_2).replace(/therapy/, box_33_3) + "\n";
            } else {
                captext += "\n+ Clinical History:\n- " + box_33.join("\n- ") + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 1/2/2018.
 */