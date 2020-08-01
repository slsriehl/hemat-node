// CBC based selection rules
$(window).on('load', function(){

$('.cbcval').blur(function (){

var agerx  = parseFloat($('#agerange').val());
var wbcIx = parseFloat($('#WBC').val());
var rbcIx = parseFloat($('#RBC').val());
var hbIx = parseFloat($('#HB').val());
var hctIx = parseFloat($('#HCT').val());
var mcvIx = parseFloat($('#MCV').val());
var mchcIx = parseFloat($('#MCHC').val());
var rdwIx = parseFloat($('#RDW').val());
var pltIx = parseFloat($('#PLT').val());
var pneutIx = parseFloat($('#PNEUT').val());
var plymphIx = parseFloat($('#PLYMPH').val());
var pmonoIx = parseFloat($('#PMONO').val());
var neutIx = parseFloat($('#NEUT').val()) || 0;
var lymphIx = parseFloat($('#LYMPH').val()) || 0;
var monoIx = parseFloat($('#MONO').val()) || 0;
var eosIx = parseFloat($('#EOS').val()) || 0;
var aneut = (parseFloat(wbcIx) * (parseFloat(pneutIx) / 100)).toFixed(2);
var alym = (parseFloat(wbcIx) * (parseFloat(plymphIx) / 100)).toFixed(2);
var amono = (parseFloat(wbcIx) * (parseFloat(pmonoIx) / 100)).toFixed(2);

if ($('#CBCswitch').is(':checked')){
neutIx = aneut;
lymphIx = alym;
monoIx = amono;

 }
 
 // set error triggers
 if (rbcIx > 10 || hbIx > 30 || hctIx > 80 || mcvIx > 150 || mcvIx < 40 || mchcIx > 50 || rdwIx > 40 || (neutIx + lymphIx + monoIx >= wbcIx)){
     $("#cbcerror").show();
} else {
        $("#cbcerror").hide();
	}

// reset the .highlight class appendage
$('.helpful').removeClass('helpful');

// @=====****=====START HELPERS HERE =====****=====@

// adult rules
if (agerx === 3){
	// normal WBCs
	if (wbcIx >= 3.6 && wbcIx < 10.5 && neutIx > lymphIx){
	$('#_partType150').addClass('helpful');
	} else 	if (wbcIx >= 3.6 && wbcIx < 10.5 && neutIx < lymphIx){
	$('#_partType151').addClass('helpful');
	}
	// Low WBC rule
	if (wbcIx < 3.6 && wbcIx > 2.0){
	$('#_partType152').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are slightly decreased in ');
		}
	}
	else if (wbcIx <= 2.0){ 
	$('#_partType153').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are decreased in ');
		}
	}

	// Hi WBC rule
	if (wbcIx >= 10.5 && wbcIx < 14.0){
	$('#_partType160').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are slightly increased in ');
		}
	}else if (wbcIx >= 14.0 && lymphIx < 10.0){
	$('#_partType160').addClass('helpful');
	$('#_partType164').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are increased in ');
		}
	}else if (wbcIx >= 40){
	$('#_partType160').addClass('helpful');
	$('#_partType164').addClass('helpful');
	$('#_partType165').addClass('helpful');

        for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are markedly increased in ');
		}
	}

	// Low neuts rule
	if (neutIx < 1.4 && neutIx >0.2){
	$('#_partType154').addClass('helpful');
	} else if (neutIx <= 0.2){
	$('#_partType154').addClass('helpful');
	$('#_commLine161').addClass('helpful');
	}

	// Hi neuts
	if (neutIx > 6.0 && neutIx <=7.5){
	$('#_commLine150').addClass('helpful');
	partTypes.partType156 = partTypes.partType156.replace(/an absolute/, 'a mild absolute');
	} else if (neutIx > 7.5 && neutIx < 50){
	$('#_partType156').addClass('helpful');
	$('#_partType157').addClass('helpful');
	$('#_partType158').addClass('helpful');
	$('#_commLine150').addClass('helpful');

	} else if (neutIx >= 50 && wbcIx > 60){
	$('#_partType158').addClass('helpful');
	$('#_partType160').addClass('helpful');
	$('#column2d').find('.hidden').show();
	$('#_mxLine154').addClass('helpful');
	
	}

	// Low lymphs rule
	if (lymphIx < 1.0){
	$('#_partType155').addClass('helpful');
	}

	// Hi lymphs
	if (lymphIx > 4.0 && lymphIx <=6.0 && lymphIx > neutIx){
	$('#_partType162').addClass('helpful');
	$('#_mxLine151').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_commLine152').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(of )(.*?)(\. )/, 'of lymphocytes with fewer neutrophils and monocytes. ');
		}

	} else if (lymphIx > 6.0 && lymphIx < 20.0 && lymphIx > neutIx){
	$('#_partType159').addClass('helpful');
	$('#_mxLine151').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_commLine152').addClass('helpful');
	for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(of )(.*?)(\. )/, 'of an absolute increase in lymphocytes with fewer neutrophils and monocytes. ');
		}
	}else if (lymphIx >=20.0 && lymphIx > neutIx){
	$('#_partType159').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_mxLine155').addClass('helpful');
	$('#_commLine155').addClass('helpful');
	$('#_commLine156').addClass('helpful');
	$('#column2d').find('.hidden').show();
	}

	// Hi Monos
	if (monoIx > 1.0 && monoIx < 2.5 && monoIx < neutIx && wbcIx < 12.0){
	$('#_partType163').addClass('helpful');
		
	for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(, lymphocytes and monocytes.)/, ' and lymphocytes. There is a relative prominence of monocytes, which include a few young forms. ');
		}

	}

	// RBC rules
	if (rbcIx < 4.0 && mcvIx >= 77 && mcvIx <= 99){
	$('#_partType101').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx < 4.0 && mcvIx < 77 && rdwIx < 18){ // microcytic anemia
		console.log("Microcytic anemia!");
	$('#_partType102').addClass('helpful');
	$('#_commLine100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx >= 4.0 && rbcIx <= 5.5 && mcvIx < 77){ // microcytic, not anemic
	$('#_partType106').addClass('helpful');
	$('#_commLine117').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx < 4.0 && mcvIx < 77 && rdwIx >= 18){ // microcytic anemia, high rdw
	$('#_partType102').addClass('helpful');
	$('#_commLine100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_mxLine119').addClass('helpful');
	} else if (rbcIx < 4.0 && mcvIx > 99){ // macrocytic anemia
	$('#_partType103').addClass('helpful');
	$('#_commLine101').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_mxLine165').addClass('helpful');
	$('#_mxLine166').addClass('helpful');
	}else if (rbcIx > 5.5 && mcvIx < 77){ // microcytic erythrocytosis
	$('#_partType104').addClass('helpful');
	$('#_commLine102').addClass('helpful');
	}else if (rbcIx > 5.5 && mcvIx >= 77 && mcvIx <= 99){ // normocytic, erythrocytosis
	$('#_partType105').addClass('helpful');
	}else if (rbcIx >=4.0 && rbcIx<=5.5 && mcvIx <= 99){ // normal rbc indices
	$('#_partType100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_dxOut100').addClass('helpful');

	}

	// Possible spherocytes
	if (mchcIx >= 34.5 && rdwIx > 17){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine108').addClass('helpful');
	$('#_mxLine109').addClass('helpful');
	$('#_commLine106').addClass('helpful');
	$('#_commLine107').addClass('helpful');
	$('#_commLine108').addClass('helpful');

	}
	
	// Possible anisocytosis
	if (rdwIx > 17){
	for (var i=100; i<106; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(with )(.*?)(anisopoikilocytosis)/, 'with increased anisopoikilocytosis');
		}
	if (rdwIx < 20){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine110').addClass('helpful');
	$('#_mxLine114').addClass('helpful');
	$('#_mxLine122').addClass('helpful');
	$('#_mxLine112').addClass('helpful');
	}
	if (rdwIx >= 20){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine111').addClass('helpful');
	$('#_mxLine115').addClass('helpful');
	$('#_mxLine119').addClass('helpful');
	$('#_mxLine101').addClass('helpful');
	$('#_mxLine123').addClass('helpful');
	$('#_mxLine113').addClass('helpful');
	}
	}

	// Platelet rules
	if (pltIx < 140 && pltIx >= 100){
	$('#_partType201').addClass('helpful');
	$('#_mxLine204').addClass('helpful');
	}else if (pltIx < 100){
	$('#_partType202').addClass('helpful');
	$('#_partType205').addClass('helpful');
	$('#_mxLine204').addClass('helpful');
	$('#_commLine201').addClass('helpful'); // ITP comment
	}else if (pltIx > 450 && pltIx < 600){
	$('#_partType203').addClass('helpful');
	$('#_mxLine203').addClass('helpful');
	}else if (pltIx >= 600){
	$('#_partType204').addClass('helpful');
	$('#_mxLine203').addClass('helpful');
	$('#_commLine202').addClass('helpful');
	}else {
	$('#_dxOut200').addClass('helpful');
	$('#_partType200').addClass('helpful');
	$('#_mxLine200').addClass('helpful');
	}


} // end adult rules block

