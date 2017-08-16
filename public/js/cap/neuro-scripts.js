$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $("input#box4").autocomplete({
        source: ["AIDS-related diffuse large B-cell lymphoma", "Adamantinomatous craniopharyngioma", "Anaplastic (malignant) meningioma", "Anaplastic astrocytoma, IDH-mutant", "Anaplastic astrocytoma, IDH-wildtype", "Anaplastic astrocytoma, NOS", "Anaplastic ependymoma", "Anaplastic ganglioglioma", "Anaplastic large cell lymphoma, ALK-negative", "Anaplastic large cell lymphoma, ALK-positive", "Anaplastic oligoastrocytoma, NOS", "Anaplastic oligodendroglioma, IDH-mutant and 1p/19q-codeleted", "Anaplastic oligodendroglioma, NOS", "Anaplastic pleomorphic xanthoastrocytoma", "Angiocentric glioma", "Angiolipoma", "Angiomatous meningioma", "Angiosarcoma", "Astroblastoma", "Atypical choroid plexus papilloma", "Atypical meningioma", "Atypical neurofibroma", "Atypical teratoid/rhabdoid tumour", "Benign fibrous histiocytoma", "CNS embryonal tumour with rhabdoid features", "CNS embryonal tumour, NOS", "CNS ganglioneuroblastoma", "CNS neuroblastoma", "Cellular schwannoma", "Central neurocytoma", "Cerebellar liponeurocytoma", "Chondroma", "Chondrosarcoma", "Chordoid glioma of the third ventricle", "Chordoid meningioma", "Choroid plexus carcinoma", "Choroid plexus papilloma", "Clear cell ependymoma", "Clear cell meningioma", "Craniopharyngioma", "Desmoid-type fibromatosis", "Desmoplastic infantile astrocytoma and", "Diffuse astrocytoma, IDH-mutant", "Diffuse astrocytoma, IDH-wildtype", "Diffuse astrocytoma, NOS", "Diffuse large B-cell lymphoma of the CNS", "Diffuse leptomeningeal glioneuronal tumour", "Diffuse midline glioma, H3 K27M-mutant", "Dysembryoplastic neuroepithelial tumour", "Dysplastic cerebellar gangliocytoma", "EBV-positive diffuse large B-cell lymphoma, NOS", "Embryonal tumour with multilayered rosettes, C19MC-altered", "Embryonal tumour with multilayered rosettes, NOS", "Ependymoma, NOS", "Ependymoma, RELA fusion-positive", "Epithelioid MPNST", "Epithelioid glioblastoma", "Epithelioid haemangioendothelioma", "Erdheim-Chester disease", "Ewing sarcoma I PNET", "Extraventricular neurocytoma", "Fibrosarcoma", "Fibrous meningioma", "Gangliocytoma", "Ganglioglioma", "Gemistocytic astrocytoma, IDH-mutant", "Giant cell glioblastoma", "Glioblastoma, IDH-mutant", "Glioblastoma, IDH-wildtype", "Glioblastoma, NOS", "Gliosarcoma", "Granular cell tumour of the sellar region", "Haemangioblastoma", "Haemangioma", "Hibernoma", "Histiocytic sarcoma", "Hybrid nerve sheath tumours", "Immunodeficiency-associated CNS lymphomas", "Inflammatory myofibroblastic tumour", "Juvenile xanthogranuloma", "Kaposi sarcoma", "Langerhans cell histiocytosis", "Leiomyoma", "Leiomyosarcoma", "Lipoma", "Liposarcoma", "Low-grade B-cell lymphomas of the CNS", "Lymphomatoid granulomatosis", "Lymphoplasmacyte-rich meningioma", "MALT lymphoma of the dura", "MPNST with perineurial differentiation", "Malignant peripheral nerve sheath tumour", "Medulloblastoma with extensive nodularity", "Medulloblastoma, NOS", "Medulloblastoma, SHH-activated and TP53-mutant", "Medulloblastoma, SHH-activated and TP53-wildtype", "Medulloblastoma, WNT-activated", "Medulloblastoma, classic", "Medulloblastoma, desmoplastic/nodular", "Medulloblastoma, group 3", "Medulloblastoma, group 4", "Medulloblastoma, histologically defined", "Medulloblastoma, large cell / anaplastic", "Medulloblastoma, non-WNT/non-SHH", "Medulloepithelioma", "Melanotic schwannoma", "Meningeal melanocytoma", "Meningeal melanocytosis", "Meningeal melanoma", "Meningeal melanomatosis", "Meningioma", "Meningothelial meningioma", "Metaplastic meningioma", "Microcystic meningioma", "Myofibroblastoma", "Myxopapillary ependymoma", "Neurofibroma", "Oligoastrocytoma, NOS", "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted", "Oligodendroglioma, NOS", "Osteochondroma", "Osteoma", "Osteosarcoma", "Papillary craniopharyngioma", "Papillary ependymoma", "Papillary glioneuronal tumour", "Papillary meningioma", "Papillary tumour of the pineal region", "Paraganglioma", "Perineurioma", "Pilocytic astrocytoma", "Pilomyxoid astrocytoma", "Pineal parenchymal tumour of intermediate differentiation", "Pineoblastoma", "Pineocytoma", "Pituicytoma", "Pleomorphic xanthoastrocytoma", "Plexiform neurofibroma", "Plexiform schwannoma", "Psammomatous meningioma", "Rhabdoid meningioma", "Rhabdomyoma", "Rhabdomyosarcoma", "Rosai-Dorfman disease", "Rosette-forming glioneuronal tumour", "Schwannoma", "Secretory meningioma", "Solitary fibrous tumour / haemangiopericytoma, Grade 1", "Solitary fibrous tumour / haemangiopericytoma, Grade 2", "Solitary fibrous tumour / haemangiopericytoma, Grade 3", "Spindle cell oncocytoma", "Subependymal giant cell astrocytoma", "Subependymoma", "T-cell and NK{T-cell lymphomas of the CNS", "Tanycytic ependymoma", "Transitional meningioma", "Undifferentiated pleomorphic sarcoma / malignant fibrous histiocytoma", "ganglioglioma", "lntravascular large B-cell lymphoma"],
        appendTo: '#Leftpanel'
    });

    $(function() {
        var availableTags = ["GFAP", "KI67", "CD20", "CD3", "CD43", "CD5", "CD138", "Kappa", "Lambda", "EBV ISH", "Synaptophysin", "Chromogranin", "NF", "NeuN", "MAP2", "Olig2", "p53", "CD34", "Pan-Keratin", "CK7", "CK20", "CD45", "CD30", "TTF1", "S100", "Melan-A", "ACTH", "FSH", "GH", "LH", "Prolactin", "TSH", "EMA", "IDH1", "Tdt", "EBV ISH", "Inhibin", "CD56"];

        function split( val ) {
            return val.split( /,\s*/ );
        }

        function extractLast( term ) {
            return split( term ).pop();
        }

        $("input#box10").autocomplete({
            minLength: 2,
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

    $('#box1').change(function () {
        var sela = $('#box1').val();
        var selb = $('#box1').val();
        if ($.inArray('Other:', sela) > -1) {
            $('#box1_2').show();
        } else {
            $('#box1_2').hide();
        }
    });

    $('#box3').change(function () {
        var sel = $('#box3').val();
        if (sel == 'Other:') {
            $('input[id=box3_2]').show();
        } else if (sel != 'Other:') {
            $('input[id=box3_2]').hide();
        }
    });

    $('#box7').change(function () {
        var sel = $('#box7').val();
        if (sel == 'Margins not involved by tumor') {
            $('input[id=box7_2]').show();
            $('input[id=box7_3]').show();
        } else {
            $('input[id=box7_2]').hide();
            $('input[id=box7_3]').hide();
        }
        if (sel == 'Margins involved by tumor') {
            $('input[id=box7_4]').show();
        } else {
            $('input[id=box7_4]').hide();
        }
    });

    $('#box14').change(function () {
        var sel = $('#box14').val();
        if (sel == 'Present') {
            $('input[id=box14_2]').show();
        } else if (sel != 'Present') {
            $('input[id=box14_2]').hide();
        }
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {


        var captext = "CAP CNS Tumor Cancer Summary\n\n";
// Checklist variables
        var box_1 = $("#box1").val();
        var box_1_3 = $("#box1_3").val();
        if (box_1 != null){
            if ($.inArray('Other:', box_1) > -1){
                box_1_2 = $('#box1_2').val();
                captext += "Tumor Site:\n- "+box_1.join("\n- ").replace(/Other:/, box_1_2)+"\n";}
            else {
                box_1print = box_1.join("\n- ");
                captext += "Tumor Site:\n- "+box_1.join("\n- ")+"\n";}
        }

        var box_2 = $("#box2").val();
        captext += "\nLaterality:\n- "+box_2+"\n";

        var box_3 = $("#box3").val();
        if (box_3 == 'Other:'){
            box_3_2 = $("#box3_2").val();
            captext += "\nProcedure:\n- "+box_3_2+"\n";}
        else {captext += "\nProcedure:\n- "+box_3+"\n";}

        var box_4 = $("#box4").val();
        captext += "\nHistologic Type (WHO classification of tumors of the central nervous system):\n- "+box_4+"\n";
        var box_5 = $("#box5").val();
        captext += "\nHistologic Grade (WHO histologic grade):\n- "+box_5+"\n";
        var box_6 = $("#box6").val();
        captext += "\n+ Specimen Handling:\n- "+box_6.join("\n- ")+"\n";

        var box_7 = $("#box7").val();
        if (box_7 != 'Not Applicable'){
            if (box_7 == 'Margins not involved by tumor'){
                var box_7_2 = $("#box7_2").val();
                var box_7_3 = $("#box7_3").val();
                captext += "\n+ Margins (for MPNST only):\n- "+box_7+"\n- Distance to closest margin = "+box_7_2+"cm, "+box_7_3+"\n";}
            else if (box_7 == 'Margins involved by tumor'){
                var box_7_4 = $("#box7_4").val();
                captext += "\n+ Margins (for MPNST only):\n- "+box_7+"\n- Margin involved = "+box_7_4+"\n";}
            else {captext += "\n+ Margins (for MPNST only):\n- "+box_7+"\n";}

        }

        var box_8 = $("#box8").val();
        if (box_8 != 'Not applicable'){
            captext += "\n+ Ancillary Studies:\n [Designated block for future studies: "+box_8+"]\n";}

        var box_9 = $("#box9").val();
        captext += "\n+ Special Stains:\n- "+box_9.join("\n- ")+"\n";
        var box_10 = $("#box10").val();
        captext += "\n+ Immunohistochemistry:\n- "+box_10+"\n";
        var box_11 = $("#box11").val();
        captext += "\n+ Electron Microscopy:\n- "+box_11+"\n";
        var box_12 = $("#box12").val();
        captext += "\n+ Molecular Genetic Studies:\n- "+box_12.join("\n- ")+"\n";

        var box_13 = $("#box13").val();
        if (box_13 != 'Unknown'){
            captext += "\n+ Preresection Treatment:\n- "+box_13.join("\n- ")+"\n";}

        var box_14 = $("#box14").val();
        if (box_13 != 'Unknown'){
            if (box_14 = 'Present'){
                var box_14_2 = $("#box14_2").val();
                captext += "\n+ Treatment Effect:\n- "+box_14+": "+box_14_2+"% necrosis\n";
            }
            else{captext += "\n+ Treatment Effect:\n- "+box_14+"\n";}
        }

        $('#outPut-1').val(captext);

    });
});
