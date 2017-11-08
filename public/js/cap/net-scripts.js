$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    //IHCs
    $(function () {
        var availableTags = ["ACTH", "Adenovirus", "ALK-1", "A1-AT", "AFP",
            "Amyloid-A", "APP", "B72.3", "INI1", "BCL2", "BCL6", "BER-Ep",
            "Beta-catenin", "Ber-EP4", "BKVirus", "C4d", "CA125", "Calcitonin",
            "Calponin", "Calretinin", "CD1a", "CD2", "CD3", "CD4", "CD5", "CD7",
            "CD8", "CD10", "CD15", "CD20", "CD21", "CD23", "CD25", "CD30",
            "CD34", "CD43", "CD44", "CD45", "CD45RO", "CD56", "CD57", "CD61",
            "CD68", "CD71", "CD79a", "CD99", "CD117", "CD123", "CD138", "CDX2",
            "CEA-mono", "CEA-poly", "Chromogranin", "CMV", "ColIV", "CyclinD1",
            "CDK4", "CK34BE12", "CK8", "CK5/6", "CK7", "CKAE1/3", "CKCam5.2",
            "CK17", "CK19", "CK20", "CKMAK-6", "D2-40", "DOG-1", "Desmin",
            "E-cad", "EBV-LMP", "EBV-ISH", "EMA", "ER", "FactorXIIIa", "FSH",
            "Galectin-3", "Gastrin", "GCDFP", "GFAP", "Glucagon", "GLUT-1",
            "Glut-Synth", "GlycophorinA", "Glypican-3", "GH", "H.P.", "HBME-1",
            "HBcore", "HBsurface", "HCG", "HepPar1", "HER2/Neu(IHC)", "HSVI&II",
            "Actin,muscle", "HHV-8", "HMB45", "HPV-HR(ISH)", "HMB45", "HPL",
            "IDH-1", "IgA", "IgG", "IgM", "Inhibin", "Insulin", "JCVirus",
            "Kappa(IHC)", "Lambda(IHC)", "Kappa(ISH)", "Lambda(ISH)",
            "Ki-67(MIB1)", "LH", "Lysozyme", "Mast-celltrypt", "MelanA",
            "MelanomaAA", "Mammaglobin", "MAP-2", "MITF", "MLH-1", "MOC-31",
            "MSH-2", "MSH-6", "MUM-1", "MPO", "Myogenin", "Neu-N", "NF", "NSE",
            "OCT-2", "OCT3/4", "p16", "p504s", "p53", "p63", "Parainfluenza",
            "ParvoB19", "PAX-5", "PAX-8", "PDGF-b", "PE10", "Perforin", "pHH3",
            "PLAP", "PMS-2", "PR", "Prolactin", "PTH", "Prostate triple stain",
            "PSA", "PSAP", "RCC", "RSV", "S100", "SALL4", "SMA", "SMMHC",
            "Smoothelin", "Somatostatin", "SurfactantA", "SurfactantB",
            "Synaptophysin", "Tau", "TdT", "Thyroglobulin", "Toxoplasma",
            "Transthyretin", "Trypsin", "TSH", "TTF-1", "Tubulin", "Tyrosinase",
            "Ubiquitin", "Uroplakin", "Varicella", "Villin", "WT-1"
        ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }
        $("input#boxZZ").autocomplete({
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

    $('.specimen').change(function(){
        var sel = $(this).val();
        if (sel == 'Appendix'){
            $('.appy').show();
            $('.panc').hide();
            $('.colon').hide();
            $('.common').show();
        }
        else if (sel == 'Colon'){
            $('.appy').hide();
            $('.panc').hide();
            $('.colon').show();
            $('.common').show();
        }
        else if (sel == 'Pancreas'){
            $('.appy').hide();
            $('.panc').show();
            $('.colon').hide();
            $('.common').hide();
        }
    });

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box1_1').show();}
        else {$('#box1_1').hide();}
    });

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if (sel == 'Other:') {
            $('#box2_1').show();}
        else {
            $('#box2_1').hide();}
    });

    $('#box3').change(function(){
        var sel = $('#box3').val();
        if (sel == 'Other:') {
            $('#box3_1').show();}
        else {
            $('#box3_1').hide();}
    });

    $('#box5').change(function(){
        var sel = $('#box5').val();
        if (sel == 'Other:') {
            $('#box5_1').show();}
        else {
            $('#box5_1').hide();}
    });

    $('#box7').change(function(){
        var sel = $('#box7').val();
        if (sel == 'Other:') {
            $('#box7_1').show();}
        else {
            $('#box7_1').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if (sel == 'Tumor directly invades adjacent structures') {
            $('#box9_1').show();}
        else {$('#box9_1').hide();}
        if (sel == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures') {
            $('#box9_2').show();}
        else {$('#box9_2').hide();}
    });

    $('.margin').change(function(){
        if ($('.margin').is(':checked')){
            $('.negmargin').show();
            $('.posmargin').hide();}
        else {
            $('.negmargin').hide();
            $('.posmargin').show();}
    });

    $('#box13').change(function(){
        var sel = $('#box13').val();
        if (sel == 'Uninvolved by tumor') {
            $('#box13_1').show();}
        else {
            $('#box13_1').hide();}
    });

    $('#box14').change(function(){
        var sel = $('#box14').val();
        if (sel == 'Involved by neuroendocrine tumor') {
            $('#box14_1').show();}
        else {
            $('#box14_1').hide();}
    });

    $("#box21").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box18').change(function(){
        var sel = $('#box18').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box18_1').show();}
        else {$('#box18_1').hide();}
    });

    $('#box19').change(function(){
        var sel = $('#box19').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box19_1').show();}
        else {$('#box19_1').hide();}
    });

    $('#box25').change(function(){
        var sel = $('#box25').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box25_1').show();}
        else {$('#box25_1').hide();}
    });

    $('#box30').change(function(){
        var sel = $('#box30').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box30_1').show();}
        else {$('#box30_1').hide();}
    });

    $('#box31').change(function(){
        var sel = $('#box31').val();
        if (sel == 'Other') {
            $('#box31_1').show();}
        else {
            $('#box31_1').hide();}
    });

    $('#box33').change(function(){
        var sel = $('#box33').val();
        if (sel == 'Other') {
            $('#box33_1').show();}
        else {
            $('#box33_1').hide();}
    });

    $('#box35').change(function(){
        var sel = $('#box35').val();
        if (sel == 'Multifocal') {
            $('#box35_1').show();}
        else {
            $('#box35_1').hide();}
    });

    $('#box36').change(function(){
        var sel = $('#box36').val();
        if (sel == 'Tumor directly invades adjacent structures') {
            $('#box36_1').show();}
        else {$('#box36_1').hide();}
        if (sel == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures') {
            $('#box36_2').show();}
        else {$('#box36_2').hide();}
    });

    $('#box40').change(function(){
        var sela = $('#box40').val();
        var selb = $('#box40').val();
        if ($.inArray('Other large vessel', sela) >-1) {
            $('#box40_1').show();}
        else {$('#box40_1').hide();}
        if ($.inArray('Other sites', selb) >-1) {
            $('#box40_2').show();}
        else {$('#box40_2').hide();}
    });

    $('#box41').change(function(){
        var sel = $('#box41').val();
        if (sel == 'Other') {
            $('#box41_1').show();}
        else {
            $('#box41_1').hide();}
    });

    $('#box42').change(function(){
        var sel = $('#box42').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box42_1').show();}
        else {$('#box42_1').hide();}
    });

    $('#box44').change(function(){
        var sel = $('#box44').val();
        if (sel == 'Multifocal') {
            $('#box44_1').show();}
        else {
            $('#box44_1').hide();}
    });

    $('#box45').change(function(){
        var sel = $('#box45').val();
        if (sel == 'Other') {
            $('#box45_1').show();}
        else {
            $('#box45_1').hide();}
    });


    $('#box46').change(function(){
        var sel = $('#box46').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box46_1').show();}
        else {$('#box46_1').hide();}
    });

    $('#box49').change(function(){
        var sel = $('#box49').val();
        if ($.inArray('Tumor invades other adjacent organs or structures', sel) >-1) {
            $('#box49_1').show();}
        else {$('#box49_1').hide();}
    });

    $('#box50').change(function(){
        var sela = $('#box50').val();
        var selb = $('#box50').val();
        if (($.inArray('Margins uninvolved by tumor', sela) >-1) && ($.inArray('Margins involved', sela) == -1)) {
            $('#box50_1').show();
            $('#box50_2').show();}
        else {$('#box50_1').hide();
            $('#box50_2').hide();}
        if (($.inArray('Margins involved', selb) >-1) && ($.inArray('Margins uninvolved by tumor', sela) == -1)) {
            $('#box50_3').show();}
        else {$('#box50_3').hide();}
    });

    $("#box57").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box60').change(function(){
        var sel = $('#box60').val();
        if (sel == 'Other') {
            $('#box60_1').show();}
        else {
            $('#box60_1').hide();}
    });

    $('#box60').change(function(){
        var sel = $('#box60').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box60_1').show();}
        else {$('#box60_1').hide();}
    });
    $('#box61').change(function(){
        var sel = $('#box61').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box61_1').show();}
        else {$('#box61_1').hide();}
    });

    $('#box62').change(function(){
        var sel = $('#box62').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box62').show();}
        else {$('#box62').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "Neuroendocrine Tumor Summary\n\n";

        var box_0 = $('#specimen').val();

        if (box_0 != 'Pancreas'){
            if (box_0 == 'Appendix'){
                var box_1 = $("#box1").val();
                var box_1_1 = $("#box1_1").val();
                if ($.inArray('Other:', box_1) >-1){
                    captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other:/, box_1_1) + "\n";}
                else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}


                var box_2 = $("#box2").val();
                var box_2_1 = $("#box2_1").val();
                if (box_2 == 'Other:'){
                    captext += "\nProcedure:\n- "  + box_2_1+ "\n";}
                else {captext += "\nProcedure:\n- "  + box_2+ "\n";}


                var box_3 = $("#box3").val();
                var box_3_1 = $("#box3_1").val();
                if (box_3 == 'Other:'){
                    captext += "\nSpecimen Integrity:\n- "  + box_3_1+ "\n";}
                else {captext += "\nSpecimen Integrity:\n- "  + box_3+ "\n";}


                var box_4 = $("#box4").val();
                captext += "\nSpecimen size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

                var box_5 = $("#box5").val();
                var box_5_1 = $("#box5_1").val();
                if (box_5 == 'Other:'){
                    captext += "\nTumor Site:\n- "  + box_5_1+ "\n";}
                else {captext += "\nTumor Site:\n- "  + box_5+ "\n";}


                var box_6 = $("#box6").val();
                captext += "\nTumor Size:\n- "  + box_6.replace(/cm/,'') + "cm\n";
            } // end appendix block

            if (box_0 == 'Colon'){
                var box_30 = $("#box30").val();
                var box_30_1 = $("#box30_1").val();
                if ($.inArray('Other', box_30) >-1){
                    captext += "\nSpecimen:\n- "  + box_30.join('\n- ').replace(/Other/, box_30_1) + "\n";}
                else {captext += "\nSpecimen:\n- "  + box_30.join('\n- ') + "\n";}

                var box_31 = $("#box31").val();
                var box_31_1 = $("#box31_1").val();
                if (box_31 == 'Other'){
                    captext += "\nProcedure:\n- "  + box_31_1+ "\n";}
                else {captext += "\nProcedure:\n- "  + box_31+ "\n";}


                var box_32 = $("#box32").val();
                if (box_32 != 'not applicable'){
                    captext += "\nSpecimen Size:\n- "  + box_32.replace(/cm/,'') + "cm\n";}


                var box_33 = $("#box33").val();
                var box_33_1 = $("#box33_1").val();
                if (box_33 == 'Other'){
                    captext += "\nTumor Site:\n- "  + box_33_1+ "\n";}
                else {captext += "\nTumor Site:\n- "  + box_33+ "\n";}


                var box_34 = $("#box34").val();
                captext += "\n+ Tumor Location:\n- "  + box_34+ "\n";

                var box_35 = $("#box35").val();
                var box_35_1 = $("#box35_1").val();
                if (box_35 == 'Multifocal'){
                    captext += "\nTumor Focality:\n- Multifocal, "  + box_35_1+ " separate tumors\n";}
                else {captext += "\nTumor Focality:\n- "  + box_35+ "\n";}


                var box_36 = $("#box36").val();
                var box_36_1 = $("#box36_1").val();
                var box_36_2 = $("#box36_2").val();
                if (box_36 == 'Tumor directly invades adjacent structures') { captext += "\nMicroscopic Tumor Extension:\n- "+box_36+": "+box_36_1+"\n";}
                else if (box_36 == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures'){ captext += "\nMicroscopic Tumor Extension:\n- "+box_36+": "+box_36_2+"\n";}
                else {captext += "\nMicroscopic Tumor Extension:\n- "+box_36+"\n";}

            } // end colon block

// start common appy and colon block
            var box_7 = $("#box7").val();
            var box_7_1 = $("#box7_1").val();
            if (box_7 == 'Other:'){
                captext += "\nHistologic Type and Grade:\n- "  + box_7_1+ "\n";}
            else {captext += "\nHistologic Type and Grade:\n- "  + box_7+ "\n";}


            var box_8 = $("#box8").val();
            captext += "\nMitotic Rate:\n- "  + box_8 + "/10 hpf\n";

            var box_9 = $("#box9").val();
            var box_9_1 = $("#box9_1").val();
            var box_9_2 = $("#box9_2").val();
            if (box_9 == 'Tumor directly invades adjacent structures') { captext += "\nMicroscopic Tumor Extension:\n- "+box_9+"\n- "+box_9_1+"\n";}
            else if (box_9 == 'Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures'){ captext += "\nMicroscopic Tumor Extension:\n- "+box_9+"\n- "+box_9_2+"\n";}
            else {captext += "\nMicroscopic Tumor Extension:\n- "+box_9+"\n";}

            var box_10 = $("#box10").val();
            var box_11 = $("#box11").val();
            if ($('.margin').is(':checked')){
                captext += '\nMargins:\n- All margins uninvolved by tumor\n- Nearest margin: '+box_11+', distance to this margin: '+box_10.replace(/cm/,'')+'cm\n';
            }
            else{
                var box_12 = $("#box12").val();
                captext += "\nProximal Margin:\n- "  + box_12+ "\n";}


            var box_13 = $("#box13").val();
            var box_13_1 = $("#box13_1").val();
            if (box_13 == 'Uninvolved by tumor'){
                captext += "\nMesenteric Margin:\n- Uninvolved by tumor, closest distance: "  + box_13_1.replace(/cm/,'')+ "cm\n";}
            else {captext += "\nMesenteric Margin:\n- "  + box_13+ "\n";}


            var box_14 = $("#box14").val();
            var box_14_1 = $("#box14_1").val();
            if(box_14 != "Not applicable"){
                if (box_14 == 'Involved by neuroendocrine tumo'){
                    captext += "\nOther Margin:\n- "  + box_14_1+ " involved by tumor\n";}
            }


            var box_15 = $("#box15").val();
            captext += "\nLymph-Vascular Invasion:\n- "  + box_15+ "\n";

            var box_16 = $("#box16").val();
            captext += "\nPerineural Invasion:\n- "  + box_16+ "\n";

            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            var box_19 = $("#box19").val();
            var box_20 = $("#box20").val();
            captext += '\nPathologic Staging (pTNM):\n- ';
            if (box_17 != "Not applicable"){captext += box_17.join("")+' '+box_18+" "+box_19+" "+box_20+"\n";}
            else {captext += box_18+" "+box_19+" "+box_20+"\n";}

            if ($("#box21").is(':checked')) {
                var box_22 = $("#box22").val();
                var box_23 = $("#box23").val();
                captext += "\nLymph nodes examined: "+box_22+"\nLymph nodes involved: "+box_23+"\n";}

            var box_24 = $("#box24").val();
            var box_24_1 = $("#box24_1").val();
            if ($.inArray('Other:', box_24) >-1){
                captext += "\nAncillary Studies:\n- "  + box_24.join('\n- ').replace(/Other:/, box_24_1) + "\n";}
            else {captext += "\nAncillary Studies:\n- "  + box_24.join('\n- ') + "\n";}

            var box_25 = $("#box25").val();
            var box_25_1 = $("#box25_1").val();
            if ($.inArray('Other:', box_25) >-1){
                captext += "\nAdditional Pathologic Findings:\n- "  + box_25.join('\n- ').replace(/Other:/, box_25_1) + "\n";}
            else {captext += "\nAdditional Pathologic Findings:\n- "  + box_25.join('\n- ') + "\n";}
// end common appy and colon block
        }

        if (box_0 == 'Pancreas'){
            var box_40 = $("#box40").val();
            var box_40_1 = $("#box40_1").val();
            var box_40_2 = $("#box40_2").val();
            if ($.inArray('Other large vessel', box_40) > -1 && $.inArray('Other sites', box_40) == -1) { captext += "\nSpecimen:\n- "+box_40.join("\n- ").replace(/Other large vessel/, box_40_1)+"\n";}
            else if ($.inArray('Other sites', box_40) > -1 && $.inArray('Other large vessel', box_40) == -1) { captext += "\nSpecimen:\n- "+box_40.join("\n- ").replace(/Other sites/, box_40_2)+"\n";}
            else if ($.inArray('Other large vessel', box_40) > -1 && $.inArray('Other sites', box_40) > -1) { captext += "\nSpecimen:\n- "+box_40.join("\n- ").replace(/Other large vessel/, box_40_1).replace(/Other sites/, box_40_2)+"\n";}
            else {captext += "\nSpecimen:\n- "+box_40.join("\n- ")+"\n";}

            var box_41 = $("#box41").val();
            var box_41_1 = $("#box41_1").val();
            if (box_41 == 'Other'){
                captext += "\nProcedure:\n- "  + box_41_1+ "\n";}
            else {captext += "\nProcedure:\n- "  + box_41+ "\n";}


            var box_42 = $("#box42").val();
            var box_42_1 = $("#box42_1").val();
            if ($.inArray('Other', box_42) >-1){
                captext += "\nTumor Site:\n- "  + box_42.join('\n- ').replace(/Other/, box_42_1) + "\n";}
            else {captext += "\nTumor Site:\n- "  + box_42.join('\n- ') + "\n";}

            var box_43 = $("#box43").val();
            if (box_43 != 'Cannot be determined'){
                captext += "\nTumor Size:\n- "  + box_43.replace(/cm/,'') + "cm\n";}
            else {
                captext += "\nTumor Size:\n- Cannot be determined\n";
            }
            var box_44 = $("#box44").val();
            var box_44_1 = $("#box44_1").val();
            if (box_44 == 'Multifocal'){
                captext += "\nTumor Focality:\n- "  + box_44_1+ "\n";}
            else {captext += "\nTumor Focality:\n- "  + box_44+ "\n";}


            var box_45 = $("#box45").val();
            var box_45_1 = $("#box45_1").val();
            if (box_45 == 'Other'){
                captext += "\nHistologic Type and Grade:\n- "  + box_45_1+ "\n";}
            else {captext += "\nHistologic Type and Grade:\n- "  + box_45+ "\n";}

            var box_46 = $("#box46").val();
            var box_46_1 = $("#box46_1").val();
            if (box_46 != 'Cannot be assessed'){
                if ($.inArray('Other', box_46) >-1){
                    captext += "\n+ Functional Type:\n- "  + box_46.join('\n- ').replace(/Other/, box_46_1) + "\n";}
                else {captext += "\n+ Functional Type:\n- "  + box_46.join('\n- ') + "\n";}
            }

            var box_47 = $("#box47").val();
            if (box_47 != 'per 10 hpf'){
                captext += "\nMitotic Rate:\n- "  + box_47 + "per 10 hpf\n";}
            else {
                captext += "\nMitotic Rate:\n- Cannot be determined\n";
            }
            var box_48 = $("#box48").val();
            captext += "\n+ Tumor Necrosis:\n- "  + box_48+ "\n";

            var box_49 = $("#box49").val();
            var box_49_1 = $("#box49_1").val();
            if ($.inArray('Tumor invades other adjacent organs or structures', box_49) >-1){
                captext += "\nMicroscopic Tumor Extension:\n- "  + box_49.join('\n- ').replace(/Tumor invades other adjacent organs or structures/, box_49_1) + "\n";}
            else {captext += "\nMicroscopic Tumor Extension:\n- "  + box_49.join('\n- ') + "\n";}

            var box_50 = $("#box50").val();
            var box_50_1 = $("#box50_1").val();
            var box_50_2 = $("#box50_2").val();

            if (box_50 == 'Margins uninvolved by tumor') {
                captext += "\nMargins:\n- Margins uninvolved by tumor:\n- Nearest margin: "+box_50_1+"\n- Distance to this margin: " + box_50_2.replace(/cm/,"")+"cm\n";}
            else {
                captext += "\nMargins Involved:\n- "+box_50.join(', ')+"\n"
            }

            var box_51 = $("#box51").val();
            captext += "\nLymph-Vascular Invasion:\n- "  + box_51+ "\n";

            var box_52 = $("#box52").val();
            captext += "\nPerineural Invasion:\n- "  + box_52+ "\n";

            var box_53 = $("#box53").val();
            var box_54 = $("#box54").val();
            var box_55 = $("#box55").val();
            var box_56 = $("#box56").val();
            captext += '\nPathologic Staging (pTNM):\n- ';
            if (box_53 != "Not applicable"){captext += box_53.join("")+' '+box_54+" "+box_55+" "+box_56+"\n";}
            else {captext += box_54+" "+box_55+" "+box_56+"\n";}

            if ($("#box57").is(':checked')) {
                var box_58 = $("#box58").val();
                var box_59 = $("#box59").val();
                captext += "\nLymph nodes examined: "+box_58+"\nLymph nodes involved: "+box_59+"\n";}


            var box_60 = $("#box60").val();
            var box_60_1 = $("#box60_1").val();
            if ($.inArray('Other', box_60) >-1){
                captext += "\n+ Additional Pathologic Findings:\n- "  + box_60.join('\n- ').replace(/Other/, box_60_1) + "\n";}
            else {captext += "\n+ Additional Pathologic Findings:\n- "  + box_60.join('\n- ') + "\n";}


            var box_61 = $("#box61").val();
            var box_61_1 = $("#box61_1").val();
            if ($.inArray('Other', box_61) >-1){
                captext += "\n+ Ancillary Studies :\n- "  + box_61.join('\n- ').replace(/Other/, box_61_1) + "\n";}
            else {captext += "\n+ Ancillary Studies :\n- "  + box_61.join('\n- ') + "\n";}


            var box_62 = $("#box62").val();
            var box_62 = $("#box62").val();
            if (box_62 != 'Not applicable'){
                if ($.inArray('Other', box_62) >-1){
                    captext += "\n+ Clinical History :\n- "  + box_62.join('\n- ').replace(/Other/, box_62) + "\n";}
                else {captext += "\n+ Clinical History :\n- "  + box_62.join('\n- ') + "\n";}
            }

        } // end pancreas block



        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
