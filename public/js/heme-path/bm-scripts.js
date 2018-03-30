$(window).on('load', function(){

// switch CBC diff boxes
$("#CBCswitch").change(function() {
    $("#NEUT").prop("disabled", !$("#NEUT").prop("disabled"));
    $("#LYMPH").prop("disabled", !$("#LYMPH").prop("disabled"));
    $("#MONO").prop("disabled", !$("#MONO").prop("disabled"));
    $("#PNEUT").prop("disabled", !$("#PNEUT").prop("disabled"));
    $("#PLYMPH").prop("disabled", !$("#PLYMPH").prop("disabled"));
    $("#PMONO").prop("disabled", !$("#PMONO").prop("disabled"));

});


// Write Differential into report text area
    $('#diffWrite').on('click', function(){
// get assign the values from each text input
        var myDiffsource = $('#asp_1').val();
        var diff_blasts = $('#asp_2').val();
        var diff_pro = $('#asp_3').val();
        var diff_myel = $('#asp_4').val();
        var diff_segs = $('#asp_5').val();
        var diff_eryth = $('#asp_6').val();
        var diff_lymph = $('#asp_7').val();
        var diff_atlymph = $('#asp_8').val();
        var diff_mono = $('#asp_9').val();
        var diff_eos = $('#asp_10').val();
        var diff_baso = $('#asp_11').val();
        var diff_plasma = $('#asp_12').val();
        var MER = $('#merat').val();
        var _limit = $('#limit').val();

// assign new value from dropdown box on selection

        var diffText = _limit + " Cell " + myDiffsource + " differential: " + "Blasts " + diff_blasts + "%; "+ "Pro " + diff_pro + "%; "+ "Meta/Myel " + diff_myel + "%; " + "Segs " + diff_segs + "%; " + "Eryth " + diff_eryth + "%; " + "Lymphs " + diff_lymph + "%; " + "Atypical Lymphs " + diff_atlymph + "%; " + "Monos " + diff_mono + "%; " + "Eos " + diff_eos + "%; " + "Basos " + diff_baso + "%; " + "Plasma cells " + diff_plasma + "%. \n\nM:E ratio= "+MER;
        // display diffText into text area
        $('#diffOut').val(diffText);

        // Sum total of the diff to check if not 100% total
       var difftotal = parseFloat(diff_blasts) + parseFloat(diff_pro) + parseFloat(diff_myel) + parseFloat(diff_segs) + parseFloat(diff_eryth) + parseFloat(diff_lymph) + parseFloat(diff_atlymph) + parseFloat(diff_mono) + parseFloat(diff_eos) + parseFloat(diff_baso) + parseFloat(diff_plasma);
        $('#diffTotal').val(difftotal);

    });

// ** END WRITE DIFFERENTIAL SCRIPT ** //



// *******		MODIFIERS 			  	 *******//
// *******							   	*******//

    // Change M:E ratio json
    $('#mxLine424').on('change', function(){
        var myratio = prompt('Myeloid');
        var eryratio = prompt('Erythroid');
        mxLines.mxLine424 = mxLines.mxLine424.replace(/__:__/, myratio +':'+eryratio);
    });

    // use myeloma scripts
    $('#myeloma_0').on('change', function(){
        var plas = $('#asp_12').val();
        $('#myeloma_1').val(plas);
    });

// CHANGE ASPIRATE VS TOUCH PREP PART DESIGNATION
    $('#spc_val').on('change', function(){
        var sel = $(this).val();
        if (sel == '3'){
            $('.biopsypart').show(); // show biopsy parts
            $('#bxcl_iron').show(); // hide biopsy iron
            $('.clotpart').hide(); // hide clot section parts
            // adjust aspirate headers for tp only
            for (var i=248; i<253; i++){
                partTypes["partType"+i] = partTypes["partType"+i].replace(/aspirate/, 'touch preparation').replace(/ASPIRATE AND /, ''); }
            // adjust biopsy headers for tp only
            for (var i=300; i<304; i++){
                partTypes["partType"+i] = partTypes["partType"+i].replace(/ AND CLOT SECTION/, ''); }
        }
        else if (sel == '2'){
            $('.biopsypart').hide(); // hide biopsy parts
            $('#bxcl_iron').hide(); // hide biopsy iron
            $('.clotpart').show(); // show clot section parts
            for (var i=248; i<253; i++){
                partTypes["partType"+i] = partTypes["partType"+i].replace(/touch preparation/, 'aspirate').replace(/ AND TOUCH PREPARATION/, ''); }
        }
        else {
            $('.biopsypart').show(); // show biopsy parts
            $('.clotpart').hide(); // hide clot section parts
            $('#bxcl_iron').show(); // hide biopsy iron
        }
    });

// DISSIMILAR BILATERAL BIOPSIES MODAL
        $('#_partType302').on('mousedown', function(){
                var que = $(this).find('input').attr('id'); // find id of closest checkbox in this label
                $("#"+que).prop('checked', false).prop("disabled", true); // pause check event
                if (!$("#"+que).is(":checked")){
                    $('#bilatbx').modal("show");
                    $('#bilatbx').on('hide.bs.modal', function (e) {
                        var lbx_ad = $('#lbx_ad').val();
                        var lbx_num = $('#lbx_num').val();
                        var lbx_cell = $('#lbx_cell').val();
                        var lbx_my = $('#lbx_my').val();
                        var lbx_mymat = $('#lbx_mymat').val();
                        var lbx_er = $('#lbx_er').val();
                        var lbx_ermat = $('#lbx_ermat').val();
                        var lbx_mega = $('#lbx_mega').val();
                        var lbx_blast = $('#lbx_blast').val();
                        var lbx_infiltrate = $('#lbx_infiltrate').val();
                        var lbx_free = $('#lbx_free').val();

                        var rbx_ad = $('#rbx_ad').val();
                        var rbx_num = $('#rbx_num').val();
                        var rbx_cell = $('#rbx_cell').val();
                        var rbx_my = $('#rbx_my').val();
                        var rbx_mymat = $('#rbx_mymat').val();
                        var rbx_er = $('#rbx_er').val();
                        var rbx_ermat = $('#rbx_ermat').val();
                        var rbx_mega = $('#rbx_mega').val();
                        var rbx_blast = $('#rbx_blast').val();
                        var rbx_infiltrate = $('#rbx_infiltrate').val();
                        var rbx_free = $('#rbx_free').val();

                        var l_text = partTypes[lbx_ad].replace(/#SIDE#/, 'left') + partTypes[lbx_cell]+ partTypes.partType518.replace(/%/, lbx_num+'%') +partTypes[lbx_my]+partTypes[lbx_mymat]+partTypes[lbx_er]+partTypes[lbx_ermat]+partTypes[lbx_mega]+partTypes[lbx_blast]+partTypes[lbx_infiltrate]+lbx_free;
                        var r_text = partTypes[rbx_ad].replace(/#SIDE#/, 'right')+ partTypes[rbx_cell]+ partTypes.partType518.replace(/%/, rbx_num+'%') +partTypes[rbx_my]+partTypes[rbx_mymat]+partTypes[rbx_er]+partTypes[rbx_ermat]+partTypes[rbx_mega]+partTypes[rbx_blast]+partTypes[rbx_infiltrate]+rbx_free;

                        partTypes.partType302 = partTypes.partType302.replace(/#LBX#/, l_text).replace(/#RBX#/, r_text);


                        $("#"+que).prop("disabled", false); // undisable checkbox
                        setTimeout(function() {
                            $("#"+que).trigger('click')
                        }, 100); // resume click event


                    });
                }
        });


//  CLINICAL HISTORY MODIFIERS
    $('.dx_history_add_ball').dialog({autoOpen: false});
    $('.dx_history_add_aml').dialog({autoOpen: false});


    $('#dx_history').on('change', function(){
        var sel = $(this).val();
        var seltxt = dxOuts[sel];
        var final = $('#outPut-3').val();
        final = final.replace(/ or abnormal lymphoid infiltrates/, seltxt).replace("(see comment)", '');
        $('#outPut-3').val(final);

        // if hx is BALL, add genetics modifiers
        if (sel == 'dxOut350'){
            $('.dx_history_add_ball').dialog("open").dialog({
                modal: true,
                title: "BALL Genetic subtype",
                width: 400,
                close: function(){
                    var ball_history = $("#ball_history").val();
                    if(ball_history != "NOS"){
                        final = final.replace(/leukemia/, 'leukemia '+ball_history).replace(/\n$/,'\n');}
                    $('#outPut-3').val(final);
                    final_text = $('#outPut-3').val(); // retain changes
                }
            });
        }

        // if hx is AML, add genetics modifiers
        if (sel == 'dxOut352'){
            $('.dx_history_add_aml').dialog("open").dialog({
                modal: true,
                title: "AML Genetic subtype",
                width: 400,
                close: function(){
                    var aml_history = $("#aml_history").val();
                    if(aml_history != "NOS"){
                        final = final.replace(/leukemia/, 'leukemia '+aml_history).replace(/\n$/m,'');}
                    $('#outPut-3').val(final);
                    final_text = $('#outPut-3').val(); // retain changes
                }
            });
        }

        final_text = $('#outPut-3').val(); // retain changes
    });

// ** BONE MARROW PERCENTAGES % TO MICROS AND DIAGNOSES ** //

// BM CELLULARITY PERCENTAGE INSERTION
    $('#bmcellularity').on('change', function()
    {
        var sel = $(this).val();
        var myBmcell = parseFloat($("#bmcellularity").val()).toFixed(0);
        if (sel == '>95'){
             myBmcell = '>95';}
        else if (sel == '<5'){
             myBmcell = '<5';}
        for (var i=308; i<311; i++){
            partTypes["partType"+i] = partTypes["partType"+i].replace(/###/, myBmcell + '%. ');
        }

        $.each(dxOuts, function(val){
            dxOuts[val] = dxOuts[val].replace(/#AA#/, myBmcell); //add percentages

        })
    });

// BM BIOPSY CELLULARITY QUALIFIER TEXT
    $('.bmcelltext').on('change', function()
    {
        var sel = $(this).val();

        for (var i=300; i<305; i++){
            if (dxOuts.hasOwnProperty("dxOut"+i)){
                    dxOuts["dxOut"+i] = dxOuts["dxOut"+i].replace(/(?!-).*(?=marrow)/, ' '+sel+' ');
                }
            }
        for (var i=310; i<322; i++) {
            if (dxOuts.hasOwnProperty("dxOut" + i)) {
                dxOuts["dxOut" + i] = dxOuts["dxOut" + i].replace(/(?!-).*(?=marrow)/, ' ' + sel + ' ');
            }
        }

    });

// BM CLOT CELLULARITY QUALIFIER TEXT
    $('.clotcelltext').on('change', function()
    {

        var choice = $(this).attr('id');
        var sel = $(this).val();
        console.log('\nclot changed ='+sel+'\n\nsel.id='+choice);
        if (choice == 'clotnum') { // particular adequacy
            // replace in micros
            partTypes.partType313 = partTypes.partType313.replace(/#CLOTNUM#/, sel);

        }
        if (choice == 'clotcell'){ // particle cellularity
            // replace in micros
            partTypes.partType313 = partTypes.partType313.replace(/#CLOTCELL#/, sel);

            // replace in diagnoses
            var seltxt = sel.replace(/^./, sel[0].toUpperCase());
            dxOuts.dxOut305 = dxOuts.dxOut305.replace(/(?!-).*(?=marrow)/, ' '+seltxt+' ');
            for (var i=330; i<336; i++) {
                if (dxOuts.hasOwnProperty("dxOut" + i)) {
                    dxOuts["dxOut" + i] = dxOuts["dxOut" + i].replace(/(?!-).*(?=marrow)/, ' ' + seltxt + ' ');
                }
            }
            setTimeout(function() {
                $("#partType313").trigger('click')
            }, 100); // click to show clot header in micro
        }
    });

    // hide clot options if aparticulate
    $('#partType312').on('change', function(){

        $('.clotoptions').toggle();
    });

// ADD DIFF VALUES TO DIAGNOSES AND PARTS AFTER PRINTED
    $('#diffWrite').on('click', function(){
        var blastct = $('#asp_2').val();
        var proct = $('#asp_3').val();
        var plasct = $('#asp_12').val();
        var dxOutlength = 300+Object.keys(dxOuts).length;
      $.each(dxOuts, function(val){
            dxOuts[val] = dxOuts[val].replace(/#BB#/, blastct).replace(/#PP#/, proct).replace(/#PL#/, plasct);
        })
    });

// ATYPICAL INFILTRATES
    $('#atypIHC').on('blur', function(){
        var atypct = $(this).val();
        var dxOutlength = 300+Object.keys(dxOuts).length;
        for (var i=300; i<dxOutlength; i++){
            if (dxOuts.hasOwnProperty("dxOut"+i)){
                if (atypct !='') {
                    dxOuts["dxOut"+i] = dxOuts["dxOut"+i].replace(/#LL#%/, atypct+'% (by immunohistochemistry)');
                }
            }
        }
    });

// FLOW BLAST %
    $('#flowblast').on('blur', function(){
        var flblast = $(this).val();
        var dxOutlength = 500+Object.keys(dxOuts).length;
        for (var i=500; i<dxOutlength; i++){
            if (dxOuts.hasOwnProperty("dxOut"+i)){
                dxOuts["dxOut"+i] = dxOuts["dxOut"+i].replace(/, .*(?=%)/, ", "+flblast);
            }
        }

    });

// FLOW LYMPHOMA CLONE
    $('#flowclone').on('change', function(){
        var flclone = $(this).val();
        var clonepct = $('#flowlym').val();
        var dxOutlength = 500+Object.keys(dxOuts).length;
        for (var i=500; i<dxOutlength; i++){
            if (dxOuts.hasOwnProperty("dxOut"+i)){
                dxOuts["dxOut"+i] = dxOuts["dxOut"+i].replace(/- .*(?=-restricted)/, "- "+flclone).replace(/B-cell population /, 'B-cell population, '+clonepct+'%');
            }
        }

    });

// SPECIAL STAINS, IRON, RETIC, AFB, GMS
    $('.spstains').on('change', function(){
        var selid = $(this).val();
        if ($(this).prop('id') == 'bx_grans'){
            if (confirm('AFB positive?')){
                for (var i=522; i<526; i++){
                        mxLines["mxLine"+i] = mxLines["mxLine"+i].replace(/#STAINS#/, 'An AFB stain shows few acid-fast mycobacterium. #STAINS#');
                }
                dxOuts.dxOut372 = dxOuts.dxOut372.replace(/.*/, '- Granulomas with mycobacterium identified on AFB stain; no fungal elements seen with GMS\n')
            }else {
                for (var i=522; i<526; i++){
                    mxLines["mxLine"+i] = mxLines["mxLine"+i].replace(/#STAINS#/, 'An AFB stain shows no acid-fast microorgansisms. #STAINS#');
                }
            };
            if (confirm('GMS positive?')){
                for (var i=522; i<526; i++){
                    mxLines["mxLine"+i] = mxLines["mxLine"+i].replace(/#STAINS#/, 'A GMS stain shows few fungal elements. ');
                }
                dxOuts.dxOut372 = dxOuts.dxOut372.replace(/.*/, '- Granulomas with fungal elements identified on GMS stain; no mycobacterium seen with AFB\n')
            }else {
                for (var i=522; i<526; i++){
                    mxLines["mxLine"+i] = mxLines["mxLine"+i].replace(/#STAINS#/, 'A GMS stain shows no fungal elements. ');
                }
            };
        }
        var sel = mxLines[selid];
        var micro = $('#outPut-2').val();
        micro += sel;
        $('#outPut-2').val(micro);
        micro_text= $('#outPut-2').val();
    });


    $('#ironstore').on('change', function(){
        var sel = $(this).val();
        if (sel == '0+'){
            dxOuts.dxOut400 = dxOuts.dxOut400.replace(/- .* (?=storage)/, '- No stainable ').replace(/, .*(?=\+)/, ', 0');
        }
        else 	if (sel == '1+'){
            dxOuts.dxOut400 = dxOuts.dxOut400.replace(/- .* (?=storage)/, '- Minimal stainable ').replace(/, .*(?=\+)/, ', 1');
        }
        else 	if (sel == '2+'){
            dxOuts.dxOut400 = dxOuts.dxOut400.replace(/- .* (?=storage)/, '- Adequate stainable ').replace(/, .*(?=\+)/, ', 2');
        }
        else 	if (sel == '3+'){
            dxOuts.dxOut400 = dxOuts.dxOut400.replace(/- .* (?=storage)/, '- Increased stainable ').replace(/, .*(?=\+)/, ', 3');
        }
        else 	if (sel == '4+'){
            dxOuts.dxOut400 = dxOuts.dxOut400.replace(/- .* (?=storage)/, '- Markedly increased stainable ').replace(/, .*(?=\+)/, ', 4');
        }

    });

    $('#reticscore').on('change', function(){
        var sel = $(this).val();
        if (sel == '0+'){
            dxOuts.dxOut401 = dxOuts.dxOut401.replace(/- .* (?=in)/, '- No increase ').replace(/, .*(?=\+)/, ', MF0');
        }
        else 	if (sel == '1+'){
            dxOuts.dxOut401 = dxOuts.dxOut401.replace(/- .* (?=in)/, '- Minimal increase ').replace(/, .*(?=\+)/, ', MF1');
        }
        else 	if (sel == '2+'){
            dxOuts.dxOut401 = dxOuts.dxOut401.replace(/- .* (?=in)/, '- Mild increase ').replace(/, .*(?=\+)/, ', MF2');
        }
        else 	if (sel == '3+'){
            dxOuts.dxOut401 = dxOuts.dxOut401.replace(/- .* (?=in)/, '- Moderate increase ').replace(/, .*(?=\+)/, ', MF3');
        }
        else 	if (sel == '4+'){
            dxOuts.dxOut401 = dxOuts.dxOut401.replace(/- .* (?=in)/, '- Marked increase ').replace(/, .*(?=\+)/, ', MF4');
        }

    });

// Adjust correlations with ancillary selections
    $('.comment').on('mousedown', function(){
       var tests = [];
       var cyto = $('#cyto_val').val();
       var mol = $('#mol_val').val();
       var mrd = $('#mrd_val').val();
       var fish = $('#fish_val').val();

       if (cyto == 'Karyotype pending'){
           tests.push('karyotype');
       }
       if (mol != 'Not performed'){
            tests.push('molecular testing')  ;
       }
       if (fish != 'FISH Testing: Not performed'){
           tests.push('FISH');
       }
       if (mrd != 'Not performed'){
           tests.push('MRD testing');
       }

       $.each(commLines, function(val){
           commLines[val] = commLines[val].replace(/testing is/, 'testing ('+tests.join(", ")+') is');
       });

        if ($('#mxLine264').is(':checked')){
            console.log('dyspoiesis is checked');
            $.each(commLines, function(val){
            commLines[val] = commLines[val].replace(/#ERY#/, 'The erythroid changes suggest therapy related effects.');
            });
        } else if ($('#mxLine265').is(':checked')){
            $.each(commLines, function(val){
            commLines[val] = commLines[val].replace(/#ERY#/, 'The erythroid changes suggest therapy related effects and/or superimposed marrow recovery changes.');
            });
        } else {
            $.each(commLines, function(val){
                commLines[val] = commLines[val].replace(/#ERY#/, '');
            });

        }

    });


    /***************************************************************************************************/
    /******************************* PHYSICIAN DISCUSSED WITH MODAL ************************************/
    $('.docinput').dialog({width: "500px", autoOpen:false});
    $('#_commLine2').on('mousedown', function(e) {
        e.preventDefault();
        var que = $(this).find('input').attr('id'); // find id of closest checkbox in this label
        $("#"+que).prop('checked', false).prop("disabled", true); // pause check event
        if (!$("#"+que).is(":checked")){
            $('.docinput').dialog("open").dialog({
                modal: true,
                width: 500,
                title: "Which physician did you discuss with?",
                buttons: {
                    "OK": function () {
                        // get name of doc
                        var doc = $('#doc').val();

                        // add today's date to commment
                        var currentDate = new Date();
                        var day = currentDate.getDate();
                        var month = currentDate.getMonth() + 1;
                        var year = currentDate.getFullYear();
                        var date = month + '/' + day + '/' + year;

                        commLines.commLine2 = commLines.commLine2.replace(/XXXX/, doc).replace(/QQQQ/, date); // insert today's date into comment.
                        console.log(commLines.commLine2);
                        // reset checkmark status and clost dialog
                        $('#commLine2').prop('disabled', false);
                        setTimeout(function() {
                            $("#commLine2").trigger('click')
                        }, 100);// complete the check
                        $(".docinput").dialog('close');
                    }
                }
            });
        }
    });

//********************//

//********************************************//
//********************************************//
// *******  END TEXT MODIFIERS HERE  ******* //


//*****************************************************************************************//
//**************************ADD MICROS WITH ONE CLICK UNDO*********************************//
//*****************************************************************************************//

// temporary holder for checkbox id
    var part_choice  = null;
    var micro_choice  = null;
    var final_choice = null;
    var comm_choice  = null;

// new text
    micro_text = $('#outPut-2').val();
    comm_text  = $('#outPut-4').val();
    final_text = $('#outPut-3').val();

// old micro text to revert to
    var final_old = '';
    var micro_old = '';
    var comm_old  = '';

// fill micro description textbox
    function print_micro() {
        if (part_choice !== null) {
            micro_text += partTypes[part_choice] + '';
            part_choice = null;
            $('#outPut-2').val(micro_text);
        }
        else if (micro_choice !== null) {
            micro_text += mxLines[micro_choice] + '';
            micro_choice = null;
            $('#outPut-2').val(micro_text);
        }
    }

// fill comment textbox
    function print_comm() {
        if (comm_choice !== null) {
            comm_text += commLines[comm_choice] + '';
            comm_choice = null;
            $('#outPut-4').val(comm_text);
        }
    }

// fill final diagnosis textbox
    function print_final() {
        if (final_choice !== null) {
            final_text += dxOuts[final_choice] + '';
            final_choice = null;
            $('#outPut-3').val(final_text);
        }
    }
// Retain any manual edits within textarea
    $('textarea').on('input propertychange', function() {
        if ($(this).is('#outPut-2')){
            micro_text = $(this).val();}
        else if ($(this).is('#outPut-4')){
            comm_text = $(this).val();}
        else if ($(this).is('#outPut-3')){
            final_text = $(this).val();}
    });

// Micros: add new selection to list, unless unchecked
    $('input:checkbox').change(function () {
        if ($(this).attr('id').indexOf('partType') > -1){
            if ($(this).is(':checked')) {
                part_choice = $(this).attr('id');
                micro_old = micro_text;
                print_micro();
            } else {
                var del = $(this).attr('id');
                var re = new RegExp(partTypes[del]); // assign RegExp to this value + '$' last occurrence
                micro_old = micro_text.replace(re, ''); // replace last occurrence
                micro_text = micro_old;
                $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('mxLine') > -1){
            if ($(this).is(':checked')) {
                micro_choice = $(this).attr('id');
                micro_old = micro_text;
                print_micro();
            } else {
                var del = $(this).attr('id');
                var re = new RegExp(mxLines[del]); // assign RegExp to this value + '$' last occurrence
                micro_old = micro_text.replace(re, ''); // replace last occurrence
                micro_text = micro_old;
                $('#outPut-2').val(micro_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('commLine') > -1){
            if ($(this).is(':checked')) {
                comm_choice = $(this).attr('id');
                comm_old = comm_text;
                print_comm();
            } else {
                var del = $(this).attr('id');
                comm_old = comm_text.replace(commLines[del], '');
                comm_text = comm_old;
                $('#outPut-4').val(comm_old); // if unchecked, textarea = prior text
            }
        }
        else if ($(this).attr('id').indexOf('dxOut') > -1){
            if ($(this).is(':checked')) {
                final_choice = $(this).attr('id');
                final_old = final_text;
                print_final();
            } else {
                var del = $(this).attr('id');
                final_old = final_text.replace(dxOuts[del], '');
                final_text = final_old;
                $('#outPut-3').val(final_old); // if unchecked, textarea = prior text
            }
        }
    });

//	*****************************************************************************************//
//	*****************************************************************************************//

    // *************** Write CBC to text area function **********************//
    $('#cbcWrite').on('click', function () {

        var cbcText = '';
        var mySite = $('#site').val();
        var dateIx = $('#date-pick').val();
        var wbcIx = $('#WBC').val();
        var rbcIx = $('#RBC').val();
        var hbIx = $('#HB').val();
        var hctIx = $('#HCT').val();
        var mcvIx = $('#MCV').val();
        var mchcIx = $('#MCHC').val();
        var rdwIx = $('#RDW').val();
        var pltIx = $('#PLT').val();
        var neutIx = $('#NEUT').val();
        var lymphIx = $('#LYMPH').val();
        var monoIx = $('#MONO').val();
        var eosIx = $('#EOS').val();
        var pneutIx = $('#PNEUT').val();
        var plymphIx = $('#PLYMPH').val();
        var pmonoIx = $('#PMONO').val();
        var aneut = (parseFloat(wbcIx) * (parseFloat(pneutIx) / 100)).toFixed(2);
        var alym = (parseFloat(wbcIx) * (parseFloat(plymphIx) / 100)).toFixed(2);
        var amono = (parseFloat(wbcIx) * (parseFloat(pmonoIx) / 100)).toFixed(2);

        if ($('#CBCswitch').is(':checked')){
            cbcText = "LABORATORY DATA (" + mySite + ", " + dateIx +"):" + " WBC: " + wbcIx + " K/ul;" + " RBC: " + rbcIx + " MIL;" + " HB: " + hbIx + " gm/dl;" + " HCT: " + hctIx + " %;" + " MCV: " + mcvIx + " fl;" + " RDW: " + rdwIx + " %;" + " PLT: " + pltIx + " K/ul;" + " ABS NEUT: " + aneut + " K/ul;" + " ABS LYMPH: " + alym + " K/ul;" + " ABS MONO: " + amono + " K/ul.";
            $('#outPut-1').val(cbcText);
        }
        else {
            if (eosIx !== ''){
                cbcText = "LABORATORY DATA (" + mySite + ", " + dateIx +"):" + " WBC: " + wbcIx + " K/ul;" + " RBC: " + rbcIx + " MIL;" + " HB: " + hbIx + " gm/dl;" + " HCT: " + hctIx + " %;" + " MCV: " + mcvIx + " fl;" + " RDW: " + rdwIx + " %;" + " PLT: " + pltIx + " K/ul;" + " ABS NEUT: " + neutIx + " K/ul;" + " ABS LYMPH: " + lymphIx + " K/ul;" + " ABS MONO: " + monoIx + " K/ul; ABS EOS: "+eosIx+" K/uL.";
                $('#outPut-1').val(cbcText);
            } else {
                cbcText = "LABORATORY DATA (" + mySite + ", " + dateIx +"):" + " WBC: " + wbcIx + " K/ul;" + " RBC: " + rbcIx + " MIL;" + " HB: " + hbIx + " gm/dl;" + " HCT: " + hctIx + " %;" + " MCV: " + mcvIx + " fl;" + " RDW: " + rdwIx + " %;" + " PLT: " + pltIx + " K/ul;" + " ABS NEUT: " + neutIx + " K/ul;" + " ABS LYMPH: " + lymphIx + " K/ul;" + " ABS MONO: " + monoIx + " K/ul.";
                $('#outPut-1').val(cbcText);
            }
        }


    });
// ======================================================================//

// ********************* Combined report function ***********************//
	$('#writeReport').on('click', function(event) {
		var aa = $('#outPut-2').val(); // micro output
		var bb = $('#diffOut').val();// CBC output
		var re = /BONE MARROW, (?!ASPIRATE)/gm;
		var match = aa.replace(/BONE MARROW, (?!ASPIRATE)/m,'DIFFERENTIAL: \n'+bb+"\n\nBONE MARROW, ");
		var cyto_val = $('#cyto_val').val();
		var mrd_val = $('#mrd_val').val();
		var fish_val = $('#fish_val').val();
		var mol_val = $('#mol_val').val();
		var spc_val = $('#spc_val').val();
		var proc_val = '';
		var site_val = $('#site_val').val();

		if (spc_val == '1'){
				spc_val = 'Aspirate, touch preparation, clot sections and biopsy';
				proc_val = 'Aspirate and biopsy';}
		else if (spc_val == '2'){
				spc_val = 'Aspirate and clot section';
				proc_val = 'Aspirate';}
		else if (spc_val =='3'){
				spc_val = 'Touch preparation, roll preparation and biopsy';
				proc_val = 'Biopsy';}

		// Myeloma template bits
		var myel0 = $('#myeloma_0').val();
		var myel1 = $('#asp_12').val();
		var myel2 = $('#myeloma_2').val();
		var myel3 = $('#myeloma_3').val();
		var myel4 = $('#myeloma_4').val();

		myel_text = '\nEXTENT OF PLASMA CELL INFILTRATE IN BONE MARROW:\n- Plasma cells on aspirate smear/touch preparation: '+myel1.replace(/%/,'') +'%\n- Plasma cells on core biopsy or clot: '+ myel2.replace(/%/,'')+'%\n\nIMMUNOGLOBULIN LIGHT CHAIN TYPE:\n- '+myel3+' \n\nIMMUNOGLOBULIN DEPOSITS:\n- '+myel4+'\n ';


		// store your text to localStorage when someone click the link

		if (myel0 == 'Yes'){
				var textToPass='\n\n'+$('#outPut-1').val()+'\n\n'+match+'\n\nBONE MARROW SYNOPTIC DIAGNOSIS SUMMARY\n\nHISTOLOGIC DIAGNOSIS:\n'+$('#outPut-3').val()+ myel_text+'\nCYTOGENETIC STUDIES: \n- '+cyto_val+'\n- '+fish_val+'\n\nMRD STUDIES: \n- '+ mrd_val +'\n\nMOLECULAR STUDIES: \n- '+mol_val+'\n\nSPECIMEN: \n- '+ spc_val+ '\n\nPROCEDURE: \n- '+proc_val+'\n\nBIOPSY/ASPIRATION SITE: \n- '+site_val+'\n\nCOMMENT:\n'+$('#outPut-4').val()+'\n\n';
		}
		else {
				if (mrd_val != 'Not performed') {
						var textToPass = '\n\n' + $('#outPut-1').val() + '\n\n' + match + '\n\nBONE MARROW SYNOPTIC DIAGNOSIS SUMMARY\n\nHISTOLOGIC DIAGNOSIS:\n' + $('#outPut-3').val() + '\nCYTOGENETIC STUDIES: \n- ' + cyto_val + '\n- ' + fish_val + '\n\nMRD STUDIES: \n- ' + mrd_val + '\n\nMOLECULAR STUDIES: \n- ' + mol_val + '\n\nSPECIMEN: \n- ' + spc_val + '\n\nPROCEDURE: \n- ' + proc_val + '\n\nBIOPSY/ASPIRATION SITE: \n- ' + site_val + '\n\nCOMMENT:\n' + $('#outPut-4').val() + '\n\n';
				} else {
						var textToPass = '\n\n' + $('#outPut-1').val() + '\n\n' + match + '\n\nBONE MARROW SYNOPTIC DIAGNOSIS SUMMARY\n\nHISTOLOGIC DIAGNOSIS:\n' + $('#outPut-3').val() + '\nCYTOGENETIC STUDIES: \n- ' + cyto_val + '\n- ' + fish_val + '\n\nMOLECULAR STUDIES: \n- ' + mol_val + '\n\nSPECIMEN: \n- ' + spc_val + '\n\nPROCEDURE: \n- ' + proc_val + '\n\nBIOPSY/ASPIRATION SITE: \n- ' + site_val + '\n\nCOMMENT:\n' + $('#outPut-4').val() + '\n\n';

				}
		}
		$('#outPut-combine').val(textToPass);
		$('#combined-report').modal("show");
	 localStorage.setItem("myText", textToPass);
		dataObj.singleSection = $('#outPut-combine').val();
		makeCreatePdfBtn();
	});


		// });
  });



/**
 * Created by chandrakrishnan on 5/21/2017.
 */
