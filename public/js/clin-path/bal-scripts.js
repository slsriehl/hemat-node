$(window).on('load', function(){

// Automatically select diagnoses based on selections
    $('select').on('change', function(){
        var oro = $('#box9').val();
        var fe = $('#box10').val();
        var sel = $('#box6').val();
        if ($(this).attr('id') == 'box6'){
            if (sel == 'predominantly of alveolar macrophages, with fewer respiratory epithelial cells' ){
                $('#box20 option:eq(0)').prop('selected', true).trigger('change');
            } else if (sel == 'predominantly of a mixture of alveolar macrophages and neutrophils, with fewer respiratory epithelial cells' ){
                $('#box20 option:eq(2)').prop('selected', true).trigger('change');
            }else if (sel == 'predominantly of neutrophils, with fewer alveolar macrophages and respiratory epithelial cells' ){
                $('#box20 option:eq(1)').prop('selected', true).trigger('change');
            } else if (sel == 'predominantly of a mixture of neutrophils and eosinophils, with fewer alveolar macrophages and respiratory epithelial cells' ){
                $('#box20 option:eq(3)').prop('selected', true).trigger('change');
            } else if (sel == 'predominantly of oropharyngeal squamous epithelial cells; no alveolar macrophages or respiratory epithelial cells are present' ){
                $('#box20 option:eq(4)').prop('selected', true).trigger('change');
            } else if (sel == 'predominantly of mucoid debris, degenerating mononculear cells and few neutrophils' ){
                $('#box20 option:eq(5)').prop('selected', true).trigger('change');
            } else if (sel == 'predominantly of mucoid and necrotic debris with neutrophils' ){
                $('#box20 option:eq(6)').prop('selected', true).trigger('change');
            }

        } 	else if ($(this).attr('id') == 'box9'){
            if (oro == 'No increase in lipid-laden macrophages is seen with an Oil-red O stain' && fe == 'No increase in hemosiderin laden histiocytes is seen with an iron stain'){
                $('#box21').val([]);
                $('#box21 option:eq(1)').prop('selected', true).trigger('change');
            } else if (oro == 'No increase in lipid-laden macrophages is seen with an Oil-red O stain' && fe != 'No increase in hemosiderin laden histiocytes is seen with an iron stain'){
                $('#box21 option:eq(0)').prop('selected', false).trigger('change');
                $('#box21 option:eq(1)').prop('selected', false).trigger('change');
                $('#box21 option:eq(3)').prop('selected', true).trigger('change');
                $('#box21 option:eq(4)').prop('selected', false).trigger('change');
                $('#box21 option:eq(5)').prop('selected', false).trigger('change');
            }
            else if (oro == 'Few lipid-laden macrophages are seen with an Oil-red O stain; these are not significantly increased'){
                $('#box21 option:eq(0)').prop('selected', false).trigger('change');
                $('#box21 option:eq(3)').prop('selected', false).trigger('change');
                $('#box21 option:eq(4)').prop('selected', true).trigger('change');
                $('#box21 option:eq(5)').prop('selected', false).trigger('change');
            } else if (oro == 'An Oil-red O stain shows a significant increase in lipid laden macrophages, which are enumerated at > 40 in a low-power field'){
                $('#box21 option:eq(0)').prop('selected', false).trigger('change');
                $('#box21 option:eq(3)').prop('selected', false).trigger('change');
                $('#box21 option:eq(4)').prop('selected', false).trigger('change');
                $('#box21 option:eq(5)').prop('selected', true).trigger('change');

                $('#box22 option:eq(0)').prop('selected', false).trigger('change');
                $('#box22 option:eq(2)').prop('selected', true).trigger('change');

            }
        } else if ($(this).attr('id') == 'box10'){
            if (oro == 'No increase in lipid-laden macrophages is seen with an Oil-red O stain' && fe == 'No increase in hemosiderin laden histiocytes is seen with an iron stain'){
                $('#box21').val([]);
                $('#box21 option:eq(1)').prop('selected', true).trigger('change');

            } else if (oro != 'No increase in lipid-laden macrophages is seen with an Oil-red O stain' && fe == 'No increase in hemosiderin laden histiocytes is seen with an iron stain'){
                console.log('no fe');
                $('#box21 option:eq(0)').prop('selected', false).trigger('change');
                $('#box21 option:eq(1)').prop('selected', false).trigger('change');
                $('#box21 option:eq(2)').prop('selected', true).trigger('change');
                $('#box21 option:eq(6)').prop('selected', false).trigger('change');
                $('#box21 option:eq(7)').prop('selected', false).trigger('change');

            } else if (fe == 'Few hemosiderin laden histiocytes are seen with an iron stain'){
                console.log('few fe');
                $('#box21 option:eq(0)').prop('selected', false).trigger('change');
                $('#box21 option:eq(2)').prop('selected', false).trigger('change');
                $('#box21 option:eq(6)').prop('selected', true).trigger('change');
                $('#box21 option:eq(7)').prop('selected', false).trigger('change');

                $('#box22 option:eq(0)').prop('selected', false).trigger('change');
                $('#box22 option:eq(8)').prop('selected', false).trigger('change');
                $('#box22 option:eq(7)').prop('selected', true).trigger('change');

            } else if (fe == 'Numerous hemosiderin laden histiocytes are seen with an iron stain'){
                console.log('numerous fe');
                $('#box21 option:eq(0)').prop('selected', false).trigger('change');
                $('#box21 option:eq(2)').prop('selected', false).trigger('change');
                $('#box21 option:eq(6)').prop('selected', false).trigger('change');
                $('#box21 option:eq(7)').prop('selected', true).trigger('change');

                $('#box22 option:eq(0)').prop('selected', false).trigger('change');
                $('#box22 option:eq(7)').prop('selected', false).trigger('change');
                $('#box22 option:eq(8)').prop('selected', true).trigger('change');

            }
        }	else if ($(this).attr('id') == 'box11'){
            var gms = $('#box11').val();
            if (gms == 'No fungal hyphae or pneumocystis is seen with a GMS stain'){
                $('#box21 option:eq(0)').prop('selected', false).trigger('change'); // stains NA
                $('#box21 option:eq(8)').prop('selected', false).trigger('change'); // neg fungus
                $('#box21 option:eq(9)').prop('selected', false).trigger('change'); //
                $('#box21 option:eq(10)').prop('selected', false).trigger('change');
                $('#box21 option:eq(11)').prop('selected', true).trigger('change');
                $('#box21 option:eq(12)').prop('selected', false).trigger('change');
                $('#box21 option:eq(13)').prop('selected', false).trigger('change');
                $('#box21 option:eq(14)').prop('selected', false).trigger('change');

                $('#box22 option:eq(0)').prop('selected', false).trigger('change');
                $('#box22 option:eq(1)').prop('selected', true).trigger('change');

            } else if (gms == 'Fungal hyphae are detected with a GMS stain; no pneumocystis is seen'){
                $('#box21 option:eq(0)').prop('selected', false).trigger('change'); // stains NA
                $('#box21 option:eq(8)').prop('selected', false).trigger('change'); // neg fungus
                $('#box21 option:eq(9)').prop('selected', false).trigger('change'); //
                $('#box21 option:eq(10)').prop('selected', false).trigger('change');
                $('#box21 option:eq(11)').prop('selected', false).trigger('change');
                $('#box21 option:eq(12)').prop('selected', true).trigger('change');
                $('#box21 option:eq(13)').prop('selected', false).trigger('change');
                $('#box21 option:eq(14)').prop('selected', false).trigger('change');

                $('#box22 option:eq(0)').prop('selected', false).trigger('change');
                $('#box22 option:eq(4)').prop('selected', true).trigger('change');
                $('#box22 option:eq(5)').prop('selected', false).trigger('change');

            } else if (gms == 'Fungal yeast are detected with a GMS stain; no pneumocystis is seen'){
                $('#box21 option:eq(0)').prop('selected', false).trigger('change'); // stains NA
                $('#box21 option:eq(8)').prop('selected', false).trigger('change'); // neg fungus
                $('#box21 option:eq(9)').prop('selected', false).trigger('change'); //
                $('#box21 option:eq(10)').prop('selected', false).trigger('change');
                $('#box21 option:eq(11)').prop('selected', false).trigger('change');
                $('#box21 option:eq(12)').prop('selected', false).trigger('change');
                $('#box21 option:eq(13)').prop('selected', true).trigger('change');
                $('#box21 option:eq(14)').prop('selected', false).trigger('change');

                $('#box22 option:eq(0)').prop('selected', false).trigger('change');
                $('#box22 option:eq(4)').prop('selected', true).trigger('change');
                $('#box22 option:eq(5)').prop('selected', false).trigger('change');

            }else if (gms == 'Pneumocystis organisms are detected with a GMS stain; no fungal hyphae are seen'){
                $('#box21 option:eq(0)').prop('selected', false).trigger('change'); // stains NA
                $('#box21 option:eq(8)').prop('selected', false).trigger('change'); // neg fungus
                $('#box21 option:eq(9)').prop('selected', false).trigger('change'); //
                $('#box21 option:eq(10)').prop('selected', false).trigger('change');
                $('#box21 option:eq(11)').prop('selected', false).trigger('change');
                $('#box21 option:eq(12)').prop('selected', false).trigger('change');
                $('#box21 option:eq(13)').prop('selected', false).trigger('change');
                $('#box21 option:eq(14)').prop('selected', true).trigger('change');

                $('#box22 option:eq(0)').prop('selected', false).trigger('change');
                $('#box22 option:eq(4)').prop('selected', false).trigger('change');
                $('#box22 option:eq(5)').prop('selected', true).trigger('change');

            }
        }
    });



$('#done').on('click', function(){

// get assign the values from each text input
        var micro = '';
        var diag = '';
        var stains = ['']; //place holder to add stains
        var cells = '';
        var gross = '';
        var comment = '';
        var clinical = '';

// Clinical history
        var box_0 = $("#box0").val();
        clinical += "Clinical History\n\n" + box_0.join(', ').replace(/\w\S*/, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) + "\n";

// Gross description
        var box_1 = $('#box1').val();

        var box_2 = $('#box2').val();
        var box_3 = $('#box3').val();
        var box_4 = $('#box4').val();
        var box_5 = $('#box5').val();

        if ($('.double').is(':checked')){
            gross += "LUNG, "+box_1.join(', ').replace(/.*/, function(a) { return a.toUpperCase(); })+" BRONCHOALVEOLAR LAVAGE: Received without fixative are two specimen bottles, labeled with the patient's name and '"+box_1.join('\' and \'').replace(/.*/, function(a) { return a.toLowerCase(); })+"'. The specimens are combined to account for "+box_2+"ml of "+box_3.join(', ')+" "+box_4+" fluid. The following cytospin preparations are performed on the material: "+box_5.join(', ')+".\n\n";
        }
        else{
            gross += "LUNG, "+box_1.join(', ').replace(/lobe,/, 'and').replace(/.*/, function(a) { return a.toUpperCase(); })+", BRONCHOALVEOLAR LAVAGE: Received without fixative is a single specimen bottle, labeled with the patient's name and '"+box_1.join(', ').replace(/lobe,/, 'and').replace(/.*/, function(a) { return a.toLowerCase(); })+"'. The specimen accounts for "+box_2+"ml of "+box_3.join(', ')+" "+box_4+" fluid. The following cytospin preparations are performed on the material: "+box_5.join(', ')+".\n\n";
        }

// Microscopic description
        var box_6 = $("#box6").val();
        var box_7 = $("#box7").val();
        var box_8 = $("#box8").val();
        var box_9 = $("#box9").val();
        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();

        micro +="The cytospin slides are "+box_12+" and consist "+mxLines[box_6]+". "+mxLines[box_7]+". "+mxLines[box_8]+". ";

        // add cell mixture to diagnosis
        if (box_6 == 'mxLine150' || box_6 == 'mxLine151'){  // predom macs
            cells = 'dxLine100';
        } else if (box_6 == 'mxLine152'){  // mixed macs and neuts
            cells = 'dxLine102';
        } else if (box_6 == 'mxLine153' || box_6 == 'mxLine154'){  // mostly neuts
            cells = 'dxLine101';
        } else if (box_6 == 'mxLine155') { // squames
            cells = 'dxLine104';
        } else if (box_6 == 'mxLine156') { // mucoid debris
            cells = 'dxLine105';
        } else if (box_6 == 'mxLine157') { // necroinflammatory material
            cells = 'dxLine106';
        } else if (box_6 == 'mxLine158') { // scant blood
            cells = 'dxLine107';
            comment += commLines.commLine109;
        } else if (box_6 == 'mxLine159') { // hemorrhage
            cells = 'dxLine108';
            comment += commLines.commLine110;
        }

        // add microorganisms to diagnosis
        if (box_7 == 'mxLine203'){
            stains.push(dxLines.dxLine127);
            comment += commLines.commLine101;
        } else if (box_7 == 'mxLine201' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine130);
        } else if (box_7 == 'mxLine204' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine131);
        } else if (box_7 == 'mxLine205' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine132);
        } else if (box_7 == 'mxLine206' && box_11 == 'Not applicable') {
            stains.push(dxLines.dxLine130);
            stains.push(dxLines.dxLine127);
        }

// ORO
        if ($.inArray('ORO', box_5) > -1){
            if (box_9 == 'Not applicable'){
                $('#error').html('<h5>You forgot the ORO stain!</h5>')
                $('#alert-modal').modal('show');
                $('#box9').focus();
            }
        }
        if(box_9 != "Not applicable"){
            micro += mxLines[box_9]+ ". ";
            // add oro to finals
            if (box_9 =='mxLine230') { // no ORO
                stains.push(dxLines.dxLine122);
            } else if (box_9 == 'mxLine231') {// few ORO
                stains.push(dxLines.dxLine123);
            } else if (box_9 == 'mxLine232') {// many ORO
                if (box_6 == 'mxLine150' || box_6 == 'mxLine151') {// & few neuts
                    stains.push(dxLines.dxLine124); // aspiration
                    comment += commLines.commLine102; // aspiration comment
                } else if (box_6 == 'mxLine152' || box_6 == 'mxLine153'){ // many neuts
                    stains.push(dxLines.dxLine124); // aspiration
                    comment += commLines.commLine103; // aspiration vs injury comment
                }
            }
        }

// Fe
        if ($.inArray('Fe', box_5) > -1){
            if (box_10 == 'Not applicable'){
                $('#error').html('<h5>You forgot the Fe stain!</h5>');
                $('#alert-modal').modal('show');
                $('#box9').focus();
            }
        }
        if(box_10 != "Not applicable"){
            micro += mxLines[box_10]+ ". ";
        // add fe to finals
            if (box_10 =='mxLine233') { // no Fe
                stains.push(dxLines.dxLine121);
            } else if (box_10 == 'mxLine234') {// few Fe
                stains.push(dxLines.dxLine125);
                comment += commLines.commLine107;
            } else if (box_10 == 'mxLine235') {// many Fe
                stains.push(dxLines.dxLine126);
                comment += commLines.commLine108;
            }
        }

// GMS
        if ($.inArray('GMS', box_5) > -1){
            if (box_11 == 'Not applicable'){
                $('#error').html('<h5>You forgot the GMS stain!</h5>')
                $('#alert-modal').modal('show');
                $('#box9').focus();
            }
        }
        if(box_11 != "Not applicable"){
            micro += mxLines[box_11]+ ".\n";
            if (box_11 == 'mxLine236'){ // GMS negative
                stains.push(dxLines.dxLine140);
                comment += commLines.commLine101;
            } else if (box_11 == 'mxLine237'){ // GMS hyphae
                stains.push(dxLines.dxLine141);
                comment += commLines.commLine104;
            } else if (box_11 == 'mxLine238'){ // GMS yeast
                stains.push(dxLines.dxLine142);
                comment += commLines.commLine104;
            }else if (box_11 == 'mxLine239'){ // GMS pcp
                stains.push(dxLines.dxLine143);
                comment += commLines.commLine105;
            }
        }

// BAL Differential
        var box_13 = parseInt($("#box13").val(), 10);
        var box_14 = parseInt($("#box14").val(), 10);
        var box_15 = parseInt($("#box15").val(), 10);
        var box_16 = parseInt($("#box16").val(), 10);

        var sum_diff = box_13 + box_14 + box_15 + box_16;


        if ($('.baldiff').is(':checked')){
            if (sum_diff >100){
                alert('Your BAL differential adds up to more than 100%. Please check your inputs');
                $('#box13').focus();
                return;
            } else {
                micro += "\n\nBAL leukocyte differential:\n" +
                    "Macrophages: " + box_13 + "%\n" +
                    "Neutrophils: " + box_14 + "%\n" +
                    "Lymphocytes: " + box_15 + "%\n" +
                    "Eosinophils: " + box_16 + "%\n\nCPT code: 89051";
            }
        }

         diag = "LUNG, "+box_1.join(', ').replace(/lobe,/, 'and').replace(/.*/, function(a) { return a.toUpperCase(); })+", BRONCHOALVEOLAR LAVAGE:\n- " + dxLines[cells]+stains.join('\n- ');



        $('#outPut-1').val(micro);
        $('#outPut-2').val(diag);
        $('#outPut-3').val(gross);
        $('#outPut-4').val(comment);

				dataObj.micro = $('#outPut-1').val();
				dataObj.finals = $('#outPut-2').val();
				dataObj.gross = $('#outPut-3').val();
				dataObj.comments = $('#outPut-4').val();
				makeCreatePdfBtn();

    });




// ********************* Combined report function ***********************//
    $('#writeReport').on('click', function () {
        // get clinical history
        var box_0 = $("#box0").val();
        clinical = "Clinical History\n\n" + box_0.join(', ').replace(/\w\S*/, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}) + "\n";

        // store your text to localStorage when someone click the link
        var textToPass = clinical+'\n\n'+$('#outPut-1').val()+'\n\n'+$('#outPut-2').val()+'\n\n'+$('#outPut-3').val()+'\n\n'+$('#outPut-4').val();
        $('#outPut-combine').val(textToPass);
        $('#combined-report').modal("show");
    });




















});

/**
 * Created by chandrakrishnan on 5/16/2017.
 */
