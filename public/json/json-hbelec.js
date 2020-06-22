$(window).on('load', function(){
    dxOuts = {
        // Normals
        he000: '- No abnormal hemoglobins detected \n',
        he001: '- No abnormal hemoglobins detected (see comment)\n',
        he010: '- No abnormal hemoglobins detected (see comment)\n',
        he011: '- No abnormal hemoglobins detected (see comment)\n',
        he012: '- No abnormal hemoglobins detected (see comment)\n',
        // Thalassemia
        // Probable alpha-thal
        he200: '- No abnormal hemoglobins detected\n- Findings suggestive of alpha-thalassemia (2-gene deletion) (see comment)\n',
        // Alpha-thal minor
        he201: '- No abnormal hemoglobins detected\n- Findings compatible with alpha-thalassemia (2-gene deletion) (see comment)\n',
        // Alpha-thal 3 gene
        he202: '- Increased HbH at HH%\n- Findings compatible with alpha-thalassemia (3-gene deletion) (see comment)\n',
        // Alpha-thal Hb-CS
        he203: '- Increased HbH at HH%, Hb-Barts at BB% and Hb-Constant spring\n- Findings compatible with alpha-thalassemia with Hb-Constant spring (see comment)\n',
        // Probable beta-thal
        he210: '- No abnormal hemoglobins detected\n- Findings suggestive of Beta-thalassemia minor (see comment)',
        // Beta-thal
        he211: '- No abnormal hemoglobins detected\n- Findings compatible with Beta-thalassemia minor (see comment)',
        // Hb SS
        // Hb S, no microcytosis - Hbs ~35-45%
        he300: '- HbS detected at SS%',
        //  Hb S + microcytosis, no iron deficiency
        he301: '- HbS detected at SS%',
        //  Hb S + microcytosis, yes iron deficeincy
        he302: '- HbS detected at SS%',
        // HbSS - typical (non-infant)
        he303: '- HbS detected at SS%',
        // HbSS + transfusion, no microcytosis
        he304: '- HbS detected at SS%',
        // HbSS + transfusion and microcytosis
        he305: '- HbS detected at SS%',
        // HbS + elevated A2 (trait beta-thal)
        he306: '- HbS detected at SS% \n- HbF slightly elevated at FF%',
        // HbSS + elevated A2 (sickle beta-thal)
        he307: '- HbS detected at SS% \n- HbF slightly elevated at FF%',
        // HbSS + increased HbF non-infant - sickle HPFH
        he308: '- HbS detected at SS% \n- HbF elevated at FF%',
        // HbSS + increased HbF infant - sickle or sickle HPFH
        he309: '- HbS detected at SS% \n- HbF elevated at FF%',
        // HbS and HbC only- HbSC
        he310: '- HbS detected at SS%\n- HbC detected at CC%',
        //
        // HbC
        // Heterozygous Hb C trait - no microcytosis
        he400: '- HbS detected at CC% ',
        // Heterozygous Hb C trait - and microcytosis
        he401: '- HbS detected at CC% ',
        // Heterozygous Hb C trait - and iron deficiency
        he402: '- HbS detected at CC% ',
        // Hemoglobin C trait and beta plus-thal (C-beta+ thal) - C > A, F 2-5%, A2 >3.5
        he403: '- HbS detected at CC% \n- Hb F mildly elevated at FF% \n- HbA2 mildly elevated at TT%',
        // Hemoglobin C trait and beta -thal (C-beta thal) - C only, F 2-5%, A2 >3.5
        he404: '- HbS detected at CC% \n- Hb F mildly elevated at FF% \n- HbA2 mildly elevated at TT%',
        // Homozygous Hb C
        he405: '- HbS detected at CC% ',
        //
        // HbF
        // HPFH
        he500: '- HbF detected at FF% ',
        // Not infant: Mildly elevated HbF
        he501: '- HbF detected at FF% ',
        // Infant with increased HbF for age
        he502: '- HbF detected at FF%; increased for age  (see comment)',
        // Increased HbF and thalassemic RBC indices (microcytos, erythrocytosis)
        he503: '- HbF detected at FF% in the context of microcytosis and erythrocytosis (see comment)',
        //
        // HbE
        // Heterozygous HbE - HbE ~25-30%
        he600: '- HbE detected at EE% ',
        // HbE only - E + F + incr A2
        he601: '- HbE detected at EE% ',

        // Abnormal zones
        he701: '- Abnormal hemoglobin detected at XX% (see comment)\n',
        // zone 2
        he702: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 3
        he703: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 4
        he704: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 5
        he705: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 6
        he706: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 7
        he707: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 8
        he708: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 9
        he709: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 10
        he710: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 11
        he711: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 12
        he712: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 13
        he713: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 14
        he714: '- Abnormal hemoglobin detected at XX% (see comment)',
        // zone 15
        he715: '- Abnormal hemoglobin detected at XX% (see comment)',

        dxOut999 : ''
    };
    dxOuts_old = $.extend(true, {}, dxOuts);

    commLines = {
        // Normal - adult
        he000: '',
        // Normal + microcytosis - adult
        he001: 'Microcytosis is noted on the concurrent/recent CBC. Co-existing iron deficiency can obscure the presence of an abnormal hemoglobin or the features of thalassemia. Repeat hemoglobin electrophoresis after assessment of iron status and correction of any iron deficiency is recommended.\n',
        // Normal - child
        he010: 'Consider repeating hemoglobin electrophoresis after 2 years of age to ensure HbF fraction normalizes appropriately.\n',
        // Normal + microcytosis - child
        he011: 'Microcytosis is noted on the concurrent/recent CBC. Co-existing iron deficiency can obscure the presence of an abnormal hemoglobin or the features of thalassemia. Consider repeating hemoglobin electrophoresis after correction of iron-deficiency or after 2 years of age to assess for low level abnormal hemoglobins and to ensure HbF fractions normalize appropriately.',
        // Normal + fe def - chiild
        he012: 'Microcytosis is noted with low serum ferritin, suggesting co-existing iron deficiency. Iron-deficiency can obscure the presence of an abnormal hemoglobin or the features of thalassemia. Repeat hemoglobin electrophoresis after correction of iron deficiency is recommended to assess for low level abnormal hemoglobins and to ensure HbF fractions normalize appropriately.',
        // Abnormal hemoglobins
        // Probable alpha Thalassemia
        he200: 'RBC indices suggest Alpha-Thalassemia trait (2 gene deletion) but before this presumptive diagnosis is made, iron deficiency should be ruled out clinically.\n',
        // Likely alpha thal
        he201: 'Red cell microcytosis and erythrocytosis with normal ferritin. These findings are compatible with Alpha-Thalassemia (2 gene deletion).\n',
        // Likely alpha thal
        he202: 'Increased HbH detected, in the context of microcytosis. These findings are compatible with Alpha-Thalassemia (3 gene deletion).\n',
        // Likely alpha thal
        he203: 'Increased HbH and HbBarts are detected, in the setting of decreased HbA2 and small amount of Z1 abnormal hemoglobin consistent with non-deletional alpha-thalassemia associated with Hb-Constant spring. \n',
        // Probable beta-thal
        he210: 'Most cases of beta-Thalassemia Minor present with erythrocytosis, which is not seen on the corresponding CBC. This finding may be seen with coexisting iron deficiency or confounding hemoglobinopathy. Hemoglobin A2 can also be elevated in hyperthyroidism. ',
        // Likely beta-thal
        he211: 'Clinical correlation is recommended. ',
        // Hb SS
        // Hb S, no microcytosis - Hbs 35-45%
        he300: 'Findings consistent with heterozygous Hemoglobin S (sickle trait). ',
        //  Hb S + microcytosis - HbS ~35 or less, no iron deficiency
        he301: 'The findings are consistent with heterozygous hemoglobin S (sickle trait). Microcytosis is noted on the most recent CBC, and may be accounted for by concurrent alpha-thalassemia or iron deficiency. Correlation with iron studies is recommended.',
        //  Hb S + microcytosis - HbS ~35 or less, yes iron deficiency
        he302: 'The findings are consistent with heterozygous hemoglobin S (sickle trait) complicated by iron deficiency. Iron deficiency can obscure the presence of other abnormal hemoglobins. If clinically warranted, repeat evaluation after correction of iron deficiency may be helpful. ',
        // HbSS - typical (non-infant) - HbS only, >90%
        he303: 'Findings consistent with homozygous Hemoglobin S (sickle cell disease). ',
        // HbSS + transfusion, no microcytosis - HbS >50%, HbA 1-50%
        he304: 'Findings consistent with previously transfused homozygous Hemoglobin S (sickle cell disease).\n\nNote: In sickle cell patients with detectable HbA, hemoglobin electrophoresis cannot reliably distinguish between previous transfusion (in the absence of a marrow transplant) and incomplete engraftment in bone marrow transplant recipients. ',
        // HbSS + transfusion and microcytosis - HbS >50%, HbA 1-50%
        he305: 'Findings show predominance of Hemoglobin S (sickle cell disease) and lesser amounts of HbA. This may represent previous transfusion. In the context of microcytosis, coexisting iron deficiency cannot be excluded. \n\nNote: In sickle cell patients with detectable HbA, hemoglobin electrophoresis cannot reliably distinguish between previous transfusion (in the absence of a marrow transplant) and incomplete engraftment in bone marrow transplant recipients. ',
        // HbS + elevated A2 (trait beta-thal) - A<30%, F 5-10%, A2 >3.5%
        he306: 'Findings suggestive of doubly heterozygous hemoglobin S (trait) and beta-plus thalassemia. ',
        // HbSS + elevated A2 (sickle beta-thal) - A = 0, F 5-10%, A2 >3.5%
        he307: 'Findings suggestive of heterozygous hemoglobin S and beta-thalassemia (sickle-beta thalassemia). ',
        // HbSS + increased HbF non-infant - sickle HPFH: S + F 15-30%
        he308: 'Findings suggestive of heterozygous hemoglobin S (trait) and hereditary persistence of fetal hemoglobin (HPFH).',
        // HbSS + increased HbF infant - sickle or sickle HPFH
        he309: 'Findings suggestive of homozygous hemoglobin S (sickle cell disease) or, possible, heterozygous HbS and hereditary persistence of fetal hemoglobin (HPFH). Repeat hemoglobin electrophoresis after the age of 2 is recommeded to assess whether the HbF levels decline to the expected levels for sickle cell disease. ',
        // HbS and HbC only- HbSC
        he310: 'Findings consistent with combined hemoglobin S and Hemoglobin C (sickle-C disease). ',
        //
        // HbC
        // Heterozygous Hb C trait - no microcytosis - c 25-45%
        he400: 'Findings consistent with heterozygous Hemoglobinc C (Hb C trait). ',
        // Heterozygous Hb C trait - and microcytosis
        he401: 'Findings suggestive of heterozygous Hemoglobinc C (Hb C trait). Microcytosis is noted on the most recent CBC, and may be accounted for by concurrent alpha-thalassemia or iron deficiency. Correlation with iron studies is recommended. ',
        // Heterozygous Hb C trait - and iron deficiency
        he402: 'Findings consistent with heterozygous Hemoglobinc C (Hb C trait) and iron deficiency. Iron deficiency can obscure the presence of co-existing abnormal hemoglobins. Repeat evaluation after correction of the iron deficiency may be helpful. ',
        // Hemoglobin C trait and beta plus-thal (C-beta+ thal) - C > A, F 2-5%, A2 >3.5
        he403: 'Findings consistent with hterozygous Hemoglobin C (Hb C trait) in combination with beta(plus)-thalassemia. ',
        // Hemoglobin C trait and beta -thal (C-beta thal) - C only, F 2-5%, A2 >3.5
        he404: 'Findings consistent with  Hemoglobin C (Hb C trait) in combination with beta-thalassemia.',
        // Homozygous Hb C
        he405: 'Findings consistent with homozygous Hemoglobin C. ',
        //
        // HbF
        // HPFH
        he500: 'Findings consistent with hereditary persistence of fetal hemoglobin (HPFH). ',
        // Not infant: Mildly elevated HbF
        he501: 'Mildly elevated HbF for age is a non-specific finding that can be seen as a reactive response in some hematologic conditions or with some forms of heterozygous hereditary persistence of fetal hemoglobin (HPFH). It can also be se',
        // Infant with increased HbF for age
        he502: 'The HbF levels are higher than expected for this patient\'s age. There is considerable variability in the manner of natural HbF decline in infants. Consideration for repeat Hb electrophoresis after 2 years of age is recommended to ensure HbF% declines to adult levels. ' ,
        // Increased HbF and thalassemic RBC indices (microcytos, increased A2%)
        he503: 'Findings are most consistent with HbF-thalassemia trait, as is often observed with delta-beta thalassemia. Delta-beta thalassemia is sometimes over-represented as a source of increased HbF in individuals of certain ethnic extractions. ',
        //
        // HbE
        // Heterozygous HbE - HbE ~25%
        he600: 'Findings are consistent with heterozygous Hemoglobin E (HbE trait). ',
        // HbE only E + F + incr A2
        he601: 'HbE is detected without any HbA, in the context of thalassemic RBC indices. This may represent homozygous HbE or, more commonly in individuals of certain ethnic extraction, heterozygous hemoglobin E and beta-thalassemia major (HbE-beta thalassemia). Family studies are necessary to reliable distinguish between these possibilities. ',
        // HbE > Hb F > HbA & incr A2
        he602: 'HbE is detected with elevated HbF and lesser HbA, in the context of thalassemic RBC indices. This may represent heterozygous hemoglobin E and beta-thalassemia minor (HbE-beta thalassemia). If clinically indicated, beta-globin gene mutation analysis can confirm this. ',
        //
        // Abnormal zones
        // zone 1
        he701: 'Abnormal hemoglobin migrating in zone 1 of this capillary zone electrophoresis study. These are usually alpha-chain variants of none or minimal clinical significance. Examples include Hb Q-India, Hb Q-Thailand or Hb-Winnipeg. If clinically desired, alpha-globin gene mutation analysis can confirm the specific type present. ', 
        // zone 2
        he702: 'Abnormal hemoglobin migrating in zone 2 of this capillary zone electrophoresis study. This is most often the unstable hemoglobin Constant Spring (Hb CS), which can be seen in association with alpha-thalassemias. ',
        // zone 3 - Hb O arab ~35-40%
        he703: 'Abnormal hemoglobin migrating in zone 3 of this capillary zone electrophoresis study. Based on the abnormal hemoglobin percentage, the findings are suggestive of Hb-O Arab, a beta-chain variant. If clinically desired, beta-globin gene mutation analysis can confirm the specific type present. ',
        // zone 4
        he704: 'Abnormal hemoglobin migrating in zone 4 of this capillary zone electrophoresis study. The possibilities in this region include: Hb Koln [choose if many peaks present, ~30% abnormal], Hb Santa Ana [choose if ~21-28%], denatured Hb C [choose if pt has Hb CC] or other less common alpha and beta chain variants. If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 5
        he705: 'Abnormal hemoglobin migrating in zone 1 of this capillary zone electrophoresis study. Based on the percentage of abnormal hemoglobin this may represent Hb Hasharon [choose if ~14-19% abnormal]. If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 6 - Hb D variant - Heterozygous ~40-45%
        he706: 'Abnormal hemoglobin migrating in zone 6 of this capillary zone electrophoresis study. Based on the percentage of abnormal hemoglobin this may represent Hb D (a beta-chain variant) or Hb Q-India (an alpha-chain variant). If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 6 - Hb Lepore - Heterozygous 7-15%
        he707: 'Abnormal hemoglobin migrating in zone 6 of this capillary zone electrophoresis study. Based on the percentage of abnormal hemoglobin this may represent Hb Lepore trait, a delta-beta hybrid mutation. Hb Lepore produces a thalassemic picture, with severity correlated to zygosity. ',
        // zone 6 - Hb G - thalassemic picture 20-25% abnormal hb
        he708: 'Abnormal hemoglobin migrating in zone 6 of this capillary zone electrophoresis study. In light of the thalassemic CBC changes, the findings may represent Hb G, an alpha-chain variant. If clinically desired, alpha-globin gene mutation analysis can confirm the specific type present. ',
        // zone 7 ~25-35%
        he709: 'Abnormal hemoglobin migrating in zone 7 of this capillary zone electrophoresis study. The possibilities in this region include: Hb Q-Thailand (an alpha-chain variant), Hb Richmond (a beta-chain variant) or Hb G-San Jose (a beta-chain variant). If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 8
        he710: 'Abnormal hemoglobin migrating in zone 8 of this capillary zone electrophoresis study. This is usually a beta-chain variant, such as Hb Atlanta or Hb Athens (GA). If clinically desired, beta-globin gene mutation analysis can confirm the specific type present. ',
        // zone 9
        he711: 'Abnormal hemoglobin migrating in zone 9 of this capillary zone electrophoresis study. The possibilities in this region include several alpha- and beta-chain variants of essentially no apparent clinical significance. If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 10
        he712: 'Abnormal hemoglobin migrating in zone 10 of this capillary zone electrophoresis study. The possibilities in this region include: Hb Hope (a beta-chain variant) [choose if ~40-50% abnormal] or Hb M (an alpha-chain variant) [choose if ~15-25% abnormal]. If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 11
        he713: 'Abnormal hemoglobin migrating in zone 9 of this capillary zone electrophoresis study. The possibilities in this region include several beta-chain variants of essentially no apparent clinical significance. If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 12 - Hb Barts (<10%)
        he714: 'Small fraction of abnormal hemoglobin migrating in zone 12 of this capillary zone electrophoresis study is most suggestive of Hb Barts, in the context of a 1 or 2-gene alpha-thalassemia. Alpha-globin gene deletion analysis can confirm the specific type present. ',
        // zone 12- Non Barts or HbH abnormal
        he715: 'Abnormal hemoglobin migrating in zone 12 of this capillary zone electrophoresis study. The possibilities in this region include several alpha and beta-chain variants of essentially no apparent clinical significance. If clinically desired, globin gene mutation analysis can confirm the specific type present. ',
        // zone 13- Hb N-baltimore
        he716: 'Abnormal hemoglobin migrating in zone 13 of this capillary zone electrophoresis study is most suggestive of Hb N-Baltimore, a beta-chain variant. If clinically desired, beta-globin gene mutation analysis can confirm the specific type present. ',
        // zone 15- HbH (>10%)
        he717: 'Significant fraction of abnormal hemoglobin migrating in zone 12 of this capillary zone electrophoresis study is most suggestive of Hb H, in the context of a 3-gene alpha-thalassemia. Alpha-globin gene deletion analysis can confirm the specific type present. ',



        commLine999 : ''
    };
    commLines_old = $.extend(true, {}, commLines);


});


/**
 * Created by Chandra Krishnan on 6/12/2020.
 */
