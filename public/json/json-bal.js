$(window).on('load', function() {
    dxLines = {

        //Final diagnoses
        dxLine100: 'Predominance of alveolar macrophages',
        dxLine101: 'Predominance of neutrophils',
        dxLine102: 'Mixed neutrophils and alveolar macrophages',
        dxLine103: 'Mixed neutrophils and eosinophils',
        dxLine104: 'Predominance of oropharyngeal squamous epithelial cells',
        dxLine105: 'Predominance of mucoid debris and few degenerating cells',
        dxLine106: 'Necroinflammatory infiltrate with neutrophils and mucoid debris',
        dxLine107: 'Scant background red blood cells (see comment)',
        dxLine108: 'Moderate background red blood cells (see comment)',
        dxLine109: 'Predominance of red blood cells (hemorrhage) (see comment)',
        dxLine110: ' ',
        dxLine111: ' ',
        dxLine112: ' ',
        dxLine113: ' ',

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
        mxLine100: ' ',
        mxLine101: ' ',
        mxLine102: ' ',

        // cell mixture
        mxLine150: 'predominantly of alveolar macrophages, with fewer respiratory epithelial cells',
        mxLine151: 'predominantly of alveolar macrophages, with fewer neutrophils and respiratory epithelial cells',
        mxLine152: 'predominantly of a mixture of alveolar macrophages and neutrophils, with fewer respiratory epithelial cells',
        mxLine153: 'predominantly of neutrophils, with fewer alveolar macrophages and respiratory epithelial cells',
        mxLine154: 'predominantly of a mixture of neutrophils and eosinophils, with fewer alveolar macrophages and respiratory epithelial cells',
        mxLine155: 'predominantly of oropharyngeal squamous epithelial cells; no alveolar macrophages or respiratory epithelial cells are present',
        mxLine156: 'predominantly of mucoid debris, degenerating mononuclear cells and few neutrophils',
        mxLine157: 'predominantly of mucoid and necrotic debris with neutrophils',
        mxLine158: 'predominantly of red blood cells with scattered mature leukocytes and few alveolar macrophages',

        // backgrouond hemorrhage
        mxLine180: 'There is no conspicuous background red blood cells',
        mxLine181: 'There is a scant degree of background red blood cells',
        mxLine182: 'There is a moderate degree of background red blood cells',


        // Microorganisms
        mxLine200: 'No microorganisms are seen',
        mxLine201: 'No fungal elements are seen on routine stains',
        mxLine202: 'Extracellular bacterial organisms are present; no leukocytes with intracellular bacteria are seen',
        mxLine203: 'Both extracellular and intracellular bacterial organisms are seen',
        mxLine204: 'Extracellular fungal hyphae are seen; no intracellular bacteria is present',
        mxLine205: 'Extracellular fungal yeast are seen; no intracellular bacteria is present',
        mxLine206: 'Extracellular fungal elements are seen; intracellular bacteria is also present within leukocytes',
        mxLine207: ' ',
        mxLine208: ' ',
        mxLine209: ' ',

        // Atypia
        mxLine220: 'No malignant cells are present',
        mxLine221: 'Few epithelial cells show possible viral cytopathic changes; no malignant cells present',
        mxLine222: ' ',
        mxLine223: ' ',
        mxLine224: ' ',
        mxLine225: ' ',

        // Special stains
        // ORO
        mxLine230: 'No increase in lipid-laden macrophages is seen with an Oil-red O stain',
        mxLine231: 'Few lipid-laden macrophages are seen with an Oil-red O stain; these are not significantly increased',
        mxLine232: 'An Oil-red O stain shows a significant increase in lipid laden macrophages, which are enumerated at \> 40 in a low-power field',
        // FE
        mxLine233: 'No increase in hemosiderin laden histiocytes is seen with an iron stain',
        mxLine234: 'Few hemosiderin laden histiocytes are seen with an iron stain',
        mxLine235: 'Numerous hemosiderin laden histiocytes are seen with an iron stain',
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
