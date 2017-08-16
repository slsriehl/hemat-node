$(window).on('load', function(){
    partTypes = {
        partType100: '\nSections show ### cores of liver tissue which are adequate for evaluation. ',
        partType101: '\nSections show a wedge liver tissue sample which is adequate for evaluation. ',
        partType102: '\nSections show ### cores of liver tissue which are suboptimal for evaluation, due to a paucity of hepatic parenchyma. ',

        partType999: ''

    };

    partTypes_old = $.extend(true, {}, partTypes);


    mxLines = {
// SPECIMEN ADEQUACY

// PORTAL DESCRIPTION
// Normal/generic portal injury
        mxLine110: 'The evaluable portal regions show AAAA inflammatory infiltrates, comprised of BBBB. Interface hepatitis is CCCC. DDDD piecemeal necrosis is evident. There are EEEE bile ducts within the portal regions, which show FFFF epithelial injury. Portal arterioles are unremarkable. There is GGGG cholangiolar proliferation among the portal regions. HHHHA trichrome stain shows IIII. JJJJ \n',

// LOBULAR DESCRIPTION
// Normal/generic lobular injury
        mxLine120: '\nThe hepatocytes show AAAA anisonucleosis and binucleation. There is IIII. JJJJ. There is CCCC steatosis, involving DDDD% of the parenchyma. Hepatocytes exhibiting balloon degeneration BBBB. The lobules show EEEE interstitial chronic inflammation, comprised of FFFF. There is HHHH. A PAS-d stain shows GGGG. ',

        mxLine121: 'No areas of necrosis are present. ',
        mxLine122: 'Focal acidophil bodies are present. ',
        mxLine123: 'There is subtotal necrosis evident. ',
        mxLine124: 'No giant cell hepatocyte change is seen. ',
        mxLine125: 'Focal giant cell hepatocyte change is seen. ',
        mxLine126: 'Extensive giant cell hepatocyte change is seen. ',
        mxLine127: 'No viral inclusions are evident. ',
        mxLine128: 'Some hepatocytes show nuclear clearing with eosinophilic inclusions, which are reminiscent of viral inclusions. ',
        mxLine129: 'No areas of necrosis, giant cell change or viral inclusions are seen. ',


        mxLine999: ''
    };
    mxLines_old = $.extend(true, {}, mxLines);


    dxLines = {

        dxLine999:''
    };

    dxLines_old = $.extend(true, {}, dxLines);

    commLines = {
        commLine000:'dummy',
// non-specific portal inflammation
        commLine110: 'The portal changes are mild and non-specific, and may be seen with resolving viral hepatitis or a medication reaction. Clinical correlation is recommmended',

// c/w AIH in children
        commLine111: 'The portal plasma cell infiltrate, in the context of the serologic findings, is consistent with autoimmune hepatitis. There is no evidence of primary sclerosing cholangitis / overlap syndrome. ',

// AIH changes vs medication reaction
        commLine112: 'There is a portal plasmacytic infiltrate associated with hepatocellular injury. In the appropriate clinical and serologic context, the findings would be consistent with autoimmune hepatitis. Acute statin hepatotoxicity cannot be excluded and correlation with medication changes in the past year is required. ',

// giant cell hepatitis
        commLine120: '',

// steatosis - pediatric
        commLine121: 'There is diffuse steatosis with/without lobular inflammation; no balloon degeneration of hepatocytes is evident. The pattern of steatosis may be seen with clinical metabolic syndrome, including obesity, DM2 and/or dyslipidemia. No increase in fibrosis is evident. Wilson disease can show similar morphologic findings and cannot be excluded by histology alone. Clinical correlation is recommmended. ',

// steatohepatitis- adult
        commLine122: 'There is diffuse steatosis with/without lobular inflammation; no balloon degeneration of hepatocytes is evident. The findings, in the appropriate clinical context, is commpatible with histologic evidence of steatohepatitis. There is no /a mild increase in fibrosis. Wilson disease can show similar morphologic findings and cannot be excluded by histology alone. ',

// neonatal giant cell hepatitis pattern
        commLine123: 'The differential diagnosis for the liver changes is broad, and includes entities such as gestational alloimmune liver disease, inborn error of metabolism, bile acid synthesis defect, hypopituitarism, viral or TORCH infection.\n\nCorrelation with other laboratory data is recommmended. ',

// Non-specific hepatitis with lobular injury
        commLine124: 'The pattern of lobular inflammation with hepatocyte injury is non-specific. Viral hepatitis or drug (herbal supplement) reactions are most commmonly associated with this pattern. Occasionally, Wilson\'s disease or extragastrointestinal manifestation of Celiac disease can produce a similar histiologic picture.\n\nCorrelation with other laboratory data is recommmended. ',

// Pure microvesicular steatosis
        commLine125: 'Pure microvesicular steatosis is an uncommmon pattern of liver injury which is most often associated with medication effect. Less commmon non-medication related etiologies include disorders of lipid metabolism, fatty liver in pregnancy or hornet stings. ',

// Pseudoground glass inclusions
        commLine126: 'Pseudo-ground glass inclusions (PGI) in hepatocytes have been a well described alteration in a variety of clinical settings. They are often attributed to altered hepatocytic glycogen metabolism, often in the setting of patients receiving polypharmacotherapy. They are typically a non-causative change which do not explain the clinical symptoms described. ',

    };
    commLines_old = $.extend(true, {}, commLines);

// Final diagnostic diagnoses
    dxOuts = {
        dxOut100: '\t- \n',
        dxOut101: '\t- \n',
        dxOut102: '\t- \n',
        dxOut103: '\t- \n',
        dxOut104: '\t- \n',
        dxOut105: '- Portal injury pattern with mild cholangiolar proliferation (see comment)\n',
        dxOut106: '- Portal injury pattern with severe cholangiolar proliferation (see comment)\n',
        dxOut107: '- Lymphoplasmacytic portal inflammation, suggestive of autoimmune hepatitis (see comment)\n',
        dxOut108: '- Features consistent with autoimmune hepatitis (see comment)\n',
        dxOut109: '- Steatosis involving #SS% of parenchyma\n\tSteatosis Grade: #GR#\n\tLobular Inflammation Score: #LI#\n\tHepatocyte Ballooning Score: #HB#\n\tNAS Score: #NS#\n\tFibrosis Stage: #FI#\n\nSteatosis grading and inflammation activity score based on the NASH Clinical research network scoring system.  Ref: Kleiner DE, et al. Design and validation of a histological scoring system for nonalcoholic fatty liver disease. Hepatology. 2005;41:1313–21.',
        dxOut110: '- Giant cell hepatitis pattern with mild cholestasis\n',
        dxOut111: '- Giant cell hepatitis pattern with severe cholestasis\n',
        dxOut112: '- Giant cell hepatitis pattern with features consistent with alpha-1-antitrypsin disease\n',
        dxOut113: '- Giant cell hepatitis pattern with features suggestive of cystic fibrosis\n',


        dxOut120: '- Acute hepatitis\n',
        dxOut121: '- Acute hepatitis with necrosis\n',
        dxOut122: '- Minimal non-specific hepatitis\n',
        dxOut123: '- Granulomatous inflammation\n',
        dxOut124: '- Alpha-1-antitrypsin disease\n',

        dxOut130: '- No increase in portal inflammation; grade 0\n',
        dxOut131: '- Minimal non-specific portal inflammation; grade 1\n',
        dxOut132: '- Mild portal inflammation; grade 2\n',
        dxOut133: '- Moderate portal inflammation; grade 3\n',
        dxOut134: '- Severe portal inflammation; grade 4\n',

        dxOut135: '- No increase in portal fibrosis; stage 0\n',
        dxOut136: '- Minimal increase in portal fibrosis; stage 1\n',
        dxOut137: '- Moderate increase in portal fibrosis; stage 2\n',
        dxOut138: '- Increased portal and periportal fibrosis; stage 3\n',
        dxOut139: '- Bridging fibrosis (cirrhosis); stage 4\n',

        dxOut140: '- No increase in reticuloendothelial iron, 0+\n',
        dxOut141: '- Minimal reticuloendothelial iron, 1+\n',
        dxOut142: '- Moderate increase in reticuloendothelial iron, 2+\n',
        dxOut143: '- Marked increase in reticuloendothelial iron, 3+\n',
        dxOut144: '- Minimal increase in hepatocytic iron\n',
        dxOut145: '- Marked increase in hepatocytic iron\n',

        dxOut150: '- No CMV detected by immunohistochemistry\n',
        dxOut151: '- CMV inclusions detected by immunohistochemistry\n',
        dxOut152: '- No EBV detected by in-situ hybridization\n',
        dxOut153: '- Focal EBV detected by in-situ hybridization\n',
        dxOut154: '- EBV detected by in-situ hybridization\n',
        dxOut155: '- No microorganisms seen with special stains\n',


        dxOut300: '\nStaging and grading based on the scoring system of Ludwig-Batts',
        dxOut301: '\nSteatosis grading and inflammation activity score based on the NASH Clinical Research Network scoring system. ref: Kleiner DE, et al. Design and validation of a histological scoring system for nonalcoholic fatty liver disease. Hepatology. 2005;41:1313–21.',

        dxOut999: ' '
// Don't add comma to last entry
    };
    dxOuts_old = $.extend(true, {}, dxOuts);


});

/**
 * Created by Chandra Krishnan on 6/16/2017.
 */
