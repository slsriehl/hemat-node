$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $(function() {
        var availableTags = ["ACTH","Adenovirus","ALK-1","A1-AT","AFP","Amyloid-A","APP","B72.3","INI1","BCL2","BCL6","BER-Ep","Beta-catenin","Ber-EP4","BKVirus","C4d","CA125","Calcitonin","Calponin","Calretinin","CD1a","CD2","CD3","CD4","CD5","CD7","CD8","CD10","CD15","CD20","CD21","CD23","CD25","CD30","CD34","CD43","CD44","CD45","CD45RO","CD56","CD57","CD61","CD68","CD71","CD79a","CD99","CD117","CD123","CD138","CDX2","CEA-mono","CEA-poly","Chromogranin","CMV","ColIV","CyclinD1","CDK4","CK34BE12","CK8","CK5/6","CK7","CKAE1/3","CKCam5.2","CK17","CK19","CK20","CKMAK-6","D2-40","DOG-1","Desmin","E-cad","EBV-LMP","EBV-ISH","EMA","ER","FactorXIIIa","FSH","Galectin-3","Gastrin","GCDFP","GFAP","Glucagon","GLUT-1","Glut-Synth","GlycophorinA","Glypican-3","GH","H.P.","HBME-1","HBcore","HBsurface","HCG","HepPar1","HER2/Neu(IHC)","HSVI&II","Actin,muscle","HHV-8","HMB45","HPV-HR(ISH)","HMB45","HPL","IDH-1","IgA","IgG","IgM","Inhibin","Insulin","JCVirus","Kappa(IHC)","Lambda(IHC)","Kappa(ISH)","Lambda(ISH)","Ki-67(MIB1)","LH","Lysozyme","Mast-celltrypt","MelanA","MelanomaAA","Mammaglobin","MAP-2","MITF","MLH-1","MOC-31","MSH-2","MSH-6","MUM-1","MPO","Myogenin","Neu-N","NF","NSE","OCT-2","OCT3/4","p16","p504s","p53","p63","Parainfluenza","ParvoB19","PAX-5","PAX-8","PDGF-b","PE10","Perforin","pHH3","PLAP","PMS-2","PR","Prolactin","PTH","Prostate triple stain","PSA","PSAP","RCC","RSV","S100","SALL4","SMA","SMMHC","Smoothelin","Somatostatin","SurfactantA","SurfactantB","Synaptophysin","Tau","TdT","Thyroglobulin","Toxoplasma","Transthyretin","Trypsin","TSH","TTF-1","Tubulin","Tyrosinase","Ubiquitin","Uroplakin","Varicella","Villin","WT-1"];

        function split( val ) {
            return val.split( /,\s*/ );
        }

        function extractLast( term ) {
            return split( term ).pop();
        }

        $("input#box15").autocomplete({
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

    $("#box12_1").change(function() {
        $(".nodes").toggle();
    });

    $('#box2').change(function () {
        var sel = $('#box2').val();
        if (sel == 'Other:') {
            $('#box2_2').show();
        } else {
            $('#box2_2').hide();
        }
    });

    $('#box7').change(function () {
        var sel = $('#box7').val();
        if (sel == 'Present') {
            $('#box7_2').show();
        } else {
            $('#box7_2').hide();
        }
    });


    $('#box13').change(function () {
        var sel = $('#box13').val();
        if (sel == 'pM1') {
            $('#box13_2').show();
        } else {
            $('#box13_2').hide();
        }
    });

    $('#box16').change(function () {
        var sel = $('#box16').val();
        if (sel == 'Translocation detected') {
            $('#box16_2').show();
        } else {
            $('#box16_2').hide();
        }
    });

    $('#box20').change(function () {
        var sel = $('#box20').val();
        if (sel == 'Present') {
            $('#box20_2').show();
        } else {
            $('#box20_2').hide();
        }
    });

    $('#box21').change(function () {
        var sel = $('#box21').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box21_2').show();
        } else {
            $('#box21_2').hide();
        }
    });

    $('#box22').change(function(){
        var sel = $('#box22').val();
        if (sel == 'Margins uninvolved by sarcoma') {
            $('#box22_1').show();
            $('#box22_2').show()}
        else {
            $('#box22_1').hide();
            $('#box22_2').hide();
        }
        if (sel == 'Margins involved by sarcoma') {
            $('#box22_3').show();}
        else {$('#box22_3').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Soft Tissue Tumor Resection Cancer Summary\n\n";
// Checklist variables
        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other:'){
            captext += "\nProcedure:\n- "+box_2_2+"\n";}
        else {captext += "\nProcedure:\n- "+box_2+"\n";}

        var box_3 = $("#box3").val();
        captext += "\nTumor Site:\n- "+box_3+"\n";
        var box_4 = $("#box4").val();
        captext += "\nTumor Size (cm):\n- "+box_4+"cm\n";
        var box_5 = $("#box5").val();
        captext += "\nHistologic Type:\n- "+box_5.join(', ')+"\n";
        var box_6 = $("#box6").val();
        captext += "\n+ Mitotic Rate:\n- "+box_6+"/10 high-power fields\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 == 'Present'){
            captext += "\nNecrosis:\n- "+box_7+", "+box_7_2+"% necrosis\n";}
        else {
            captext += "\nNecrosis:\n- "+box_7+"\n";}

        var box_21 =  $("#box21").val();
        var box_21_2 =  $("#box21_2").val();
        if ($.inArray ('Other', box_21) >-1){
            captext += '\nMacroscopic Extent of Tumor:\n- '+box_21.join('\n- ').replace(/Other/, box_21_2)+'\n';}
        else {captext += '\nMacroscopic Extent of Tumor:\n- '+box_21.join('\n- ')+'\n';}

        var box_8 = $("#box8").val();
        captext += "\nHistologic Grade:\n- "+box_8+"\n";

        var box_22 = $("#box22").val();
        var box_22_1 = $("#box22_1").val();
        var box_22_2 = $("#box22_2").val();
        var box_22_3 = $("#box22_3").val();
        if (box_22 == 'Margins uninvolved by sarcoma') {
            captext += "\nMargins uninvolved by sarcoma:\n- Nearest margin: "+box_22_1+"\n- Distance to this margin: "+box_22_2.replace(/cm/,'')+"cm\n";}
        else if (box_22 == 'Margins involved by sarcoma'){
            captext += "\nMargins involved by sarcoma:\n- Margin involved: "+box_22_3+"\n";}
        else {captext += "\nMargins:\n- "+box_22+"\n";}


        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        var box_13_2 = $("#box13_2").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable"){
            captext += box_10.join("")+' ';}
        if (box_13 =='pM1'){
            captext += box_11+" "+box_12+" "+box_13+'('+box_13_2+')'+"\n";}
        else {captext += box_11+" "+box_12+" "+box_13+"\n";}

        if ($("#box12_1").is(':checked')) {
            var box_12_2 = $("#box12_2").val();
            var box_12_3 = $("#box12_3").val();
            if (parseInt(box_12_3, 10) > parseInt(box_12_2, 10)){alert ('Please check your lymph node count'); $('#box12_2').focus().addClass('highlight'); return; }
            captext += "\nLymph nodes examined: "+box_12_2+"\nLymph nodes involved: "+box_12_3+"\n";
        }
        else {captext += '\nLymph Nodes Examined:\n- No lymph nodes submitted\n';}

        var box_14 = $("#box14").val();
        if (box_14 != "None") {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_14+"\n";}
        var box_15 = $("#box15").val();
        if (box_15 != "None performed"){
            captext += "\nImmunohistochemistry:\n- "+box_15+"\n";}

        var box_16 = $("#box16").val();
        if (box_16 != "Not performed") {
            if (box_16 == 'Translocation detected'){
                captext += "\nCytogenetics:\n- "+box_16+": "+box_16_2+"\n";}
            else {captext += "\nCytogenetics:\n- "+box_16+"\n";}

        }

        var box_17 = $("#box17").val();
        if (box_17 != "Not performed") {
            captext += "\nMolecular Pathology:\n- "+box_17+"\n";}

        var box_19 = $("#box19").val();
        captext += '\nPreresection Treatment:\n- '+box_19.join('\n- ')+'\n';

        var box_20 = $('#box20').val();
        var box_20_2 = $('#box20_2').val();
        if (box_20 == 'Present'){
            captext += "\nTreatment Effect:\n- "+box_20+", "+box_20_2+"% viable tumor\n";}
        else {captext += "\nTreatment Effect:\n- "+box_20+"\n" ;}


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
