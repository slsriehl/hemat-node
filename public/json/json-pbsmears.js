// ********************* PBSMEARS JSON TEXT       ***********************//
// **********************************************************************//
$(window).on('load', function () {

    partTypes = {
// NORMAL RBCS
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
        partType153: 'Leukocytes are decreased in number, consisting of an absolute reduction in neutrophils and lymphocytes, with few monocytes. ',
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
        partType161: 'Leukocytes are normal in number, consisting predominantly of segmented neutrophils with fewer numbers of lymphocytes and monocytes. There is an absolute increase in eosinophils that show normal morphology. ',
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
        partType999: ''

    };

    partTypes_old = $.extend(true, {}, partTypes);


    dxLines = {

        dxLine999:''
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
// PLT MORPHOLOGY
// NORMAL PLT
        mxLine200: '',
// HYPOGRANULAR
        mxLine202: 'Some dysplastic platelets characterized by large, hypogranular forms are present. ',
// LARGE, WELL GRANULATED
        mxLine203: 'Some large, well granulated platelets are present. ',
// NO CLUMPS SEEN
        mxLine204: 'No platelet clumps are seen. ',
//
        mxLine999:''
    };
    mxLines_old = $.extend(true, {}, mxLines);

    commLines = {
// CCR COMMENT
        commLine1: 'Clinical correlation is recommended. \n',
// CASE DISCUSSED WITH
        commLine2: 'The case was discussed with Dr. ____ on QQQQ. \n',
// BILLING TAG
        commLine3: 'Professional pathology interpretation performed at Dell Children\'s Medical Center, 4900 Mueller Blvd, Austin, TX. ',
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
// ABS NEUTS DDX
        commLine150: 'The neutrophil changes are non-specific, but raise a differential diagnosis of acute infection, active inflammation, traumatic injury or a medication reaction. ',
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
        commLine158: 'The findings are consistent with an acute myeloid leukemia and are further worrisome for acute promyelocytic leukemia. While no changes suggesting microangiopathic hemolysis is seen, evaluation for DIC is recommended. Additionally, FISH testing is pending and can help confirm this possibility. ',
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
        commLine203: 'In the appropriate clinical context, the combination of schistocytes and marked thrombocytopenia suggests TTP/HUS. Correlation with other laboratory data, specifically to assess for thrombotic risk, is recommended. ',
        commLine999:'dummy'
    };
    commLines_old = $.extend(true, {}, commLines);

// Final diagnostic diagnoses
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

// wbc options
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
// platelet options
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
//
        dxOut999: ' '
// Don't add comma to last entry
    };
    dxOuts_old = $.extend(true, {}, dxOuts);

});
// ======================================================================//
/**
 * Created by chandrakrishnan on 4/27/2017.
 */
