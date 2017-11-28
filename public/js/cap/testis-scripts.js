$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $("input#box6").autocomplete({
        source: ["Intratubular germ cell neoplasia, unclassified only", "Seminoma, classic type", "Seminoma with associated scar", "Seminoma with syncytiotrophoblastic cells", "Mixed germ cell tumor", "Embryonal carcinoma", "Yolk sac tumor", "Choriocarcinoma, biphasic", "Choriocarcinoma, monophasic", "Placental site trophoblastic tumor", "Teratoma", "Teratoma with a secondary somatic-type malignant component", "Monodermal teratoma, carcinoid", "Monodermal teratoma, primitive neuroectodermal tumor", "Monodermal teratoma, other:", "Spermatocytic seminoma", "Spermatocytic seminoma with a sarcomatous component", "Mixed germ cell-sex cord-stromal tumor, gonadoblastoma", "Mixed germ cell-sex cord-stromal tumor", "Testicular scar, Scar only", "Testicular scar, Intratubular germ cell neoplasia present", "Sex cord-stromal tumor", "Leydig cell tumor", "Sertoli cell tumor, Classic", "Sertoli cell tumor, Sclerosing", "Sertoli cell tumor, Large cell calcifying", "Granulosa cell tumor, Adult-type", "Granulosa cell tumor, Juvenile-type", "Mixed Sex-cord stromal tumor, with following components:", "Unclassified", "Malignant neoplasm, type cannot be determined", "Other:"],
        appendTo: '#Leftpanel'
    });