// start infant rules block
if (agerx === 1){
	// normal WBCs
	if (wbcIx >= 5.1 && wbcIx < 16){
	$('#_partType151').addClass('helpful');
	}
	// Low WBC rule
	if (wbcIx < 5.1 && wbcIx > 4.5){
	$('#_partType152').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are slightly decreased in ');
		}
	}
	else if (wbcIx <= 4.5){ 
	$('#_partType153').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are decreased in ');
		}
	}

	// Hi WBC rule
	if (wbcIx >= 16 && wbcIx < 20){
	$('#_partType160').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are increased in ');
		}
	}else if (wbcIx >= 20.0){
	$('#_partType160').addClass('helpful');
	$('#_partType164').addClass('helpful');
    $('#_partType165').addClass('helpful');

        for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are markedly increased in ');
		}
	}
	
	// Low neuts rule
	if (neutIx < 0.8){
	$('#_partType154').addClass('helpful');
	}

	// Hi neuts
	if (neutIx > 5.5 && neutIx <=7.5){
	$('#_commLine150').addClass('helpful');
	partTypes.partType156 = partTypes.partType156.replace(/an absolute/, 'a mild absolute');
	} else if (neutIx > 7.5){
	$('#_partType156').addClass('helpful');
	$('#_partType157').addClass('helpful');
	$('#_partType158').addClass('helpful');
	$('#_commLine150').addClass('helpful');

	}

	// Low lymphs rule
	if (lymphIx < 3.0){
	$('#_partType155').addClass('helpful');
	}

	// Hi lymphs
	if (lymphIx > 10.0 && lymphIx <=12.0 && lymphIx > neutIx){
	$('#_partType162').addClass('helpful');
	$('#_mxLine151').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_commLine152').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(of )(.*?)(\. )/, 'of a relative increase in lymphocytes with fewer neutrophils and monocytes. ');
		}

	} else if (lymphIx > 10.0 && lymphIx < 20.0 && lymphIx > neutIx){
	$('#_partType159').addClass('helpful');
	$('#_mxLine151').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_commLine152').addClass('helpful');
	for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(of )(.*?)(\. )/, 'of an absolute increase in lymphocytes with fewer neutrophils and monocytes. ');
		}
	}else if (lymphIx >=20.0){
	$('#_partType159').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_mxLine155').addClass('helpful');
	$('#_commLine155').addClass('helpful');
	$('#_commLine156').addClass('helpful');
	}

	// Hi Monos
	if (monoIx > 1.2 && monoIx < 2.5 && monoIx < neutIx && wbcIx < 16.0){
	$('#_partType163').addClass('helpful');
		
	for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/( and monocytes.)/, '. There is a relative prominence of monocytes, which include a few young forms. ');
		}

	}

	// RBC rules
	if (rbcIx < 2.9 && mcvIx >= 72 && mcvIx <= 105){
	$('#_partType101').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx < 2.9 && mcvIx < 72 && rdwIx < 18){
	$('#_partType102').addClass('helpful');
	$('#_commLine100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx >= 2.9 && rbcIx <= 5.5 && mcvIx < 72 && rdwIx < 18){ // microcytic, not anemic
	$('#_partType106').addClass('helpful');
	$('#_commLine117').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx < 2.9 && mcvIx < 72 && rdwIx >= 18){
	$('#_partType102').addClass('helpful');
	$('#_commLine100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_mxLine119').addClass('helpful');
	} else if (rbcIx < 2.9 && mcvIx > 105){
	$('#_partType103').addClass('helpful');
	$('#_commLine101').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_mxLine165').addClass('helpful');
	$('#_mxLine166').addClass('helpful');
	}else if (rbcIx > 4.4 && mcvIx < 72){
	$('#_partType104').addClass('helpful');
	$('#_commLine102').addClass('helpful');
	}else if (rbcIx > 4.4 && mcvIx >= 72 && mcvIx <= 105){
	$('#_partType105').addClass('helpful');
	}else if (rbcIx >=2.9 && rbcIx<=4.4 && mcvIx <= 105){
	$('#_partType100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_dxOut100').addClass('helpful');

	}

	// Possible spherocytes
	if (mchcIx >= 34.5 && rdwIx > 17){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine108').addClass('helpful');
	$('#_mxLine109').addClass('helpful');
	$('#_commLine106').addClass('helpful');
	$('#_commLine107').addClass('helpful');
	$('#_commLine108').addClass('helpful');
	}

		// Possible anisocytosis
	if (rdwIx > 17){
	for (var i=100; i<106; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(with )(.*?)(anisopoikilocytosis)/, 'with increased anisopoikilocytosis');
		}
	if (rdwIx < 20){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine114').addClass('helpful');
	$('#_mxLine122').addClass('helpful');
	$('#_mxLine110').addClass('helpful');
	$('#_mxLine112').addClass('helpful');
	}
	if (rdwIx >= 20){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine115').addClass('helpful');
	$('#_mxLine119').addClass('helpful');
	$('#_mxLine101').addClass('helpful');
	$('#_mxLine123').addClass('helpful');
	$('#_mxLine111').addClass('helpful');
	$('#_mxLine113').addClass('helpful');
	}
	}
	
	// Platelet rules
	if (pltIx < 140 && pltIx >= 100){
	$('#_partType201').addClass('helpful');
	$('#_mxLine204').addClass('helpful');
	}else if (pltIx <100){
	$('#_partType202').addClass('helpful');
	$('#_partType205').addClass('helpful');
	$('#_mxLine204').addClass('helpful');
	$('#_commLine201').addClass('helpful');
	}else if (pltIx > 450 && pltIx < 600){
	$('#_partType203').addClass('helpful');
	$('#_mxLine203').addClass('helpful');
	}else if (pltIx >= 600){
	$('#_partType204').addClass('helpful');
	$('#_mxLine203').addClass('helpful');
	$('#_commLine202').addClass('helpful');
	}else {
	$('#_dxOut200').addClass('helpful');
	$('#_partType200').addClass('helpful');
	$('#_mxLine200').addClass('helpful');
	}

	
} // end infant rules block

