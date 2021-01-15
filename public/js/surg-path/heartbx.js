$(window).on('load', function() {

//*************************************************************//
//                        JSON                                 //
// *************************************************************/

var dxLines = {
    // Negative diagnostic lines
    // Negative for ACR
    dxLine001: "- Negative for cell mediated rejection (ISHLT 2004 Grade 0R)",
    // Negative histology for AMR
    dxLine010: "- Negative for histopathologic antibody-mediated rejection (ISHLT 2013 Grade pAMR0)",
    // Negative histology and IHC for AMR
    dxLine020: "- Negative for pathologic antibody-mediated rejection (ISHLT 2013 Grade pAMR0), evaluated in conjunction with negative C4d immunohistochemistry",
    //
    // ACR - mild
    dxLine100: "- Mild acute cell-mediated rejection (ISHLT 2004 grade 1R)",
    // ACR - moderate
    dxLine110: "- Moderate acute cell-mediated rejection (ISHLT 2004 grade 2R)",
    // ACR - severe
    dxLine120: "- Severe acute cell-mediated rejectjion (ISHLT 2004 grade 3R",
    // AMR - histology alone, negative IHC
    dxLine130: "- Histopathology antibody-mediated rejection (ISHLT 2013 grade pAMR1 (H+))\n- Negative for C4d and CD68 immunohistochemistry studies",
    // AMR - IHC alone
    dxLine140: "- Immunopathoogic antibody-mediated rejection (ISHLT 2013 grade pAMR1 (I+))",
    // AMR - Combined - grade 2
    dxLine141: "- Pathology antibody-mediated rejection (ISHLT2013 grade pAMR2)",
    // AMR - Combined - grade 3
    dxLine142: "- Severe pathology antibody-mediated rejection (ISHLT2013 grade pAMR3)",
    // AMR - IHC pattern multifocal/weak C4d
    dxLine150: "- Multifocal weak C4d immunohistochemistry",
    // AMR - IHC pattern multifocal/strong C4d
    dxLine151: "- Multifocal strong C4d immunohistochemistry",
    // AMR - IHC pattern diffuse/weak C4d
    dxLine152: "- Diffuse weak C4d immunohistochemistry",
    // AMR - IHC pattern diffuse/strong C4d
    dxLine153: "- Diffuse strong C4d immunohistochemistry",
    // AMR - IHC pattern multifocal/weak CD68
    dxLine155: "- Multifocal weak CD68 immunohistochemistry",
    // AMR - IHC pattern multifocal/strong CD68
    dxLine156: "- Multifocal strong CD68 immunohistochemistry",
    // AMR - IHC pattern diffuse/weak CD68
    dxLine157: "- Diffuse weak CD68 immunohistochemistry",
    // AMR - IHC pattern diffuse/strong CD68
    dxLine158: "- Diffuse strong CD68 immunohistochemistry",
    //
    //Quilty
    // No Quilty
    dxLine200: "- No Quilty lesions identified",
    // 1 Quilty
    dxLine201: "- One Quilty lesion identified",
    // 2 Quilty
    dxLine202: "- Two Quilty lesions identified",
    // 3 Quilty
    dxLine203: "- Three Quilty lesions identified",
    // 4+ Quilty
    dxLine204: "- Numerous Quilty lesions (>3) identified",
    //
    //Other histologic findings
    // No ischemia/infeciton
    dxLine220: "- No ischemia or features of infection identified",
    // No ischemia
    dxLine221: "- No ischemia identified",
    // No infeciton
    dxLine222: "- No features of infection identified",
    // Focal ischemia
    dxLine225: "- Focal ischemic changes characterized by stellate fibroplasia and myocyte loss",
    // Extensive ischemia
    dxLine226: "- Extensive ischemic changes characterized by stellate fibroplasia, bands of scar and myocyte loss",
    // Biopsy site changes
    dxLine230: "- Sampling of prior biopsy site",
    // Biopsy site changes - suggestive
    dxLine231: "- Features suggestive of sampling of prior biopsy site",
    // CMV infection - neg
    dxLine240: "- No CMV inclusions detected with immunohistochemistry",
    // CMV infection
    dxLine241: "- CMV inclusions detected with immunohistochemistry",
    // Fungus infection - neg
    dxLine245: "- No fungal organisms seen with special stains",
    // Fungus infection
    dxLine246: "- Fungal organisms seen with special stains",
    // PTLD - neg
    dxLine250: "- Polymorphous EBV-negative lymphoplasmacytic infiltrate",
    // PTLD - polymorphic
    dxLine251: "- Atypical polymorphic EBV-positive lymphoplasmacytic infiltrate, consitent with post-transplant lymphoproliferative disorder",
    // PTLD-monomorphic
    dxLine252: "- Atypical monomorphic large EBV-positive lymphoid infiltrate, consitent with post-transplant lymphoproliferative disorder",

    //end
    dxLine999: ""
}

var commLines = {
    // Comments
    // Case discussed with...
    commLine010: "\n\nThe case was discussed with Dr. ____ on _____ at ______.",
    // Reviewed by colleague
    commLine020: "\n\nThe biopsy was reviewed by Dr. ____ who concurs with the diagnosis rendered and verifies the slides reviewed correspond to the patient on the requisition.",
    // Prior biopsy review - same
    commLine100: "The current case is reviewed in conjunction with the prior biopsy (____) and shows similar findings. ",
    // Prior biopsy review - slighlty worse rejection
    commLine110: "The current case is reviewed in conjunction with the prior biopsy (____) and shows a slightly greater degree of rejection type inflammatory infiltrate. ",
    // Prior biopsy review - significantly worse
    commLine111: "The current case is reviewed in conjunction with the prior biopsy (____) and shows a markedly increased degree of rejection type inflammation with focal myocyte injury. ",
    // Prior biopsy review - slightly improved
    commLine112: "The current case is reviewed in conjunction with the prior biopsy (____) and shows a slightly improved degree of rejection type inflammation. ",
    // Prior biopsy review - significantly improved
    commLine113: "The current case is reviewed in conjunction with the prior biopsy (____) and shows a markedly improved degree of rejection type inflamamtion, in manner consistent with resolving/treated rejection. ",
    // Worrisome for PTLD
    commLine120: "There is a variably dense, polymorphous lymphoplasmacytic infiltrate that includes a subset of transformed large cells. In-situ hybridization shows no EBV-positivity and the significance of this finding is unclear. It may represent early / polymorphous pattern of PTLD or a non-specific inflammatory process. Correlation with serum quantitative EBV titers and clinical assessment for lymphadenopathy is recommended. ",
    // PTLD - polymoprhic
    commLine121: "There is a variably dense, polymorphous lymphoplasmacytic infiltrate that includes a subset of transformed large cells. In-situ hybridization shows EBV-positivity along the spectrum of the B-cell program. These changes are consistent with polymorphic EBV+ PTLD. Correlation with serum quantitative EBV titers and clinical assessment for lymphadenopathy is recommended. ",
    // PTLD - monomorphic
    commLine122: "There is a variably dense, monomorphic atypical lymphoid infiltrate that includes a majority of transformed large cells. In-situ hybridization shows EBV-positivity in the large cells and some smaller B-cells. These changes are consistent with monomorphic EBV+ PTLD. Correlation with serum quantitative EBV titers and clinical assessment for lymphadenopathy is recommended. ",



    //end
    commLine999: ""
}

//*************************************************************//
//                        Pop-ups                             //
// *************************************************************/

$("#box30").on("change", function(){
   if ($(this).val() != "Absent"){
       $(".lymph").show();
   } else {
       $(".lymph").hide();
   }
});

$("#box35").on("change", function(){
    if ($(this).val() != "Absent"){
        $(".plasma").show();
    } else {
        $(".plasma").hide();
    }
});

    $("#box40").on("change", function(){
        if ($(this).val() != "Absent"){
            $(".neut").show();
        } else {
            $(".neut").hide();
        }
    });

    $("#box45").on("change", function(){
        if ($(this).val() != "Absent"){
            $(".eos").show();
        } else {
            $(".eos").hide();
        }
    });

    $("#box50").on("change", function(){
        if ($(this).val() != "Absent"){
            $(".histio").show();
        } else {
            $(".histio").hide();
        }
    });

    $("#box55").on("change", function(){
        if ($(this).val() != "Absent"){
            $(".quilty").show();
        } else {
            $(".quilty").hide();
        }
    });

    $("#box60").on("change", function(){
        if ($(this).val() != "Absent"){
            $(".infection").show();
        } else {
            $(".infection").hide();
        }
    });

    $("#box66_1").on("change", function(){
        if ($(this).val() != "Not performed"){
            $(".c4d").show();
        } else {
            $(".c4d").hide();
        }
    });



//*************************************************************//
//                        IHC script - modified                //
// *************************************************************/
    let ihcObj = {};
    var finalIHC;
    var ihcout = "";
// IHC box script
    var autocomp_opt = {
        source: ["ACTH","Adenovirus","ALK-1","A1-AT","AFP","Amyloid-A","APP","B72.3","INI1","BCL2","BCL6","BER-Ep","Beta-catenin","Ber-EP4","BKVirus","BRAFV600E","C4d","CA125","Calcitonin","Calponin","Calretinin","C4d","CD1a","CD2","CD3","CD4","CD5","CD7","CD8","CD10","CD15","CD20","CD21","CD23","CD25","CD30","CD34","CD43","CD44","CD45","CD45RO","CD56","CD57","CD61","CD68","CD71","CD79a","CD99","CD117","CD123","CD138","CDX2","CEA-mono","CEA-poly","Chromogranin","CMV","ColIV","CyclinD1","CDK4","CK 34BE12","CK 8","CK 5/6","CK 7","CK AE1/3","CK Cam5.2","CK 17","CK 19","CK 20","CK MAK-6","D2-40","DOG-1","Desmin","E-cad","EBV-LMP","EBV-ISH","EMA","ER","FactorXIIIa","FSH","Galectin-3","Gastrin","GCDFP","GFAP","Glucagon","GLUT-1","Glut-Synth","GlycophorinA","Glypican-3","GH","H. Pylori","H3 K27M","HBME-1","HBcore","HBsurface","HCG","HepPar1","HER2/Neu(IHC)","HSVI&II","Actin,muscle","HHV-8","HMB45","HPV-HR(ISH)","HMB45","HPL","IDH-1","IgA","IgG","IgM","Inhibin","Insulin", "INI-1", "JCVirus","Kappa(IHC)","Lambda(IHC)","Kappa(ISH)","Lambda(ISH)","Ki-67(MIB1)","LH","Lysozyme","Mast-celltrypt","MelanA","MelanomaAA","Mammaglobin","MAP-2","MITF","MLH-1","MOC-31","MSH-2","MSH-6","MUM-1","MPO","Myogenin","Neu-N","NF","NSE","OCT-2","OCT3/4","Olig-2","p16","p40", "p504s","p53","p63","Parainfluenza","ParvoB19","PAX-5","PAX-8", "PD-1", "PDL-1", "PDGF-b","PE10","Perforin","pHH3","PLAP","PMS-2","PR","Prolactin","PTH","Prostatetriple","PSA","PSAP","RCC","RSV","S100","SALL4","SMA","SMMHC","Smoothelin","Somatostatin", "Sox-10", "Sox-11", "SurfactantA","SurfactantB","Synaptophysin","Tau","TdT","Thyroglobulin","Toxoplasma","Transthyretin","Trypsin","TSH","TTF-1","Tubulin","Tyrosinase","Ubiquitin","Uroplakin","Varicella","Villin","WT-1", "NKX2.1", "NKX3.3", "Histone H3K27M", "SALL4", "cMYC"],
        appendTo: '#IHCbox'
    };
    var autocomp_opt2 = {
        source: [
            "High background",
            "Retained nuclear expression",
            "Stains internal vessels",
            "Weak membranous",
            "Weak nuclear",
            "Weak, diffuse",
            "Strong, diffuse",
            "Strong membranous",
            "Strong nuclear",
            "Golgi pattern",
            "Membranous and golgi pattern",
            "Major subset",
            "Minor subset",
            "Highlights small T-cells",
            "Highlights small B-cells",
            "Highlights atypical cells",
            "Highlights large cells",
            "No support for carcinoma",
            "No support for rhabdomyosarcoma",
            "No support for melanoma",
            "No support for nerve sheath differentiation",
            "No support for B-cell lymphoma",
            "No support for T-cell lymphoma",
            "No support for classical Hodgkin lymphoma",
            "Subset of lymphocytes",
            "Subset of plasma cells",
            "Subset of epithelial cells",
            "Subset of tumor cells"
        ],
        appendTo: '#IHCbox'
    };

    // init jquery autocomplete with IHCs
    $(".search").autocomplete(autocomp_opt);
    $(".usercomm").autocomplete(autocomp_opt2);

    // ihc combine scripts
    // add new row
    $(".addrow").on('click', function(){
        var new_tr = $('<tr>'+
            '<td scope="row">'+
            '<input class="form-control form-control-sm search" type="text" >'+
            '</td>'+
            '<td>' +
            '<select class="form-control selectpicker form-control-sm ihc_val">'+
            '<option selected hidden>Value?</option><option value="POS">POS</option><option value="NEG">NEG</option><option value="EQUIV">EQUIVOCAL</option>'+
            '</select>'+
            '</td>'+
            '<td>' +
            '<input placeholder="Enter any Comments" class="form-control form-control-sm usercomm" type="text">'+
            '</td>'+
            '<td><button class="btn btn-outline-danger p-1 remrow" data-toggle="tooltip" data-placement="right" title="Delete row"><small>X</small></button></td>'+
            '</tr>');
        $('.search', new_tr).autocomplete(autocomp_opt); //attach autocomplete to dynamically created input
        $('.usercomm', new_tr).autocomplete(autocomp_opt2); //attach autocomplete to dynamically created user comment

        $("#ihctable").append(new_tr);
    });
    // remove added row
    $("#ihctable").on('click','.remrow',function(){
        $(this).parent().parent().remove();
    });

    $('#ihc_preset').on('change', function() {
        if($(this).val() != 'null') {
            $('#ihc_preset_change').text($(this).find(":selected").val());
            $('#selected_preset').show();
        } else {
            $('#ihc_preset_change').text('');
            $('#selected_preset').hide();
        }
    });

    $('#ihcwrite').on('click', function(){
        // get row values
        var ab = [];
        var val = [];
        var com = [];
        var ihc_head = {
            head1: "Immunohistochemistry is performed (with working controls) to further characterize the process. Stains are summarized as follows:\n" ,
            head2: "Immunohistochemistry is performed (with working controls) in conjunction with flow cytometry immunophenotyping. This is deemed necessary to better characterize the immunoarchitecture and infiltration pattern. Stains are summarized as follows:\n" ,
            head3: "Immunohistochemistry is performed (with working controls) in conjunction with flow cytometry immunophenotyping. This is deemed necessary to evaluate the extent of disease involvement and/or nuclear markers. Stains are summarized as follows:\n" ,
            head4: "Immunohistochemistry is performed (with working controls) in conjunction with flow cytometry immunophenotyping. This is deemed necessary as the flow cytometry sample yielded negative/non-contributory findings with respect to the process in question. Stains are summarized as follows:\n"
        };
        var count = 1;
        var interest = $('#celltype').val();
        var blk = $('#block_designation').val();
        var head = $('#ihc_header').val();
        var header = ihc_head[head];
        var body =  '\n  ANTIBODY'.padEnd(36, '.')+" VALUE\n";
        var interpFunc = function() {
            return $('#ihc_preset_change').val() + '  ' + $('#ihc_interp').val();
        };
        var interp = interpFunc();
        // array of antibodies
        $('.search').each(function(){
            var item = "  "+$(this).val()+" ".padEnd(36, '.')+ " ";
            ab.push(item);
        });

        // array of values
        $('.ihc_val').each(function(){
            var item = $(this).val();
            val.push(item);
        });

        // array of comments
        $('.usercomm').each(function(){
            com.push($(this).val());
        });

        for (var i=0; i<ab.length; i++){
            ihcout += ab[i] + val[i] + com[i]+'\n';
        }
        console.log(ihcout);
        finalIHC = ihcout + '\n\nINTERPRETATION: '+interp;
    });



//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
    $('#writeReport').on('click', function () {

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




        var captext = "Transplant Heart Biopsy - Rejection Synoptic\n(ISHLT 2004 ACR, ISHLT 2013 AMR)\n\n";

        captext += "Adequacy of Biopsy\n--------------------------------------\n";
        var box_1 = $("#box1").val();
        captext += "# of Biopsy Pieces: ".padEnd(36, " . ")  + box_1 + "\n";

        var box_2 = $("#box2").val();
        captext += "# with Adequate Myocardium: ".padEnd(36, " . ")  + box_2 + "\n";

        var box_3 = $("#box3").val();
        captext += "# Non-myocardial tissues: ".padEnd(36, " . ")  + box_3 + "\n";

        var box_5 = $("#box5").val();
        captext += "Adequacy: ".padEnd(36, " . ")  + box_5+ "\n";

        captext += "\n-------------------------------------\nEndomyocardial Assessment\n";

        var box_6 = $("#box6").val();
        captext += "Rejection type infiltrate present?: ".padEnd(36, " . ")  + box_6+ "\n";

        captext += "\nMyocytes:\n";
        var box_12 = $("#box12").val().rpad(36, 30);
        captext += "  Myocyte injury: ".padEnd(36, " . ")  + box_12+ "\n";

        var box_10 = $("#box10").val();
        captext += "  Ischemia: ".padEnd(36, " . ")  + box_10+ "\n";

        var box_11 = $("#box11").val().rpad(36, 30);
        captext += "  Nucleation: ".padEnd(36, " . ")  + box_11+ "\n";

        var box_13 = $("#box13").val();
        captext += "  Organization: ".padEnd(36, " . ")  + box_13+ "\n";

        var box_14 = $("#box14").val().rpad(36, 30) || '';
        if (box_14.length > 0){
            captext += "  Other changes: ".padEnd(36, " . ")  + box_14 + "\n";
        }

        captext += "\nCapillary vasculature:\n";
        var box_20 = $("#box20").val();
        captext += "  Endothelium: ".padEnd(36, " . ")  + box_20+ "\n";

        var box_21 = $("#box21").val().rpad(36, 30);
        captext += "  Luminal occlusion: ".padEnd(36, " . ")  + box_21+ "\n";

        var box_22 = $("#box22").val();
        if (box_22.length >0){
            captext += "  Other changes: ".padEnd(36, " . ")  + box_22 + "\n";
        }

        captext += "\nInterstitium changes:\n";
        var box_25 = $("#box25").val();
        captext += "  Cellularity: ".padEnd(36, " . ")  + box_25+ "\n";

        var box_26 = $("#box26").val();
        captext += "  Edema: ".padEnd(36, " . ")  + box_26+ "\n";

        var box_27 = $("#box27").val();
        captext += "  Fibrosis/Scar: ".padEnd(36, " . ")  + box_27+ "\n";

        var box_28 = $("#box28").val();
        if (box_28.length > 0){
            captext += "  Other changes: ".padEnd(36, " . ")  + box_28 + "\n";
        }

        captext += "\nInflammatory infiltrate:\n";

        var box_30 = $("#box30").val();
        captext += "  Lymphocytes: ".padEnd(36, " . ")  + box_30+ "\n";

        if (box_30 != 'Absent'){
            var box_31 = $("#box31").val();
            captext += "\tLocalization: ".padEnd(36, " . ")  + box_31.join(', ') + "\n";

            var box_32 = $("#box32").val();
            captext += "\tDensity: ".padEnd(36, " . ")  + box_32 + "\n";

            var box_33 = $("#box33").val();
            captext += "\tAtypia: ".padEnd(36, " . ")  + box_33+ "\n";
        }


        var box_35 = $("#box35").val();
        captext += "\n  Plasma cells: ".padEnd(37, " . ")  + box_35+ "\n";

        if (box_35 != 'Absent') {
            var box_36 = $("#box36").val();
            captext += "\tLocalization: ".padEnd(36, " . ") + box_36.join(', ') + "\n";

            var box_37 = $("#box37").val();
            captext += "\tDensity: ".padEnd(36, " . ") + box_37 + "\n";
        }

        var box_40 = $("#box40").val();
        captext += "\n  Neutrophils: ".padEnd(37, " . ")  + box_40+ "\n";

        if (box_40 != 'Absent') {
            var box_41 = $("#box41").val();
            captext += "\n\tLocalization: ".padEnd(36, " . ") + box_41.join(', ') + "\n";

            var box_42 = $("#box42").val();
            captext += "\tDensity: ".padEnd(36, " . ") + box_42 + "\n";
        }

        var box_45 = $("#box45").val();
        captext += "\n  Eosinophils: ".padEnd(37, " . ")  + box_45+ "\n";

        if (box_45 != 'Absent') {
            var box_46 = $("#box46").val();
            captext += "\tLocalization: ".padEnd(36, " . ") + box_46.join(', ') + "\n";

            var box_47 = $("#box47").val();
            captext += "\tDensity: ".padEnd(36, " . ") + box_47 + "\n";
        }

        var box_50 = $("#box50").val();
        captext += "\n  Histiocytes: ".padEnd(37, " . ")  + box_50+ "\n";

        if (box_50 != 'Absent') {
            var box_51 = $("#box51").val();
            captext += "\tLocalization: ".padEnd(36, " . ") + box_51.join(', ') + "\n";

            var box_52 = $("#box52").val();
            captext += "\tDensity: ".padEnd(36, " . ") + box_52 + "\n";
        }

        var box_60 = $("#box60").val();
        captext += "\nFeatures of infection: ".padEnd(37, " . ")  + box_60+ "\n";

        if (box_60 != "Absent"){
            var box_61 = $("#box61").val();
            captext += "  Infection finding: ".padEnd(36, " . ")  + box_61+ "\n";
        }

        var box_70 = $("#box70").val();

        if ($.inArray('None performed', box_70) < 0){
            captext += "\nSpecial stains: ".padEnd(37, ". ")  + box_70.join(', ') + "\n";
        }

        var box_55 = $("#box55").val();
        captext += "\n-------------------------------------\n";
        captext += "Quilty lesions: ".padEnd(36, " . ")  + box_55+ "\n";

        if (box_55 != "Absent"){
            var box_56 = $("#box56").val();
            captext += "  Number: ".padEnd(36, " . ")  + box_56+ "\n";

            var box_57 = $("#box57").val();
            captext += "  Pattern: ".padEnd(36, " . ")  + box_57+ "\n";

            var box_58 = $("#box58").val();
            captext += "  Vessels: ".padEnd(36, " . ")  + box_58+ "\n";
        }

        var box_65 = $("#box65").val();
        captext += "\n-------------------------------------\nAntibody-Mediated Rejection\n";
        captext += "  Histological AMR changes: ".padEnd(36, " . ")  + box_65+ "\n";


        var box_66_1 = $("#box66_1").val();
        if (box_66_1 != "Not performed"){
            captext += "\n  Immunohistochemistry (with appropriately working controls)\n-------------------------------------\n";

            var box_66 = $("#box66").val();
            captext += "  C4d IHC - distribution: ".padEnd(36, " . ")  + box_66+ "\n";

            var box_67 = $("#box67").val();
            captext += "  C4d IHC - intensity: ".padEnd(36, " . ")  + box_67+ "\n";

            var box_68 = $("#box68").val();
            captext += "  CD68 IHC - distribution: ".padEnd(36, " . ")  + box_68+ "\n";

            if (ihcout.length > 0){
                captext += finalIHC;
            }

        }


        $('#outPut-2').val(captext);

        // Final diagnoses
        var fdx = [];
        var cdx = [];
        $(".facr").find(".form-check-input:checkbox:checked").each(function(){
            var sel = dxLines[this.id];
            console.log("fdx sel: "+sel);
            fdx.push(sel);
        })

        $(".famr").find(".form-check-input:checkbox:checked").each(function(){
            var sel = dxLines[this.id];
            console.log("fdx sel: "+sel);
            fdx.push(sel);
        })
        $('#outPut-3').val("HEART, RIGHT VENTRICLE, TRANSPLANT BIOPSY:\n"+fdx.join("\n"));

        // Comments
        $(".fother").find(".form-check-input:checkbox:checked").each(function(){
            var sel = commLines[this.id];
            console.log("Comment sel: "+sel);
            cdx.push(sel);
        })
        console.log("Comments: ", cdx);

        $('#outPut-4').val(cdx.join(""));


        var textToPass = $('#outPut-2').val()+'\n\n'+$('#outPut-3').val()+'\n\n'+$('#outPut-4').val();
        $('#outPut-combine').val(textToPass);
        $('#combined-report').modal("show");
        dataObj.singleSection = $('#outPut-combine').val();
        makeCreatePdfBtn();
    });
});


