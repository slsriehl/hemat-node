$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    $("input#boxX").autocomplete({
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

        $("input#boxY").autocomplete({
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


    $('#box1').on("change", function(){
        var sel = $('#box1').val();
        if (sel.indexOf("Other") > -1) {

            $('#box1_2').show();}
        else {
            $('#box1_2').hide();}
    });

    $('#box3').on("change", function(){
        var sel = $('#box3').val();
        if (sel.indexOf("Other") > -1) {

            $('#box3_2').show();}
        else {
            $('#box3_2').hide();}
    });

    $('#box5').on("change", function(){
        var sel = $('#box5').val();
        if (sel.indexOf('additional malignant somatic component') > -1){
            $('#box5_2').show();}
        else {$('#box5_2').hide();}
        if (sel.indexOf('Mixed germ cell tumor') > -1){
            $('#box5_3').show();}
        else {$('#box5_3').hide();}
    });

    $('#box7').on("change", function(){
        var sel = $('#box7').val();
        if (sel.indexOf("Grade 3") > -1) {

            $('#box7_2').show();}
        else {
            $('#box7_2').hide();}
    });

    $('#box9').on("change", function(){
        var sela = $('#box9').val();
        if (sela.indexOf('Uninvolved') > -1){
            $('#box9_1').show();
            $('#box9_2').show();}
        else {$('#box9_1').hide();
            $('#box9_2').hide();}
    });

    $("#box16").on("change", function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();
        }
        else{
            $(".lnchk").hide();
        }
    });

    $("#box15").on("change", function(){
        var sel = $("#box15").val();
        if (sel != "pMx"){
            $("#box15_2").show();
        } else {
            $("#box15_2").hide();
        }
    });

    $("#box18").on("input", function(){
        var sel = $(this).val();
        if (sel > 0){
            $(".posnodes").show();
        } else {
            $(".posnodes").hide();
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



        var captext = "Extra-gonadal Germ Cell Tumor Synoptic\n(COG staging system)\n\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if (box_1.indexOf("Other") > -1) {
            captext += "\nProcedure:\n- "  + box_1_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_1+ "\n";}


        var box_2 = $("#box2").val();
        captext += "\nPatient Age:\n- "  + box_2+ "\n";

        var box_3 = $("#box3").val();
        var box_3_2 = $("#box3_2").val();
        if (box_3.indexOf("Other") > -1) {
            captext += "\nTumor Site:\n- "  + box_3_2+ "\n";}
        else {captext += "\nTumor Site:\n- "  + box_3+ "\n";}


        var box_4 = $("#box4").val();
        captext += "\nTumor Size:\n- "  + box_4.replace(/cm/,'') + "cm\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        var box_5_3 = $("#box5_3").val();
        if (box_5.indexOf("additional malignant somatic component") > -1) {
            captext += "\nHistologic Type:\n- "+box_5.replace(/additional malignant somatic component/, ": "+box_5_2)+"\n";}
        else if (box_5.indexOf("Mixed germ cell tumor") > -1) {
            captext += "\nHistologic Type:\n- "+box_5+" with: "+box_5_3+"\n";}
        else {captext += "\nHistologic Type:\n- "+box_5+"\n";}

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7.indexOf("Not") < 0){
            if (box_7.indexOf("Grade 3") > -1) {
                captext += "\n+ Histologic Grade:\n- "  +box_7+"\n- % teratoma with immature elements: "+ box_7_2+ "\n";}
            else {captext += "\n+ Histologic Grade:\n- "  + box_7+ "\n";}
        }


        var box_8 = $("#box8").val();
        if (box_8.indexOf("Not") < 0){
            captext += "\nMicroscopic Tumor Extension:\n- "  + box_8+ "\n";
        }

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        var box_9_2 = $("#box9_2").val();
        var box_9_3 = $("#box9_3").val();
        if (box_9.indexOf("Uninvolved") > -1) {
            captext += "\nMargins:\n- "+box_9+"\n- Nearest margin: "+box_9_1+"\n- Distance to this margin: " + box_9_2.replace(/mm/,"")+"mm\n";}
        else {captext += "\nMargins:\n- "+box_9+"\n";}

        var box_10 = $("#box10").val();
        captext += "\n+ Lymph-Vascular Invasion:\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        captext += "\n+ Perineural Invasion:\n- "  + box_11+ "\n";


        var box_15 = $("#box15").val();
        var box_15_2 = $("#box15_2").val();
        captext += '\nDistant Metastasis: ';
        if (box_15 != "Not applicable"){

            if (box_15 == "Present"){
                captext += "\n- "+box_15+"\n- Metastatic site(s): " + box_15_2 + ")\n";
            } else {
                captext += "\n- "+box_15+"\n";
            }
        }
        if ($("#box16").is(':checked')) {
            var box_17 = $("#box17").val();
            var box_18 = $("#box18").val();
            captext += "\nLymph nodes:\n\tLymph Nodes Examined: "+box_17+"\n\tLymph nodes involved: "+box_18+"\n";} else {
            captext += "\nLymph nodes: None submitted\n";}

        var box_19 = $("#box19").val();
        captext += "\nSpecify nodes involved:\n- "  + box_19 + "\n";

        var box_20 = $("#box20").val();
        captext += "\nPathologic Staging:\n- "  + box_20+ "\n";




        $('#outPut-1').val(captext);

        dataObj.singleSection = $('#outPut-1').val();
        makeCreatePdfBtn();
    });
});