// start baby rules block
if (agerx === 2){
	// normal WBCs
	if (wbcIx >= 5.6 && wbcIx < 17.0){
	$('#_partType151').addClass('helpful');
	}
	// Low WBC rule
	if (wbcIx < 5.6 && wbcIx > 3.5){
	$('#_partType152').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are slightly decreased in ');
		}
	}
	else if (wbcIx <= 3.5){ 
	$('#_partType153').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are decreased in ');
		}
	}

	// Hi WBC rule
	if (wbcIx >= 17 && wbcIx < 22){
	$('#_partType160').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are increased in ');
		}
	}else if (wbcIx >= 22.0){
	$('#_partType160').addClass('helpful');
	$('#_partType164').addClass('helpful');
	$('#_partType165').addClass('helpful');

        for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/L(.*?)(in )/, 'Leukocytes are markedly increased in ');
		}
	}
	
	// Low neuts rule
	if (neutIx < 1.4){
	$('#_partType154').addClass('helpful');
	}

	// Hi neuts
	if (neutIx > 6.9 && neutIx <=7.5){
	$('#_commLine150').addClass('helpful');
	partTypes.partType156 = partTypes.partType156.replace(/an absolute/, 'a mild absolute');
	} else if (neutIx > 7.5){
	$('#_partType156').addClass('helpful');
	$('#_partType157').addClass('helpful');
	$('#_partType158').addClass('helpful');
	$('#_commLine150').addClass('helpful');

	}

	// Low lymphs rule
	if (lymphIx < 2.5){
	$('#_partType155').addClass('helpful');
	}

	// Hi lymphs
	if (lymphIx > 10.0 && lymphIx <=12.0 && lymphIx > neutIx){
	$('#_partType162').addClass('helpful');
	$('#_mxLine151').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_commLine152').addClass('helpful');
		for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(of )(.*?)(\. )/, 'of a relative increase in lymphocytes with fewer neutrophils and monocytes. ');
		}

	} else if (lymphIx > 10.0 && lymphIx < 20.0 && lymphIx > neutIx){
	$('#_partType159').addClass('helpful');
	$('#_mxLine151').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_commLine152').addClass('helpful');
	for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(of )(.*?)(\. )/, 'of an absolute increase in lymphocytes with fewer neutrophils and monocytes. ');
		}
	}else if (lymphIx >=20.0){
	$('#_partType159').addClass('helpful');
	$('#_mxLine152').addClass('helpful');
	$('#_mxLine155').addClass('helpful');
	$('#_commLine155').addClass('helpful');
	$('#_commLine156').addClass('helpful');
	}

	// Hi Monos
	if (monoIx > 1.2 && monoIx < 2.5 && monoIx < neutIx && wbcIx < 16.0){
	$('#_partType163').addClass('helpful');
		
	for (var i=150; i<167; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/( and monocytes.)/, '. There is a relative prominence of monocytes, which include a few young forms. ');
		}

	}

	// RBC rules
	if (rbcIx < 3.9 && mcvIx >= 72 && mcvIx <= 92){
	$('#_partType101').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx < 3.9 && mcvIx < 72 && rdwIx < 18){
	$('#_partType102').addClass('helpful');
	$('#_commLine100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx >= 3.9 && rbcIx <= 5.5 && mcvIx < 72 && rdwIx < 18){ // microcytic, not anemic
	$('#_partType106').addClass('helpful');
	$('#_commLine117').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	} else if (rbcIx < 3.9 && mcvIx < 72 && rdwIx >= 18){
	$('#_partType102').addClass('helpful');
	$('#_commLine100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_mxLine119').addClass('helpful');
	} else if (rbcIx < 3.9 && mcvIx > 92){
	$('#_partType103').addClass('helpful');
	$('#_commLine101').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_mxLine165').addClass('helpful');
	$('#_mxLine166').addClass('helpful');
	}else if (rbcIx > 5.5 && mcvIx < 72){
	$('#_partType104').addClass('helpful');
	$('#_commLine102').addClass('helpful');
	}else if (rbcIx > 5.5 && mcvIx >= 72 && mcvIx <= 92){
	$('#_partType105').addClass('helpful');
	}else if (rbcIx >=3.9 && rbcIx<=5.5 && mcvIx <= 92){
	$('#_partType100').addClass('helpful');
	$('#_mxLine100').addClass('helpful');
	$('#_dxOut100').addClass('helpful');
	}

	// Possible spherocytes
	if (mchcIx >= 34.5 && rdwIx > 17){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine108').addClass('helpful');
	$('#_mxLine109').addClass('helpful');
	$('#_commLine106').addClass('helpful');
	$('#_commLine107').addClass('helpful');
	$('#_commLine108').addClass('helpful');
	}
	
	// Possible anisocytosis
	if (rdwIx > 17){
	for (var i=100; i<106; i++){
		partTypes['partType'+i] = partTypes['partType'+i].replace(/(with )(.*?)(anisopoikilocytosis)/, 'with increased anisopoikilocytosis');
		}
	if (rdwIx < 20){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine110').addClass('helpful');
	$('#_mxLine114').addClass('helpful');
	$('#_mxLine122').addClass('helpful');
	$('#_mxLine112').addClass('helpful');
	}
	if (rdwIx >= 20){
	$('#_mxLine107').addClass('helpful');
	$('#_mxLine111').addClass('helpful');
	$('#_mxLine115').addClass('helpful');
	$('#_mxLine119').addClass('helpful');
	$('#_mxLine101').addClass('helpful');
	$('#_mxLine123').addClass('helpful');
	$('#_mxLine113').addClass('helpful');
	}
	}	

	// Platelet rules
	if (pltIx < 140 && pltIx >= 100){
	$('#_partType201').addClass('helpful');
	$('#_mxLine204').addClass('helpful');
	}else if (pltIx <100){
	$('#_partType202').addClass('helpful');
	$('#_partType205').addClass('helpful');
	$('#_mxLine204').addClass('helpful');
	$('#_commLine201').addClass('helpful');
	}else if (pltIx > 450 && pltIx < 600){
	$('#_partType203').addClass('helpful');
	$('#_mxLine203').addClass('helpful');
	}else if (pltIx >= 600){
	$('#_partType204').addClass('helpful');
	$('#_mxLine203').addClass('helpful');
	$('#_commLine202').addClass('helpful');
	}else {
	$('#_dxOut200').addClass('helpful');
	$('#_partType200').addClass('helpful');
	$('#_mxLine200').addClass('helpful');
	}

	
} // end baby rules block


