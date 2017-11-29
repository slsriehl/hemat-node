$(window).on('load', function(){
    $('.NASH').dialog({autoOpen:false}); // don't auto open NASH scoring modal
    $('#port5').on('change', function(){
        var sel = $(this).val();
        if (sel == 'slightly reduced' || sel == 'few'){
            $('#port5_2').show();
            $('#port5_3').show();
        } else {
            $('#port5_2').hide();
            $('#port5_3').hide();
        }
    });

    // Adequacy modifier
    $('.adequacy').change(function(){
        if ($(this).is(':checked') ){
            var cores = prompt('Enter number of cores submitted');
		var core_words = toWords(cores);
            for (var i=100; i<103; i++){
                if (cores == '1'){
                    partTypes['partType'+i] = partTypes['partType'+i].replace(/Sections show ### cores of liver tissue which are/, "Sections show a single core of liver tissue which is");
                }
                else if(cores != '1'){
                    partTypes['partType'+i] = partTypes['partType'+i].replace(/### /, core_words);
                }
            }
        }
    });

    // Check portal area vs bile duct #s make sense
    $('#port5_3').on('blur', function(){
        var portnum = parseFloat($('#port5_2').val());
        var ductnum = parseFloat($('#port5_3').val());
        if (ductnum > portnum){
            alert("There is an error in the portal area counts, please check your entry");
            $('#port5_2').focus().css("background", "yellow");
            console.log('Error in portal vs duct # counts');
            return;
        }
    });

// Portal micro
          $('#portal').on('hidden.bs.modal', function () {
                    var port_1 = $('#port1').val(); //portal inflammation
                    var port_2 = $('#port2').val(); // portal infiltrate
                    var port_3 = $('#port3').val(); // interface
                    var port_4 = $('#port4').val(); // piecemeal necrosis
                    var port_5 = $('#port5').val(); // bile duct #
                    var port_5_2 = $('#port5_2').val(); // # of portals
                    var port_5_3 = $('#port5_3').val(); // # with ducts
                    var port_6 = $('#port6').val(); // bile duct injury
                    var port_7 = $('#port7').val(); // cholangioles
                    var port_8 = $('#port8').val(); // cholestasis in ducts
                    var port_9 = $('#port9').val(); // trichrome
                    var port_10 = $('#port10').val(); // CK7 stains

                    mxLines.mxLine110 = mxLines.mxLine110.replace(/AAAA/, port_1).replace(/BBBB/, port_2).replace(/CCCC/, port_3).replace(/DDDD/, port_4).replace(/EEEE/, port_5).replace(/FFFF/, port_6).replace(/GGGG/, port_7).replace(/HHHH/, port_8).replace(/IIII/, port_9);

                    if (port_5 == 'few' || port_5 == 'slightly reduced'){
                        var ratio = (parseFloat(port_5_3 / port_5_2, 10)).toFixed(2);
                        mxLines.mxLine110 = mxLines.mxLine110.replace(/injury./, 'injury. The overall duct:portal ratio ('+ port_5_2+' portal regions, '+port_5_3+' with bile ducts) is reduced at '+ratio+'.' )
                    }

                    if (port_10 = 'NA'){
                        mxLines.mxLine110 = mxLines.mxLine110.replace(/JJJJ/, '');
                    } else if (port_10 != 'NA'){
                        var str = 'Immunohistochemistry (with adequate controls) is performed to better assess the bile ducts. A cytokeratin=7 stain confirms '+port_10+'. ';
                        mxLines.mxLine110 = mxLines.mxLine110.replace(/JJJJ/, str);
                    }
                    $('#outPut-2').val($('#outPut-2').val() + mxLines.mxLine110);
            });

// lobular micro
    $('#lobule').on('hidden.bs.modal', function () {
                    var lob_1 = $('#lob1').val();
                    var lob_2 = $('#lob2').val();
                    var lob_3 = $('#lob3').val();
                    var lob_4 = $('#lob4').val();
                    var lob_5 = $('#lob5').val();
                    var lob_6 = $('#lob6').val();
                    var lob_7 = $('#lob7').val();
                    var lob_8 = $('#lob8').val();
                    var lob_9 = $('#lob9').val();
                    var lob_10 = $('#lob10').val();

                    if (lob_4 == 'none'){ //remove steatosis %age if none present
                        mxLines.mxLine120 = mxLines.mxLine120.replace(/, involving DDDD% of the parenchyma/, '');
                    }
                    if (lob_4 != 'none'){ // add steatosis to NASH diagnosis
                        dxOuts.dxOut109 = dxOuts.dxOut109.replace(/#SS%/, lob_4+'%');
                    }
                    if (lob_5 == 'no significant degree of'){ //modify lobular inflammation grammar
                        mxLines.mxLine120 = mxLines.mxLine120.replace(/, comprised of FFFF/, '');
                        commLines.commLine121 = commLines.commLine121.replace(/with\//, '');
                        commLines.commLine122 = commLines.commLine122.replace(/with\//, '');
                    }
                    if (lob_5 != 'no significant degree of'){ // modify lobular inflammation grammar
                        var sel_txt = $('#lob5 option:selected').text(); //select text of box, not value
                        commLines.commLine121 = commLines.commLine121.replace(/\/without/, ' '+sel_txt);
                        commLines.commLine122 = commLines.commLine122.replace(/\/without/, ' '+sel_txt);

                    }
                    if (lob_1 == 'no significant'){ // modify aniso grammar
                        mxLines.mxLine120 = mxLines.mxLine120.replace(/anisonucleosis and binucleation/, 'anisonucleosis or binucleation');
                    }
                    if (lob_2 != 'are not seen'){
                        var sel_txt = $('#lob2 option:selected').text(); //select text of box, not value
                        commLines.commLine121 = commLines.commLine121.replace(/no balloon/, sel_txt+' balloon');
                        commLines.commLine122 = commLines.commLine122.replace(/no balloon/, sel_txt+' balloon');
                    }

                    mxLines.mxLine120 = mxLines.mxLine120.replace('AAAA', lob_1).replace('BBBB', lob_2).replace('CCCC', lob_3).replace('DDDD', lob_4).replace('EEEE', lob_5).replace('FFFF', lob_6).replace('GGGG', lob_7).replace('HHHH', lob_8).replace('IIII', lob_9).replace('JJJJ', lob_10);

                    $('#outPut-2').val($('#outPut-2').val() + mxLines.mxLine120);

                    // modify NASH CRN diagnosis
                    var steatscore = $('#lob4').find(':selected').data('score');
                    var ballscore = $('#lob2').find(':selected').data('score');
                    var lobinfscore = $('#lob5').find(':selected').data('score');
                    var fibroscore = $('#port9').find(':selected').data('score');
                    var crn = steatscore + ballscore + lobinfscore;

                    dxOuts.dxOut109 =
                        dxOuts.dxOut109
                            .replace(/#GR#/, steatscore)
                            .replace(/#LI#/, lobinfscore)
                            .replace(/#HB#/, ballscore)
                            .replace(/#NS#/, crn)
                            .replace(/#FI#/, fibroscore);

    });



// END TEXT MODIFIERS

    // NASH modal popup
    $('.NCRpop').mousedown(function(){
        $('.NASH').dialog("open").dialog({
            width: 1000,
            height: 500,
            title: 'NASH NCR scoring criteria'
        });

    });

// **** ADD MICROS WITH ONE-CLICK UNDO *****//
//******************************************//
//******************************************//



// temporary holder for checkbox id
    var part_choice  = null;
    var micro_choice  = null;
    var final_choice = null;
    var comm_choice  = null;

// new text
    var micro_text = $('#outPut-2').val();
    var final_text = $('#outPut-3').val();
    var comm_text  = $('#outPut-4').val();

// old micro text to revert to
    var final_old = '';
    var micro_old = '';
    var comm_old  = '';

// fill micro description textbox
    function print_micro() {
        micro_text = $('#outPut-2').val();
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

// fill final diagnosis textbox
    function print_final() {
        final_text = $('#outPut-3').val();
        if (final_choice !== null) {
            final_text += dxOuts[final_choice] + '';
            final_choice = null;
            $('#outPut-3').val(final_text);
        }
    }

// fill comment textbox
    function print_comm() {
        comm_text  = $('#outPut-4').val();
        if (comm_choice !== null) {
            comm_text += commLines[comm_choice] + '';
            comm_choice = null;
            $('#outPut-4').val(comm_text);
        }
    }
// Retain any manual edits within textarea
    $('textarea').on('input', function(){
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
                var re = new RegExp(partTypes[del]+'$'); // assign RegExp to this value + '$' last occurrence
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
                var re = new RegExp(dxLines[del]+'$'); // assign RegExp to this value + '$' last occurrence
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
//******************************************//
//******************************************//
// **** ADD MICROS WITH ONE-CLICK UNDO *****//

// Write Serologic data
    $('#writeserology').on('click', function (){
        var labs = {
            _1 : $('#date').val(),
            _2 : $('#AST').val(),
            _3 : $('#ALT').val(),
            _4 : $('#GGT').val(),
            _5 : $('#TBILI').val(),
            _6 : $('#APHOS').val(),
            _7 : $('#A1AT').val(),
            _8 : $('#LDH').val(),
            _9 : $('#PT').val(),
            _10 : $('#PTT').val(),
            _11 : $('#ANA').val(),
            _12 : $('#LKM').val(),
            _13 : $('#SMA').val(),
            _14 : $('#AMA').val(),
            _15 : $('#FACT').val(),
            _16 : $('#HIV').val(),
            _17 : $('#HCV').val(),
            _18 : $('#HBV').val()
        };

// Lab value modifiers (pediatric)

        var  labText = "SEROLOGIC DATA ("+labs._1+"): ";

        for (var i=2; i<16; i++){
            if (labs['_'+i] != ''){
                if (i == 2){
                    //AST
                    if (labs._2 > 60){
                        labs._2 += ' (H)';
                    }
                    else if (labs._2 <8){
                        labs._2 += ' (L)';
                    }
                    labText += "AST: "+labs['_'+i] + " U/L; ";
                }
                if (i == 3){
                    //ALT
                    if (labs._3 > 55){
                        labs._3 += ' (H)';
                    }
                    else if (labs._3 <7){
                        labs._3 += ' (L)';
                    }
                    labText += "ALT: "+labs['_'+i] + " U/L; ";
                }
                if (i == 4){
                    //GGT
                    if (labs._4 > 29){
                        labs._4 += ' (H)';
                    }
                    else if (labs._4 <9){
                        labs._4 += ' (L)';
                    }
                    labText += "GGT: "+labs['_'+i] + " U/L; ";
                }
                if (i == 5){
                    //TBILI
                    if (labs._5 > 1){
                        labs._5 += ' (H)';
                    }
                    else if (labs._5 <0.3){
                        labs._5 += ' (L)';
                    }
                    labText += "TBILI: "+labs['_'+i] + " mg/dL; ";
                }
                if (i == 6){
                    //APHOS
                    if (labs._6 > 587){
                        labs._6 += ' (H)';
                    }
                    else if (labs._6 <52){
                        labs._6 += ' (L)';
                    }
                    labText += "ALK PHOS: "+labs['_'+i] + " U/L; ";
                }
                if (i == 7){
                    //A1AT
                    if (labs._7 > 190){
                        labs._7 += ' (H)';
                    }
                    else if (labs._7 <100){
                        labs._7 += ' (L)';
                    }
                    labText += "A1AT: "+labs['_'+i] + " mg/dL; ";
                }
                if (i == 8){
                    //LDH
                    if (labs._8 > 435){
                        labs._8 += ' (H)';
                    }
                    else if (labs._8 <105){
                        labs._8 += ' (L)';
                    }
                    labText += "LDH: " +labs['_'+i] + " U/L; ";
                }
                if (i == 9){
                    //PT
                    if (labs._9 > 12.8){
                        labs._9 += ' (H)';
                    }
                    else if (labs._9 <10.3){
                        labs._9 += ' (L)';
                    }
                    labText += "PT: "+labs['_'+i] + " sec; ";
                }
                if (i == 10){
                    //PTT
                    if (labs._10 > 36){
                        labs._10 += ' (H)';
                    }
                    else if (labs._10 <26){
                        labs._10 += ' (L)';
                    }
                    labText += "PTT: "+labs['_'+i] + " sec; ";
                }
                if (i == 11){
                    //ANA
                    if (labs._11 > 40){
                        labs._11 += ' (H)';
                    }
                    labText += "ANA: 1:"+labs['_'+i]+"; ";
                }
                if (i == 12){
                    //LKM
                    if (labs._12 > 25){
                        labs._12 += ' (H)';
                    }
                    labText += "LKM: "+labs['_'+i]+" U; ";
                }
                if (i == 13){
                    //SMA
                    if (labs._13 > 80){
                        labs._13 += ' (H)';
                    }
                    labText += "SMA: 1:"+labs['_'+i]+"; ";
                }
                if (i == 14){
                    //AMA
                    if (labs._14 > 1){
                        labs._14 += ' (H)';
                    }
                    labText += "AMA: "+labs['_'+i]+" U; ";
                }
                if (i == 15){
                    //FACT
                    if (labs._15 > 30){
                        labs._15 += ' (H)';
                    }
                    labText += "F-ACT: "+labs['_'+i] + " U; ";
                }

            }
        }

        if (labs._16 != 'NA'){
            labText += "HIV: "+labs._16+"; ";
        }
        if (labs._17 != 'NA'){
            labText += "HCV: "+labs._17+"; ";
        }
        if (labs._18 != 'NA'){
            labText += "HBV: "+labs._18+"; ";
        }

        $('#outPut-1').val(labText);

    });

    // ********************* Combined report function ***********************//
    $('#writeReport').on('click', function () {
        // store your text to localStorage when someone click the link
        var textToPass = $('#outPut-1').val() +'\n\n'+$('#outPut-2').val()+'\n\nLIVER, BIOPSY:\n'+$('#outPut-3').val() +'\n\nCOMMENT:\n'+$('#outPut-4').val();

        $('#outPut-combine').val(textToPass);
        $('#combined-report').modal("show");

				dataObj.singleSection = $('#outPut-combine').val();
				makeCreatePdfBtn();

    });


});

/**
 * Created by Chandra Krishnan on 6/16/2017.
 */
