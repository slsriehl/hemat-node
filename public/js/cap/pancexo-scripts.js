'use strict';

$(window).on('load', function () {
    //*************************************************************//
    //                        Autocomplete                         //
    // *************************************************************/


    //*************************************************************//
    //                        Pop-ups                              //
    // *************************************************************/


    $('#box2').on("change", function () {
        var sel = $('#box2').val().toLowerCase();
        console.log(sel);
        if (sel.indexOf("other") > -1) {
            console.log("Other chosen");
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
            $(".whipple").hide();
            $(".segmental").hide();
            if (sel.indexOf("whipple") < 0) {
                $(".segmental").show();
                $(".whipple").hide();
            } else {
                $(".segmental").hide();
                $(".whipple").show();
            }
        }
    });

    $('#box2_2').on("input", function () {
        var sel = $('#box2_2').val().toLowerCase();
        if (sel.indexOf("whipple") < 0) {
            $(".segmental").show();
            $(".whipple").hide();
        } else {
            $(".segmental").hide();
            $(".whipple").show();
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

    $('#box5').on("change", function () {
        var type = $('#box5').find(":selected").data("type");
        if (type == 'ductal') {
            $('.ductal').show();
        } else {
            $('.ductal').hide();
        }
    });

    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel == 'Other') {
            $('#box6_2').show();
        } else {
            $('#box6_2').hide();
        }
    });

    $('#box7').on("change", function () {
        var sela = $('#box7').val();
        var trig1 = sela.filter(function (el) {
            return el.indexOf('structures') > -1;
        });

        var trig2 = sela.filter(function (el) {
            return el.indexOf('soft tissue') > -1;
        });

        if (trig1.length > 0) {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
        if (trig2.length > 0) {
            $('#box7_3').show();
        } else {
            $('#box7_3').hide();
        }
    });

    $('#box14').on("change", function () {
        var sel = $('#box14').val();
        if (sel == 'Other') {
            $('#box14_2').show();
        } else {
            $('#box14_2').hide();
        }
    });

    $('#box16').on("change", function () {
        var sel = $('#box16').val();
        if (sel == 'Other') {
            $('#box16_2').show();
        } else {
            $('#box16_2').hide();
        }
    });

    $('#box20').on("change", function () {
        var sel = $('#box20').val();
        if (sel.indexOf('uninvolved') > -1) {
            $('#box20_2').show();
        } else {
            $('#box20_2').hide();
        }
        if (sel.indexOf('margin involved') > -1) {
            $('#box20_3').show();
        } else {
            $('#box20_3').hide();
        }
    });

    $('#box21').on("change", function () {
        var sel = $('#box21').val();
        var neg = sel.filter(function (el) {
            return el.indexOf('Other') > -1;
        });
        if (neg.length > 0) {
            $('#box21_2').show();
        } else {
            $('#box21_2').hide();
        }
    });

    $('#box22').on("change", function () {
        var sela = $('#box22').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved') > -1;
        });
        if (neg.length > 0) {
            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
    });

    $('#box23').on("change", function () {
        var sela = $('#box23').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved') > -1;
        });
        if (neg.length > 0) {
            $('#box23_2').show();
        } else {
            $('#box23_2').hide();
        }
    });

    $('#box24').on("change", function () {
        var sela = $('#box24').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved') > -1;
        });
        if (neg.length > 0) {
            $('#box24_2').show();
        } else {
            $('#box24_2').hide();
        }
    });

    $('#box25').on("change", function () {
        var sela = $('#box25').val();
        if (sela.indexOf('Uninvolved') > -1) {
            $('#box25_2').show();
        } else {
            $('#box25_2').hide();
        }
    });

    $('#box26').on("change", function () {
        var sela = $('#box26').val();
        var neg = sela.filter(function (el) {
            return el.indexOf('Uninvolved') > -1;
        });
        var pos = sela.filter(function (el) {
            return el.indexOf('Involved') > -1;
        });
        if (neg.length > 0) {

            $('#box26_2').show();
        } else {
            $('#box26_2').hide();
        }
    });

    $("#box34").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        } else {
            $(".lnchk").hide();
        }
    });

    $('#box29').on("change", function () {
        var sel = $('#box29').val();
        if (sel.indexOf("Not") < 0) {

            $('#box29_2').show();
        } else {
            $('#box29_2').hide();
        }
    });

    $("#box33").on("change", function () {
        var sel = $("#box33").val();
        if (sel != "pMx") {
            $("#box33_2").show();
        } else {
            $("#box33_2").hide();
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

        var captext = "Exocrine Pancreas Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_2 = $("#box2").val();
        var box__2 = $("#box_2").val();
        if (box_2 == 'Other') {
            captext += "\nProcedure:\n- " + box__2 + "\n";
        } else {
            captext += "\nProcedure:\n- " + box_2 + "\n";
        }

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if ($.inArray('Other', box_3) > -1) {
            captext += "\nTumor Site:\n- " + box_3.join('\n- ').replace(/Other/, box_3_2) + "\n";
        } else {
            captext += "\nTumor Site:\n- " + box_3.join('\n- ') + "\n";
        }

        var box_4 = $("#box4").val();
        captext += "\nTumor Size: " + box_4.replace(/cm/, '') + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if (box_5.indexOf("Other") > -1) {
            captext += "\nHistologic type:\n- " + box_5_2 + "\n";
        } else {
            captext += "\nHistologic type:\n- " + box_5 + "\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 != 'Not applicable') {
            if (box_6 == 'Other') {
                captext += "\nHistologic grade:\n- " + box_6_2 + "\n";
            } else {
                captext += "\nHistologic grade:\n- " + box_6 + "\n";
            }
        } else {
            captext += "\nTumor type not graded\n";
        }

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        var trig1_box_7 = box_7.filter(function (el) {
            return el.indexOf("structures") > -1;
        });
        var trig2_box_7 = box_7.filter(function (el) {
            return el.indexOf("soft tissue") > -1;
        });
        if (trig1_box_7.length > 0 && trig2_box_7.length == 0) {
            captext += "\nTumor Extension:\n- " + box_7.join("\n- ").replace(/structures/, "structures: " + box_7_2) + "\n";
        } else if (trig1_box_7.length == 0 && trig2_box_7.length > 0) {
            captext += "\nTumor Extension:\n- " + box_7.join("\n- ").replace(/soft tissue/, "soft tissues: " + box_7_3) + "\n";
        } else if (trig1_box_7.length > 0 && trig2_box_7.length > 0) {
            captext += "\nTumor Extension:\n- " + box_7.join("\n- ").replace(/structures/, "structures: " + box_7_2).replace(/soft tissue/, "soft tissues: " + box_7_3) + "\n";
        } else {
            captext += "\nTumor Extension:\n- " + box_7.join("\n- ") + "\n";
        }

        // margins
        var box_20 = $("#box20").val();
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();

        if (box_20.indexOf("uninvolved") > -1) {
            captext += "\nMargins:\n- " + box_20;
            if ($.inArray('Other', box_21) > -1) {
                captext += "\n- Margins examined:\n\t" + box_21.join('\n\t').replace(/Other/, box_21_2) + "\n";
            } else {
                captext += "\n- Margins examined:\n\t" + box_21.join('\n\t') + "\n";
            }
        } else if (box_20.indexOf("involved") > -1) {
            captext += "\nMargins:\n";

            // segemental
            if (box_2.indexOf('Whipple') < 0) {
                var box_22 = $("#box22").val();
                var box_22_2 = $("#box22_2").val();
                var negbox_22 = box_22.filter(function (el) {
                    return el.indexOf("Uninvolved") > -1;
                });
                var posbox_22 = box_22.filter(function (el) {
                    return el.indexOf("Involved") > -1;
                });
                captext += "Proximal Pancreatic Parenchymal:\n ";
                if (negbox_22.length > 0) {
                    captext += "\t- " + negbox_22 + "\n\t- Distance of invasive carcinoma to this margin: " + box_22_2.replace(/mm/, "") + "mm\n";
                } else if (posbox_22.length > 0) {
                    captext += "\t- " + box_22 + "\n";
                }

                var box_23 = $("#box23").val();
                var box_23_2 = $("#box23_2").val();
                var negbox_23 = box_23.filter(function (el) {
                    return el.indexOf("Uninvolved") > -1;
                });
                var posbox_23 = box_23.filter(function (el) {
                    return el.indexOf("Involved") > -1;
                });
                captext += "\nDistal Pancreatic Parenchymal Margin:\n";
                if (negbox_23.length > 0) {
                    captext += "\t- " + negbox_23 + "\n\tDistance of invasive carcinoma to this margin: " + box_23_2.replace(/mm/, "") + "mm\n";
                }
                if (posbox_23.length > 0) {
                    captext += "\t- " + posbox_23 + "\n";
                }
            } else {
                // whipple
                var box_24 = $("#box24").val();
                var box_24_2 = $("#box24_2").val();
                var negbox_24 = box_24.filter(function (el) {
                    return el.indexOf("Uninvolved") > -1;
                });
                var posbox_24 = box_24.filter(function (el) {
                    return el.indexOf("Involved") > -1;
                });
                captext += "Pancreatic Neck/Parenchymal Margin:\n";
                if (negbox_24.length > 0) {
                    captext += "\t- " + negbox_24 + "\n\t- Distance of invasive carcinoma to this margin: " + box_24_2.replace(/mm/, "") + "mm\n";
                } else if (posbox_24.length > 0) {
                    captext += "\t- " + posbox_24 + "\n";
                }

                var box_25 = $("#box25").val();
                var box_25_2 = $("#box25_2").val();
                captext += "\nUncinate Margin:\n";
                if (box_25.indexOf("uninvolved") > -1) {
                    captext += "\t- " + box_25 + "\n\t- Distance of invasive carcinoma to this margin: " + box_25_2.replace(/mm/, "") + "mm\n";
                } else {
                    captext += "\t- " + box_25 + "\n";
                }

                var box_26 = $("#box26").val();
                var box_26_2 = $("#box26_2").val();
                var negbox_26 = box_26.filter(function (el) {
                    return el.indexOf("Uninvolved") > -1;
                });
                var posbox_26 = box_26.filter(function (el) {
                    return el.indexOf("Involved") > -1;
                });
                captext += "\nBile Duct Margin:\n";
                if (negbox_26.length > 0) {
                    captext += "\t- " + negbox_26 + "\n\t- Distance of invasive carcinoma to this margin: " + box_26_2.replace(/mm/, "") + "mm\n";
                } else if (posbox_26.length > 0) {
                    captext += "\t- " + posbox_26 + "\n";
                }

                var box_27 = $("#box27").val();
                captext += "\nProximal Margin (Gastric or Duodenal):\n\t- " + box_27.join("\n\t- ") + "\n";

                var box_28 = $("#box28").val();
                captext += "\nDistal Margin (Distal Duodenal or Jejunal):\n\t- " + box_28.join("\n\t- ") + "\n";
            }
        }
        var box_29 = $("#box29").val();
        var box_29_2 = $("#box29_2").val();
        if (box_29.indexOf('Not') < 0) {
            captext += "\n- " + box_29_2 + " Margin:\n\t- " + box_29 + "\n";
        }

        var box_9 = $("#box9").val();
        if (box_9 != 'No prior treatment') {
            captext += "\nTreatment effect:\n- " + box_9 + "\n";
        }

        var box_10 = $("#box10").val();
        captext += "\nLymph-vascular invasion:\n- " + box_10 + "\n";

        var box_11 = $("#box11").val();
        captext += "\nPerineural invasion:\n- " + box_11 + "\n";

        var box_30 = $("#box30").val();
        var box_31 = $("#box31").val();
        var box_32 = $("#box32").val();
        var box_33 = $("#box33").val();
        var box_33_2 = $("#box33_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_30 != "Not applicable") {
            if (box_33 != "pMx") {
                captext += box_30.join("") + " " + box_31 + " " + box_32 + " " + box_33 + " (metastatic site(s): " + box_33_2 + ")\n";
            } else {
                captext += box_30.join("") + " " + box_31 + " " + box_32 + " " + box_33 + "\n";
            }
        } else {
            if (box_33 != "pMx") {
                captext += box_31 + " " + box_32 + " " + box_33 + " (metastatic site(s): " + box_33_2 + ")\n";
            } else {
                captext += box_31 + " " + box_32 + " " + box_33 + "\n";
            }
        }
        if ($("#box34").is(':checked')) {
            var box_35 = $("#box35").val();
            var box_36 = $("#box36").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: " + box_35 + "\n\tLymph nodes involved: " + box_36 + "\n";
        } else {
            captext += "\nLymph nodes: None submitted\n";
        }

        var box_14 = $("#box14").val();
        var box_14_2 = $("#box14_2").val();
        if (box_14.length > 0) {
            if (box_14 == 'Other') {
                captext += "\n+Additional pathologic findings:\n- " + box_14.join("\n-").replace(/Other/, box_14_2) + "\n";
            } else {
                captext += "\n+Additional pathologic findings:\n- " + box_14.join("\n-") + "\n";
            }
        }

        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});

/**
 * Created by Chandra Krishnan on 8/16/2017.
 */