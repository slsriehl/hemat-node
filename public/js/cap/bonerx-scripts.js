$(window).on('load', function() {
//*************************************************************//
//                        Autocomplete                         //
// *************************************************************/

    // bone list
    $("input#box1").autocomplete({
        source: ['Skull,Nasal', 'Skull,Lacrimal', 'Skull,Inferior Nasal Concha', 'Skull,Maxiallary',  'Skull,Zygomatic',  'Skull,Temporal',  'Skull,Palatine',  'Skull,Parietal',  'Skull,Malleus',  'Skull,Incus',  'Skull,Stapes',  'Skull,Frontal',  'Skull,Ethmoid',  'Skull,Vomer',  'Skull,Sphenoid',  'Skull,Mandible',  'Skull,Occipital',  'Rib 1',  'Rib 2',  'Rib 3',  'Rib 4',  'Rib 5',  'Rib 6',  'Rib 7',  'Rib 8 ',  'Rib 9 ',  'Rib 10 ',  'Rib 11 ',  'Rib 12 ',  'Scapula',  'Clavicle',  'Humerus',  'Radius',  'Ulna',  'Scaphoid',  'Lunate',  'Traquetrum',  'Pisiform',  'Hamate',  'Capitate',  'Trapezoid',  'Trapezium',  'Metacarpal 1',  'Proximal Phalange 1',  'Distal Phalange 1',  'Metacarpal 2',  'Proximal Phalange 2',  'Middle Phalange 2',  'Distal Phalange 2',  'Metacarpal 3',  'Proximal Phalange 3',  'Middle Phalange 3',  'Distal Phalange 3',  'Metacarpal 4',  'Proximal Phalange 4',  'Middle Phalange 4',  'Distal Phalange 4',  'Metacarpal 5',  'Proximal Phalange 5',  'Middle Phalange 5',  'Distal Phalange 5',  'Hip (Ilium, Ischium, Pubis)',  'Femur',  'Patella',  'Tibia',  'Fibula',  'Talus',  'Calcaneus',  'Navicular',  'Medial Cuneiform',  'Middle Cuneiform',  'Lateral Cuneiform',  'Cuboid',  'Metacarpal 1',  'Proximal Phalange 1',  'Distal Phalange 1',  'Metacarpal 2',  'Proximal Phalange 2',  'Middle Phalange 2',  'Distal Phalange 2',  'Metacarpal 3',  'Proximal Phalange 3',  'Middle Phalange 3',  'Distal Phalange 3',  'Metacarpal 4',  'Proximal Phalange 4',  'Middle Phalange 4',  'Distal Phalange 4',  'Metacarpal 5',  'Proximal Phalange 5',  'Middle Phalange 5',  'Distal Phalange 5',  'Hyoid',  'Sternum',  'C1 Vertebra',  'C2 Vertebra',  'C3 Vertebra',  'C4 Vertebra',  'C5 Vertebra',  'C6 Vertebra',  'C7 Vertebra',  'T1 Vertebra',  'T2 Vertebra',  'T3 Vertebra',  'T4 Vertebra',  'T5 Vertebra',  'T6 Vertebra',  'T7 Vertebra',  'T8 Vertebra',  'T9 Vertebra',  'T10 Vertebra',  'T11 Vertebra',  'T12 Vertebra',  'L1 Vertebra',  'L2 Vertebra',  'L3 Vertebra',  'L4 Vertebra',  'L5 Vertebra',  'Sacrum',  'Coccyx']
    });
// WHO tumor list
    $("input#box5").autocomplete({
        source: ["Chondrosarcoma, Central, primary, and secondary", "Chondrosarcoma, Peripheral", "Chondrosarcoma, Dedifferentiated", "Chondrosarcoma, Mesenchymal", "Chondrosarcoma, Clear cell", "Osteosarcoma, Conventional", "Osteosarcoma, Chondroblastic", "Osteosarcoma, Fibroblastic", "Osteosarcoma, Osteoblastic", "Osteosarcoma, Telangiectatic", "Osteosarcoma, Small cell", "Osteosarcoma, Low grade central", "Osteosarcoma, Secondary", "Osteosarcoma, Parosteal", "Osteosarcoma, Periosteal", "Osteosarcoma, High grade surface", "Fibrosarcoma", "Malignant fibrous histiocytoma (undifferentiated pleomorphic sarcoma)", "Ewing sarcoma/PNET", "Plasma cell myeloma", "Malignant lymphoma, NOS", "Malignancy in giant cell tumor", "Chordoma", "Angiosarcoma", "Leiomyosarcoma", "Liposarcoma", "Adamantinoma", "Metastatic malignancy", "Sarcoma, NOS", "Malignant neoplasm"]
    });

    $(function() {
        var availableTags = ["ACTH","Adenovirus","ALK-1","A1-AT","AFP","Amyloid-A","APP","B72.3","INI1","BCL2","BCL6","BER-Ep","Beta-catenin","Ber-EP4","BKVirus","C4d","CA125","Calcitonin","Calponin","Calretinin","CD1a","CD2","CD3","CD4","CD5","CD7","CD8","CD10","CD15","CD20","CD21","CD23","CD25","CD30","CD34","CD43","CD44","CD45","CD45RO","CD56","CD57","CD61","CD68","CD71","CD79a","CD99","CD117","CD123","CD138","CDX2","CEA-mono","CEA-poly","Chromogranin","CMV","ColIV","CyclinD1","CDK4","CK34BE12","CK8","CK5/6","CK7","CKAE1/3","CKCam5.2","CK17","CK19","CK20","CKMAK-6","D2-40","DOG-1","Desmin","E-cad","EBV-LMP","EBV-ISH","EMA","ER","FactorXIIIa","FSH","Galectin-3","Gastrin","GCDFP","GFAP","Glucagon","GLUT-1","Glut-Synth","GlycophorinA","Glypican-3","GH","H.P.","HBME-1","HBcore","HBsurface","HCG","HepPar1","HER2/Neu(IHC)","HSVI&II","Actin,muscle","HHV-8","HMB45","HPV-HR(ISH)","HMB45","HPL","IDH-1","IgA","IgG","IgM","Inhibin","Insulin","JCVirus","Kappa(IHC)","Lambda(IHC)","Kappa(ISH)","Lambda(ISH)","Ki-67(MIB1)","LH","Lysozyme","Mast-celltrypt","MelanA","MelanomaAA","Mammaglobin","MAP-2","MITF","MLH-1","MOC-31","MSH-2","MSH-6","MUM-1","MPO","Myogenin","Neu-N","NF","NSE","OCT-2","OCT3/4","p16","p504s","p53","p63","Parainfluenza","ParvoB19","PAX-5","PAX-8","PDGF-b","PE10","Perforin","pHH3","PLAP","PMS-2","PR","Prolactin","PTH","Prostate triple stain","PSA","PSAP","RCC","RSV","S100","SALL4","SMA","SMMHC","Smoothelin","Somatostatin","SurfactantA","SurfactantB","Synaptophysin","Tau","TdT","Thyroglobulin","Toxoplasma","Transthyretin","Trypsin","TSH","TTF-1","Tubulin","Tyrosinase","Ubiquitin","Uroplakin","Varicella","Villin","WT-1"];

        function split( val ) {
            return val.split( /,\s*/ );
        }

        function extractLast( term ) {
            return split( term ).pop();
        }

        $("input#box11").autocomplete({
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

    $('#box21').change(function(){
        var sel = $('#box21').val();
        if (sel == 'Margins uninvolved by sarcoma') {
            $('#box21_1').show();
            $('#box21_2').show()}
        else {
            $('#box21_1').hide();
            $('#box21_2').hide();
        }
        if (sel == 'Margins involved by sarcoma') {
            $('#box21_3').show();}
        else {$('#box21_3').hide();}
    });


    $('#box13').change(function () {
        var sel = $('#box13').val();
        if (sel == 'pM1b') {
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


//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

        var captext = "CAP Bone Tumor Resection Cancer Summary\n\n";
// Checklist variables
        var box_0 = $("#box0").val();
        var box_1 = $("#box1").val();
        captext += "Specimen:\n- Side: "+box_0+"\n- Site: "+box_1+"\n";

        var box_2 = $("#box2").val();
        var box_2_2 = $("#box2_2").val();
        if (box_2 == 'Other:'){
            captext += "\nProcedure:\n- "+box_2_2+"\n";}
        else {captext += "\nProcedure:\n- "+box_2+"\n";}

        var box_3 = $("#box3").val();
        captext += "\nTumor Site:\n- "+box_3.join("\n- ")+"\n";
        var box_4 = $("#box4").val();
        captext += "\nGreatest dimension of main tumor mass (cm):\n- "+box_4+"\n";
        var box_5 = $("#box5").val();
        captext += "\nHistologic Type:\n- "+box_5+"\n";
        var box_6 = $("#box6").val();
        captext += "\n+ Mitotic Rate:\n- "+box_6+"/10 high-power fields\n";

        var box_7 = $("#box7").val();
        var box_7_2 = $("#box7_2").val();
        if (box_7 == 'Present'){
            captext += "\nNecrosis:\n- "+box_7+", "+box_7_2+"% necrosis\n";}
        else {
            captext += "\nNecrosis:\n- "+box_7+"\n";}

        var box_8 = $("#box8").val();
        captext += "\nHistologic Grade:\n- "+box_8+"\n";

        var box_21 = $("#box21").val();
        var box_21_1 = $("#box21_1").val();
        var box_21_2 = $("#box21_2").val();
        var box_21_3 = $("#box21_3").val();
        if (box_21 == 'Margins uninvolved by sarcoma') {
            captext += "\nMargins uninvolved by sarcoma:\n- Nearest margin: "+box_21_1+"\n- Distance to this margin: "+box_21_2.replace(/cm/,'')+"cm\n";}
        else if (box_21 == 'Margins involved by sarcoma'){
            captext += "\nMargins involved by sarcoma:\n- Margin involved: "+box_21_3+"\n";}
        else {captext += "\nMargins:\n- "+box_21+"\n";}

        var box_9 = $("#box9").val();
        captext += "\n+ Lymph-Vascular Invasion:\n- "+box_9+"\n";

        var box_10 = $("#box10").val();
        var box_11 = $("#box11").val();
        var box_12 = $("#box12").val();
        var box_13 = $("#box13").val();
        captext += '\nPathologic Staging (pTNM):\n- ';
        if (box_10 != "Not applicable"){
            captext += box_10.join("")+' ';}
        if (box_13 =='pM1b'){
            captext += box_11+" "+box_12+" "+box_13+'('+box_13_2+')'+"\n";}
        else {captext += box_11+" "+box_12+" "+box_13+"\n";}

        if ($("#box12_1").is(':checked')) {
            var box12_2 = $("#box12_2").val();
            var box12_3 = $("#box12_3").val();
            captext += "\nLymph nodes examined: "+box12_2+"\nLymph nodes involved: "+box12_3+"\n";
        }

        var box_14 = $("#box14").val();
        if (box_14 !== "") {
            captext += "\n+ Additional Pathologic Findings:\n- "+box_14+"\n";}
        var box_15 = $("#box15").val();
        if (box_15.length >0){
            captext += "\nImmunohistochemistry:\n- "+box_15+"\n";}
            else {
            captext += "\nImmunohistochemistry:\n- None performed\n";
        }

        var box_16 = $("#box16").val();
        if (box_16 != "Not performed") {
            if (box_16 == 'Translocation detected'){
                captext += "\nCytogenetics:\n- "+box_16+": "+box_16_2+"\n";}
            else {captext += "\nCytogenetics:\n- "+box_16+"\n";}

        }

        var box_17 = $("#box17").val();
        if (box_17 != '') {
            captext += "\nMolecular Pathology:\n- "+box_17+"\n";}
            else {captext += "\nMolecular Pathology:\n- Not performed\n"};

        var box_18 = $("#box18").val();
        if (box_18.length > 0) {
        captext += "\nRadiographic Findings:\n- "+box_18+"\n";}

        var box_19 = $("#box19").val();
        captext += "\nPreresection Treatment:\n- "+box_19.join("\n ")+"\n";

        var box_20 = $('#box20').val();
        var box_20_2 = $('#box20_2').val();
        if (box_20 == 'Present'){
            captext += "\nTreatment Effect:\n- "+box_20+", "+box_20_2+"% necrosis\n";}
        else {captext += "\nTreatment Effect:\n- "+box_20+"\n" ;}
// assign the values from each text input


        $('#outPut-1').val(captext);

				dataObj.singleSection = $('#outPut-1').val();
				makeCreatePdfBtn();

    });
});