// Hi Eos
    if (eosIx > 0.5 && eosIx < 1.5) {
        $('#_mxLine172').addClass('helpful');
        $('#commLine151').addClass('helpful');
    } else if (eosIx >= 1.5){
        $('#_partType161').addClass('helpful');
        $('#commLine151').addClass('helpful');
    }
});// end CBC blur events


// start click highlighting events
// RBC DX helpers
$('#partType100').on('change', function(){
$('#column1f .helpful').removeClass('helpful');
$('#_dxOut100').addClass('helpful');
});
$('#partType101').on('change', function(){
$('#column1f .helpful').removeClass('helpful');
$('#_dxOut101').addClass('helpful');
});
$('#partType102').on('change', function(){
$('#column1f .helpful').removeClass('helpful');
$('#_dxOut102, #_dxOut103').addClass('helpful');
});
$('#partType103').on('change', function(){
$('#column1f .helpful').removeClass('helpful');
$('#_dxOut104').addClass('helpful');
});
$('#partType104').on('change', function(){
$('#column1f .helpful').removeClass('helpful');
$('#_dxOut105').addClass('helpful');
});
$('#partType105').on('change', function(){
$('#column1f .helpful').removeClass('helpful');
$('#_commLine116').addClass('helpful');
$('#_dxOut106').addClass('helpful');
});
$('#partType106').on('change', function(){
$('#column1f .helpful').removeClass('helpful');
$('#_commLine117').addClass('helpful');
$('#_dxOut114').addClass('helpful');
});
$('#mxLine104').on('change', function(){ // few schistocytes
var pltIx = parseFloat($('#PLT').val(), 10);
$('#_dxOut109').addClass('helpful');
dxOuts.dxOut109 = dxOuts.dxOut109.replace(/with(.*)(?=schistocytes)/, 'with occasional ');
if (pltIx < 75){
$('#column3e .helpful').removeClass('helpful');
$('#_commLine203').addClass('helpful');} // highlight TTP comment
});
$('#mxLine105').on('change', function(){ // 3+ schistocytes
var pltIx = parseFloat($('#PLT').val(), 10);
$('#_dxOut109').addClass('helpful');
$('#_commLine114').addClass('helpful');
dxOuts.dxOut109 = dxOuts.dxOut109.replace(/with(.*)(?=schistocytes)/, 'with frequent ');
if (pltIx < 75){
$('#column3e .helpful').removeClass('helpful');
$('#_commLine203').addClass('helpful');} // highlight TTP comment
});
$('#mxLine112').on('change', function(){ // few targets
$('#_dxOut110').addClass('helpful');
dxOuts.dxOut110 = dxOuts.dxOut110.replace(/with(.*)(?=target)/, 'with occasional ');
});
$('#mxLine113').on('change', function(){ // 3+ targets
$('#_dxOut110').addClass('helpful');
var mcvIx = parseFloat($('#MCV').val(), 10);
if (mcvIx > 95){
$('#_commLine105').addClass('helpful');}
else {$('#_commLine112').addClass('helpful');}
dxOuts.dxOut110 = dxOuts.dxOut110.replace(/with(.*)(?=target)/, 'with frequent ');
});
$('#mxLine107').on('change', function(){ // few spherocytes
$('#_dxOut111').addClass('helpful');
dxOuts.dxOut111 = dxOuts.dxOut111.replace(/with(.*)(?=spherocytes)/, 'with occasional ');
});
$('#mxLine108').on('change', function(){ // 3+ spherocytes NO CLUMPS
$('#_dxOut111').addClass('helpful');
$('#_commLine106').addClass('helpful');
dxOuts.dxOut111 = dxOuts.dxOut111.replace(/with(.*)(?=spherocytes)/, 'with frequent ');
});
$('#mxLine109').on('change', function(){ // 3+ spherocytes & CLUMPS
$('#_dxOut111').addClass('helpful');
$('#_commLine107').addClass('helpful');
dxOuts.dxOut111 = dxOuts.dxOut111.replace(/with freuqent schistocytes/, 'with red cell clumps (agglutination)');
});
$('#mxLine114').on('change', function(){ // few oxidation
$('#_dxOut112').addClass('helpful');
$('#_commLine108').addClass('helpful');
dxOuts.dxOut112 = dxOuts.dxOut112.replace(/with(.*)(?=oxidative)/, 'with mild ');
});
$('#mxLine115').on('change', function(){ // 3+ oxidation
$('#_dxOut112').addClass('helpful');
$('#_commLine108').addClass('helpful');
dxOuts.dxOut112 = dxOuts.dxOut112.replace(/with(.*)(?=oxidative)/, 'with prominent ');
});
$('#mxLine122').on('change', function(){ // few TEARS
$('#_dxOut113').addClass('helpful');
dxOuts.dxOut113 = dxOuts.dxOut113.replace(/with(.*)(?=tear)/, 'with occasional ');
});
$('#mxLine123').on('change', function(){ // 3+ TEARS
$('#_dxOut113').addClass('helpful');
$('#_commLine104').addClass('helpful');
dxOuts.dxOut113 = dxOuts.dxOut113.replace(/with(.*)(?=tear)/, 'with frequent ');
});
$('#mxLine120').on('change', function(){ // mild rouleaux
$('#_dxOut107').addClass('helpful');
});
$('#mxLine121').on('change', function(){ // marked rouleaux
$('#_dxOut108').addClass('helpful');
$('#_commLine111').addClass('helpful');
});
$('#mxLine116, #mxLine117').on('change', function(){ // HBSS
var mcvIx = parseFloat($('#MCV').val());
if (mcvIx < 75){
$('#_commLine115').addClass('helpful');
$('#_dxOut102').addClass('helpful')
dxOuts.dxOut102 = dxOuts.dxOut102.replace(/anemia/, 'anemia with sickle cells (see comment)');
}
else {
$('#_dxOut100').addClass('helpful')
$('#_commLine109').addClass('helpful');
dxOuts.dxOut100 = dxOuts.dxOut100.replace(/cells/, 'cells with sickle cells (see comment)');
}
});
$('#mxLine118').on('change', function(){ // HBSC
$('#_commLine110').addClass('helpful');
$('#_dxOut100').addClass('helpful');
});

