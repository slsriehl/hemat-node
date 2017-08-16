$(window).on('load', function() {
dxLines = {

    //Final diagnoses
    dxLine100: 'No malignant cells seen',
    dxLine101: 'Few red blood cells present',
    dxLine102: 'Predominance of red blood cells',
    dxLine103: 'Predominance of reactive lymphocytes (lymphocytic pleocytosis)',
    dxLine104: 'Predominance of neutrophils',
    dxLine105: 'Maturing hematopoietic elements, consistent with bone marrow contamination',
    dxLine106: 'Rare blast-like cells seen (see comment)',
    dxLine107: 'Blasts present (see comment)',
    dxLine108: 'Rare atypical cells present (see comment)',
    dxLine109: 'Malignant tumor cells present (see comment)',
    dxLine110: 'Rare intracellular bacterial cocci seen (see comment)',
    dxLine111: 'Frequent intracellular bacterial cocci seen (see comment)',
    dxLine112: 'Rare fungal hyphae seen (see comment)',
    dxLine113: 'Hemophagocytic histiocytes present (see comment)',
    dxLine114: 'Hemosiderin-laden histiocytes present (see comment)',



    end:''

};

mxLines = {
        // Gross Description
    mxLine100: 'clear, colorless',
    mxLine101: 'pink, cloudy',
    mxLine102: 'red, bloody',

        // Microscopic description
    mxLine150: 'exceedingly paucicellular and consist of few ',
    mxLine151: 'paucicellular and consist of a heterogeneous mixture of ',
    mxLine152: 'cellular and consist of a heterogeneous mixture of ',
    mxLine153: 'moderately cellular and consist of a heterogeneous mixture of ',
    mxLine154: 'hypercellular and consist of ',
    mxLine155: 'acellular',

    // normal WBC/Other cell types present
    mxLine200: 'lymphocytes',
    mxLine201: 'reactive lymphocytes',
    mxLine202: 'monocytes',
    mxLine203: 'neutrophils',
    mxLine204: 'few neutrophils',
    mxLine205: 'eosinophils',
    mxLine206: 'few eosinophils',
    mxLine207: 'hemosiderin-laden histioyctes',
    mxLine208: 'fragments of neuropil',
    mxLine209: 'bone marrow elements',
    
    // RBC qualification
    mxLine220: 'None',
    mxLine221: 'Few red blood cells are present',
    mxLine222: 'Increased background red blood cells are seen',
    mxLine223: 'Excess red blood cells are present, suggesting peripheral blood contamination',
    mxLine224: 'empty',
    mxLine225: 'empty',

    // Abnormal cell types present
    mxLine230: 'No blasts or malignant cells are present',
    mxLine231: 'Rare blast-like cells with high N:C ratios are present',
    mxLine232: 'Few blasts are present, characterized by high N:C ratios and scant cytoplasm',
    mxLine233: 'Frequent blasts present, characterized by high N:C ratios and scant cytoplasm',
    mxLine234: 'Rare atypical cells are present, which are characterized by enlarged, somewhat degenerative hyperchromatic nuclei and larger cell size',
    mxLine235: 'Frequent malignant tumor cells present',
    mxLine236: 'Hemophagocytic histiocytes are present',

    // Organisms
    mxLine240: 'No microorganisms are seen',
    mxLine241: 'Rare intracellular bacterial cocci are seen',
    mxLine242: 'Frequent intracellular bacterial cocci are seen',
    mxLine243: 'Rare fungal hyphae are seen',
    mxLine244: 'empty',
    mxLine245: 'empty',


    end:''
};


commLines = {
    commLine100: 'N/A',
    commLine101: 'Correlation with microbiologic cultures is recommended. \n',
    commLine102: 'There are rare blast-like cells present. The significance of these cells is unclear and reactive lymphocytes cannot be excluded. In the appropriate clinical setting, repeat exam with extra fluid collected for flow cytometry may be helpful. \n ',
    commLine103: 'Blasts are present in this patient with a known history of ___. \n\nThe findings were discussed with Dr. __ on __.\n ',
    commLine104: 'Hemophagocytic histiocytes are present. In a shunt collection, this finding is usually incidental and related to CSF storage. In a spinal aspirate, the finding likely represents real hemophagocytosis, as could be seen with hemophagocytic lymphohistiocytosis. Correlation with clincial findings and other laboratory data is recommended. \n',
    commLine105: 'There are rare atypical cells present. The significance of these cells is unclear and degenerating or reactive lymphocytes cannot be excluded. As clinically warranted, repeat CSF examination may be helpful. \n',
    commLine106: 'Metastatic tumor is present in this patient with a known history of __. \n',
    commLine107: 'Hemosiderin laden histiocytes are seen. This is an expected finding in an immediate post-surgical sample or, sometimes, in sampling of shunt fluid. In a non-surgical or lumbar aspirate sample, it may represent CNS hemorrhage. Correlation with clincal and radiographic findings is recommended. \n',
    commLine108: '\nFindings discussed with Dr. ___ on __. \n',
    commLine109: '',



    end:''

};

});



/**
 * Created by chandrakrishnan on 5/13/2017.
 */
