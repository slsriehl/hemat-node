$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $("input#box5").autocomplete({
        source: [
                "Germ cell neoplasia in situ (GCNIS)",
                "Intratubular seminoma",
                "Intratubular embryonal carcinoma",
                "Seminoma, classic type",
                "Seminoma with associated scar",
                "Seminoma with syncytiotrophoblastic cells",
                "Mixed germ cell tumor",
                "Embryonal carcinoma",
                "Yolk sac tumor, post-pubertal type",
                "Choriocarcinoma",
                "Non-choriocarcinomatous trophoblastic tumor, NOS",
                "Placental site trophoblastic tumor",
                "Epithelioid trophoblastic tumor",
                "Cystic trophoblastic tumor",
                "Teratoma, post-pubertal type",
                "Teratoma, pre-pubertal type (Epidermoid cyst)",
                "Teratoma, pre-pubertal type (Dermoid cyst)",
                "Teratoma, pre-puberal type (Monodermal teratoma)",
                "Teratoma with somatic malignancy",
                "Scar diagnostic of regressed germ cell tumor",
                "Scar suspicious for regressed germ cell tumor",
                "Spermatocytic tumor",
                "Spermatocytic tumor with a sarcomatous component",
                "Mixed germ cell-sex cord-stromal tumor, gonadoblastoma",
                "Sex cord-stromal tumor",
                "Leydig cell tumor",
                "Malignant Leydig cell tumor",
                "Sertoli cell tumor, NOS",
                "Sertoli cell tumor, malignant",
                "Sertoli cell tumor, large cell calcifying",
                "Sertoli cell tumor, intratubular large cell hyalinizing",
                "Granulosa cell tumor, adult type",
                "Granulosa cell tumor, juvenile type",
                "Fibroma-thecoma",
                "Mixed Sex-cord stromal tumor, with following components:",
                "Sex-cord stromal tumor, unclassified",
                "Other histologic type"],
        appendTo: '#Leftpanel',
        select: function(event, ui){
            var choice = ui.item;
            var sel = choice.value;
            if (sel.indexOf('Mixed germ cell tumor') > -1) {
                $('#box5_2').show();
                $('#box5_3').show();
                $('#box5_4').show();
                $('#box5_5').show();
                $('#box5_6').show();
            } else {
                $('#box5_2').hide();
                $('#box5_3').hide();
                $('#box5_4').hide();
                $('#box5_5').hide();
                $('#box5_6').hide();
            }
            if (sel.indexOf('Teratoma with') > -1) {
                $('#box5_7').show();
            } else {
                $('#box5_7').hide();
            }
            if (sel.indexOf('Other') > -1) {
                $('#box5_8').show();
            } else {
                $('#box5_8').hide();
            }
            if (sel.indexOf('Mixed Sex-cord') > -1) {
                $('#box5_9').show();
            } else {
                $('#box5_9').hide();
            }
            if (sel.indexOf('Seminoma') > -1){
                $('.marsden').show();
            } else {
                $('.marsden').hide();
            }

        }
    });
    
//IHCs
    $(function () {
        var availableTags = [ "interaortocaval", "paraaortic", "paracaval", "preaortic", "precaval", "retroaortic", "retrocaval"  ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#box17").autocomplete({
            minLength: 1,
            source: function (request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(
                    availableTags, extractLast(request.term)));
            },
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                var terms = split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });
    });
    