$('#mxLine125').on('change', function(){ // HBSC
	$('#_commLine113').toggleClass('helpful');
});
// CHANGE DX TO MATCH RED CELL INDICES
$('#partType102, #partType106').on('change', function(){
	if ($(this).is(':checked')){
		for (var i=100; i<114; i++){
			dxOuts['dxOut'+i] = dxOuts['dxOut'+i].replace(/Normochromic, normocytic /, 'Hypochromic, microcytic ');
			}
	}
});
$('#partType103').on('change', function(){
	if ($('#partType103').is(':checked')){
		for (var i=100; i<114; i++){
			dxOuts['dxOut'+i] = dxOuts['dxOut'+i].replace(/Normochromic, normocytic /, 'Normochromic, macrocytic ');
			}


	}
});

// END RBC DX HELPERS

// WBC HELPERS
$('#partType150, #partType151').on('change', function(){ // NORMAL WBC
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut150').addClass('helpful');
});
$('#partType152').on('change', function(){ // MILD DEC WBC
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut151').addClass('helpful');
});
$('#partType153').on('change', function(){ // MARKED DEC WBC
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut152').addClass('helpful');
});
$('#partType154').on('change', function(){ // DEC NEUT
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut155').addClass('helpful');
$('#_dxOut156').addClass('helpful');
});
$('#partType155').on('change', function(){ //  DEC LYM
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut160').addClass('helpful');
$('#_dxOut161').addClass('helpful');
});
$('#partType156').on('change', function(){ // INCR NEUT, NO ACT
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut157').addClass('helpful');
$('#_dxOut158').addClass('helpful');
});
$('#partType157').on('change', function(){ // INCR NEUT, YES ACT
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut159').addClass('helpful');
});
$('#partType160').on('change', function(){ // INCR WBCS
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut153').addClass('helpful');
$('#_dxOut154').addClass('helpful');
});
$('#partType161').on('change', function(){ // INCR EOS
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut165').addClass('helpful');
});
$('#partType164').on('change', function(){ // INCR WBCS WITH FEW BLASTS
$('#_mxLine169').addClass('helpful');
$('.hidden', '#column2f').show(); // open hidden div
$('#_dxOut173').addClass('helpful');
});
$('#partType165').on('change', function(){ // REL INCR NEUTS
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut157').addClass('helpful');
dxOuts.dxOut157 = dxOuts.dxOut157.replace(/absolute /, 'relative ');
});
$('#partType162').on('change', function(){ // REL INCR LYMPHS
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut175').addClass('helpful');
dxOuts.dxOut175 = dxOuts.dxOut175.replace(/reactive lymphocytes /, 'few reactive lymphocytes ');
});
$('#partType163').on('change', function(){ // REL INCR MONOS
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut164').addClass('helpful');
});
$('#mxLine151').on('change', function(){ // REACTIVE LGLS
var neutIx = parseFloat($('#NEUT').val(), 10);
var lymphIx = parseFloat($('#LYMPH').val(), 10);
$('#column2f .helpful').removeClass('helpful');
$('#_dxOut163').addClass('helpful');
if (lymphIx >= 5 && lymphIx > neutIx){// REACTIVE LYMPHOCYTOSIS
dxOuts.dxOut163 = dxOuts.dxOut163.replace(/few /, '');
} else {
dxOuts.dxOut163 = dxOuts.dxOut163.replace(/lymphocytosis /, 'lymphocytes ');
}
});
$('#mxLine152').on('change', function(){ // REACTIVE IMMUNOBLASTS
var neutIx = parseFloat($('#NEUT').val(), 10);
var lymphIx = parseFloat($('#LYMPH').val(), 10);
$('#column2f .helpful').removeClass('helpful');
if (lymphIx >= 5 && lymphIx > neutIx){// MANY REACTIVE
$('#_dxOut162').addClass('helpful');
dxOuts.dxOut162 = dxOuts.dxOut162.replace(/few /, '');
} else { // FEW REACTIVE
$('#_dxOut175').addClass('helpful');
dxOuts.dxOut175 = dxOuts.dxOut175.replace(/reactive /, 'some reactive ');
}
});

