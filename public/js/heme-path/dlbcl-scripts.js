$(window).on('load', function(){
//*************************************************************//
//                        Pop-ups                              //
// *************************************************************/
        $('#box15').change(function(){
            var sel = $('#box15').val();
            if (sel == 'Other') {
                $('#box15_2').show();}
            else {
                $('#box15_2').hide();}
        });

    //DIAGNOSES
    $("input#box1").autocomplete({
        source: ["Follicular lymphoma, WHO Grade 3", "Duodenal-type follicular lymphoma", "Pediatric-type follicular lymphoma", "Large B-cell lymphoma with IRF4 rearrangement", "Diffuse large B-cell lymphoma (DLBCL), NOS", "T-cell/histiocyte-rich large B-cell lymphoma", "Primary Diffuse large B-cell lymphoma of the central nervous system (CNS)", "Primary cutaneous Diffuse large B-cell lymphoma, leg type", "EBV Diffuse large B-cell lymphoma, NOS", "EBV mucocutaneous ulcer", "Diffuse large B-cell lymphoma associated with chronic inflammation", "Lymphomatoid granulomatosis", "Primary mediastinal (thymic) large B-cell lymphoma", "Intravascular large B-cell lymphoma", "ALK large B-cell lymphoma", "Plasmablastic lymphoma", "Primary effusion lymphoma", "HHV8 Diffuse large B-cell lymphoma, NOS", "Burkitt lymphoma", "Burkitt-like lymphoma with 11q aberration", "High-grade B-cell lymphoma, with MYC and BCL2 and/or BCL6 rearrangements", "High-grade B-cell lymphoma, NOS", "Nodular lymphocyte predominant Hodgkin lymphoma", "Classical Hodgkin lymphoma", "Nodular sclerosis classical Hodgkin lymphoma", "Lymphocyte-rich classical Hodgkin lymphoma", "Mixed cellularity classical Hodgkin lymphoma", "Lymphocyte-depleted classical Hodgkin lymphoma", "Classical Hodgkin lymphoma PTLD"],
        appendTo: '#Leftpanel'
    });

    // BIOMARKER CHANGES
    $('.CHL').hide();
    $('#box1').focus();

    $('#box1').on('blur', function(){
        var sel = $(this).val();
        if (sel != 'Start typing'){
            if ((sel.toLowerCase().indexOf("b-cell") < 0) && (sel.toLowerCase().indexOf("burkitt") < 0)){ // not a NHL
                $('.CHL').show();
                $('.NHL').hide();
            }
            else {
                $('.NHL').show();
                $('.CHL').hide();
            }
        }

    });


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
            "MSH-2", "MSH-6", "MUM-1", "MPO", "MYC (IHC)", "Myogenin", "Neu-N", "NF", "NSE",
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



//************************************************************//
// Script to populate the template data in the output textarea//
// *************************************************************/
        $('#writeReport').on('click', function () {

            var captext = "HIGH GRADE LYMPHOMA SYNOPTIC DIAGNOSIS SUMMARY\n";
            var box_1 = $("#box1").val();
            captext += "\nHISTOLOGIC TYPE:\n- " + box_1 + "\n";

            var box_2 = $("#box2").val();
            captext += "\nFLOW IMMUNOPHENOTYPE:\n- " + box_2 + "\n";

// NHL biomarkers
            if ((box_1.toLowerCase().indexOf("b-cell") >= 0) || (box_1.toLowerCase().indexOf("burkitt") >= 0)) {
                captext += "\nRELEVANT BIOMARKER RESULTS:\nIMMUNOHISTOCHEMISTRY\n";

                var box_3 = $("#box3").val();
                captext += "- CD20: " + box_3 + "\n";

                var box_4 = $("#box4").val();
                captext += "- CD5: " + box_4 + "\n";

                var box_5 = $("#box5").val();
                captext += "- CD30: " + box_5 + "\n";

                var box_6 = $("#box6").val();
                captext += "- KI67: " + box_6.replace(/%/, '') + "%\n";

                var box_7 = $("#box7").val();
                captext += "- MYC: " + box_7 + "\n";

                var box_8 = $("#box8").val();
                captext += "- EBER: " + box_8 + "\n";

                var box_16 = $("#box16").val();
                captext += "- MUM1/IRF4: " + box_16 + "\n";

                var box_9 = $("#box9").val();
                captext += "\nGENETIC TESTING:\n- MYC rearrangement: " + box_9 + "\n";

                var box_10 = $("#box10").val();
                captext += "- BCL2 rearrangement: " + box_10 + "\n";

                var box_11 = $("#box11").val();
                captext += "- BCL6 rearrangement: " + box_11 + "\n";

                var box_12 = $("#box12").val();
                captext += "\nSUBTYPE CLASSIFICATION:\n- " + box_12 + "\n";
            }
// END NHL biomarkers

// CHL biomarkers
            if ((box_1.toLowerCase().indexOf("b-cell") < 0) && (box_1.toLowerCase().indexOf("burkitt") < 0)) {
                captext += "\nRELEVANT BIOMARKER RESULTS:\nIMMUNOHISTOCHEMISTRY\n";

                var box_20 = $("#box20").val();
                captext += "- CD20: " + box_20 + "\n";

                var box_21 = $("#box21").val();
                captext += "- CD30: " + box_21 + "\n";

                var box_22 = $("#box22").val();
                captext += "- EBER: " + box_22 + "\n";
            }
// END CHL biomarkers


            var box_13 = $("#box13").val();
            captext += "\nSPECIMEN:\n- " + box_13 + "\n";

            var box_14 = $("#box14").val();
            captext += "\nSITE:\n- " + box_14 + "\n";

            var box_15 = $("#box15").val();
            var box_15_2 = $("#box15_2").val();
            if (box_15 == 'Other') {
                captext += "\nPROCEDURE:\n- " + box_15_2 + "\n";
            }
            else {
                captext += "\nPROCEDURE:\n- " + box_15 + "\n";
            }
// assign the values from each text input


            $('#outPut-1').val(captext);
						dataObj.singleSection = $('#outPut-1').val();
						makeCreatePdfBtn();
        });
    });
