$(window).on('load', function(){
    partTypes = {
        partType100: 'PERIPHERAL BLOOD: The red cells are normal in number and are normochromic and normocytic with mild anisopoikilocytosis and polychromasia. ',
// NNA
        partType101: 'PERIPHERAL BLOOD: The red cells are decreased in number and are normochromic and normocytic with mild anisopoikilocytosis and increased polychromasia. ',
// HMA
        partType102: 'PERIPHERAL BLOOD: The red cells are decreased in number and are hypochromic and microcytic with increased anisopoikilocytosis and minimal polychromasia. ',
// N,MACRO,A
        partType103: 'PERIPHERAL BLOOD: The red cells are decreased in number and are normochromic and macrocytic with mild anisopoikilocytosis and polychromasia. ',
// THALASSEMIA
        partType104: 'PERIPHERAL BLOOD: The red cells are slightly increased in number and are hypochromic and microcytic with increased anisopoikilocytosis and increased polychromasia. ',
// ERYTHROCYTOSIS, N,N
        partType105: 'PERIPHERAL BLOOD: The red cells are increased in number and are normochromic and normocytic with mild anisopoikilocytosis and polychromasia. ',
// MICROCYTIC, NORMAL RBCS
        partType106: 'PERIPHERAL BLOOD: The red cells are normal in number and are hypochromic and microcytic with mild anisopoikilocytosis and polychromasia. ',
//
// NORMAL ADULT WBC
        partType150: 'Leukocytes are normal in number, consisting predominantly of segmented neutrophils with fewer numbers of lymphocytes and monocytes. ',
// NORMAL BABY WBC
        partType151: 'Leukocytes are normal in number, consisting predominantly of lymphocytes with fewer numbers of neutrophils and monocytes. ',
// SLIGHT DECREASE WBC
        partType152: 'Leukocytes are slightly decreased in number, consisting predominantly of segmented neutrophils with fewer numbers of lymphocytes and monocytes. ',
// DECREASED WBC
        partType153: 'Leukocytes are decreased in number, consisting of few neutrophils and lymphocytes, with fewer monocytes. ',
// ABS DEC NEUTROPHILS
        partType154: 'Leukocytes are normal in number, consisting predominantly of lymphocytes with fewer numbers of monocytes. Neutrophils are reduced in absolute terms and show normal morphology. ',
// ABS DEC LYMPH
        partType155: 'Leukocytes are normal in number, consisting predominantly of segmented neutrophils with fewer numbers of monocytes. Lymphocytes are reduced in absolute terms and show normal morphology. ',
// ABS INC NEUT, NO ACTIVATION
        partType156: 'Leukocytes are increased in number, consisting of an absolute increase in neutrophils, with fewer lymphocytes and monocytes. Neutrophils show no activation changes. ',
// ABS INC NEUT, WITH ACTIVATION
        partType157: 'Leukocytes are increased in number, consisting of an absolute increase in neutrophils, with fewer lymphocytes and monocytes. Neutrophils show activation changes characterized by toxic granulation and Dohle bodies. ',
// ABS INC NEUT, LEFT SHIFTED, ACTIVATED
        partType158: 'Leukocytes are increased in number, consisting of an absolute increase in neutrophils (including some left-shifted granulocytes), with fewer lymphocytes and monocytes. Segmented neutrophils show activation changes characterized by toxic granulation and Dohle bodies. ',
// ABS INC LYMPH
        partType159: 'Leukocytes are increased in number, consisting of an absolute increase in lymphocytes, with fewer neutrophils and monocytes. ',
// ABS INC WBCS
        partType160: 'Leukocytes are increased in number, consisting of a relative increase in granulocytes, lymphocytes and monocytes. Monocytes show a spectrum of maturity. ',
// INCREASED EOS
        partType161: 'Leukocytes are normal in number, consisting predominantly of segmented neutrophils with fewer numbers of lymphocytes and monocytes. There is a mild prominence of eosinophils that show normal morphology. ',
// REL INCREASE LYMPHS
        partType162: 'Leukocytes are normal in number, consisting of segmented neutrophils and a relative increase in lymphocytes. Fewer monocytes are present. ',
// REL INC MONOS
        partType163: 'Leukocytes are normal in number, consisting predominantly of segmented neutrophils and lymphocytes. There is a relative increase in monocytes, including some younger forms. ',
// Few BLASTS
        partType164: 'Leukocytes are normal in number, consisting of a heterogeneous population of neutrophils and lymphocytes, with fewer monocytes. Occasional circulating blasts are also present. ',
// Predominance of BLASTS
        partType165: 'Leukocytes are normal in number, consisting predominantly of blasts, with few neutrophils, lymphocytes and monocytes. ',
// REL INCREASE IN NEUTROPHILS
        partType166: 'Leukocytes are normal in number, consisting of a relative increase in segmented neutrophils with fewer lymphocytes and monocytes. ',
//
// NORMAL PLT
        partType200: 'Platelets are normal in number and morphology. ',
// MILD DEC PLT
        partType201: 'Platelets are decreased in number and normal in morphology. ',
// MARKED DEC PLT
        partType202: 'Platelets are markedly decreased in number and mostly normal in morphology. ',
// MILD INC PLT
        partType203: 'Platelets are slightly increased in number and normal in morphology. ',
// MARKED INC PLT
        partType204: 'Platelets are markedly increased in number and mostly normal in morphology. ',
// CLUMPS
        partType205: 'Frequent clumps of platelets are seen; however, platelets appear qualitatively adequate in number. ',
//
// 1 SIDE ASPIRATE
        partType248: '\n \nBONE MARROW, ASPIRATE AND TOUCH PREPARATION: ',
// 2 SIDES ASPIRATE, SAME
        partType249: '\n \nBONE MARROW, BILATERAL, ASPIRATE AND TOUCH PREPARATION: The right and left samples show similar findings and are described together. ',
// FEW PARTICLES
        partType250: 'The aspirate slides contain few ',
// ADEQUATE PARTICLES
        partType251: 'The aspirate slides contain adequate ',
// NUMEROUS PARTICLES
        partType252: 'The aspirate slides contain numerous ',
// CELLULAR ASPIRATE
        partType253: 'cellular marrow particles. ',
// PAUCICELLULAR ASPIRATE
        partType254: 'paucicellular marrow particles. ',
// HYPERCELLULAR ASPIRATE
        partType255: 'hypercellular marrow particles. ',
// ACELLULAR ASPIRATE
        partType256: 'acellular marrow particles. ',
// APARTICULATE/HEMODILUTE
        partType257: 'The aspirate smears contain no marrow particles and are hemodilute. ',
// APARTICULATE/TP FOR MICRO
        partType258: 'The aspirate smears contain no marrow particles and are hemodilute. The touch preparation slides are adequately cellular and form the basis for morphologic evaluation. ',
// NO PARTICLES
        partType259: 'The aspirate slides contain no marrow particles but show adequate sampling of marrow elements. ',
//
//BONE MARROW BIOPSIES
// 1 SIDE BM
        partType300: '\n\nBONE MARROW, BIOPSY AND CLOT SECTION: The bone marrow biopsy sections ',
// 2 SIDE BM, SAME
        partType301: '\n\nBONE MARROW, BILATERAL, BIOPSY AND CLOT SECTION: The right and left bone marrow biopsy sections are similar and are described together. They are ',
// 2 SIDE BM, NOT SAME
        partType302: '\n\nBONE MARROW, BILATERAL, BIOPSY AND CLOT SECTION: The bone marrow biopsies are dissimilar and are described individually. #LBX# #RBX#',
// CLOT SECTION ONLY
        partType303: '\n\nBONE MARROW, CLOT SECTION: The clot sections ',
// SUBOPTIMAL ASPIRATION BX
        partType304: 'show significant aspiration artifact, which limits estimation of the marrow cellularity. ',
// SMALL FRAGMENTED BX
        partType305: 'are small and fragmented, with limited preserved marrow areas which can be morphologically evaluated. ',
// MOSTLY CARTILAGE BX
        partType306: 'are largely comprised of hyaline cartilage, and only contain a small region marrow that can be morphologically evaluated. ',
// MOSTLY CORTEX BX
        partType307: 'are largely comprised of cortical bone, and only contain a small region marrow that can be morphologically evaluated. ',
// NORMOCELLULAR BX
        partType308: 'The marrow spaces are normocellular for age at ###',
// HYPERCELLULAR BX
        partType309: 'The marrow spaces are hypercellular for age at ###',
// HYPOCELLULAR BX
        partType310: 'The marrow spaces are hypocellular for age at ###',
// VARIABLY CELLULAR BX
        partType311: 'The marrow spaces are variably cellular, ranging from ',
// APARTICULATE CLOT HEADER
        partType312: '\n\nBONE MARROW, CLOT SECTION: The clot sections are aparticulate and consist entirely of blood. Only rare isolated marrow precursors are seen. No megakaryocytes are seen/ Rare megakaryocytes are seen. ',
// CLOT HEADER
        partType313: '\n\nBONE MARROW, CLOT SECTION: The clot sections contain #CLOTNUM# #CLOTCELL# marrow particles. ',

// ADEQUATE SAMPLE
        partType350: 'are adequate for morphologic evaluation. ',

// DISSIMILAR BILATERAL BIOPSIES
// Adequacy
        partType500:  '\n\nThe #SIDE# biopsy is adequate for morphologic evaluation. The marrow spaces are ',
        partType501:  '\n\nThe #SIDE# biopsy is suboptimal for morphologic evaluation due to extensive aspiration artifact. Where evaluable, the marrow spaces are ',
        partType502:  '\n\nThe #SIDE# biopsy is suboptimal for morphologic evaluation due to the small and fragmented nature of the sample. Where evaluable, the marrow spaces are ',
        partType503:  '\n\nThe #SIDE# biopsy is suboptimal for morphologic evaluation due to predominant sampling of cartilage. Where evaluable, the marrow spaces are ',
        partType504:  '\n\nThe #SIDE# biopsy is suboptimal for morphologic evaluation due to predominant sampling of cortical bone. Where evaluable, the marrow spaces are ',
// cellularity
        partType510:  'normocellular for age at ',
        partType511:  'hypercellular for age at ',
        partType512:  'hypocellular for age at ',
        partType513:  'markedly hypocellular at <5% and mostly consist of stromal cells and adipose. ',
// cellularity number
        partType518:  '%. ',
// myeloid number
        partType520:  'Myeloid precursors are adequate in number and show ',
        partType521:  'Myeloid precursors are relatively decreased in number and show ',
        partType522:  'Myeloid precursors are markedly decreased in number and show ',
        partType523:  'Myeloid precursors are relatively increased in number and show ',
// myeloid maturation
        partType530:  'full-spectrum maturation. ',
        partType531:  'left-shifted maturation. ',
        partType532:  'full-spectrum maturation with dysplasia, as characterized by cytoplasmic hypogranularity and abnormal nuclear segmentation. ',
// erythroid number
        partType540:  'Erythroid precursors are adequate in number and show ',
        partType541:  'Erythroid precursors are relatively decreased in number and show ',
        partType542:  'Erythroid precursors are markedly decreased in number and show ',
        partType543:  'Erythroid precursors are relatively increased in number and show ',
// erythroid maturation
        partType550:  'full-spectrum maturation. ',
        partType551:  'left-shifted maturation. ',
        partType552:  'left-shifted dyspoietic maturation, as characterized by megaloblastic changes and abnormal nuclear segmentation. ',
        partType553:  'dysplasia, as characterized by dyssynchronous maturation with nuclear blebs and increased mitoses. ',
// megakaryocytes
        partType560:  'Megakaryocytes are adequate in number and show normal morphology. ',
        partType561:  'Megakaryocytes are reduced in number and show normal morphology. ',
        partType562:  'Megakaryocytes are slightly increased in number and show normal morphology. ',
        partType563:  'Megakaryocytes are not present. ',
// blasts
        partType570:  'Blasts are not increased. ',
        partType571:  'There is a mild increase in myeloid progenitors. ',
        partType572:  'Blasts are increased and occupy the majority of the marrow spaces. ',
        partType573:  'There is a prominent population of abnormal promyelocytes which occupy the majority of the marrow spaces. ',
// infiltrates
        partType580:  'No focal lesions, lymphoid aggregates or metastatic tumor is seen. ',
        partType581:  'Plasma cells are increased and extensively infiltrate the marrow spaces. ',
        partType582:  'There is an abnormal lymphoid infiltrate present in the interstitial space and as paracortical aggregates. ',
        partType583:  'Metastatic carcinoma is present. ',
        partType584:  'Metastatic neuroblastoma is present. ',
        partType585:  'Metastatic tumor is present. ',
// free text
        partType590:  '',

// LAST ITEM
        partType999: ''
    };
    partTypes_old = $.extend(true, {}, partTypes);

    dxLines = {
        // intentionally empty
    };
    dxLines_old = $.extend(true, {}, dxLines);

    mxLines = {
// RBC MORPHS
        mxLine100: 'No increase in schistocytes or red cells with oxidative injury is seen. ',
// LER WITH TEARS
        mxLine101: 'Red cells show increased numbers of nucleated forms, as well as ovalocytes and tear drop forms. ',
// LER PREEMIE
        mxLine102: 'Red cells show increased numbers of nucleated forms, as well as ovalocytes and occasional spherocytes. ',
// NO SCHISTOCYTES
        mxLine103:'No increase in schistocytes is seen. ',
// 1-2 SCHISTOCYTES
        mxLine104: 'Red cells include a mild increase in schistocytes (1-2+). ',
// 3-4 SCHISTOCYTES
        mxLine105:'Red cells include a significant increase in schistocytes and other red cell fragments (3-4+). ',
// NO SPHERES
        mxLine106: 'No increase in spherocytes is seen. ',
// 1-2 SPHERES
        mxLine107: 'Red cells show occasional spherocyte forms. ',
// 3-4 SPHERES, NO CLUMPS
        mxLine108: 'Red cells include a significant increase in spherocytes without aggregates. ',
// 3-4 SPHERES WITH CLUMPS
        mxLine109: 'Red cells include a significant increase in spherocytes, including many in clumps. ',
// OCCASIONAL ELLIPTOCYTES
        mxLine110: 'Occasional elliptocytes are present. ',
// HE
        mxLine111: 'Red cells show frequent elliptocytes, ovalocytes and occasional irregularly shaped forms. ',
// 1-2 TARGETS
        mxLine112: 'Red cells show occasional target forms. ',
// 3-4 TARGETS
        mxLine113: 'Red cells show frequent target forms. ',
// 1-2 OXIDATIVE INJURY
        mxLine114: 'Red cells include occasional blister cells and cells with irregularly contracted hemoglobin. ',
// 3-4 OXIDATIVE INJURY
        mxLine115: 'Red cells include a significant number of blister cells and cells with irregularly contracted hemoglobin. ',
// FEW HbSS
        mxLine116: 'Red cells include occasional sickle cells. ',
// MANY HbSS
        mxLine117: 'Red cells include frequent sickle cells. ',
// HbSC
        mxLine118: 'Red cells include occasional sickle cells and cells with hemoglobin precipitate. There are frequent target cells as well. No increase in schistocytes is seen. ',
// FE DEFICIENCY CHANGES
        mxLine119: 'Red cells include frequent elliptocytes and ovalocytes, with occasional pencil cell morphology. Rare tear-drop forms are seen. ',
// MILD ROULEAUX 1-2+
        mxLine120: 'A mild degree of Rouleaux formation is present. ',
// MARKED ROULEAUX 3-4+
        mxLine121: 'A significant degree of Rouleaux formation is present. ',
// OCC TEAR DROPS
        mxLine122: 'Occasional tear-drop forms are seen. ',
// FREQUENT TEAR DROPS
        mxLine123: 'Frequent tear-drop forms are present. ',
// NRBCs
mxLine124: 'There are occasional nucleated red blood cells. ',

//
// NORMAL WBC MORPH
        mxLine150: 'No circulating blasts or dysplastic changes are seen. ',
// LGLS
        mxLine151: 'Lymphocytes include some large forms with sparse cytoplasmic granules (LGLS). ',
// IMMUNOBLASTS
        mxLine152: 'Lymphocytes include some immunoblast-like cells with abundant, basophilic cytoplasm and slightly enlarged nuclei. ',
// CMPD, ALL INCREASED
        mxLine153: 'There is a relative prominence of eosinophils and basophils. A few circulating blasts are seen; however, these are not significantly increased. No dysplastic changes are seen. ',
// CML, CHRONIC, WITH BASOS
        mxLine154: 'There is an absolute increase in basophils, and a relative prominence of eosinophils. A few circulating blasts are seen; however, these are not significantly increased. No dysplastic changes are seen. ',
// CLL
        mxLine155: 'The lymphocytes are atypical and are characterized by small size, coarse clumped chromatin and occasional smudge cells. No significant increase in prolymphocytes or large atypical lymphocytes is seen. ',
// ATYPICAL LYMPHOCYTOSIS
        mxLine156: 'The lymphocytes are atypical and are small in size and monotonous in appearance. Some show irregular nuclear outlines and others display small nucleoli. No significant increase large atypical lymphocytes is seen. ',
// AML, NO DYSPLASIA
        mxLine157: 'The blasts are characterized by medium size, scant amounts of cytoplasm containing granules and nuclei with smooth chromatin. These are enumerated at ___% of leukocytes. No dysplastic changes are seen in the few granulocytes. ',
// AML, WITH DYSPLASIA
        mxLine158: 'The blasts are characterized by large size, scant/moderate amounts cytoplasm containing granules and nuclei with smooth chromatin. These are enumerated at ___% of leukocytes. Some granulocytes are dysplastic and are characterized by hypogranular cytoplasm and nuclear segmentation abnormalities. ',
// AML, monocytic
        mxLine159: 'The blasts are characterized by large size, moderate amounts of pale cytoplasm and folded nuclei with smooth chromatin. These are enumerated at ___% of leukocytes. No dysplastic changes are seen in the few granulocytes. ',
// APL
        mxLine160: 'The blasts represent an abnormal population of promyelocytes with abundant cytoplasmic granularity and bilobed nuclei. Occasional blasts with Auer rods are seen. No dysplastic changes are seen in the few granulocytes. ',
// ALL
        mxLine161: 'The blasts are characterized by variable size, scant cytoplasm without granules and nuclei with smooth chromatin. These are enumerated at ___% of leukocytes. No dysplastic changes are seen in the few granulocytes. ',
// NO CIRCULATING PLASMA CELLS OR ROULEAUX
        mxLine162: 'No circulating plasma cells are seen. ',
// LEFT SHIFTED GRANS
        mxLine163: 'A few left shifted granulocytes are present. ',
// LEFT SHIFTED GRANS W FEW BLASTS
        mxLine164: 'A few left shifted granulocytes, and rare circulating blasts, are present. ',
// NO HYPERSEGMENTED NEUTROPHILS
        mxLine165: 'Neutrophils do not show nuclear hypersegmentation or other segmentation abnormalities. ',
// YES HYPERSEGMENTED NEUTROPHILS
        mxLine166: 'Some neutrophils are larger in size and show hypersegmented nuclei. ',
// GRANULOCYTIC DYSPLASIA
        mxLine167: 'Some neutrophils are dysplastic as evidenced by cytoplasmic hypogranularity and nuclear segmentation abnormalities. ',
// NO INCREASE IN BLASTS
        mxLine168: 'No increase in blasts is seen. ',
// NO DYSPLASIA
        mxLine169: 'No dysplastic changes are seen. ',
//
// ABSOLUTE NEUTROPENIA
        mxLine170: 'Neutrophils are reduced in absolute terms but show normal morphology. ',
// ABSOLUTE LYMPHOPENIA
        mxLine171: 'Lymphocytes are reduced in absolute terms but show normal morphology. ',
// RELATIVE INCREASE IN EOSINOPHILS
        mxLine172: 'There is a relative prominence in eosinophils, which show normal morphology. ',
// NORMAL PLT
        mxLine200: '',
// HYPOGRANULAR
        mxLine202: 'Some dysplastic platelets characterized by large, hypogranular forms are present. ',
// LARGE, WELL GRANULATED
        mxLine203: 'Some large, well granulated platelets are present. ',
// NO CLUMPS SEEN
        mxLine204: 'No platelet clumps are seen. ',
// ***************************
// ***** ASPIRATE MICROS *****
// NORMAL ASPIRATE
        mxLine249: 'Myeloid precursors appear adequate in number with full-spectrum maturation. Erythroid precursors appear adequate in number with full-spectrum maturation. Megakaryocytes are adequate in number and are normal in morphology. No dysplastic changes or increased numbers of blast cells is identified. No lymphoid infiltrates are identified. The direct smears and touch preparation slides show a similar cellular composition. ',
// NORMAL MATURATION
        mxLine250:'Myeloid precursors appear adequate in number with full spectrum maturation. Erythroid precursors appear adequate in number with full spectrum maturation. No dysplastic changes or increased numbers of blast cells is identified. ',
// MINIMAL PRECURSORS
        mxLine251:'There is a marked proportional reduction in maturing myeloid and erythroid precursors. ',
// NORMAL MYELOIDS
        mxLine252:'Myeloid precursors appear adequate in number with full spectrum maturation. ',
// RELATIVE DEC MYELOIDS
        mxLine253:'Myeloid precursors are relatively decreased in number and show full spectrum maturation. ',
// REL INC MYELOIDS
        mxLine254: 'Myeloid precursors are relatively increased in number and show full spectrum maturation. ',
// REL INC MYELOIDS WITH LEFT SHIFT
        mxLine255: 'Myeloid precursors are relatively increased in number and show left-shifted maturation. ',
// MYELOID DYSPLAISA
        mxLine256: 'Myeloid precursors show dysplastic changes characterized by cytoplasmic hypogranularity and abnormal nuclear lobation. ',
// RELATIVE DEC MYELOIDS W/ LEFT SHIFT
        mxLine257:'Myeloid precursors are relatively decreased in number and show left-shifted maturation. ',
// TYPICAL CML ASPIRATE
        mxLine258: 'Myeloid precursors are relatively increased in number and show full spectrum maturation. Some neutrophils show nuclear segmentation abnormalities and increased mitotic figures. Erythroid precursors are relatively decreased in number and show full spectrum maturation. Megakaryocytes are slightly increased in number and mostly normal in morphology. Eosinophils and basophils are prominent and include some with abnormal granularity. Blasts are not increased and no dysplastic changes are seen. No abnormal lymphoid infiltrates are identified. The direct smears and touch preparation slides show a similar cellular composition. ',
// LEFT SHIFTED MYELOIDS
        mxLine259: 'Myeloid precursors appear adequate in number with left-shifted maturation. ',
// NORMAL ERYTH
        mxLine260:'Erythroid precursors appear adequate in number with full spectrum maturation. ',
// REL DEC ERYTH
        mxLine261: 'Erythroid precursors are relatively decreased in number and show full spectrum maturation. ',
// REL INC ERYTH
        mxLine262: 'Erythroid precursors are relatively increased in number and show full spectrum maturation. ',
// REL INC ERYTH W LEFT SHIFT
        mxLine263: 'Erythroid precursors are relatively increased in number and show left-shifted maturation. ',
// MILD ERYTH DYSPOIESIS
        mxLine264: 'Erythroids show mild dyspoietic changes characterized by nuclear membrane irregularities, megaloblastic morphology and occasional mitotic figures. ',
// ERYTH DYSPLASIA
        mxLine265: 'Erythroid precursors show dysplastic changes characterized by excessive nuclear membrane irregularities, nuclear blebs, frequent mitotic figures and nuclear:cytoplasmic dyssynchrony. ',
// REL DEC ERYTH W LEFT SHIFT
        mxLine266: 'Erythroid precursors are relatively decreased in number and show left-shifted maturation. ',
// NORMAL MEGAS
        mxLine270: 'Megakaryocytes are normal in number and morphology. ',
// MILD INCR MEGAS
        mxLine271: 'Megakaryocytes are slightly increased in number and normal in morphology. ',
// INCR LARGE MEGAS
        mxLine272: 'Megakaryocytes are increased in number and include several large forms with hyperchromatic nuclei. ',
// RARE MEGA DYSPLASIA
        mxLine273: 'Rare dyspoietic megakaryocytes are seen and are characterized by hypolobation and maturation dyssynchrony. ',
// MEGA DYSPLASIA
        mxLine274: 'Megakaryocytes are normal in number and are dysplastic, as evidenced by hypolobated forms, forms with separate nuclear lobes and maturation dyssynchrony. ',
// FEW NORMAL MEGAS
        mxLine275: 'The few megakaryocytes present are normal in morphology. ',
// NO MEGAS
        mxLine276: 'No megakaryocytes are present to evaluate. ',
// NO BLASTS OR DYSPLASIA
        mxLine280: 'No dysplastic changes or increased numbers of blast cells is identified. ',
// FEW BLASTS, NO DYSPLASIA
        mxLine281: 'No dysplastic changes are seen. There is a mild increase in myeloid blasts. ',
// NORMAL LYMPHS.
        mxLine282: 'No lymphoid infiltrates are identified. ',
// DIRECT AND TOUCH RESEMBLE ASPIRATE
        mxLine283: 'The direct smears and touch preparation slides show a similar cellular composition. ',
// INCREASED HGONES
        mxLine291: 'There is a mild prominence of lymphocytes, including some that morphologically resemble hematogones. ',
// FEW PLASMA CELLS
        mxLine292: 'There is a mild increase in small, bland plasma cells. ',
// MILD INCREASE IN PLASMA CELLS
        mxLine293: 'Plasma cells are somewhat prominent, and are mostly small in size. ',
// REACTIVE PLASMACYTOSIS
        mxLine294: 'There are increased numbers of mostly small plasma cells; a few reactive binucleate forms are seen. ',
// CLONAL PLASMA CELLS
        mxLine295: 'Plasma cells are increased in number, including some in clusters. ',
// INCREASED LYMPHS
        mxLine296: 'Lymphocytes are somewhat prominent and are mostly small in size with round, mature nuclei. ',
// ATYPICAL SMALL LYMPHOCYTOSIS
        mxLine300: 'There is an abnormal lymphoid infiltrate characterized by small size, nuclear membrane irregularities and dense chromatin. ',
// ATYPICAL LARGE LYMPHOCYTOSIS
        mxLine301: 'There is an abnormal infiltrate of large, atypical lymphocytes characterized by large, irregular nuclei with occasional prominent nucleoli. ',
// CLL
        mxLine302: 'There is an abnormal lymphoid infiltrate characterized by small lymphocytes with coarse chromatin and scant cytoplasm. ',
// LYMPHOPLASMACYTIC
        mxLine303: 'There is an abnormal lymphoplasmacytic infiltrate characterized by small lymphocytes with variably abundant pale cytoplasm, irregular nuclear membranes and occasional perinuclear Hofs. ',
// AML, GENERIC
        mxLine304: 'There is an abnormal population of variably sized blasts characterized by high N:C ratios, sparsely granular cytoplasm and smooth chromatin. The blasts include some binucleated forms with prominent nucleoli. Rare blasts with Auer rods are present.  There is a proportional reduction in maturing myeloid and erythroid precursors, neither of which display dysplastic changes. Megakaryocytes are few and appear normal in morphology. Eosinophils are not prominent and do not exhibit abnormal morphology.  ',
// AMML, GENERIC
        mxLine305: 'There is an abnormal population of monocytoid blasts characterized by abundant pale cytoplasm, prominent nuclear membrane clefts/folds and smooth chromatin. There is a proportional reduction in maturing myeloid and erythroid precursors, neither of which display dysplastic changes. Megakaryocytes are few and appear normal in morphology. Eosinophils are not prominent and do not exhibit abnormal morphology.  ',
// APL
        mxLine306: 'There is an abnormal population of promyelocytic blasts characterized by prominent cytoplasmic granules, occasionally bilobed nuclei and rare Auer-rod like structures. There is a proportional reduction in maturing myeloid and erythroid precursors, neither of which display dysplastic changes. Megakaryocytes are few and appear normal in morphology. Eosinophils are not prominent and do not exhibit abnormal morphology. ',
// ALL, GENERIC
        mxLine307: 'There is an abnormal population of variably sized blasts characterized by scant, agranular cytoplasm, frequent nuclear clefts and smooth chromatin. There is a proportional reduction in maturing myeloid and erythroid precursors, neither of which display dysplastic changes. Megakaryocytes are few and appear normal in morphology. ',
// PROMINENT EOSINOPHILS
        mxLine308: 'Eosinophils are somewhat prominent and are normal in morphology. ',
// INCREASED HISTIOCYTES
        mxLine309: 'There are increased histiocytes, including rare cells showing erythrophagocytosis. ',
// CMML - aspirate
        mxLine310: 'Monocytes are increased and show a spectrum of maturity, including some promonocytes. Eosinophils are also somewhat prominent and show normal morphology.  ',
// METASTATIC TUMOR
        mxLine311: 'There are cohesive clusters of large, atypical cells consistent with metastatic tumor',
// NO HEMOPHAGOCYTIC HISIOTCYES
        mxLine312: 'No hemophagocytic histiocytes are present. ',
// OCCASIONAL HEMOPHAGOCYTIC HISTIOCYTES
        mxLine313: 'Occasional hemophagocytic histiocytes are present, and are characterized by abundant cytoplasm and intact intracytoplasmic leukocytes, nucleated red cells and/or platelets. ',
// ****ASPIRATE SPECIAL STAINS****
// IRON 0+
        mxLine315: 'Iron stains on the aspirate slides show no storage iron, 0+. ',
// IRON 1+
        mxLine316: 'Iron stains on the aspirate slides show trace storage iron, 1+. ',
// IRON 2+
        mxLine317: 'Iron stains on the aspirate slides show adequate storage iron, 2+. ',
// IRON 3+
        mxLine318: 'Iron stains on the aspirate slides show increased storage iron, 3+. ',
// IRON 4+
        mxLine319: 'Iron stains on the aspirate slides show markedly increased storage iron, 4+, with frequent hemosiderin-laden macrophages. ',
// CANNOT ASSESS STORAGE IRON
        mxLine320: 'Assessment for storage iron on the aspirate slides is precluded by a lack of marrow particles. ',
// NO RING SIDEROBLASTS
        mxLine321: 'No ring sideroblasts are seen. ',
// RARE RING SIDEROBLASTS
        mxLine322: 'Only rare ringed sideroblasts are seen, accounting for <5% of erythroid precursors. ',
// MANY RING SIDEROBLASTS
        mxLine323: 'Increased numbers of ring sideroblasts are seen, accounting for >15% of erythroid precursors. ',
// CANNOT ASSESS FOR RINGS
        mxLine324: 'Too few erythroid precursors are present to assess for ring sideroblasts. ',
// ***************************
// ***** BIOPSY MICROS *****
// BX NORMAL M&E MATURATION
        mxLine400: 'Myeloid precursors are adequate in number with full spectrum maturation. Erythroid precursors are adequate in number with full spectrum maturation. The M:E ratio is ~3:1. Megakaryocytes are adequate in number and normal in morphology. Blast cells are not significantly increased. No lymphoid aggregates or other focal lesions are identified. Trabecular bone is normal. The clot section contains numerous particles with a similar cellular composition. ',
// NORMAL M&E MATURATION
        mxLine401: 'Myeloid precursors appear adequate in number with full spectrum maturation. The erythroid precursors appear adequate in number with full spectrum maturation. The M:E ratio is 3:1. ',
// INJURED MARROW W/ FEW PRECURSORS
        mxLine402: 'The marrow spaces contain markedly reduced maturing myeloid and erythroid precursors. ',
// NORMAL MYELOID
        mxLine403: 'Myeloid precursors appear adequate in number with full spectrum maturation. ',
// RELATIVE DEC MYELOIDS
        mxLine404: 'Myeloid precursors are decreased in number with full spectrum maturation.  ',
// RELATIVE INC MYELOIDS
        mxLine405: 'Myeloid precursors are increased in number with full spectrum maturation. ',
// INC MYELOIDS LEFT SHIFT
        mxLine406: 'Myeloid precursors are increased in number with left-shifted maturation. ',
// RELATIVE DEC MYELOIDS W LEFT SHIFT
        mxLine407: 'Myeloid precursors are decreased in number with left-shifted maturation.  ',
// TYPICAL CML
        mxLine408: 'Myeloid precursors are increased in number with full spectrum maturation. Erythroid precursors are decreased in number with full spectrum maturation. The M:E ratio is ~5-10:1. Megakaryocytes are slightly increased in number and mostly normal in morphology; few larger forms are seen. There is a prominence of eosinophils which show normal morphology. Blast cells are not significantly increased. No lymphoid aggregates or other focal lesions are identified. Trabecular bone is normal. The clot section contains numerous particles with a similar cellular composition. ',
// NORMAL ERYTHROID
        mxLine410: 'Erythroid precursors are normal in number with full spectrum maturation. ',
// DEC ERYTHROIDS
        mxLine411: 'Erythroid precursors are decreased in number with full spectrum maturation. ',
// INC ERYTHROIDS
        mxLine412: 'Erythroid precursors are increased in number with full spectrum maturation. ',
// INC ERYTHROIDS LEFT SHIFT
        mxLine413: 'Erythroid precursors are increased in number with left-shifted maturation. ',
// NORMAL MEGAS
        mxLine414: 'Megakaryocytes are normal in number and normal in morphology. ',
// MILD INC MEGAS
        mxLine415: 'Megakaryocytes are mildly increased and normal in morphology. ',
// INCREASED MEGAS
        mxLine416: 'Megakaryocytes are increased in number and normal in morphology. ',
// INCR MEGAS WITH CLUSTERS
        mxLine417: 'Megakaryocytes are increased in number, including some in clusters. Some atypical megakaryocytes with hypo- and hyper- nuclear lobation are seen. ',
// MEGA DYSPLASIA
        mxLine418: 'Megakaryocytes are normal in number and include some dysplastic forms characterized by small size, hypolobated nuclei and dyssynchronous maturation. ',
// CLOT = MARROW
        mxLine419: 'The clot sections contain several particles with a similar cellular composition. ',
// CLOT NO PARTICLES
        mxLine420: 'The clot sections contain no marrow particles and are comprised of blood. ',
// NORMAL TRABECULAR BONE
        mxLine421: 'Trabecular bone is normal. ',
// OSTEOPENIC TRABECULAR BONE
        mxLine422: 'Trabecular bone shows variable osteopenia. ',
// DEC ERYTHROIDS
        mxLine423: 'Erythroid precursors are decreased in number with left-shifted maturation. ',
// M:E RATIO
        mxLine424: 'The M:E is __:__. ',
// NO FOCAL LESIONS
        mxLine425: 'No lymphoid aggregates or other focal lesions are seen. ',
// NPT LYMPH AGGREGATE
        mxLine427: 'A non-paratrabecular lymphoid aggregate is seen, and is comprised of small round lymphocytes. ',
// MANY NPT LYMPH AGS
        mxLine428: 'Scattered non-paratrabecular lymphoid aggregates are see, and are comprised of small round lymphocytes. ',
// PT LYMPH AGS
        mxLine429: 'A paratrabecular lymphoid aggregate is present and is comprised of small lymphocytes. ',
// MANY PT LYMPH AGS
        mxLine430: 'Several paratrabecular lymphoid aggregates are present and are comprised of small lymphocytes. These account for __% of the marrow cellularity. ',
// INCR EOS
        mxLine431: 'Eosinophils are increased in number. ',
// INCR HISTIOCYTES
        mxLine432: 'Histiocytes are somewhat prominent and include some hemosiderin-laden forms. ',
// NO HLH
        mxLine433: 'There is no conspicuous increase in hemophagocytic histiocytes. ',
// YES HLH
        mxLine434: 'Histiocytes are somewhat prominent and show conspicuous interstitial and sinusoidal distribution, with a subset showing hemophagocytosis. ',
// NORMAL LYMPHS
        mxLine435: 'There is no increase in interstitial lymphocytes. ',
// INCR INTERSTITIAL LYMPHS
        mxLine436: 'There is a mild prominence of interstitial lymphocytes which are predominantly small in size. ',
// FEW PLASMA CELLS
        mxLine437: 'There is a mild prominence of small plasma cells. ',
// REACTIVE PLASMACYTOSIS
        mxLine438: 'Plasma cells are increased and are small in size and mostly distributed in a perivascular pattern. ',
// clot with few particles
        mxLine439: 'The clot sections contain only few cellular marrow particles and are mostly comprised of blood. ',
// FEW MEGAS
        mxLine446: 'Only rare megakaryocytes are seen, which appear normal in morphology. ',
// NO INCR BLASTS
        mxLine447: 'There is no conspicuous increase in blasts. ',
// NO ABNORMAL INFILTRATES
        mxLine448: 'No abnormal infiltrates is seen. ',
// ATYPICAL SMALL LYMPHS
        mxLine450: 'Lymphocytes are increased and are morphologically atypical, as evidenced by irregular nuclear outlines and coarse chromatin. ',
// ATYPICAL LARGE LYMPHS
        mxLine451: 'There is an infiltrate of large, atypical lymphocytes characterized by irregular nuclear membranes and occasional nucleoli. This atypical infiltrate accounts for __% of the marrow cellularity. ',
// FOCAL HODGKIN
        mxLine452: 'There is an atypical focal lesion characterized by few large atypical lymphocytes with prominent nucleoli which are associated with eosinophils and small lymphocytes. ',
// MULTIFOCAL HODGKIN
        mxLine453: 'There are several atypical nodular lesions containing few large atypical lymphocytes with prominent nucleoli, occasional binucleation and clear cytoplasm. These account for __% of the marrow cellularity. ',
// CLL
        mxLine454: 'There is a prominent atypical lymphoid infiltrate comprised predominantly of small, angulated lymphocytes with coarse chromatin. This infiltrate accounts for __% of the marrow cellularity. ',
// CLONAL LYMPHOPLASMACYTIC
        mxLine455: 'There is an atypical lymphoid infiltrate comprised of a mixture of small lymphocytes and plasmacytoid lymphocytes, which account for __% of the marrow cellularity. ',
// CLONAL PLASMA CELLS
        mxLine456: 'There is an abnormal plasma cell infiltrate characterized by small-to-medium sized cells arranged singly and in small clusters. ',
// SHEETS OF PLASMA CELLS
        mxLine457: 'Plasma cells are markedly increased and are arranged in large clusters and sheets, which account for most of the marrow cellularity. Frequent binucleate and occasional large forms are seen. ',
// LARGE CELL LYMPHOMA
        mxLine458: 'The marrow is largely replaced by an atypical large-cell lymphoid infiltrate characterized by moderate amounts of pale cytoplasm, prominent nucleoli and nuclear membrane irregularities. ',
// AML, GENERIC
        mxLine459: 'The marrow cellularity is largely replaced by sheets of immature, medium-sized blasts, characterized by scant cytoplasm and enlarged nuclei. Residual maturing myeloid and erythroid precursors are very few and are isolated. The rare megakaryocytes appear normal in morphology. Eosinophils are not prominent and do not exhibit abnormal morphology.',
// AML, MONOCYTIC
        mxLine460: 'The marrow cellularity is largely replaced by sheets of immature monocytoid blasts, characterized by moderate clear cytoplasm and nuclear membrane irregularities. Residual maturing myeloid and erythroid precursors are very few and are isolated. The rare megakaryocytes appear normal in morphology. Eosinophils are not prominent and do not exhibit abnormal morphology. ',
// APL
        mxLine461: 'The marrow cellularity is largely replaced by sheets of abnormal promyelocytes/promyeloblasts, characterized by abundant, granular cytoplasm and bilobed nuclear outlines. Residual maturing myeloid and erythroid precursors are very few and are isolated. The rare megakaryocytes appear normal in morphology. Eosinophils are not prominent and do not exhibit abnormal morphology. ',
// ALL
        mxLine462: 'The marrow cellularity is largely replaced by sheets of immature blasts, characterized by variable size, scant cytoplasm and irregular nuclear outlines. Residual maturing myeloid and erythroid precursors are very few and are isolated. The rare megakaryocytes appear normal in morphology. ',
// MET CARCINOMA
        mxLine463: 'The marrow shows [multifocal] [diffuse] involvement by metastatic carcinoma. The tumor infiltrate accounts for __% of the marrow space. ',
// MET NB, UNILATERAL
        mxLine464: 'There are scattered metastatic tumor clusters comprised of cohesive embryonal tumor cells. The metastatic tumor accounts for __% of the marrow space. ',
// MET NB, BILATERAL
        mxLine465: 'The \'right\' and \'left\' biopsies show scattered metastatic tumor clusters, comprised of cohesive embryonal tumor cells. The tumor accounts for __% of the \'right\' marrow and __% of the \'left\' marrow. ',
// CMML
        mxLine466: 'There is a mild increase in monocytes cells (including some resembling plasmacytoid dendritic cells), as well as eosinophils. ',
// NO MEGAS
        mxLine467: 'No megakaryocytes are present to evaluate. ',
// NO IRON BX AND CLOT
        mxLine500: 'Iron stains on the biopsy and clot sections show no storage iron, 0+. ',
// MIN IRON BX AND CLOT
        mxLine501: 'Iron stains on the biopsy and clot sections show minimal storage iron, 1+. ',
// ADEQUATE IRON BX AND CLOT
        mxLine502: 'Iron stains on the biopsy and clot sections show adequate storage iron, 2+. ',
// INCR IRON BX AND CLOT
        mxLine503: 'Iron stains on the biopsy and clot sections show increased storage iron, 3-4+. ',
// INCR IRON BX AND CLOT 4+
        mxLine504: 'Iron stains on the biopsy and clot sections show increased storage iron, 4+, including many hemosiderin-laden histiocytes. ',
// NO IRON CLOT ONLY
        mxLine505: 'Iron stains on the clot sections no storage iron, 0+. ',
// MIN IRON CLOT ONLY
        mxLine506: 'Iron stains on the clot sections show minimal storage iron, 1+. ',
// ADEQUATE IRON CLOT ONLY
        mxLine507: 'Iron stains on the clot sections show adequate storage iron, 2+. ',
// INCR IRON CLOT ONLY
        mxLine508: 'Iron stains on the clot sections show increased storage iron, 3+. ',
// INCR IRON CLOT ONLY
        mxLine509: 'Iron stains on the clot sections show increased storage iron, 4+, including many hemosiderin-laden histiocytes. ',
// RETIC FIBROSIS, 0+
        mxLine515: 'A reticulin stain shows no undue marrow fibrosis, MF0. ',
// RETIC FIBROSIS, 1+
        mxLine516: 'A reticulin stain shows minimally increased marrow fibrosis, MF1. ',
// RETIC FIBROSIS, 2+
        mxLine517: 'A reticulin stain shows increased marrow fibrosis, MF2, including crossing fibers and focal dilated sinusoids. ',
// RETIC FIBROSIS, 3+
        mxLine518: 'A reticulin stain shows moderately increased marrow fibrosis, MF3, including many crossing fibers and dilated sinusoids. ',
// RETIC FIBROSIS, 4+
        mxLine519: 'A reticulin stain shows markedly increased marrow fibrosis, MF4, including dilated sinusoids and dense collagen. ',
// GRANULOMAS
        mxLine520: 'A few non-caseating granulomas are present. GMS and AFB stains show no microorganisms. ',
// NO GRANULOMAS
        mxLine521: 'No granulomas are present. ',
// FEW GRANULOMAS
        mxLine522: 'A few non-necrotizing granulomas are present. #STAINS# ',
// FEW NECROTIZING GRANULOMAS
        mxLine523: 'A few necrotizing granulomas are present. #STAINS# ',
// FEW EPITHELIOID GRANULOMAS
        mxLine524: 'A few epithelioid granulomas are present. #STAINS# ',
// FEW RING GRANULOMAS
        mxLine525: 'A few ring granulomas are present. #STAINS# ',
// LAST ITEM
        mxLine999: ''
//DON'T ADD COMMA TO LAST ITEM ABOVE
    };
    mxLines_old = $.extend(true, {}, mxLines);

// final diagnostic diagnoses
    dxOuts = {
// rbc options
        dxOut0:'PERIPHERAL BLOOD:\n',
// normal rbcs
        dxOut100:'PERIPHERAL BLOOD:\n- Normochromic, normocytic red cells \n',
// nna
        dxOut101:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia \n',
// hma
        dxOut102:'PERIPHERAL BLOOD:\n- Hypochromic, microcytic anemia \n',
// hma with increased aniso
        dxOut103:'PERIPHERAL BLOOD:\n- Hypochromic, microcytic anemia with increased anisocytosis \n',
// n macro anemia
        dxOut104:'PERIPHERAL BLOOD:\n- Normochromic, macrocytic anemia \n',
// hm erythrocytosis w incr aniso
        dxOut105:'PERIPHERAL BLOOD:\n- Hypochromic, microcytic erythrocytosis with increased anisocytosis \n',
// nn erythrocytosis
        dxOut106:'PERIPHERAL BLOOD:\n- Normochromic, normocytic erythrocytosis \n',
// nna mild rouleaux
        dxOut107:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia with mild rouleaux \n',
// nna + rouleaux
        dxOut108:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia with significant rouleaux \n',
// nna + schistocytes
        dxOut109:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia with frequent schistocytes \n',
// nna + targets
        dxOut110:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia with frequent target cells \n',
// nna + spherocytes
        dxOut111:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia with frequent spherocytes \n',
// nna + oxidation
        dxOut112:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia with prominent oxidative injury \n',
// nna + teardrops
        dxOut113:'PERIPHERAL BLOOD:\n- Normochromic, normocytic anemia with prominent tear drop forms \n',
// hypo micro not anemia
        dxOut114:'PERIPHERAL BLOOD:\n- Hypochromic, microcytic red cells \n',

// **************************************  wbc options **********************************************
// nsa leukocytes
        dxOut150:'- No significant abnormalities of leukocytes \n',
// mild leukopenia only
        dxOut151:'- Mild leukopenia without morphologic abnormalities \n',
// marked leukopenia
        dxOut152:'- Marked leukopenia without morphologic abnormalities \n',
// mild leukocytosis
        dxOut153:'- Mild leukocytosis without morphologic abnormalities \n',
// marked leukocytosis
        dxOut154:'- Leukocytosis without morphologic abnormalities \n',
// mild neutropenia
        dxOut155:'- Mild absolute neutropenia without morphologic abnormalities \n',
// marked neutropenia
        dxOut156:'- Absolute neutropenia without morphologic abnormalities \n',
// mild neutrophilia no activation
        dxOut157:'- Mild absolute neutrophilia without activation changes \n',
// marked neutrophilia no activation
        dxOut158:'- Absolute neutrophilia without activation changes \n',
// marked neutrophilia with activation
        dxOut159:'- Absolute neutrophilia with activation changes \n',
// mild lymphopenia only
        dxOut160:'- Mild absolute lymphopenia without morphologic abnormalities \n',
// marked lymphopenia
        dxOut161:'- Absolute lymphopenia without morphologic abnormalities \n',
// mild lymphocytosis with few reactive forms
        dxOut162:'- Mild lymphocytosis with few reactive forms \n',
// reactive lymphocytosis w lgls
        dxOut163:'- Reactive lymphocytosis with few large granular lymphocytes \n',
// mild increase in monocytes
        dxOut164:'- Mild prominence of monocytes \n',
// mild prominence of eos
        dxOut165:'- Mild prominence of eosinophils \n',
// cmpd
        dxOut166:'- Leukocytosis with left-shifted granulocytes, rare blasts, and prominent eosinophils \n',
// aml
        dxOut167:'- Increased circulating blasts, consistent with acute myeloid leukemia \n',
// apl
        dxOut168:'- Increased circulating abnormal promyelocytes, consistent with acute promyelocytic leukemia \n',
// all
        dxOut169:'- Increased circulating lymphoblasts, consistent with acute lymphoblastic leukemia  \n',
// cll
        dxOut170:'- Atypical lymphocytosis, consistent with chronic lymphocytic leukemia  \n',
// small lymphoma
        dxOut171:'- Atypical lymphocytosis, consistent with low-grade lymphoproliferative disorder  \n',
// neutrophil dysplasia
        dxOut172:'- Dysplastic neutrophils with hypogranular cytoplasm and nuclear lobation abnormalities  \n',
// generic blasts
        dxOut173: '- Occasional circulating blasts present  \n',
// low grade mds
        dxOut174: '- Granulocyte dysplasia and rare circulating blasts (see comment) \n',
// some reactive lymphocytes
        dxOut175: '- Reactive lymphocytes \n',
// ************************************ platelet options ******************************************//
// nsa platelets
        dxOut200:'- No significant abnormalities of platelets \n',
// mild thromobcytopenia
        dxOut201:'- Mild thrombocytopenia \n',
// marked thrombocytopenia
        dxOut202:'- Marked thrombocytopenia \n',
// mild thrombocytosis
        dxOut203: '- Mild thrombocytosis  \n',
// marked thrombocytosis
        dxOut204: '- Marked thrombocytosis \n',
// dysplastic platelets
        dxOut205: '- Occasional dysplastic platelets \n',
// ************************************BONE MARROW DIAGNOSIES ************************************//
// bx&clot, normal
        dxOut300: '\nBONE MARROW:\n',
// bx&clot, bilat
        dxOut301: '\nBONE MARROW (BILATERAL):\n',
// bx, core only
        dxOut302: '\nBONE MARROW (BIOPSY CORE):\n',
// bx, bilat cores only
        dxOut303: '\nBONE MARROW (BILATERAL CORES):\n',
// bm&clot, part only
        dxOut304: '\nBONE MARROW:\n',
// clot only,
        dxOut305: '\nBONE MARROW (CLOT SECTION):\n',
// clot, bilateral
        dxOut306: '\nBONE MARROW (BILATERAL):\n',

// neg bx, normocellular
        dxOut310: '- Normocellular marrow, #AA#%, with trilineage hematopoiesis \n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, hypercellular
        dxOut311: '- Hypercellular marrow, #AA#%, with trilineage hematopoiesis \n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, hypocellular
        dxOut312: '- Hypocellular marrow, #AA#%, with trilineage hematopoiesis \n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, variably
        dxOut313: '- Variably cellular marrow, #AA#%, with trilineage hematopoiesis \n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, myeloid hyperplasia
        dxOut314: '- Hypercellular marrow, #AA#%, with myeloid hyperplasia\n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, myeloid hyperplasia w/ left shift
        dxOut315: '- Hypercellular marrow, #AA#%, with left-shifted myeloid hyperplasia\n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, erythroid hyperplasia w/ left shift
        dxOut316: '- Hypercellular marrow, #AA#%, with left-shifted erythroid hyperplasia\n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, erythroid hyperplasia w/ dyspoiesis
        dxOut317: '- Hypercellular marrow, #AA#%, with dyspoietic erythroid hyperplasia\n- No morphologic increase in blasts or abnormal infiltrates\n',
// neg bx, hemodilute
        dxOut318: '- Hemodilute marrow with minimal maturing hematopoietic precursors\n- No morphologic increase in blasts or abnormal infiltrates\n',
// cmpd
        dxOut319: '- Hypercellular marrow, #AA#%, with trilineage hematopoiesis, increased eosinophils and megakaryocyte hyperplasia\n- No morphologic increase in blasts or dysplastic changes (see comment) \n',
// empty marrow
        dxOut320: '- Markedly hypocellular marrow, #AA#%, with minimal residual hematopoiesis\n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',
// neg bx, erythroid hyperplasia only
        dxOut321: '- Hypercellular marrow, #AA#%, with erythroid hyperplasia\n- No morphologic increase in blasts or abnormal infiltrates\n',

// negative cl, cellular
        dxOut330: '- Cellular marrow with trilineage hematopoiesis \n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',
// negative cl, paucicellular
        dxOut331: '- Paucicellular marrow with trilineage hematopoiesis \n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',
// negative cl, &#8593; myeloids
        dxOut332: '- Cellular marrow with myeloid hyperplasia \n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',
// negative cl, &#8593; myeloids w/ left shift
        dxOut333: '- Cellular marrow with left-shifted myeloid hyperplasia \n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',
// negative cl, &#8593; erythroids
        dxOut334: '- Cellular marrow with erythroid hyperplasia \n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',
// negative cl, &#8593; erythroids w dyspoiesis
        dxOut335: '- Cellular marrow with dyspoietic erythroid hyperplasia \n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',
// negative cl, aparticulate and hemodilute
        dxOut336: '- Aparticulate marrow consisting of blood clot \n- No morphologic increase in blasts or abnormal infiltrates (see comment) \n',

// history of ball
        dxOut350: '; history of B-lymphoblastic leukemia (see comment)',
// history of tall
        dxOut351: '; history of T-lymphoblastic leukemia (see comment)',
// history of aml
        dxOut352: '; history of acute myeloid leukemia (see comment)',
// history of apl
        dxOut353: '; history of acute promyelocytic leukemia (see comment)',
// history of cml
        dxOut354: '; history of chronic myeloid leukemia (see comment)',
// history of fl
        dxOut355: '; history of follicular lymphoma (see comment)',
// history of dlbcl
        dxOut356: '; history of diffuse large B-cell lymphoma (see comment)',
// history of cll
        dxOut357: '; history of chronic lymphocytic leukemia (see comment)',
// history of mcl
        dxOut358: '; history of mantle cell lymphoma (see comment)',
// history of mzl
        dxOut359: '; history of marginal zone lymphoma (see comment)',
// history of chl
        dxOut360: '; history of classical Hodgkin lymphoma (see comment)',
// history of T-cell lymphoma
        dxOut361: '; history of peripheral T-cell lymphoma (see comment)',
// history of myeloma
        dxOut362: '; history of plasma cell myeloma (see comment)',
// history of PTLD
        dxOut363: '; history of PTLD \n',
// history of RAEB1
        dxOut364: '; history of RAEB1 \n',
// history of RAEB2
        dxOut365: '; history of RAEB2 \n',
// history of Carcinoma`
        dxOut366: '; history of carcinoma \n',
// history of Neuroblastoma
        dxOut367: '; history of Neuroblastoma \n',
// reactive lymphoid ags
        dxOut370: '- Reactive lymphoid aggregates \n',
// mild interstitial lymphs
        dxOut371: '- Mild prominence of interstitial lymphocytes\n',
// granulomas, stains modified by mxLine521
        dxOut372: '- Granulomas present; No microorganisms are seen with AFB and GMS stains\n',
// reactive plasma cells
        dxOut373: '- Reactive plasmacytosis, #PL#%\n',
// prominent eos
        dxOut374: '- Mild prominence of eosinophils\n',
// prominent histiocytes
        dxOut375: '- Increased interstitial histiocytes\n',
// no HLH
        dxOut376: '- No conspicuous hemophagocytic histiocytes\n',
// yes HLH
        dxOut377: '- Occasional hemophagocytic histiocytes present\n',
// osteopenia
        dxOut379: '- Osteopenic trabecular bone\n',


// mds, raeb1
        dxOut380: '- Normocellular marrow, #AA#%, with dysplastic trilineage hematopoiesis \n- Increased myeloid blasts, #BB#%, consistent with at-least myelodysplastic syndrome (see comment) \n',
// new aml no dysplasia
        dxOut381: '- Increased blasts, #BB#%, consistent with acute myeloid leukemia (see comment)\n- Proportionally reduced trilineage hematopoiesis \n',
// new aml w/ dysplasia
        dxOut382: '- Increased blasts, #BB#%, consistent with acute myeloid leukemia (see comment)\n- Proportionally reduced dysplastic trilineage hematopoiesis \n',
// new apl
        dxOut383: '- Increased abnormal promyelocytes, #PP#%, consistent with acute promyelocytic leukemia (see comment)\n- Proportionally reduced trilineage hematopoiesis \n',
// new ball
        dxOut384: '- Increased lymphoblasts, #BB#%, consistent with B-lymphoblastic leukemia (see comment)\n- Proportionally reduced trilineage hematopoiesis \n',
// new tall
        dxOut385: '- Increased lymphoblasts, #BB#%, consistent with T-lymphoblastic leukemia (see comment)\n- Proportionally reduced trilineage hematopoiesis \n',
// new cll
        dxOut386: '- Chronic lymphocytic leukemia, involving #LL#% of the marrow space (see comment)\n- Proportionally reduced trilineage hematopoiesis \n',
// new lg-lymphoma
        dxOut387: '- Atypical lymphoid infiltrate, consistent with low-grade B-cell lymphoma, involving #LL#% of the marrow space (see comment)\n- Proportionally reduced trilineage hematopoiesis \n',
// new hg-lymphoma
        dxOut388: '- Diffuse large B-cell lymphoma, involving #LL#% of the marrow space (see comment)\n- Proportionally reduced trilineage hematopoiesis \n',
// new hodgkin
        dxOut389: '- Atypical lymphoid infiltrate, consistent with classical hodgkin lymphoma, involving #LL#% of the marrow space (see comment)\n- Normocellular marrow with trilineage hematopoiesis \n',
// new myeloma
        dxOut390: '- Increased abnormal plasma cells consistent with plasma cell dyscrasia/myeloma (see comment)\n- Proportionally reduced/normocellular marrow with trilineage hematopoiesis \n',
// new metastatic tumor
        dxOut391: '- Metastatic carcinoma/melanoma/neoplasm, involving #LL#% of the marrow space (see comment)\n- Proportionally reduced/normocellular marrow with trilineage hematopoiesis \n',
// new metastatic nb
        dxOut392: '- Metastatic neuroblastoma, involving #LL#% of the marrow space (see comment)\n- Proportionally reduced/normocellular marrow with trilineage hematopoiesis \n',
//  iron stores
        dxOut400: '- Adequate storage iron, #FE#+ \n',
// retic score
        dxOut401: '- No increase in reticulin fibrosis, #RET#+ \n',
// neg gms/afb
        dxOut402: '- No microorganisms seen with GMS and AFB stains \n',
// neg ebv
        dxOut403: '- No EBV positive cells as seen with in-situ hybridization \n',
//
// normal flow
        dxOut500: '\nIMMUNOPHENOTYPING:\n- No increase in CD34+ blasts, <1%\n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression \n',
// normal flow, neg for ball
        dxOut501: '\nIMMUNOPHENOTYPING:\n- No increase in CD34+ blasts, <1%\n- No evidence of previously characterized B-lymphoblasts \n',
// normal flow, neg for aml
        dxOut502: '\nIMMUNOPHENOTYPING:\n- No increase in CD34+ blasts, <1%\n- No evidence of previously characterized acute myeloid leukemia\n',
// normal flow, neg for apl
        dxOut503: '\nIMMUNOPHENOTYPING:\n- No increase in CD34+ blasts, <1%\n- No evidence of previously characterized abnormal promyelocytes\n',
// normal flow, neg for lymphoma
        dxOut504: '\nIMMUNOPHENOTYPING:\n- No increase in CD34+ blasts, <1%\n- No evidence of previously characterized B-cell lymphoma\n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression \n',
// normal, neg for myeloma
        dxOut505: '\nIMMUNOPHENOTYPING:\n- No increase in CD34+ blasts, <1%\n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression \n- Polyclonal plasma cells without antigen aberrancy \n',
// normal flow, neg for tall
        dxOut506: '\nIMMUNOPHENOTYPING:\n- No increase in CD34+ blasts, <1%\n- No evidence of previously characterized T-lymphoblasts \n',

// abnormal flow, CD5+
        dxOut515: '\nIMMUNOPHENOTYPING:\n- #CLO#-restricted CD5+ B-cell population \n- No increase in CD34+ blasts\n ',
// abnormal flow, CD10+
        dxOut516: '\nIMMUNOPHENOTYPING:\n- #CLO#-restricted CD10+ B-cell population \n- No increase in CD34+ blasts\n ',
// abnormal flow, CD5-, 10-
        dxOut517: '\nIMMUNOPHENOTYPING:\n- #CLO#-restricted CD5- ,CD10- B-cell population \n- No increase in CD34+ blasts\n ',
// abnormal flow, pc dyscrasia
        dxOut518: '\nIMMUNOPHENOTYPING:\n- #CLO#-restricted abnormal plasma cell population with aberrant ___ expression\n- No increase in CD34+ blasts,<1%\n ',
// abnormal flow, aml
        dxOut519: '\nIMMUNOPHENOTYPING:\n- Increased myeloid blasts, #FLLK#%, consistent with acute myeloid leukemia\n',
// abnormal flow, apl
        dxOut520: '\nIMMUNOPHENOTYPING:\n- Increased abnormal promyelocytes, #FLLK#%, consistent with acute promyelocytic leukemia\n',
// abnormal flow, ball
        dxOut521: '\nIMMUNOPHENOTYPING:\n- Increased B-lymphoblasts, #FLLK#%, consistent with B-lymphoblastic leukemia\n',
// abnormal flow, Tall
        dxOut522: '\nIMMUNOPHENOTYPING:\n- Increased T-lymphoblasts, #FLLK#%, consistent with T-lymphoblastic leukemia\n',
//last line
        dxOut999: ' '
// Don't add comma to last entry
    };

    dxOuts_old = $.extend(true, {}, dxOuts);

    commLines = {
// CCR COMMENT
        commLine1: 'Clinical correlation is recommended. \n',
// CASE DISCUSSED WITH
        commLine2: 'The case was discussed with XXXX on QQQQ. \n',
// BILLING TAG
        commLine3: 'Professional pathology interpretation performed at Dell Children\'s Medical Center, 4900 Mueller Blvd, Austin, TX.',
// HB DEF VS. HBOPATHY
        commLine100: 'The red cell changes suggest iron deficiency and/or a hemoglobin disorder. Correlation with other laboratory data is recommended. ',
// B12/FOLATE VS. MEDS
        commLine101: 'The red cell changes suggest B12/folate deficiency and/or superimposed therapy related effects. Correlation with other laboratory data and medications associated with macrocytosis is recommended. ',
// THAL CHANGES
        commLine102: 'The red cell changes are suggestive of a hemoglobin disorder (such as thalassemia). Superimposed iron deficiency cannot be excluded. Correlation with other laboratory data and, if indicated, hemoglobin electrophoresis studies is recommended. ',
// PREMATURITY
        commLine103: 'The spectrum of red cell changes are in keeping with prematurity or newborn status. ',
// MARROW INFILTRATIVE PROCESS
        commLine104: 'Increased numbers of red cells with teardrop morphology can be associated with a marrow infiltrative process. ',
// MACROCYTOSIS WITH TARGETS
        commLine105: 'Increased numbers of target cells in the setting of macrocytosis can be associated with liver dysfunction, hypothyroidism or medication related effects. ',
// SPHERES WITH ANEMIA
        commLine106: 'The red cell changes raise the possibility of a warm autoantibody mediated hemolytic process. It can also be seen with hereditary spherocytosis.  Correlation with a direct and indirect antibody test is recommended. ',
// SPHERES WITH CLUMPS
        commLine107: 'The red cell changes are most suggestive of a cold autoantibody mediated hemolytic process (cold agglutinin disease). Correlation with direct and indirect antigen testing, and if a cold antibody is confirmed, evaluation of the cold antibody titer and thermal amplitude is recommended. Any blood transfusions or infusions should be pre-warmed and the patient may reduce hemolysis if kept in a warm environment. ',
// SPHERES WITH OXIDATIVE CHANGES
        commLine108: 'The red cell changes are suggestive of oxidation mediated injury, which can be seen with G6PD, certain medications, and some forms of hemoglobinopathies. Correlation with other laboratory data is recommended. ',
// KNOWN HbS
        commLine109: 'The red cell changes are consistent with the known history of sickle cell anemia. ',
// KNOWN HbSC
        commLine110: 'The red cell changes are consistent with the known history of HbSC disease. ',
// ROULEAUX COMMENT
        commLine111: 'Red cell rouleaux formation is a non-specific finding that is typically associated with excess serum immunoglobulin complexes, which can be seen with hepatitis, recent IVIG therapy, or lymphoproliferative disorders. Correlation with serum protein electrophoresis may be helpful. ',
// FREQUENT TARGETS, NO MACROCYTOSIS COMMENT
        commLine112: 'Increased numbers of target cells can be associated with liver dysfunction, hypothyroidism or medication related effects. In the absence of macrocytosis, an underlying non-hemolyzing hemoglobinopathy (like homozygous HbC) cannot be excluded.',
// POST-SPLENECTOMY CHANGES COMMENT
        commLine113: 'The red-cell changes, including frequent Howell-Jolly bodies and spherocytes, are most consistent with a hyposplenic, or post-splenic state. Clinical correlation is recommended. ',
// INCREASED SCHISTOCYTES COMMENT
        commLine114: 'There is an increase in schistocytes which may indicate ongoing intravascular hemolysis. Correlation with other laboratory data, including a DIC work-up, may be helpful. ',
// MICROYCTIC HBS OR HBSC
        commLine115: 'The red cell changes are consistent with the known history of sickle cell anemia. Microcytosis, in this setting, may also indicate an underlying thalassemia (such as alpha-thalassemia) or concurrent iron deficiency. Correlation with iron studies is recommended to distinguish between these possibilities. ',
// ERYTHROCYTOSIS, NORMO/NORMO
        commLine116: 'Normocytic polycythemia (erythrocytosis) is a non-specific finding that is most often seen as a secondary phenomenon in a variety of settings, including dehydration, chronic lung/heart disease, exposure to smoking, sleep apnea among others. Clinical correlation is recommended. ',
// HYPOCHROMIC/MICROCYTIC, NORMAL RED CELLS
        commLine117: 'Hypochromic, microcytic red cells without anemia or increased anisocytosis can be seen with treated iron deficiency, clinically insignificant alpha-thalassemia, or other hemoglobinopathy. If microcytosis persists in spite of adequate iron repletion, consideration for hemoglobin electrophoresis may be helpful. ',

//
// ABS NEUTS DDX
        commLine150: 'The neutrophil changes are non-specific, but raise a differential diagnosis of acute infection, active inflammation or a medication reaction. ',
// INCREASED EOS DDX
        commLine151: 'Increased eosinophils is a non-specific finding seen in a broad variety of reactive settings, which typically include allergic reactions, infections or medication-related changes. ',
// MONONUCLEOSIS
        commLine152: 'The lymphocyte changes are non-specific, but can be seen with viral infections, including mononucleosis. ',
// CMPD NOS
        commLine153: 'The leukocyte changes raise a differential diagnosis of infection or G-CSF therapy; however, a chronic myeloproliferative disorder cannot be excluded on morphologic grounds alone. Correlation with clinical history, other laboratory data and, if clinically indicated, cytogenetic testing is recommended. ',
// CML
        commLine154: 'The leukocyte changes are suggestive of a chronic myeloproliferative disorder, such as CML. Correlation with FISH testing for BCR/ABL on peripheral blood is recommended.',
// CLL
        commLine155: 'There is an atypical lymphocytosis that is consistent with chronic lymphocytic leukemia. Correlation with flow cytometry and peripheral blood FISH testing is recommended. ',
// C/W LG lymphoma
        commLine156: 'There is an atypical lymphocytosis that is concerning for a circulating low-grade lymphoproliferative disorder. Correlation with flow cytometry and, if warranted, peripheral blood FISH testing is recommended. ',
// AML
        commLine157: 'The findings are consistent with an acute myeloid leukemia. Correlation with flow cytometry and bone marrow evaluation is recommended. ',
// APL
        commLine158: 'The findings are consistent with an acute myeloid leukemia, and are further worrisome for acute promyelocytic leukemia. While no changes suggesting microangiopathic hemolysis is seen, evaluation for DIC is recommended. Additionally, FISH testing is pending and can help confirm this possibility. ',
// ALL
        commLine159: 'The findings are consistent with an acute lymphoblastic leukemia. Correlation with flow cytometry and bone marrow evaluation is recommended.',
// TREATMENT EFFECT
        commLine160: 'The leukocyte changes are consistent with therapy related changes. ',
// SEVERE NEUTROPENIA
        commLine161: 'The etiology for the severe neutropenia is unclear. In the setting of reactive lymphocytes, the finding may represent a virus- or medication-mediated effect. Severe neutropenia may also represent a benign condition of various ethnic extractions, immune reaction or a congenital process. Correlation with clinical history and other laboratory findings is necessary to differentiate among these possibilities. ',
//
// CLUMPS DDX
        commLine200: 'The apparent thrombocytopenia is accounted for by platelet clumps causing a spurious reduction in the count. This is usually an in vitro phenomenon due to EDTA collection tubes. Future platelet counts using non-EDTA anticoagulants (such as heparin) may resolve this issue. ',
// ITP
        commLine201: 'In the appropriate clinical context, the thrombocytopenia and reactive lymphocytes may be compatible with ITP. ',
// THROMBOCYTOSIS
        commLine202: 'Thrombocytosis can be seen in a wide variety of reactive settings including infections, hyposplenic states, iron deficiency, among others. Rarely, it may reflect a myeloproliferative disorder. Clinical correlation is recommended. ',
// TTP
        commLine203: 'In the appropriate clinical context, the combination of schistocytes and marked thrombocytopenia suggests TTP. Correlation with other laboratory data, specifically to assess for thrombotic risk, is recommended. ',
//
// BILLING COMMENT
        commLine297: 'Professional pathology interpretation performed at Dell Children\'s Hospital, 4900 Mueller Blvd, Austin, Texas  78723, ph: 512-324-0000. ',
// COMMENT: NEGATIVE FOR MALIGNANCY
        commLine300: 'There is no morphologic or immunophenotypic evidence of involvement by a neoplastic hematolymphoid disorder. Correlation with the pending ancillary testing is recommended. \n',
// COMMENT: CORRELATE WITH CYTO
        commLine301: 'Correlation with the pending ancillary testing is recommended. ',
// COMMENT: CORRELATE WITH CYTO AND MRD
        commLine302: 'Correlation with the pending ancillary testing is recommended. ',
// COMMENT: NEGATIVE FOR METASTATIC TUMOR
        commLine303: 'There is no morphologic or immunophenotypic evidence of marrow involvement by metastatic tumor. Correlation with the pending ancillary testing is recommended. \n',
// COMMENT: NEGATIVE FOR HODGKIN
        commLine304: 'There is no morphologic or immunohistochemistry evidence of involvement by Hodgkin lymphoma. Correlation with the pending ancillary testing is recommended. \n',
// COMMENT: NEGATIVE FOR BALL
        commLine305: 'There is no morphologic or immunophenotypic evidence of involvement by the patient\'s previously described B-lymphoblastic leukemia. #ERY# Correlation with the pending ancillary testing is recommended. \n ',
// COMMENT: NEGATIVE FOR TALL
        commLine306: 'There is no morphologic or immunophenotypic evidence of involvement by the patient\'s previously described T-lymphoblastic leukemia. #ERY# Correlation with the pending ancillary testing is recommended. \n ',
// COMMENT: NEG FOR R/R AML
        commLine307: 'There is no morphologic or immunophenotypic evidence for recurrent or persistent acute myeloid leukemia. Correlation with the pending ancillary testing is recommended. \n ',
// COMMENT: NEG MYELOMA
        commLine308: "There is no morphologic or immunophenotypic evidence of a clonal plasma cell population. Correlation with the pending ancillary testing is recommended. \n",
// COMMENT: NEG LOW GRADE LYMPHOMA
        commLine309: "There is no morphologic or immunophenotypic evidence of the patient's previously described low-grade B-cell lymphoma. Correlation with the pending ancillary testing is recommended. \n",
// COMMENT: NEG HIGH GRADE LYMPHOMA
        commLine310: "There is no morphologic or immunophenotypic evidence of the patient's previously described high-grade B-cell lymphoma. Correlation with the pending ancillary testing is recommended. \n",
// COMMENT: NEG T-CELL LYMPHOMA
        commLine311: "There is no morphologic or immunophenotypic evidence of the patient's previously described T-cell lymphoma. Correlation with the pending ancillary testing is recommended. \n",


// COMMENT: L SHIFTED NEUTS
        commLine350: 'The granulocyte changes raise a differential diagnosis of acute infection, active inflammation or G-CSF effect. ',
// COMMENT: INCR EOS
        commLine351: 'Increased numbers of marrow eosinophils can be seen in a variety of settings, and is usually a reactive phenomenon. Usual causes include medication reactions or infections. Rarely they can represent sequelae of a neoplastic hematolymphoid process. Correlation with other laboratory data is recommended. ',
// COMMENT: REACTIVE PLASMACYTOSIS
        commLine352: 'There is a reactive plasmacytosis which shows polyclonal light-chain expression. Such populations can be seen in a variety of settings, including viral infections, active autoimmune diseases or chronic liver disease. Clinical correlation is recommended. ',
// COMMENT: THERAPY RELATED ERYTHROID DYSPOIESIS
        commLine353: 'The erythroid changes are most likely secondary to therapy related changes. ',
// COMMENT: FEW HLH
        commLine354: 'Occasional hemophagocytic histiocytes are present, and are best observed on the aspirate/touch preparation slides. This is usually a non-specific finding that can be seen in a variety of reactive settings (including viral infections); however, in certain clinical settings it can represent clinical HLH syndrome. Correlation with the clinical findings and other laboratory data is recommended. Cytogenetic studies are pending and will be reported when available. ',
// COMMENT: ITP CHANGES
        commLine355: 'The combination of peripheral thrombocytosis, reactive appearing lymphocytes and mild megakaryocytic hyperplasia is compatible with ITP. Correlation with other data is recommended. ',
// COMMENT: REBOUND ERYTHROID HYPERPLASIA
        commLine356: 'A left-shifted erythroid hyperplasia, in the context of significant anemia, suggests a brisk marrow response to the degree of anemia. The dyspoietic changes likely reflect high erythroid progenitor activity. ',
// COMMENT: Serous atrophy
        commLine357: 'There is a qualitative change within the marrow stroma consistent with so-called \"serous atrophy\". This change is most often described in patient\'s with severe malnutrition, anorexia and/or cachexia. ',
// COMMENT: IDIOPATHIC HYPOCELLULARITY/APLASIA
        commLine358: 'The bone marrow shows a [marked] decrease in the expected cellularity. There is no morphologic or immunophenotypic evidence of involvement by a neoplastic hematolymphoid disorder. Such marrow changes may be transient and may be secondary to medication/toxin exposure, viral infection related suppression, autoimmune disease, paroxysmal nocturnal hemoglobinuria, or possibly a subtle myelodysplastic syndrome. Correlation with the pending ancillary studies is recommended. If indicated, consideration to perform PNH testing on fresh peripheral blood may be helpful. ',
// COMMENT: TREATED MARROW
        commLine359: 'The marrow composition suggests therapy-related injury/aplasia. Correlation with the pending ancillary testing is recommended. ',
//
// COMMENT: CMPD DDX
        commLine400: 'The marrow changes raise a differential diagnosis of infection or G-CSF therapy; however, a chronic myeloproliferative disorder cannot be excluded on morphologic grounds alone. Correlation with the clinical history, other laboratory data and pending ancillary testing is recommended. ',
// COMMENT: CML
        commLine401: 'The marrow changes are suggestive of a chronic myeloproliferative disorder, such as CML. Correlation with the pending ancillary testing is recommended. Further assessment for JAK2 mutations on peripheral blood may also be helpful. ',
// COMMENT: CLL
        commLine402: 'The morphologic and immunophenotypic findings are those of chronic lymphocytic leukemia. There is no evidence of large cell or prolymphocytic transformation. Correlation with the pending ancillary testing is recommended. ',
// COMMENT: GENERIC LOW GRADE LYMPHOMA
        commLine403: 'The morphologic and immunophenotypic findings show marrow involvement by a low-grade B-cell lymphoma. The immunophenotypic differential includes___/the immunophenotype is consistent with ____. Correlation with the pending ancillary testing is recommended. ',
// COMMENT: GENERIC HIGH GRADE LYMPHOMA
        commLine404: 'The morphologic and immunophenotypic findings show marrow involvement by a diffuse large B-cell lymphoma. The immunophenotypic differential includes___/the immunophenotype is consistent with ____. Correlation with the pending ancillary testing is recommended. ',
// COMMENT: AML
        commLine405: 'The morphologic and immunophenotypic findings are those of acute myeloid leukemia. Correlation with the pending ancillary testing is recommended. Specifically, FLT3/NPM1 status can provide prognostically relevant information and final classification is deferred until these results are available. ',
// COMMENT: APL
        commLine406: 'The morphologic and immunophenotypic findings are those of acute promyelocytic leukemia. Quantitative PCR for PML/RARA should be requested for any future marrow biopsies, to better assess for therapeutic response. Correlation with the pending ancillary testing is recommended.',
// COMMENT: BALL
        commLine407: 'The morphologic and immunophenotypic findings are those of B-lymphoblastic leukemia. Correlation with the pending ancillary testing is recommended. ',
// COMMENT: TALL
        commLine408: 'The morphologic and immunophenotypic findings are those of T-lymphoblastic leukemia. Correlation with the pending ancillary testing is recommended. ',
// COMMENT: HODGKIN
        commLine409: 'The morphologic and immunohistochemistry findings are those of classical Hodgkin lymphoma. ',
// COMMENT: NEUROBLASTOMA - EXTENSIVE
        commLine410: "There is extensive [bilateral] involvement by neuroblastoma, accounting for __#% of the marrow spaces.  ",
// COMMENT: NEUROBLASTOMA - FOCAL
        commLine411: "There is focal [bilateral] involvement by neuroblastoma, accounting for __#% of the marrow spaces. ",
// COMMENT: MYELOMA
        commLine412: "The morphologic and immunophenotypic findings are those of plasma cell myeloma. Correlation with radiographic and other laboratory findings is recommended to optimally assess the disease burden. Correlation with the pending ancillary testing is recommended to better risk stratify the neoplasm. ",


// Last item
        commLine999: ""

    };
    commLines_old = $.extend(true,{}, commLines);




});



/**
 * Created by chandrakrishnan on 4/28/2017.
 */