//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box5').change(function () {
        var sel = $('#box5').val();
        if ($.inArray('Other:', sel) > -1) {
            $('#box5_2').show();
        } else {
            $('#box5_2').hide();
        }
    });

    $('#box6').blur(function () {
        var sel = $('#box6').val();
        if (sel == 'Mixed germ cell tumor') {
            $('#box6_2').show();
            $('#box6_3').show();
            $('#box6_4').show();
            $('#box6_5').show();
        } else {
            $('#box6_2').hide();
            $('#box6_3').hide();
            $('#box6_4').hide();
            $('#box6_5').hide();
        }
        if (sel == 'Monodermal teratoma, other:') {
            $('#box6_6').show();
        } else {
            $('#box6_6').hide();
        }
        if (sel == 'Other:') {
            $('#box6_7').show();
        } else {
            $('#box6_7').hide();
        }
        if (sel == 'Mixed Sex-cord stromal tumor, with following components:') {
            $('#box6_8').show();
        } else {
            $('#box6_8').hide();
        }
    });

    $('#box7_1').change(function () {
        var sela = $('#box7_1').val();
        var selb = $('#box7_1').val();
        if (sela == 'Involved by tumor') {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
        if (selb == 'Uninvolved by tumor'){
            $('#box7_3').show();
        } else {
            $('#box7_3').hide();
        }

    });

    $('#box8').change(function () {
        var sel = $('#box8').val();
        if ($.inArray('Other:', sel) > -1) {
            $('#box8_2').show();
        } else {
            $('#box8_2').hide();
        }
    });

    $('#box19').change(function () {
        var sel = $('#box19').val();
        if ($.inArray('Other:', sel) > -1) {
            $('#box19_2').show();
        } else {
            $('#box19_2').hide();
        }
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('.writeReport').on('click', function () {

        $('input[type="text"]').each(function () {
            if ($(this).val().length < 1) {
                $(this).val($(this).attr('placeholder'));
            }
            if ($(this).val().length < 1) {
                $(this).addClass('empty')
            }
        });

        var captext = "Testis Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";
// Checklist variables
        var box_1 = $("#box1").val();
        captext += "Specimen Laterality:\n- "+box_1+"\n";
        var box_2 = $("#box2").val();
        captext += "\nTumor Focality:\n- "+box_2+"\n";
        var box_3 = $("#box3").val();
        captext += "\nTumor Size, main lesion:\n- "+box_3.replace(/cm/,'')+"cm\n";
        var box_4 = $("#box4").val();

        if (box_4 != 'Not Applicable'){
            captext += "\nTumor Size, addtional nodules:\n- "+box_4.replace(/cm/,'')+"cm\n";}

        var box_5 = $("#box5").val();
        if ($.inArray('Other:', box_5) > -1) {
            var box_5_2 = $("#box5_2").val();
            captext += "\nMacroscopic Extent of Tumor:\n- "+box_5.join("\n- ").replace(/Other:/, 'Invades '+box_5_2)+"\n";}
        else {captext += "\nMacroscopic Extent of Tumor:\n- "+box_5.join("\n- ")+"\n";}


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        var box_6_4 = $("#box6_4").val();
        var box_6_5 = $("#box6_5").val();
        var box_6_6 = $("#box6_6").val();
        var box_6_7 = $("#box6_7").val();
        var box_6_8 = $("#box6_8").val();
        switch (box_6){
            case 'Mixed germ cell tumor' :
                captext += '\nHistologic Type:\n- '+box_6+'\n- '+box_6_2+'% Seminoma\n- '+box_6_3+'% Yolk Sac\n- '+box_6_4+'% Choriocarcinoma\n- '+box_6_5+'% Embryonal carcinoma\n';
                break;
            case 'Monodermal teratoma, other:' :
                captext += "\nHistologic Type:\n- "+box_6+" "+box_6_6+"\n";
                break;
            case 'Other:' :
                captext += "\nHistologic Type:\n- "+box_6_7+"\n";
                break;
            case 'Mixed Sex-cord stromal tumor, with following components:':
                captext += "\nHistologic Type:\n- "+box_6+" "+box_6_8+"\n";
                break
            default :
                captext += "\nHistologic Type:\n- "+box_6+"\n";
        }

        var box_7 = $("#box7").val();
        captext += "\nMargins:\n- Spermatic cord margin: "+box_7+"\n";

        var box_7_1 = $("#box7_1").val();
        if (box_7_1 != 'Not applicable'){
            if (box_7_1 == 'Involved by tumor'){
                var box_7_2 = $("#box7_2").val();
                captext += "- "+box_7_2+" margin: "+box_7_1+"\n";
            }
            else if (box_7_1 == 'Uninvolved by tumor'){
                var box_7_3 = $("#box7_3").val();
                captext += "- "+box_7_3+" margin: "+box_7_1+"\n";
            }
        }

        var box_8 = $("#box8").val();
        if ($.inArray('Other:', box_8) > -1) {
            var box_8_2 = $("#box8_2").val();
            captext += "\nMicroscopic Tumor Extension:\n- "+box_8.join("\n- ").replace(/Other:/, box_8_2)+"\n";}
        else {captext += "\nMicroscopic Tumor Extension:\n- "+box_8.join("\n- ")+"\n";}

        var box_9 = $("#box9").val();
        captext += "\nLymph-Vascular Invasion:\n- "+box_9+"\n";
        var box_10 = $("#box10").val();
        captext += "\nPathologic Staging (pTNM):"
        if (box_10 != 'Not applicable'){
            captext += box_10.join("")+' ';}
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        captext += box_11+' '+box_12+' '+box_13+"\n";

        var box_14 = $("#box14").val();
        captext += "\n- Lymph nodes examined: "+box_14+"\n";
        var box_15 = $("#box15").val();
        captext += "\n- Lymph nodes involved: "+box_15+"\n";
        var box_16 = $("#box16").val();
        captext += "\n+ Pre-Orchiectomy Serum Tumor Markers:\n- "+box_16.join("n\- ")+"\n";
        var box_17 = $("#box17").val();
        captext += "\n+ Post-Orchiectomy Serum Tumor Markers:\n- "+box_17.join("n\- ")+"\n";
        var box_18 = $("#box18").val();
        captext += "\n+ Serum Tumor Markers (S):\n- "+box_18+"\n";
        var box_19 = $("#box19").val();
        if ($.inArray('Other:', box_19) > -1) {
            var box_19_2 = $("#box19_2").val();
            captext += "\n+ Additional Pathologic Findings:\n- "+box_19.join("\n- ").replace(/Other:/, box_19_2)+"\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "+box_19.join("\n- ")+"\n";}


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
