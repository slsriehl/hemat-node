$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $("input#box6").autocomplete({
        source: ["Combined germ cell tumor", "Embryonal carcinoma", "Yolk sac tumor", "Choriocarcinoma, biphasic", "Choriocarcinoma, monophasic", "Mature teratoma", "Immature teratoma", "Teratoma and other germ cell tumor", "Teratoma and sarcoma", 'Germinoma'],
        appendTo: '#Leftpanel'
    });

    $(function() {
        var availableTags = ["ACTH","Adenovirus","ALK-1","A1-AT","AFP","Amyloid-A","APP","B72.3","INI1","BCL2","BCL6","BER-Ep","Beta-catenin","Ber-EP4","BKVirus","C4d","CA125","Calcitonin","Calponin","Calretinin","CD1a","CD2","CD3","CD4","CD5","CD7","CD8","CD10","CD15","CD20","CD21","CD23","CD25","CD30","CD34","CD43","CD44","CD45","CD45RO","CD56","CD57","CD61","CD68","CD71","CD79a","CD99","CD117","CD123","CD138","CDX2","CEA-mono","CEA-poly","Chromogranin","CMV","ColIV","CyclinD1","CDK4","CK34BE12","CK8","CK5/6","CK7","CKAE1/3","CKCam5.2","CK17","CK19","CK20","CKMAK-6","D2-40","DOG-1","Desmin","E-cad","EBV-LMP","EBV-ISH","EMA","ER","FactorXIIIa","FSH","Galectin-3","Gastrin","GCDFP","GFAP","Glucagon","GLUT-1","Glut-Synth","GlycophorinA","Glypican-3","GH","H.P.","HBME-1","HBcore","HBsurface","HCG","HepPar1","HER2/Neu(IHC)","HSVI&II","Actin,muscle","HHV-8","HMB45","HPV-HR(ISH)","HMB45","HPL","IDH-1","IgA","IgG","IgM","Inhibin","Insulin","JCVirus","Kappa(IHC)","Lambda(IHC)","Kappa(ISH)","Lambda(ISH)","Ki-67(MIB1)","LH","Lysozyme","Mast-celltrypt","MelanA","MelanomaAA","Mammaglobin","MAP-2","MITF","MLH-1","MOC-31","MSH-2","MSH-6","MUM-1","MPO","Myogenin","Neu-N","NF","NSE","OCT-2","OCT3/4","p16","p504s","p53","p63","Parainfluenza","ParvoB19","PAX-5","PAX-8","PDGF-b","PE10","Perforin","pHH3","PLAP","PMS-2","PR","Prolactin","PTH","Prostate triple stain","PSA","PSAP","RCC","RSV","S100","SALL4","SMA","SMMHC","Smoothelin","Somatostatin","SurfactantA","SurfactantB","Synaptophysin","Tau","TdT","Thyroglobulin","Toxoplasma","Transthyretin","Trypsin","TSH","TTF-1","Tubulin","Tyrosinase","Ubiquitin","Uroplakin","Varicella","Villin","WT-1"];

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

    $('#box2').change(function () {
        var sel = $('#box2').val();
        if (sel == 'Other:') {
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });


    $('#box6').blur(function () {
        var sel = $('#box6').val();
        if (sel == 'Combined germ cell tumor') {
            $('input[id=box6_2]').show();
            $('input[id=box6_3]').show();
            $('input[id=box6_4]').show();
            $('input[id=box6_5]').show();
        } else {
            $('input[id=box6_2]').hide();
            $('input[id=box6_3]').hide();
            $('input[id=box6_4]').hide();
            $('input[id=box6_5]').hide();
        }
        if (sel == 'Teratoma and other germ cell tumor') {
            $('input[id=box6_6]').show();
        } else {
            $('input[id=box6_6]').hide();
        }
        if (sel == 'Teratoma and sarcoma') {
            $('input[id=box6_7]').show();
        } else {
            $('input[id=box6_7]').hide();
        }
        if (sel == 'Teratoma and other non-germ cell epithelial malignancy') {
            $('input[id=box6_8]').show();
        } else {
            $('input[id=box6_8]').hide();
        }
    });

    $('#box7').change(function () {
        var sel = $('#box7').val();
        if (sel == 'Grade 3') {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });


    $('#box9').change(function () {
        var sela = $('#box9').val();
        var selb = $('#box9').val();
        if (sela == 'Tumor at resection margin not identified') {
            $('input[id=box9_2]').show();
            $('input[id=box9_3]').show();
        } else {
            $('input[id=box9_2]').hide();
            $('input[id=box9_3]').hide();
        }
        if (selb == 'Resection margin involved by invasive tumor'){
            $('input[id=box9_4]').show();
        } else {
            $('input[id=box9_4]').hide();
        }

    });

    $('#box13').change(function () {
        var sel = $('#box13').val();
        if (sel == 'pN1') {
            $('#box13_2').show();
            $('#box13_3').show();
        } else {
            $('#box13_2').hide();
            $('#box13_3').hide();
        }
    });


    $('#box20').change(function () {
        var sel = $('#box20').val();
        if (sel == 'Abnormal karyotype, other:') {
            $('#box20_2').show();
        } else {
            $('#box20_2').hide();
        }
    });

    $('#box21').change(function () {
        var sel = $('#box21').val();
        if ($.inArray('AFP level', sel) > -1) {
            $('#box21_2').show();
        } else {
            $('#box21_2').hide();
        }
        if ($.inArray('HCG level', sel) > -1) {
            $('#box21_3').show();
        } else {
            $('#box21_3').hide();
        }
    });

    $('#box22').change(function () {
        var sel = $('#box22').val();
        if (sel == 'Other:') {
            $('#box22_2').show();
        } else {
            $('#box22_2').hide();
        }
    });

    $('#box23').change(function () {
        var sel = $('#box23').val();
        if (sel == 'Leukemia') {
            $('#box23_2').show();
        } else {
            $('#box23_2').hide();
        }
        if (sel == 'Myelodysplastic syndrome') {
            $('#box23_3').show();
        } else {
            $('#box23_3').hide();
        }
        if (sel == 'Other:') {
            $('#box23_4').show();
        } else {
            $('#box23_4').hide();
        }

    });

    $('#box17_1').change(function () {
        $('.COG').toggle();
    });
    $('#box17_2').change(function () {
        $('.sacro').toggle();
    });
    $('#box17_3').change(function () {
        $('.moran').toggle();
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

        var captext = "Extra-gonadal Germ Cell Tumor Synoptic\nAJCC 2018 cancer staging version\n\n";

        var box_1 = $("#box1").val();
        captext += "Patient Age:\n- "+box_1+"\n";

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other:'){
            captext += "\nTumor Site:\n- "+box_2_2+"\n";}
        else{captext += "\nTumor Site:\n- "+box_2+"\n";}

        var box_3 = $("#box3").val();
        captext += "\n+ Specimen Integrity:\n- "+box_3+"\n";

        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- "+box_4.replace(/cm/, '')+"cm\n";

        var box_5 = $("#box5").val();
        captext += "\nTumor Weight:\n- "+box_5.replace(/g/,'') + 'g\n';


        var box_6 = $("#box6").val();
        var box_6_2 = $("#box6_2").val();
        var box_6_3 = $("#box6_3").val();
        var box_6_4 = $("#box6_4").val();
        var box_6_5 = $("#box6_5").val();
        var box_6_6 = $("#box6_6").val();
        var box_6_7 = $("#box6_7").val();
        var box_6_8 = $("#box6_8").val();
        switch (box_6){
            case 'Combined germ cell tumor' :
                captext += '\nHistologic Type:\n- '+box_6+'\n- '+box_6_2+'% Seminoma\n- '+box_6_3+'% Yolk Sac\n- '+box_6_4+'% Choriocarcinoma\n- '+box_6_5+'% Somatic malignancy\n';
                break;
            case 'Teratoma and other germ cell tumor' :
                captext += "\nHistologic Type:\n- Teratoma and "+box_6_6+" (Type I)\n";
                break;
            case 'Teratoma and sarcoma' :
                captext += "\nHistologic Type:\n- Teratoma and "+box_6_7+" (Type III)\n";
                break;
            case 'Teratoma and other non-germ cell epithelial malignancy':
                captext += "\nHistologic Type:\n- Teratoma and "+box_6_8+" (Type II)\n";
                break
            default :
                captext += "\nHistologic Type:\n- "+box_6+"\n";
        }

        var box_7 = $('#box7').val();
        var box_7_2 = $('#box7_2').val();
        if (box_7 != 'Not applicable'){
            if (box_7 == 'Grade 3'){
                captext += '\nHistologic Grade of immature teratoma:\n- '+box_7+'\n- '+box_7_2+'% of teratoma is immature elements\n';}
            else {captext += '\nHistologic Grade of immature teratoma:\n- '+box_7+'\n';}
        }

        var box_8 = $('#box8').val();
        if (box_8 != 'Not applicable') {
            captext +='\nMicroscopic Tumor Extension of Sacrococcygeal teratoma:\n- '+box_8+'\n';}

        var box_9 = $("#box9").val();
        if (box_9 == 'Resection margin involved by invasive tumor'){
            var box_9_4 = $("#box9_4").val();
            captext += "\nMargins:\n- "+box_9_4+" margin involved by invasive tumor\n";
        }
        else if (box_9 == 'Tumor at resection margin not identified'){
            var box_9_2 = $("#box9_2").val();
            var box_9_3 = $("#box9_3").val();
            captext += "\nMargins:\n- Tumor is "+box_9_2+" cm from "+box_9_3+" margin\n";
        }
        else {captext += "\nMargins:\n- "+box_9+"\n";}

        var box_10 = $("#box10").val();
        if (box_10 != 'Not applicable, no known presurgical therapy'){
            captext += "\n+ Treatment Effect:\n- "+box_10+'\n';}

        var box_11 = $("#box11").val();
        captext += "\n+ Lymph-Vascular Invasion:\n- "+box_11+"\n";

        var box_12 = $("#box12").val();
        captext += "\n+ Perineural Invasion:\n- "+box_11+"\n";

        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        var box_13_3 = $("#box13_3").val();
        if (box_13 == 'pN1') {
            captext += '\nRegional Lymph Nodes:\n- '+box_13+'\n- Site: '+box_13_2+'\n- Histology: '+box_13_3;}
        else {captext += '\nRegional Lymph Nodes:\n- '+box_13;}

        var box_14 = $("#box14").val();
        if (box_14 != '0'){
            captext += "\n- Lymph nodes examined: "+box_14;}
        else {captext += '\n';}

        var box_15 = $("#box15").val();
        if (box_15 != '0'){
            captext += "\n- Lymph nodes involved: "+box_15+"\n";}

        var box_16 = $("#box16").val();
        captext += '\nDistant Metastasis:\n- '+box_16+'\n';

        var box_17 = $("#box17").val();
        var box_18 = $("#box18").val();
        var box_19 = $("#box19").val();
        if ($('#box17_1').is(':checked')) {
            captext += '\nChildren’s Oncology Group Staging for any Malignant Extragonadal Germ Cell Tumors:\n- '+box_17+'\n';}
        if ($('#box17_2').is(':checked')) {
            captext += '\n+ Anatomic Classification of Sacrococcygeal Germ Cell Tumors:\n- '+box_18+'\n';}
        if ($('#box17_3').is(':checked')) {
            captext += '\n+ Moran and Suster Proposed Clinical Staging for Mediastinal Germ Cell Tumors:\n- '+box_19+'\n';}

        var box_20 = $("#box20").val();
        var box_20_2 = $("#box20_2").val();
        var box_21 = $("#box21").val();
        var box_21_2 = $("#box21_2").val();
        var box_21_3 = $("#box21_3").val();
        var box_22 = $("#box22").val();
        var box_22_2 = $("#box22_2").val();
        var box_23 = $("#box23").val();
        var box_23_2 = $("#box23_2").val();
        var box_23_3 = $("#box23_3").val();
        var box_23_4 = $("#box23_4").val();
        if (box_20 == 'Abnormal karyotype, other:'){
            captext +='\n+ Additional Clinical or Lab Findings:\n- Cytogenetics: '+box_20.replace(/other:/, box_20_2)+'\n';}
        else {captext +='\n+ Additional Clinical or Lab Findings:\n- Cytogenetics: '+box_20+'\n';}

        if (box_21 != 'Serum marker studies not available or performed'){
            if (($.inArray('AFP level', box_21) > -1) && ($.inArray('HCG level', box_21) == -1)){
                captext += '- Serum tumor Markers: '+box_21.join('').replace(/AFP level/, 'AFP level:'+box_21_2)+'\n';}
            if (($.inArray('AFP level', box_21) == -1) && ($.inArray('HCG level', box_21) > -1)){
                captext += '- Serum tumor Markers: '+box_21.join('').replace(/HCG level/, 'HCG level:'+box_21_3)+'\n';}
            if (($.inArray('AFP level', box_21) > -1) && ($.inArray('HCG level', box_21) > -1)){
                captext += '- Serum tumor Markers: '+box_21.join(', ').replace(/AFP level/, 'AFP level:'+box_21_2).replace(/HCG level/, 'HCG level:'+box_21_3)+'\n';}}
        else {captext +='- Serum tumor marker studies not available\n';}

        if (box_22 != 'Not known'){
            if (box_22 == 'Other:'){
                captext +='- '+box_22_2+'\n';}
            else {captext +='- '+box_22+'\n';}
        }

        if (box_23 != 'Not known'){
            if (box_23 == 'Leukemia'){
                captext +='- '+box_23_2+'\n';}
            if (box_23 == 'Myelodysplastic syndrome'){
                captext +='- '+box_23_3+'\n';}
            if (box_23 == 'Other:'){
                captext +='- '+box_23_4+'\n';}
            else {captext += '\n';}
        }

        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
