$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $(function() {
        var availableTags = [
            'Atypical lipomatous tumor/Well-differentiated liposarcoma', 'Dedifferentiated liposarcoma', 'Myxoid/round cell liposarcoma', 'Pleomorphic liposarcoma', 'Mixed-type liposarcoma', 'Liposarcoma, not otherwise specified', 'Superficial fibromatoses (palmar/plantar)', 'Desmoid-type fibromatoses', 'Lipofibromatosis', 'Giant cell fibroblastoma', 'Dermatofibrosarcoma protuberans', 'Fibrosarcomatous dermatofibrosarcoma protuberans', 'Pigmented dermatofibrosarcomatous protuberans', 'Solitary fibrous tumor, malignant', 'Inflammatory myofibroblastic tumor', 'Low-grade myofibroblastic sarcoma', 'Myxoinflammatory fibroblastic sarcoma/Atypical myxoinflammatory fibroblastic tumor', 'Infantile fibrosarcoma', 'Adult fibrosarcoma', 'Myxofibrosarcoma', 'Low grade fibromyxoid sarcoma', 'Sclerosing epithelioid fibrosarcoma', 'Plexiform fibrohistiocytic tumor', 'Giant cell tumor of soft tissues', 'Leiomyosarcoma', 'Malignant glomus tumor', 'Embryonal rhabdomyosarcoma (including botryoid, anaplastic)', 'Alveolar rhabdomyosarcoma (including solid, anaplastic)', 'Pleomorphic rhabdomyosarcoma', 'Spindle cell/sclerosing rhabdomyosarcoma', 'Kaposiform hemangioendothelioma', 'Retiform hemangioendothelioma', 'Papillary intralymphatic angioendothelioma', 'Composite hemangioendothelioma', 'Pseudomyogenic (epithelioid sarcoma-like) hemangioendothelioma', 'Kaposi sarcoma', 'Epithelioid hemangioendothelioma', 'Angiosarcoma of soft tissue', 'Malignant peripheral nerve sheath tumor', 'Epithelioid malignant peripheral nerve sheath tumor', 'Malignant Triton tumor', 'Malignant granular cell tumor', 'Ectomesenchymoma', 'Extraskeletal mesenchymal chondrosarcoma', 'Extraskeletal osteosarcoma', 'Hemosiderotic fibrolipomatous tumor', 'Atypical fibroxanthoma', 'Angiomatoid fibrous histiocytoma', 'Ossifying fibromyxoid tumor', 'Ossifying fibromyxoid tumor, malignant', 'Mixed tumour', 'Mixed tumor, NOS malignant', 'Myoepithelioma', 'Myoepithelial carcinoma', 'Phosphaturic mesenchymal tumor, benign', 'Phosphaturic mesenchymal tumor, malignant', 'Synovial sarcoma, spindle cell', 'Synovial sarcoma, biphasic', 'Synovial sarcoma, NOS', 'Epithelioid sarcoma', 'Alveolar soft part sarcoma', 'Clear cell sarcoma of soft tissue', 'Extraskeletal myxoid chondrosarcoma ', 'Extraskeletal Ewing sarcoma', 'Desmoplastic small round cell tumor', 'Extra-renal rhabdoid tumor', 'Malignant mesenchymoma', 'PEComa NOS, benign', 'PEComa NOS, malignant', 'Intimal sarcoma', 'Undifferentiated spindle cell sarcoma', 'Undifferentiated pleomorphic sarcoma ', 'Undifferentiated round cell sarcoma', 'Undifferentiated epithelioid sarcoma', 'Undifferentiated sarcoma NOS'
        ]
        function split( val ) {
            return val.split( /,\s*/ );
        }

        function extractLast( term ) {
            return split( term ).pop();
        }

        $("input#box4").autocomplete({
            minLength: 1,
            source: function( request, response ) {
                // delegate back to autocomplete, but extract the last term
                response( $.ui.autocomplete.filter(
                    availableTags, extractLast( request.term ) ) );
            },
            focus: function() {
                // prevent value inserted on focus
                return false;
            },
            select: function( event, ui ) {
                var terms = split( this.value );
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push( ui.item.value );
                // add placeholder to get the comma-and-space at the end
                terms.push( "" );
                this.value = terms.join( ", " );
                return false;
            }
        });
    });