//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box2').on("change", function(){
        var sel = $('#box2').val();
        if (sel == 'Multifocal') {
            $('.add-tumor').show();}
        else {$('.add-tumor').hide();}
    });

    // box5 pop-up in the autocomplete script above

    $('#box6').on("change", function(){
        var sel = $('#box6').val();
        if ($.inArray('Tumor invades other structures', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });

    $('#box8').on("change", function(){
        var sela = $('#box8').val();
        if (sela.indexOf('Uninvolved') > -1){
            $('#box8_1').show();
        }
        else {$('#box8_1').hide();
        }
        if (sela.indexOf("Involved") > -1) {
            $('#box8_3').show();}
        else {$('#box8_3').hide();}
    });

    $("#box14").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box20').on("change", function(){
        var sel = $('#box20').val();
        if (sel.indexOf("Other") > -1) {

            $('#box20_2').show();}
        else {
            $('#box20_2').hide();}
    });

    $('#box22').on("change", function(){
        var sel = $('#box22').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box22_2').show();}
        else {$('#box22_2').hide();}
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



        var captext = "Testicular Cancer Synoptic\n(pTNM requirements from the 8th Edition, AJCC Staging Manual)\n\n";

        var box_1 = $("#box1").val();
        captext += "\nSpecimen Laterality:\n- "  + box_1+ "\n";

        var box_2 = $("#box2").val();
        captext += "\nTumor Focality:\n- "  + box_2+ "\n";

        var box_3 = $("#box3").val();
        captext += "\nTumor Size: "  + box_3.replace(/cm/,'') + "cm\n";

        var box_4 = $("#box4").val();
        if (box_4.length > 0) {
            captext += "\nAdditional tumor nodules size:\n- " + box_4.replace(/cm/,'') + "cm\n";
        }

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        var box_5_3 = $("#box5_3").val();
        var box_5_4 = $("#box5_4").val();
        var box_5_5 = $("#box5_5").val();
        var box_5_6 = $("#box5_6").val();
        var box_5_7 = $("#box5_7").val();
        var box_5_8 = $("#box5_8").val();
        var box_5_9 = $("#box5_9").val();
        if(box_5.indexOf('Mixed germ cell tumor') > -1){
            captext += '\nHistologic Type:\n- ' + box_5 + ': ' + box_5_2 + '% Seminoma, ' + box_5_3 + '% Yolk Sac, ' + box_5_4 + '% Choriocarcinoma, ' + box_5_5 + '% Embryonal carcinoma, ' + box_5_6 + '% Teratoma\n';
        }
        else if (box_5.indexOf('Teratoma with') > -1) {
            captext += "\nHistologic Type:\n- " + box_5 + " " + box_5_7 + "\n";
        }
        else if (box_5.indexOf('Other') > -1) {
            captext += "\nHistologic Type:\n- " + box_5_8 + "\n";
        }
        else if (box_5.indexOf('Mixed Sex-cord') > -1) {
            captext += "\nHistologic Type:\n- " + box_5 + " " + box_5_9 + "\n";
        }
        else {
                captext += "\nHistologic Type:\n- "+box_5+"\n";
        }

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if ($.inArray('other', box_6) >-1){
            captext += "\nTumor Extension:\n- "  + box_6.join('\n- ').replace(/other/, box_6_2) + "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_6.join('\n- ') + "\n";}

        var box_7 = $("#box7").val();
        captext += "\nMargins - Spermatic cord:\n- "  + box_7+ "\n";

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8 != "Not applicable"){
            if (box_8.indexOf("Uninvolved") > -1) {
                captext += "\nOther uninvolved margins:  "+box_8_1+"\n";}
            else if (box_8.indexOf("Involved") > -1) {
                captext += "\nOther involved margins:  "+box_8_3+"\n";}
            else {captext += "\nMargins - Other:\n- "+box_8+"\n";}
        }

        var box_9 = $("#box9").val();
        captext += "\nLymphovascular Invasion:\n- "  + box_9+ "\n";

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        captext += '\nPathologic Staging (AJCC 8th ed pTNM):\n- ';
        if (box_10 != "Not applicable"){captext += box_10.join("")+' '+box_11+" "+box_12+" "+box_13+"\n";}
        else {captext += box_11+" "+box_12+" "+box_13+"\n";}

        var box_23 = $("#box23").val();
        if (box_23 != "Not applicable")
        captext += "\n+ Modified Royal Marsden Staging System:\n- "  + box_23+ "\n";

        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_15+"\n\tLymph nodes involved: "+box_16+"\n";
            var box_17 = $("#box17").val();
            captext += "\tLymph node sites examined: "  + box_17.replace(/\,$/,'') + "\n";

            if (box_16 > 0){
                var box_18 = $("#box18").val();
                captext += "\tSize of Largest Lymph Node Involved: "  + box_18.replace(/cm/,'') + "cm\n";

                var box_19 = $("#box19").val();
                captext += "\tExtranodal Extension: "  + box_19+ "\n";

                var box_20 = $("#box20").val();
                var box_20_2 = $("#box20_2").val();
                if (box_20 == 'Other'){
                    captext += "\nHistologic subtype of tumor in involved lymph nodes:\n- "  + box_20_2+ "\n";}
                else {captext += "\nHistologic subtype of tumor in involved lymph nodes:\n- "  + box_20+ "\n";}

            }

        } else {
            captext += "\nLymph nodes: None submitted\n";}



        var box_21 = $("#box21").val();
        captext += "\n+ Serum Tumor Markers:\n- "  + box_21+ "\n";

        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        if ($.inArray('Other', box_22) >-1){
            captext += "\n+ Additional Pathologic Findings:\n- "  + box_22.join('\n- ').replace(/Other/, box_22_2) + "\n";}
        else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_22.join('\n- ') + "\n";}



        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


