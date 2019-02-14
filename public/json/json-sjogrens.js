$(window).on('load', function(){
    partTypes = {
// adequate sampling
        partType200: 'Multiple step-leveled sections from the biopsy show adequate minor salivary gland tissue, comprised of #AAA# lobules, #BBB# of which show atrophic changes. ',
// suboptimal sampling
        partType201: 'Multiple step-leveled sections from the biopsy show suboptimal sampling of small sized minor salivary gland tissue, comprised of #AAA# lobules, #BBB# of which show atrophic changes. ',
// all atrophic
        partType202: 'Multiple step-leveled sections from the biopsy show sampling of minor salivary gland tissue, comprised of #AAA# lobules, the majority of which show atrophic changes as evidenced by frequent dilated ducts with periductal fibrosis and acinar depletion. Non-atrophic lobules are too small to adequately evaluate. ',
// no salivary gland sampling - fat
        partType203: 'Multiple step-leveled sections from the biopsy show mature adipose and fibroconnective tissue. No sampling of minor salivary gland tissue is evident. ',
// no salivary gland sampling - lymph node
        partType204: 'Multiple step-leveled sections from the biopsy show a benign lymph node and adjacent fibroconnective tissue. No sampling of minor salivary gland tissue is evident. The lymph node shows mild paracortical hyperplasia without atypical cell or large cell infiltrates. ',


        partType999: ""
//DON'T ADD COMMA TO LAST ITEM ABOVE
    };

    mxLines = {
// normal
        mxLine200: 'The lobules are comprised of unremarkable ducts without periductal fibrosis or undue dilation. ',
// atrophic lobules
        mxLine201: 'The lobules are mostly comprised of unremarkable ducts without periductal fibrosis or undue dilation. The few atrophic areas are evidenced by dilated ducts with periductal fibrosis and acinar depletion. ',
// focal duct injury
        mxLine202: 'Some ducts show epithelial injury with associated mucin extravasation and collections of muciphages. ',
// focal duct injury + granulomas
        mxLine203: 'Some ducts show epithelial injury with associated mucin extravasation and collections of muciphages. Occasional poorly formed granulomas with foamy epithelioid histocytes are seen. ',
// No lymphocytic inflammation
        mxLine204: 'No significant periductal or acinar lymphocyte predominant infiltrates are seen. ',
// focal lymphocytic sialadenitis
        mxLine205: 'There are few periductal and periacinar lymphocyte predominant infiltrates. ',
// multifocal lymphocytic sialadenitis
        mxLine206: 'There are multiple periductal and periacinar lymphocyte predominant infiltrates. ',
// Non-specific chronic sialadenitis
        mxLine207: 'There are periductal and periacinar inflammatory infiltrates comprised of a heterogeneous mixture of lymphocytes, plasma cells and histiocytes. These are closely associated with acinar lobules bearing interstitial fibrosis and duct dilation. ',
// Sclerosing chronic sialadenitis
        mxLine208: 'There are periductal and periacinar inflammatory infiltrates comprised of a heterogeneous mixture of lymphocytes, plasma cells and histiocytes. These are closely associated with acinar lobules bearing diffuse interstitial fibrosis, areas of periacinar sclerosis and prominent duct dilation. ',

// Focus score description
        mxLine209: '\n\nFOCUS SCORE: A focus score cannot be performed due to lack of appropriate lymphocyte predominant aggregates (see comment). ',
        mxLine210: '\n\nFOCUS SCORE: A total of #SSS# mm^2 of evaluable acinar tissue is present. The lobules are examined for any significant (ie. > 50 grouped chronic inflammatory cells) foci. There are #TTT# such foci present, resulting in a focus score of #UUU#. ',

// Additional microscopic findings:
// no LELs
        mxLine211: 'There are no lymphoepithelial lesions among the inflammatory foci. ',
// yes LELs
        mxLine212: 'There are occasional lymphoepithelial lesions among the inflammatory foci. ',
// No GCs
        mxLine213: 'No germinal center formation is evident among the larger inflammatory foci. ',
// Yes GCs
        mxLine214: 'Occasional germinal centers are observed among the larger inflammatory foci. ',

        mxLine999: ""
//DON'T ADD COMMA TO LAST ITEM ABOVE
    };

    dxOuts = {
        dxOut100: '\n- Salivary glands with no significant lymphocytic inflammation ',
        dxOut101: '\n- Focal lymphocytic sialadenitis ',
        dxOut102: '\n- Non-specific chronic sialadenitis ',
        dxOut103: '\n- Sclerosing chronic sialadenitis ',
        dxOut104: '\n- Granulomatous sialadenitis ',
        dxOut105: '\n- Germinal centers present ',

        dxOut200: '\n- Focus score = #FFF# (see comment)',

        dxOut999:""
    };

    commLines = {
        commLine100: 'A focus score less than 1 provides no histologic support for Sjogren disease. Approximately 10% of patient\'s with serum anti-SSA/SSB antibodies and/or other clinical features of Sjogren syndrome will show unsupportive Focus scores. Clinical correlation is recommended. \n\nReference: Sjögren\'s histopathology workshop group from ESSENTIAL (EULAR Sjögren\'s syndrome study group), et al. Standardisation of labial salivary gland histopathology in clinical trials in primary Sjögren\'s syndrome. Ann Rheum Dis. 2016 Dec 13. ',

        commLine101: 'A focus score greater than 1, in the appropriate clinical and serologic context, provides histologic support for Sjogren disease. \n\nReference: Sjögren\'s histopathology workshop group from ESSENTIAL (EULAR Sjögren\'s syndrome study group), et al. Standardisation of labial salivary gland histopathology in clinical trials in primary Sjögren\'s syndrome. Ann Rheum Dis. 2016 Dec 13. ',

        commLine102: 'The salivary gland lobules show chronic changes with areas of atrophy, which precludes meaningful calculation of a Sjogren Focus Score. Approximately 15% of patients with serum anti-SSA/SSB antibodies and/or other clinical features of Sjogren syndrome will show a non-specific chronic injury pattern.  If clinical determination for Sjogren disease is equivocal, consideration for rebiopsy to attempt sampling of non-atrophic salivary lobules may be helpful. \n\nReference: Sjögren\'s histopathology workshop group from ESSENTIAL (EULAR Sjögren\'s syndrome study group), et al. Standardisation of labial salivary gland histopathology in clinical trials in primary Sjögren\'s syndrome. Ann Rheum Dis. 2016 Dec 13. ',
        commLine999: ""
    };



});


/**
 * Created by chandrakrishnan on 6/3/2017.
 */
