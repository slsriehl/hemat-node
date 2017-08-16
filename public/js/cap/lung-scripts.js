$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    //carcinomas
    $("input#box8").autocomplete({
        source: ['Adenocarcinoma, NOS', 'Adenocarcinoma, Lepidic predominant', 'Adenocarcinoma, Acinar predominant', 'Adenocarcinoma, Papillary predominant', 'Adenocarcinoma, Solid predominant', 'Adenocarcinoma, Micropapillary predominant', 'Invasive mucinous adenocarcinoma', 'Mixed invasive mucinous and nonmucinous adenocarcinoma', 'Colloid adenocarcinoma', 'Fetal adenocarcinoma', 'Enteric adenocarcinoma', 'Minimally invasive adenocarcinoma, Nonmucinous', 'Minimally invasive adenocarcinoma, Mixed nonmucinous and mucinous', 'Minimally invasive adenocarcinoma, Mucinous', 'Adenocarcinoma in situ, Nonmucinous', 'Adenocarcinoma in situ, Mixed nonmucinous and mucinous', 'Adenocarcinoma in situ, Mucinous', 'Squamous cell carcinoma', 'Keratinizing squamous cell carcinoma', 'Non-keratinizing squamous cell carcinoma', 'Basaloid squamous cell carcinoma', 'Small cell carcinoma', 'Combined small cell carcinoma ', 'Large cell neuroendocrine carcinoma', 'Typical carcinoid tumor', 'Atypical carcinoid tumor', 'Large cell carcinoma', 'Adenosquamous carcinoma', 'Pleomorphic carcinoma', 'Spindle cell carcinoma', 'Giant cell carcinoma', 'Carcinosarcoma', 'Pulmonary blastoma', 'Lymphoepithelioma-like carcinoma', 'NUT carcinoma', 'Mucoepidermoid carcinoma', 'Adenoid cystic carcinoma', 'Epithelial-myoepithelial carcinoma', 'Carcinoma, type cannot be determined', 'Non-small cell carcinoma, subtype cannot be determined', 'Other:'
        ],
        appendTo: '#Leftpanel'
    });


