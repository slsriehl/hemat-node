$(window).on('load', function(){
    dxOuts = {
        dxOut100 : '- Allergic transfusion reaction (see comment)',
        dxOut101 : '- Febrile, non-hemolytic transfusion reaction (see comment)',
        dxOut102 : '- Acute hemolytic transfusion reaction (see comment)',
        dxOut103 : '- Delayed hemolytic transfusion reaction (see comment)',
        dxOut104 : '- Laboratory studies do not support TRALI',
        dxOut105 : '- Possible TRALI; defer to pending speciality testing (see comment)',
        dxOut106 : '- Laboratory data and clinical findings consistent with TACO (see comment) ',
        dxOut107 : '- No laboratory evidence of allergic or hemolytic reaction (see comment)',
        dxOut108 : '- Symptoms most consistent with underlying clincial condition; No laboratory evidence of transfusion reaction (see comment)',
        dxOut109 : ''

// Don't add comma to last entry
    };
    dxOuts_old = $.extend(true, {}, dxOuts);

    commLines = {
        commLine100 : 'Consideration for more aggressive premedication with antipyretics and anti-inflammatory agents may help alleviate symptoms. Frequent recurrent allergic reactions may warrant washing of red blood cell units or volume reduction of platelets prior to subsequent transfusions. ',
        commLine101 : 'Consideration for more aggressive premedication with antipyretics and anti-inflammatory agents may help alleviate symptoms.',
        commLine102 : 'The findings are consistent with an acute hemolytic transfusion reaction due to the presence of the ___ allo-antibody. Future transfusions with products lacking this antigen will be provided. ',
        commLine103 : 'The findings are consistent with a delayed hemolytic transfusion reaction due to minor antigenic incompatibility in the presence of a _____ allo-antibody. Most delayed haemolytic reactions have a benign course and require no treatment, however life-threatening haemolysis with severe anaemia and renal failure may occur. Close monitoring of hemolysis laboratory data is recommended. ',
        commLine104 : 'The pattern of radiographic lung injury and lack of clear temporal relationship to the time of transfusion is not typical of a TRALI. Pre-existing lung injury and or circulatory overload (aka TACO) may better fit the clinical scenario. ',
        commLine105 : 'The pattern of radiographic lung injury and possible temporal relationsihp to the time of transfusion allows for the possibility of TRALI. Correlation with ongoing anti-neutrophil antibody special testing is recommended. ',
        commLine106 : 'While some of the clinical findings are suspicious for TRALI, the lack of clear temporal relation to the time of transfusion and pre-existing cardiopulmonary insufficiency is more typical of TACO. ',
        commLine107 : 'While clinical symptoms of ____ are noted, there is no laboratory evidence of an allergic or hemolytic reaction. ',
        commLine108 : 'There is no evidence of transfusion reaction in this patient with multiple comorbidities. The symptoms are favored to represent the patient\'s underlying clinical condition. ',
        commLine109 : ''
    };
    commLines_old = $.extend(true, {}, commLines);


});


/**
 * Created by Chandra Krishnan on 6/15/2017.
 */