$('#mxLine151').on('change', function(){
commLines.commLine152 = commLines.commLine152.replace(/( viral)(.*?)(\. )/, ' viral infections, auto-immune diseases, or with certain medications.');
});
// END WBC HELPERS

// PLATELET HELPERS
$('#mxLine204').on('change', function(){ // no platelet clumps
dxOuts.dxOut202 = dxOuts.dxOut202.replace(/thrombocytopenia/, 'thrombocytopenia without spurious platelet clumps');
});
$('#partType200').on('change', function(){
$('#column3f .helpful').removeClass('helpful');
$('#_dxOut200').addClass('helpful')
});
$('#partType201').on('change', function(){
$('#column3f .helpful').removeClass('helpful');
$('#_dxOut201').addClass('helpful')
});
$('#partType202, #partType205').on('change', function(){
$('#column3f .helpful').removeClass('helpful');
$('#_dxOut202').addClass('helpful')
});
$('#partType203').on('change', function(){
$('#column3f .helpful').removeClass('helpful');
$('#_dxOut203').addClass('helpful')
});
$('#partType204').on('change', function(){
$('#column3f .helpful').removeClass('helpful');
$('#_dxOut204').addClass('helpful')
});
$('#partType205').on('change', function(){ // PLATELET CLUMPS ARE PRESENT
$('#_commLine200').addClass('helpful');
$('#_dxOut202').addClass('helpful');
$('#mxLine204').prop("disabled", true);
	$('#_mxLine204').removeClass('helpful');
	$('#_commLine201').removeClass('helpful');
	dxOuts.dxOut202 = dxOuts.dxOut202.replace(/Marked thrombocytopenia/, 'Spurious thrombocytopenia with frequent platelet clumps (see comment)');
});
$('#mxLine202').on('change', function(){ // DYSPLASTIC PLATLETS
$('#column3f .helpful').removeClass('helpful');
$('#_dxOut205').addClass('helpful')
var pltIx = parseFloat($('#PLT').val(), 10);
var old = dxOuts.dxOut205;
if (pltIx < 150){
dxOuts.dxOut205 = dxOuts.dxOut205.replace(/occasional/, 'thrombocytopenia with ');}
else {dxOuts.dxOut205 = old;}
});
$('#commLine201').on('change', function(){ // ITP MODIFIER ON DIAGNOSIS
dxOuts.dxOut202 = dxOuts.dxOut202.replace(/thrombocytopenia .*/, 'thrombocytopenia, suggestive of ITP (see comment)');
});
$('#commLine203').on('change', function(){ // TTP MODIFIER ON DIAGNOSIS
dxOuts.dxOut201 = dxOuts.dxOut201.replace(/thrombocytopenia .*/, 'thrombocytopenia, suggestive of TTP (see comment)');
dxOuts.dxOut202 = dxOuts.dxOut202.replace(/thrombocytopenia .*/, 'thrombocytopenia, suggestive of TTP (see comment)');
});

// END PLATELET HELPERS

// highlight clean up
//$('#column3b, #column3d, #column3e, #column3f').click(function(){
//$('#column3b, #column3d, #column3e, #column3f .helpful').removeClass('helpful');
//});

});