//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/

    $('#box1').change(function(){
        var sel = $('#box1').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box1_2').show();}
        else {$('#box1_2').hide();}
    });

    $('#box2').change(function(){
        var sel = $('#box2').val();
        if (sel == 'Other:') {
            $('#box2_2').show();}
        else {$('#box2_2').hide();}
    });

    $('#box5').change(function(){
        var sel = $('#box5').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box5_2').show();}
        else {$('#box5_2').hide();}
    });

    $('#box7').change(function(){
        var sel = $('#box7').val();
        if (sel == 'Separate tumor nodules in same lobe') {
            $('#box7_2').show();}
        else {$('#box7_2').hide();}
        if (sel == 'Separate tumor nodules in different lobes') {
            $('#box7_3').show();}
        else {$('#box7_3').hide();}
    });

    $('#box8').blur(function(){
        var sel = $('#box8').val();
        if (sel == 'Combined small cell carcinoma ') {
            $('#box8_2').show();}
        else {$('#box8_2').hide();}
        if (sel == 'Combined large cell neuroendocrine carcinoma ') {
            $('#box8_3').show();}
        else {$('#box8_3').hide();}
        if (sel == 'Other:') {
            $('#box8_4').show();}
        else {$('#box8_4').hide();}
    });

    $('#box9').change(function(){
        var sel = $('#box9').val();
        if (sel == 'Other:') {
            $('#box9_1').show();}
        else {$('#box9_1').hide();}
    });

    $('#box11').change(function(){
        var sel = $('#box11').val();
        if ($.inArray('Other:', sel) >-1) {
            $('#box11_2').show();}
        else {$('#box11_2').hide();}
    });

    $("#box12_0").change(function() {
        $("#box12_1").toggle();
        $("#box12_2").toggle();
        $('.margins').toggle();
    });

    $('#box16').change(function(){
        var sel = $('#box16').val();
        if (sel != 'Not applicable') {
            $('#box16_2').show();}
        else {$('#box16_2').hide();}
    });

    $('#box19').change(function(){
        var sel = $('#box19').val();
        if (sel == 'Present'){
            $('.lvi').show();}
        else {$('.lvi').hide();}
    });

    $("#box25").change(function() {
        $(".lndiv").toggle();
    });

    $('#box26').change(function(){
        var sela = $('#box26').val();
        var selb = $('#box26').val();
        if ($.inArray('Metaplasia', sela) >-1) {
            $('#box26_2').show();}
        else {$('#box26_2').hide();}
        if ($.inArray('Inflammation', selb) >-1) {
            $('#box26_3').show();}
        else {$('#box26_3').hide();}
    });


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Lung cancer summary\n";

        var box_1 = $("#box1").val();
        var box_1_2 = $("#box1_2").val();
        if ($.inArray('Other:', box_1) >-1){
            captext += "\nSpecimen:\n- "  + box_1.join('\n- ').replace(/Other:/, box_1_2) + "\n";}
        else {captext += "\nSpecimen:\n- "  + box_1.join('\n- ') + "\n";}

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other:'){
            captext += "\nProcedure:\n- "  + box_2_2+ "\n";}
        else {captext += "\nProcedure:\n- "  + box_2+ "\n";}

        var box_3 = $("#box3").val();
        captext += "\nSpecimen Integrity:\n- "  + box_3+ "\n";

        var box_4 = $("#box4").val();
        captext += "\nSpecimen Laterality:\n- "  + box_4+ "\n";

        var box_5 = $("#box5").val();
        var box_5_2 = $("#box5_2").val();
        if ($.inArray('Other:', box_5) >-1){
            captext += "\nTumor Site:\n- "  + box_5.join('\n- ').replace(/Other:/, box_5_2) + "\n";}
        else {captext += "\nTumor Site:\n- "  + box_5.join('\n- ') + "\n";}

        var box_6 = $("#box6").val();
        captext += "\nTumor Size:\n- "  + box_6.replace(/cm/, '') + "cm\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        var box_7_3 = $("#box7_3").val();
        if (box_7 == 'Separate tumor nodules in same lobe') {
            captext += "\nTumor Focality:\n- "+box_7+", "+box_7_2+"\n";}
        else if (box_7 == 'Separate tumor nodules in different lobes'){ captext += "\nTumor Focality:\n- "+box_7+", "+box_7_3+"\n";}
        else {captext += "\nTumor Focality:\n- "+box_7+"\n";}

        var box_8 = $("#box8").val();
        var box_8_2 = $("#box8_2").val();
        var box_8_3 = $("#box8_3").val();
        var box_8_4 = $("#box8_4").val()
        if (box_8 == 'Combined small cell carcinoma') {
            captext += "\nHistologic Type:\n- "+box_8+" ("+box_8_2+")\n";}
        else if (box_8 == 'Combined large cell carcinoma '){
            captext += "\nHistologic Type:\n- "+box_8+"("+box_8_3+")\n";}
        else if (box_8 == 'Other:'){
            captext += "\nHistologic Type:\n- "+box_8_4+"\n";}
        else {captext += "\nHistologic Type:\n- "+box_8+"\n";}

        var box_9 = $("#box9").val();
        var box_9_1 = $("#box9_1").val();
        if (box_9 != 'Not applicable'){
            if (box_9 == 'Other:'){
                captext += "\n+ Histologic Grade:\n- "  + box_9_1+ "\n";}
            else {captext += "\n+ Histologic Grade:\n- "  + box_9+ "\n";}
        }

        var box_10 = $("#box10").val();
        captext += "\nVisceral Pleura Invasion :\n- "  + box_10+ "\n";

        var box_11 = $("#box11").val();
        var box_11_2 = $("#box11_2").val();
        if ($.inArray('Other:', box_11) >-1){
            captext += "\nTumor Extension:\n- "  + box_11.join('\n- ').replace(/Other:/, box_11_2) + "\n";}
        else {captext += "\nTumor Extension:\n- "  + box_11.join('\n- ') + "\n";}

        if ($('#box12_0').is(':checked')){
            var box_12 = $("#box12").val();
            var box_12_1 = $("#box12_1").val();
            var box_12_2 = $("#box12_2").val();
            captext += "\nMargins uninvoled by tumor:\n- Distance to closest margin: "  + box_12_1.replace(/mm/,'') + "mm, Margin: "+box_12_2+"\n";}
        else {
            captext += '\nMargins:\n';
            var box_13 = $("#box13").val();
            captext += "\nBronchial margin:\n- "  + box_13+ "\n";

            var box_14 = $("#box14").val();
            captext += "\nVascular margin:\n- "  + box_14+ "\n";

            var box_15 = $("#box15").val();
            captext += "\nParenchymal margin:\n- "  + box_15+ "\n";

            var box_16 = $("#box16").val();
            var box_16_2 = $("#box16_2").val();
            if (box_16 != 'Not applicable'){
                captext += "\nOther Attached Margin:\n- "  + box_16_2+ ": "+box_16+"\n";}
        }

        var box_17 = $("#box17").val();
        if (box_17 != 'Not applicable'){
            captext += "\nTreatment Effect:\n- "  + box_17+ "\n";}

        var box_18 = $("#box18").val();
        if (box_18 != 'Cannot be determined'){
            captext += "\n+ Tumor Associated Atelectasis or Obstructive Pneumonitis:\n- "  + box_18+ "\n";}

        var box_19 = $("#box19").val();
        var box_19_1 = $("#box19_1").val();
        if (box_19 == 'Present'){
            captext += "\nLymph-Vascular Invasion:\n- "  + box_19.replace(/Present/, "Present: "+ box_19_1.join(', ')) + "\n";}
        else {captext += "\nLymph-Vascular Invasion:\n- "  + box_19 + "\n";}

        var box_20 = $("#box20").val();
        captext += "\n+ Lymph Nodes:\n- "  + box_20+ "\n";

        var box_21 = $("#box21").val();
        var box_22 = $("#box22").val();
        var box_23 = $("#box23").val();
        var box_24 = $("#box24").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_21 != "Not applicable"){captext += box_21.join("")+' '+box_22+" "+box_23+" "+box_24+"\n";}
        else {captext += box_22+" "+box_23+" "+box_24+"\n";}

        if ($("#box25").is(':checked')) {
            var box_25_1 = $("#box25_1").val();
            var box_25_2 = $("#box25_2").val();
            captext += "\nLymph nodes examined: "+box_25_1+"\nLymph nodes involved: "+box_25_2+"\n";}

        var box_26 = $("#box26").val();
        var box_26_2 = $("#box26_2").val();
        var box_26_3 = $("#box26_3").val();
        if ($.inArray('Metaplasia', box_26) > -1 && $.inArray('Inflammation', box_26) == -1) { captext += "\n+ Additional Pathologic Findings ():\n- "+box_26.join("\n- ").replace(/Metaplasia/, box_26_2)+"\n";}
        else if ($.inArray('Inflammation', box_26) > -1 && $.inArray('Metaplasia', box_26) == -1) { captext += "\n+ Additional Pathologic Findings (select all that apply):\n- "+box_26.join("\n- ").replace(/;/, ': '+box_26_3)+"\n";}
        else if ($.inArray('Metaplasia', box_26) > -1 && $.inArray('Inflammation', box_26) > -1) { captext += "\n+ Additional Pathologic Findings (select all that apply):\n- "+box_26.join("\n- ").replace(/Metaplasia/, box_26_2).replace(/;/, ': '+box_26_3)+"\n";}
        else {captext += "\n+ Additional Pathologic Findings (select all that apply):\n- "+box_26.join("\n- ")+"\n";}

        var box_27 = $("#box27").val();
        if (box_27 != 'None performed'){
            captext += "\nAncillary molecular testing:\n- "  + box_27.join('\n- ') + "\n";}



        $('#outPut-1').val(captext);

    });
});

