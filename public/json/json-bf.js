$(window).on('load', function() {
    dxLines = {

        //Final diagnoses
        // No malignant cells
        dxLine100: 'No malignant cells seen ',
        // No microorganisms
        dxLine101: 'No microorganisms seen  ',
        //
        // Microorganism diagnosies
        // extracellular bacteria
        dxLine110: 'xtracellular bacteria present; no intracellular organisms seen ',
        // intraacellular coci
        dxLine111: 'Intracellular bacterial cocci present ',
        // extracellular mixed
        dxLine112: 'Extracellular mixed bacterial flora present; no intracellular organisms seen ',
        // intracellula rmixed
        dxLine113: 'Intracellular mixed bacterial flora present ',
        // Fungal hyphae
        dxLine114: 'Fungal hyphae present',
        // Fungal yeast
        dxLine115: 'Fungal yeast forms present ',
        // virus
        dxLine116: 'Viral cytopathic changes present ',
        //
        dxLine117: ' ',
        //
        dxLine118: ' ',
        //
        dxLine119: ' ',

        //Final special stains
        // Negative stains
        dxLine120: 'No increase in lipid-laden or hemosiderin-laden macrophages',
        dxLine121: 'No increase in hemosiderin-laden macrophages',
        dxLine122: 'No increase in lipid-laden macrophages',
        // ORO
        dxLine123: 'Few lipid-laden macrophages',
        dxLine124: 'Significant increase in lipid-laden macrophages (see comment)',
        // Fe
        dxLine125: 'Few hemosiderin-laden histiocytes present',
        dxLine126: 'Significant increase in hemosiderin-laden histiocytes (see comment)',
        // Bacteria/Fungus
        dxLine127: 'Few intracellular bacterial cocci present (see comment)',
        dxLine128: '',

        // Fungus, routine stains
        dxLine130: 'No fungal elements seen with routine stains (see comment)',
        dxLine131: 'Rare fungal hyphae seen with routine stains (see comment)',
        dxLine132: 'Rare fungal yeast seen with routine stains (see comment)',
        // Fungus, GMS
        dxLine140: 'No fungal organisms or Pneumocystis seen with silver stain',
        dxLine141: 'Rare fungal hyphae seen with silver stain (see comment)',
        dxLine142: 'Rare fungal yeast seen with silver stain (see comment)',
        dxLine143: 'Rare Pneumocystis seen with silver stain (see comment)',
        dxLine144: ' ',
        dxLine145: ' ',



        end:' '

    };

    mxLines = {
        // Gross Description

        // Specimen type
        // Peritoneal fluid
        mxLine010: 'peritoneal fluid',
        //
        mxLine011: 'right pleural fluid',
        //
        mxLine012: 'left pleural fluid',
        //
        mxLine013: 'bilateral pleural fluid',
        //
        mxLine014: 'synovial fluid',
        //
        mxLine015: 'pericardial fluid',
        //
        mxLine016: 'right pelvic fluid',
        //
        mxLine017: 'left pelvic fluid',
        //
        mxLine018: 'pelvic fluid',
        //
        mxLine019: 'cyst fluid',
        //
        mxLine020: 'urine',
        // Other wildcard fluid
        mxLine021: '#Other#',

        // cell types
        // Predominantly...
        mxLine100: 'benign epithelial cells',
        //
        mxLine101: 'mesothelial cells',
        //
        mxLine102: 'squamous cells',
        //
        mxLine103: 'urothelial cells',
        //
        mxLine104: 'degenerating cells',
        //
        mxLine105: 'necro-inflammatory debris',
        //
        mxLine106: 'neutrophils',
        //
        mxLine107: 'lymphocytes',
        //
        mxLine108: 'reactive lymphocytes',
        //
        mxLine109: 'macrophages',
        //
        mxLine110: 'hemosiderin-laden macrophages',
        //
        mxLine111: 'eosinophils',
        //
        mxLine112: 'small lymphoma cells',
        //
        mxLine113: 'large lymphoma cells',
        //
        mxLine114: 'malignant glandular cells',
        //
        mxLine115: 'clumps of malignant cells',
        //
        mxLine116: 'large, pleomorphic malignant cells',
        //
        mxLine117: 'blood',
        //
        // Minor cells (repeated from prior block)
        mxLine130: 'benign epithelial cells',
        //
        mxLine131: 'mesothelial cells',
        //
        mxLine132: 'squamous cells',
        //
        mxLine133: 'urothelial cells',
        //
        mxLine134: 'degenerating cells',
        //
        mxLine135: 'necro-inflammatory debris',
        //
        mxLine136: 'neutrophils',
        //
        mxLine137: 'lymphocytes',
        //
        mxLine138: 'reactive lymphocytes',
        //
        mxLine139: 'macrophages',
        //
        mxLine140: 'hemosiderin-laden macrophages',
        //
        mxLine141: 'eosinophils',
        //
        mxLine142: 'small lymphoma cells',
        //
        mxLine143: 'large lymphoma cells',

        mxLine144: 'malignant glandular cells',
        //
        mxLine145: 'clumps of malignant cells',
        //
        mxLine146: 'large, pleomorphic malignant cells',
        //
        mxLine147: 'background red blood cells',
        //
        // Microorganisms
        // Extracellular cocci
        mxLine150: 'Extracellular bacterial cocci are seen',
        // Intracellular cocci
        mxLine151: 'Intracellular bacterial cocci (within leukocytes) are seen',
        // Extracellular mixed
        mxLine152: 'Extracellular mixed bacterial flora (including cocci and rod-shaped forms) are seen',
        // Intracellular mixed
        mxLine153: 'Intracellular bacterial cocci and coccobacilli (mixed flora) are seen',
        // Extracellular fungal hyphae
        mxLine154: 'Occasional fungal hyphae are seen',
        // Extracellular fungal yeast
        mxLine155: 'Occasional fungal yeast forms are seen',
        // viral cytopathic
        mxLine156: 'Viral cytopathic changes (inclusions) are present',
        //
        mxLine157: ' ',
        //
        // Pertinent negatives
        // No malignant cells
        mxLine160: 'No malignant cells are seen',
        // No microorganisms
        mxLine161: 'No microorganisms are present',

        // Cell block cellularity
        mxLine180: 'The corresponding cell block(s) are essentially acellular ',
        mxLine181: 'The corresponding cell block(s) are paucicellular ',
        mxLine182: 'The corresponding cell block(s) are moderately cellular ',
        mxLine183: 'The corresponding cell block(s) are abundantly cellular ',

        // cell block populations
        mxLine185: 'and consist mostly of scant proteinaceous material. ',
        mxLine186: 'with a similar cellular composition to the cytospin slides. ',
        mxLine187: 'with a similar cellular composition to the cytospin slides, including a population of atypical lymphoid cells. ',
        mxLine188: 'with a similar cellular composition to the cytospin slides, including occasional cohesive clusters of tumor cells. ',
        mxLine189: 'with a similar cellular composition to the cytospin slides, including frequent cohesive clumps of tumor cells. ',

        // Microorganisms - routine
        mxLine200: 'No microorganisms are seen. ' ,
        mxLine201: 'No fungal elements are seen on routine stains. ',
        mxLine202: 'Extracellular bacterial organisms are present; no leukocytes with intracellular bacteria are seen. ',
        mxLine203: 'Intracellular bacterial organisms resembling bacterial cocci are seen. ',
        mxLine204: 'Intracellular bacterial organisms resembling bacterial cocco-bacilli are seen. ',
        mxLine205: 'Extracellular fungal hyphae are seen; no intracellular bacteria is present. ',
        mxLine206: 'Extracellular fungal yeast are seen; no intracellular bacteria is present. ',
        mxLine207: 'Extracellular fungal elements are seen; intracellular bacteria is also present within leukocytes. ',
        mxLine208: ' ',
        mxLine209: ' ',

        // Special stains
        // ORO
        mxLine230: '\n\nAn Oil-red-O stain on the cytospin (with appropriately working controls) shows no increase in lipid-laden macrophages. ',
        mxLine231: '\n\nAn Oil-red-O stain on the cytospin (with appropriately working controls) shows few lipid-laden macrophages; these are not significantly increased. ',
        mxLine232: '\n\nAn Oil-red O stain on the cytospin (with appropriately working controls) shows a significant increase in lipid laden macrophages. ',
        // FE
        mxLine233: '\n\nAn iron stain on the cytospin (with appropriately working controls) shows no increase in hemosiderin laden macrophages. ',
        mxLine234: '\n\nAn iron stain on the cytospin (with appropriately working controls) shows few hemosiderin laden macrophages are present. ',
        mxLine235: '\n\nAn iron stain on the cytospin (with appropriately working controls) shows numerous hemosiderin laden macrphages are present. ',
        // GMS
        mxLine236: '\n\nA GMS stain on the cytospin (with appropriately working controls) shows no fungal hyphae or pneumocystis',
        mxLine237: '\n\nA GMS stain on the cytospin (with appropriately working controls) shows fungal hyphae; no pneumocystis is seen',
        mxLine238: '\n\nA GMS stain on the cytospin (with appropriately working controls) shows fungal yeast; no pneumocystis is seen',
        mxLine239: '\n\nA GMS stain on the cytospin (with appropriately working controls) shows Pneumocystis; no fungal elements are seen',

        // Organisms
        mxLine240: ' ',
        mxLine241: ' ',
        mxLine242: ' ',
        mxLine243: ' ',
        mxLine244: ' ',
        mxLine245: ' ',


        end:' '
    };


    commLines = {
        commLine100: ' ',
        commLine101: 'Correlation with microbiologic cultures is recommended. ',
        commLine102: 'A significant increase in lipid-laden macrophages, in the appropriate clinical context, can be associated with chronic aspiration. ',
        commLine103: 'The increased lipid-laden macrophages may represent tissue injury and/or chronic aspiration. ',
        commLine104: 'Fungal elements are seen and correlation with microbiologic cultures is recommended to speciate. ',
        commLine105: 'Pneumocystis organisms are seen and correlation with microbiologic cultures is recommended to confirm. ',
        commLine106: 'Some respiratory epithelial cells show possible viral cytopathic changes. ',
        commLine107: 'Few hemosiderin-laden macrophages are seen, which may correlate with small volume airway hemorrhage. ',
        commLine108: 'The iron stains highlight frequent hemosiderin-laden macrophages, which suggests persistent or large volume airway hemorrhage. ',
        commLine109: 'There is some background red blood cells which may represent incidental procedure related changes, low-volume airway hemorrhage or tissue injury. Correlation with bronchoscopic findings is recommended',
        commLine110: 'A predominance of blood is consistent with airway or alveolar hemorrhage, but is non-specific with respect to the etiology. Correlation with bronchoscopic findings is recommended. ',



        end:' '

    };

});



/**
 * Created by chandrakrishnan on 5/16/2017.
 */