//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/
    $('#box1').on("change", function () {
        var sel = $('#box1').val();
        if (sel == 'Other') {
            $('#box1_2').show();
        }
        else {
            $('#box1_2').hide();
        }
    });


    $('#box6').on("change", function () {
        var sel = $('#box6').val();
        if (sel == 'Present') {
            $('#box6_2').show();
        }
        else {
            $('#box6_2').hide();
        }
    });

    $('#box8').on("change", function () {
        var sela = $('#box8').val();
        var selb = $('#box8').val();
        if (sela == "Uninvolved by sarcoma") {
            $('#box8_1').show();
            $('#box8_2').show();
        }
        else {
            $('#box8_1').hide();
            $('#box8_2').hide();
        }
        if (selb == "Involved by sarcoma") {
            $('#box8_3').show();
        }
        else {
            $('#box8_3').hide();
        }
    });

    $("#box14").on("change", function () {
        if ($(this).is(":checked")) {
            $(".lnchk").show();
        }
        else {
            $(".lnchk").hide();
        }
    });

    $('#box21').on("change", function () {
        var sel = $('#box21').val();
        if (sel == 'Present') {
            $('#box21_2').show();
        }
        else {
            $('#box21_2').hide();
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
            if ($.trim($(this).val()).length < 1) {
                $(this).addClass('empty')
            }
        });

        var captext = "Soft tissue (Resection) Cancer Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1 == 'Other') {
            captext += "\nProcedure:\n- " + box_1_2 + "\n";
        }
        else {
            captext += "\nProcedure:\n- " + box_1 + "\n";
        }


        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        captext += "\nTumor Site:\n- " + box_2 + ": " + box_2_2 + "\n";


        var box_3 = $("#box3").val();
        captext += "\nTumor Size:\n- " + box_3.replace(/cm/, '') + "cm\n";


        var box_4 = $("#box4").val();
        captext += "\nHistologic Type:\n- " + box_4 + "\n";


        var box_5 = $("#box5").val();
        captext += "\nMitotic Rate:\n- " + box_5 + " per 10 hpf\n";

        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        if (box_6 == 'Present') {
            captext += "\nNecrosis:\n- Present: " + box_6_2.replace(/%/, '') + "% necrosis\n";
        }
        else {
            captext += "\nNecrosis:\n- " + box_6 + "\n";
        }


        var box_7 = $("#box7").val();
        captext += "\nHistologic Grade:\n- " + box_7 + "\n";

        var box_8 = $("#box8").val();
        var box_8_1 = $("#box8_1").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        if (box_8 == 'Uninvolved by sarcoma') {
            captext += "\nMargins:\n- Margins uninvolved by tumor:\n- Nearest margin: " + box_8_1 + "\n- Distance to this margin: " + box_8_2.replace(/cm/, "") + "cm\n";
        }
        else if (box_8 == 'Involved by sarcoma') {
            captext += "\nMargins:\n- Margins involved by tumor:\n- Margin involved: " + box_8_3 + "cm\n";
        }
        else {
            captext += "\nMargins:\n- " + box_8 + "\n";
        }

        var box_9 = $("#box9").val();
        captext += "\n+ Lymphovascular Invasion:\n- " + box_9 + "\n";

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable") {
            captext += box_10.join("") + ' ' + box_11 + " " + box_12 + " " + box_13 + "\n";
        }
        else {captext += box_11+" "+box_12+" "+box_13+"\n";}

        if ($("#box14").is(':checked')) {
            var box_15 = $("#box15").val();
            var box_16 = $("#box16").val();
            captext += "\nLymph nodes examined: " + box_15 + "\nLymph nodes involved: " + box_16 + "\n";
        }

        var box_17 = $("#box17").val();
        captext += "\nImmunohistochemistry:\n- " + box_17 + "\n";

        var box_18 = $("#box18").val();
        captext += "\nCytogenetics:\n- " + box_18 + "\n";

        var box_19 = $("#box19").val();
        captext += "\nMolecular Pathology:\n- " + box_19 + "\n";

        var box_20 = $("#box20").val();
        captext += "\n+ Preresection Treatment:\n- " + box_20 + "\n";

        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        if (box_21 == 'Present') {
            captext += "\nTreatment Effect:\n- " + box_21_2.replace(/%/, '') + "% viable tumor\n";
        }
        else {
            captext += "\nTreatment Effect:\n- " + box_21 + "\n";
        }


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
