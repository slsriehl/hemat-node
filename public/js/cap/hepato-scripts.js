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

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if (sel == 'Other') {
            $('#box2_2').show();}
        else {
            $('#box2_2').hide();}
    });

    $('#box3').change(function(){
        var sel = $('#box3').val();
        if (sel == 'Other') {
            $('#box3_2').show();}
        else {
            $('#box3_2').hide();}
    });

    $('#box6').change(function(){
        var sel = $('#box6').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box6_2').show();}
        else {$('#box6_2').hide();}
    });

    $('#box8').change(function(){
        var sel = $('#box8').val();
        if ($.inArray('Hepatoblastoma, Other', sel) >-1) {
            $('#box8_2').show();}
        else {$('#box8_2').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if (sel == 'Present') {
            $('#box9_2').show();}
        else {
            $('#box9_2').hide();}
    });

    $('#box10').change(function(){
        var sel = $('#box10').val();
        if (sel == 'Uninvolved by tumor') {
            $('#box10_2').show();}
        else {$('#box10_2').hide();}
        if (sel == 'Involved by tumor') {
            $('#box10_3').show();}
        else {$('#box10_3').hide();}
    });

    $('#box11').change(function(){
        var sel = $('#box11').val();
        if (sel == 'Uninvolved by tumor') {
            $('#box11_3').show();}
        else {
            $('#box11_3').hide();}
    });

    $("#box14").change(function(){
        if ($(this).is(":checked")){
            $(".lnchk").show();}
        else{
            $(".lnchk").hide();}
    });

    $('#box17').change(function(){
        var sel = $('#box17').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box17_2').show();}
        else {$('#box17_2').hide();}
    });

    $('#box19').change(function(){
        var sel = $('#box19').val();
        if ($.inArray('Other', sel) >-1) {
            $('#box19_2').show();}
        else {$('#box19_2').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {




        $('#outPut-1').val(captext);

    });
});
