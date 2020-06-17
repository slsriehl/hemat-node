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
        he200: '- No abnormal hemoglobins detected\n- Findings suggestive of alpha-thalassemia (2-gene trait) (see comment)\n',
        // Alpha-thal
        he201: '- No abnormal hemoglobins detected\n- Findings compatible with alpha-thalassemia (2-gene trait) (see comment)\n',
        // Probable beta-thal
        he202: '- No abnormal hemoglobins detected\n- Findings suggestive of Beta-thalassemia minor (see comment)',
        // Beta-thal
        he203: '- No abnormal hemoglobins detected\n- Findings compatible with Beta-thalassemia minor (see comment)',
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
        he500: '- HbS detected at CC% ',
        // Heterozygous Hb C trait - and microcytosis
        he501: '- HbS detected at CC% ',
        // Heterozygous Hb C trait - and iron deficiency
        he502: '- HbS detected at CC% ',
        // Hemoglobin C trait and beta plus-thal (C-beta+ thal) - C > A, F 2-5%, A2 >3.5
        he503: '- HbS detected at CC% \n- Hb F mildly elevated at FF% \n- HbA2 mildly elevated at TT%',
        // Hemoglobin C trait and beta -thal (C-beta thal) - C only, F 2-5%, A2 >3.5
        he504: '- HbS detected at CC% \n- Hb F mildly elevated at FF% \n- HbA2 mildly elevated at TT%',
        // Homozygous Hb C
        he505: '- HbS detected at CC% ',



        // Abnormal other
        he900: '- Abnormal hemoglobin detected at XX% (see comment)\n',

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
        he201: 'Red cell microcytosis and erythrocytosis with normal ferritin. These findings are compatible with Alpha-Thalassemia trait (2 gene deletion).\n',
        // Probable beta-thal
        he202: 'Most cases of Beta-Thalassemia Minor present with erythrocytosis, which is not seen on the corresponding CBC. This finding may be seen with coexisting iron deficiency or confounding hemoglobinopathy. Hemoglobin A2 can also be elevated in hyperthyroidism. ',
        // Likely beta-thal
        he203: 'Clinical correlation is recommended. ',
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
        // Heterozygous Hb C trait - no microcytosis
        he500: 'Findings consistent with heterozygous Hemoglobinc C (Hb C trait). ',
        // Heterozygous Hb C trait - and microcytosis
        he501: 'Findings suggestive of heterozygous Hemoglobinc C (Hb C trait). Microcytosis is noted on the most recent CBC, and may be accounted for by concurrent alpha-thalassemia or iron deficiency. Correlation with iron studies is recommended. ',
        // Heterozygous Hb C trait - and iron deficiency
        he502: 'Findings consistent with heterozygous Hemoglobinc C (Hb C trait) and iron deficiency. Iron deficiency can obscure the presence of co-existing abnormal hemoglobins. Repeat evaluation after correction of the iron deficiency may be helpful. ',
        // Hemoglobin C trait and beta plus-thal (C-beta+ thal) - C > A, F 2-5%, A2 >3.5
        he503: 'Findings consistent with hterozygous Hemoglobin C (Hb C trait) in combination with beta(plus)-thalassemia. ',
        // Hemoglobin C trait and beta -thal (C-beta thal) - C only, F 2-5%, A2 >3.5
        he504: 'Findings consistent with  Hemoglobin C (Hb C trait) in combination with beta-thalassemia.',
        // Homozygous Hb C
        he505: 'Findings consistent with homozygous Hemoglobin C. ',
        //
        //


        commLine999 : ''
    };
    commLines_old = $.extend(true, {}, commLines);


});


/**
 * Created by Chandra Krishnan on 6/12/2020.
 */
