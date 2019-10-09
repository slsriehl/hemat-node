$(window).on('load', function(){
    partTypes = {
// DUODENUM PARTS 100
        partType100: '\nDUODENUM, BIOPSY: \n',
        partType101: '\nDUODENUM, ___ PART, BIOPSY: \n',
        partType102: '\nDUODENUM, BULB, BIOPSY: \n',
        partType103: '\nDUODENUM, "ULCER", BIOPSY: \n',
        partType104: '\nDUODENUM "LESION", BIOPSY: \n',
        partType105: '\nDUODENUM, %%%, BIOPSY: \n',

//STOMACH PARTS 150
        partType151: '\nSTOMACH, BIOPSY: \n',
        partType152: '\nSTOMACH, ANTRUM AND BODY, BIOPSY: \n',
        partType153: '\nSTOMACH, ANTRUM, BIOPSY: \n',
        partType154: '\nSTOMACH, BODY, BIOPSY: \n',
        partType155: '\nSTOMACH, CARDIA, BIOPSY: \n',
        partType156: '\nSTOMACH, ###, BIOPSY: \n',

//ESOPHAGUS PARTS 200
        partType200: '\nESOPHAGUS, BIOPSY: \n',
        partType201: '\nESOPHAGUS, DISTAL, BIOPSY: \n',
        partType202: '\nESOPHAGUS, MID, BIOPSY: \n',
        partType203: '\nESOPHAGUS, PROXIMAL, BIOPSY: \n',
        partType204: '\nESOPHAGUS,  CM, BIOPSY: \n',
        partType205: '\nGASTROESOPHAGEAL JUNCTION, BIOPSY: \n ',
        partType206: '\nESOPHAGUS "LESION", BIOPSY: \n',

//TERMINAL ILEUM PARTS 250
        partType250: '\nTERMINAL ILEUM, BIOPSY: \n',
        partType251: '\nSMALL INTESTINE, ANASTOMOSIS SITE, BIOPSY: \n',
        partType252: '\nJEJUNUM, BIOPSY: \n',
        partType253: '\nILEUM, BIOPSY: \n',
        partType254: '\nILEUM "POUCH", BIOPSY: \n',
        partType255: '\nILEOCECAL VALVE, BIOPSY: \n',
        partType256: '\nSMALL INTESTINE, BIOPSY: \n',
        partType257: '\nILEUM "LESION", BIOPSY: \n',

//COLON AND RECTUM PARTS 300
        partType300: '\nCOLON, CECUM, BIOPSY: \n',
        partType301: '\nCOLON, ASCENDING, BIOPSY: \n',
        partType302: '\nCOLON, CECUM AND ASCENDING, BIOPSY: \n',
        partType303: '\nCOLON, RIGHT, BIOPSY: \n',
        partType304: '\nCOLON, TRANSVERSE, BIOPSY: \n',
        partType305: '\nCOLON, DESCENDING, BIOPSY: \n',
        partType306: '\nCOLON, LEFT, BIOPSY: \n',
        partType307: '\nCOLON, RECTOSIGMOID, BIOPSY: \n',
        partType308: '\nCOLON, SIGMOID, BIOPSY: \n',
        partType309: '\nCOLON, RANDOM, BIOPSY: \n',
        partType310: '\nCOLON, QQQQQ, BIOPSY: \n',
        partType311: '\nCOLON "LESION", BIOPSY: \n',
        partType312: '\nCOLON, TRANSVERSE AND DESCENDING, BIOPSY: \n',
        partType400: '\nRECTUM, BIOPSY: \n',
        partType401: '\nRECTUM, "LESION", BIOPSY: \n',
        partType999: ''

//DON'T ADD COMMA TO LAST ITEM ABOVE
    };

    dxLines = {
//generic diagnoses 1
        dxLine1: '- No significant abnormalities \n',
        dxLine2: '- Mild non-specific changes (see comment) \n',
        dxLine3: '- No microorganisms seen with GMS and AFB stains \n',
        dxLine4: '- No Helicobacter-like organisms seen with Giemsa stain \n',
        dxLine5: '- No specimen identified in the sample bottle \n',
        dxLine6: '- Specimen did not survive processing \n',

//duodenum diagnoses 100
        dxLine100: '- Focal acute inflammation\n',
        dxLine101: '- Chronic and active duodenitis\n',
        dxLine102: '- Chronic and focal active duodenitis\n',
        dxLine103: '- Villous blunting and increased intraepithelial lymphocytes (see comment)\n',
        dxLine104: '- Increased lamina propria cellularity \n',
        dxLine105: '- Increased lamina propria eosinophils \n',
        dxLine106: '- Chronic and active duodenitis with granulomas \n',
        dxLine107: '- Increased intraepithelial lymphocytes with normal villous architecture (see comment) \n',
        dxLine108: '- Chronic duodenitis with gastric foveolar metaplasia \n',
        dxLine109: '- Chronic and active duodenitis with gastric foveolar metaplasia \n',
        dxLine110: '- Focally increased intraepithelial lymphocytes within villous tips (see comment) \n',
        dxLine111: '- Mild villous shortening without increased intraepithelial lymphocytes (see comment) \n',

//stomach diagnoses 150
        dxLine150: '- No significant abnormalities \n- No Helicobacter-like organisms seen\n',
        dxLine151: '- Focally enhanced gastritis (see comment) \n- No Helicobacter-like organisms seen\n',
        dxLine152: '- Mild chronic gastritis \n- No Helicobacter-like organisms seen\n',
        dxLine153: '- Chronic gastritis \n- No Helicobacter-like organisms seen\n',
        dxLine154: '- Chronic and active gastritis \n- No Helicobacter-like organisms seen\n',
        dxLine155: '- Chronic and active gastritis \n- Helicobacter-like organisms are identified\n',
        dxLine156: '- Chronic and focal active gastritis \n- No Helicobacter-like organisms seen\n',
        dxLine157: '- Chronic and focal active gastritis \n- Helicobacter-like organisms are identified\n',
        dxLine158: '- Chronic and active gastritis with granulomas \n- No Helicobacter-like organisms seen\n',
        dxLine159: '- Chronic and active gastritis with ulcer \n- No Helicobacter-like organisms seen\n',
        dxLine160: '- Increased lamina propria eosinophils \n- No Helicobacter-like organisms seen\n',
        dxLine161: '- Chronic gastritis \n- Helicobacter-like organisms are identified\n',
        dxLine162: '- Fundic gland polyp \n- No Helicobacter-like organisms seen\n',
        dxLine163: '- Reactive gastropathy \n- No Helicobacter-like organisms seen\n ',
        dxLine164: '- Mild chronic gastritis \n- No Helicobacter-like organisms seen\n ',
        dxLine165: '- Chronic gastritis with increased eosinophils\n- No Helicobacter-like organisms seen\n ',
        dxLine166: '- Chronic and active gastritis with atrophic changes\n- No Helicobacter-like organisms seen\n ',
        dxLine167: '- Increased lamina propria eosinophils and prominent subepithelial collagen (see comment) \n- No Helicobacter-like organisms seen\n',

//esophagus diagnoses 200
        dxLine200: '- No significant abnormalities \n',
        dxLine201: '- Reactive esophagitis with increased eosinophils \n',
        dxLine202: '- Eosinophilic esophagitis \n',
        dxLine203: '- Active esophagitis \n- No fungal organisms seen with ___ stain \n',
        dxLine204: '- Fungal esophagitis \n',
        dxLine205: '- Reactive esophagitis with increased intraepithelial lymphocytes \n',
        dxLine206: '- Reactive esophagitis \n',
        dxLine207: '- Squamous mucosa with no significant abnormalities \n- Gastric cardia with minimal chronic inflammation \n',
        dxLine208: '- Active esophagitis \n- Fungal organisms identified with ___ stain \n',
        dxLine209: '- Mild reactive esophagitis \n',
        dxLine210: '- Mild reactive esophagitis with few eosinophils\n',
        dxLine211: '- Squamous mucosa with no significant abnormalities  \n- Gastric cardia with intestinal metaplasia; no dysplasia or carcinoma seen\n',
        dxLine212: '- Acute erosive esophagitis (see comment) \n',

//terminal ileum diagnoses 250
        dxLine251: '- Focal acute inflammation\n',
        dxLine252: '- Chronic and active ileitis\n',
        dxLine253: '- Chronic and focal active ileitis\n',
        dxLine254: '- Chronic and active ileitis with granulomas\n',
        dxLine255: '- Active ileitis with ulcer\n',
        dxLine256: '- Non-specific increase in lamina propria cellularity\n',
        dxLine257: '- Increased lamina propria eosinophils\n',
        dxLine258: '- Granulomatous inflammation\n',

//colon diagnoses 300
        dxLine300: '- Focal acute inflammation\n',
        dxLine301: '- Chronic and active colitis\n',
        dxLine302: '- Chronic and focal active colitis\n',
        dxLine303: '- Chronic and active colitis with granulomas\n',
        dxLine304: '- Granulomatous inflammation\n',
        dxLine305: '- Chronic and active colitis with ulcer\n',
        dxLine306: '- Increased lamina propria eosinophils\n',
        dxLine307: '- Gland architectural changes\n',
        dxLine308: '- Ganglion cells present\n- Normal calretinin staining pattern (see comment)\n',
        dxLine309: '- No ganglion cells seen\n- Abnormal calretinin staining pattern (see comment) \n',
        dxLine310: '- Tubular adenoma\n',
        dxLine311: '- Tubular adenoma with high grade dysplasia\n- No invasive carcinoma seen (see comment) \n',
        dxLine312: '- Hyperplastic polyp\n',
        dxLine313: '- Sessile serrated lesion (aka sessile serrated adenoma)\n',
        dxLine314: '- Juvenile polyp\n',
        dxLine315: '- Melanosis coli\n',
        dxLine316: '- Sessile serrated lesion with high-grade dysplasia\n- No invasive carcinoma seen (see comment)\n',
        dxLine317: '- Traditional serrated adenoma\n',
        dxLine318: '- Interstitial fibrosis and architectural distortion, consistent with solitary rectal ulcer / prolapse\n',
        dxLine319: '- Increased intraepithelial lymphocytes without excess subepithelial collagen (see comment)\n',
        dxLine320: '- Increased subepithelial collagen\n',


        dxLine999: ''

//DON'T ADD COMMA TO LAST ITEM ABOVE
    };

    mxLines = {
        // NO GRANULOMAS GENERICCOMMENT
        mxLine1: "\nNo granulomas are seen in any of the biopsies. \n",
        // NO GRANULOMAS, CYTOPATHIC CHANGES OR VIRAL INCLUSIONS
        mxLine2: "\nNo granulomas, viral cytopathic changes or inclusions are seen in any of the biopsies. \n",
        // NO GRANULOMAS, CYTOPATHIC CHANGES OR VIRAL INCLUSIONS
        mxLine3: "\nThere is no evidence of acute cellular rejection in the transplanted bowel, or graft vs. host disease in the native bowel. \n",

        // DUODENUM MICROS 100 * note that strings are bounded by quotes, not apostrophes in this section
        // Normal duo
        mxLine100: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. There is no undue crypt hyperplasia. The lamina propria is not excessively cellular. No increase in intraepithelial lymphocytes is seen. \n",
        // CAD
        mxLine101: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. There is no undue crypt hyperplasia. The lamina propria shows variably increased cellularity, including a diffuse neutrophilic infiltrate that extends into the crypt epithelium. No increase in intraepithelial lymphocytes is seen. \n",
        //FAD
        mxLine102: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. The lamina propria is not overall excessively cellular; however, there is a focal neutrophilic infiltrate that extends into the crypt epithelium. No increase in intraepithelial lymphocytes is seen. \n",
        //CELIAC
        mxLine103: "Sections from the 'duodenum' show fragments of small bowel tissue with villous atrophy and lengthening of the crypt bases. The lamina propria shows increased cellularity comprised of lymphocytes and plasma cells.  The surface epithelium displays an increase in intraepithelial lymphocytes that are enumerated at >40 per 100 epithelial cells. \n",
        //INCREASED LP DUO
        mxLine104: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. The lamina propria shows a nonspecific increase in overall cellularity, comprised mainly of lymphocytes and plasma cells. No undue neutrophilic or eosinophilic infiltrates are seen. No increase in intraepithelial lymphocytes is seen. \n",
        //INCREASED LP EOS DUO
        mxLine105: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. The lamina propria shows a nonspecific increase in overall cellularity, comprised mainly of lymphocytes and plasma cells. Additionally, there are increased numbers of eosinophils, including some intraepithelial eosinophils. No neutrophils or increase in intraepithelial lymphocytes is seen. \n",
        // NORMAL VILLI AND INCREASED IELS
        mxLine106: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. The lamina propria is not overall excessively cellular; however, there is a focal mild increase in plasma cells and lymphocytes. The crypt bases are not elongated. In some of the villi, there is a mild increase in intraepithelial lymphocytes that number 20 -30 per 100 epithelial cells. \n",
        // CHRONIC ACTIVE WITH GRANULOMAS
        mxLine107: "Sections from the 'duodenum' show fragments of small bowel tissue with mostly normal villous architecture. No increase in intraepithelial lymphocytes is seen. The lamina propria shows variably increased cellularity, including a  neutrophilic infiltrate that extends into the crypt epithelium. Few well-formed, non-necrotizing granulomas are present in the lamina propria. [##GMS/AFB stains show no fungal or mycobacterial organisms.] \n ",
        // CHRONIC WITH GASTRIC METAPLAISA
        mxLine108: "Sections from the 'duodenum' show fragments of small bowel tissue with mostly normal villous architecture. There is no undue crypt hyperplasia. The lamina propria shows variably increased cellularity comprised of lymphocytes, plasma cells and few eosinophils. Some of the mucosa shows gastric foveolar metaplasia, characterized by the presence of antral-type mucous cells and loss of goblet-cells. No increase in intraepithelial lymphocytes is seen. No neutrophilic infiltrates or ulcers are present. \n ",
        // CHRONIC INACTIVE WITH GASTRIC METAPLASIA
        mxLine109: "Sections from the 'duodenum' show fragments of small bowel tissue with mostly normal villous architecture. There is no undue crypt hyperplasia. The lamina propria shows variably increased cellularity comprised of lymphocytes, plasma cells and few eosinophils. Focal neutrophilic infiltrates are also present and extend into the crypt epithelium. Some of the mucosa shows gastric foveolar metaplasia, characterized by the presence of antral-type mucous cells and loss of goblet-cells. No increase in intraepithelial lymphocytes is seen. \n ",
        // CHRONIC ACTIVE WITH GASTRIC METAPLASIA
        mxLine110: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. The lamina propria shows increased cellularity comprised of lymphocytes, plasma cells and few eosinophils. In addition, there is a focal neutrophilic infiltrate that extends into the crypt epithelium. No increase in intraepithelial lymphocytes is seen.  \n ",
        // TIP VILLITIS
        mxLine111: "Sections from the 'duodenum' show fragments of small bowel tissue with normal villous architecture. There is no undue crypt hyperplasia. The lamina propria is not excessively cellular. Some of the villous tips show increased intraepithelial lymphocytes, which are enumerated at 12-15 per involved tip (normal < 10). A diffuse increase in intraepithelial lymphocytes is not seen.  \n ",
        // VILLOUS BLUNTING, NO INCREASE IN IELS
        mxLine112: "Sections from the 'duodenum' show fragments of small bowel tissue with mild villous shortening and slight lengthening of the crypts. The lamina propria shows a mild increase in lamina propria cellularity, comprised of lymphocytes and plasma cells. No increase in intraepithelial lymphocytes is evident. \n ",

        // STOMACH MICROS 150
        // NORMAL STOMACH
        mxLine150: "Sections from the 'stomach' biopsy show fragments of unremarkable gastric mucosa. The lamina propria is not excessively cellular. No Helicobacter-like organisms are seen. \n",
        // NORMAL STOMACH, ALL PARTS
        mxLine151: "Sections from the ' ' gastric biopsies each show fragments of unremarkable gastric mucosa. The lamina propria is not excessively cellular. No Helicobacter-like organisms are seen. \n",
        // MILD CHRONIC GASTRITIS
        mxLine152: "Sections from the 'stomach' biopsy show fragments of mildly reactive gastric mucosa. The lamina propria shows increased cellularity comprised of lymphocytes and plasma cells. No neutrophilic infiltrates are seen. No Helicobacter-like organisms are seen. \n",
        // CHRONIC GASTRITIS, NO HP
        mxLine153: "Sections from the 'stomach' biopsy show fragments of reactive gastric mucosa. The lamina propria shows increased cellularity comprised of lymphocytes, eosinophils and plasma cells. No neutrophilic infiltrates are seen. No Helicobacter-like organisms are seen. \n",
        // CHRONIC AND ACTIVE GASTRITIS, BUT NO HP
        mxLine154: "Sections from the 'stomach' biopsy show fragments of gastric mucosa with increased lamina propria cellularity that is due to lymphocytes, plasma cells and neutrophils. The neutrophilic infiltrate extends into glands with reactive epithelial changes. No Helicobacter-like organisms are seen. \n",
        // ACUTE GASTRITIS WITH POSITIVE HP
        mxLine155: "Sections from the 'stomach' biopsy show fragments of gastric mucosa with increased lamina propria cellularity that is due to lymphocytes, plasma cells and neutrophils. The neutrophilic infiltrate extends into glands with associated reactive changes. Helicobacter-like organisms are seen on routine stains. \n",
        // MILD CHRONIC GASTRITIS
        mxLine156: "Sections from the 'stomach' biopsy show fragments of mildly reactive gastric mucosa. The lamina propria shows a mild prominence of eosinophils along the base of the pits. No neutrophilic infiltrates are seen. No Helicobacter-like organisms are seen. \n",
        // FUNDIC GLAND POLYP
        mxLine157: "Sections from the 'stomach' biopsy show fragments of gastric tissue with cystic dilations of the oxyntic crypts. These dilated glands show flattened lining with a mixture of chief and parietal cells, with occasional mucous metaplasia. A mild chronic inflammatory infiltrate is present in the interstitium. No neutrophilic infiltrates are seen. No Helicobacter-like organisms are seen. \n",
        // CHRONIC GASTRITIS, YES HP
        mxLine158: "Sections from the 'stomach' biopsy show fragments of reactive gastric mucosa. The lamina propria shows increased cellularity comprised of lymphocytes and plasma cells, with some lymphoid aggregates. No neutrophilic infiltrates are seen. Helicobacter-like organisms are seen on routine stains. \n",
        // CHRONIC ACTIVE WITH GRANULOMAS, NO HP
        mxLine159: "Sections from the 'stomach' biopsy show fragments of gastric mucosa with increased lamina propria cellularity that is due to lymphocytes, plasma cells and neutrophils. The neutrophilic infiltrate extends into glands with reactive epithelial changes. Few well-formed, non-necrotizing granulomas are present. [##GMS/AFB stains show no fungal or mycobacterial organisms.] No Helicobacter-like organisms are seen. \n ",
        // CHRONIC ACTIVE WITH ULCER, NO HP
        mxLine160: "Sections from the 'stomach' biopsy show fragments of gastric mucosa with increased lamina propria cellularity that is due to lymphocytes, plasma cells and neutrophils. The neutrophilic infiltrate extends into glands with reactive epithelial changes. The surface mucosa shows focal ulcer formation. No Helicobacter-like organisms are seen. \n ",
        //  CHRONIC GASTRITIS WITH INCREASED EOS
        mxLine161: "Sections from the 'stomach' biopsy show fragments of mildly reactive gastric mucosa. The lamina propria shows increased cellularity comprised of lymphocytes and plasma cells, as well as increased numbers of basal & interstitial eosinophils. No neutrophilic infiltrates are seen. No Helicobacter-like organisms are seen. \n",
        //  FOCALLY ENHANCED GASTRITIS
        mxLine162: "Sections from the 'stomach' biopsy show fragments of mostly unremarkable gastric mucosa. The lamina propria shows #FFF# with increased cellularity comprised of lymphocytes, few eosinophils#NNN#. This focus is associated with crypt injury; however, the remaining glands are unremarkable. No Helicobacter-like organisms are seen. \n",
        //  REACTIVE GASTROPATHY
        mxLine163: "Sections from the 'stomach' biopsy show fragments of edematous gastric antral mucosa without excess lamina propria cellularity. There is foveolar hyperplasia characterized by villiform change of the surface foveola and elongation and tortuosity of the gastric pits resembling a corkscrew. The surface foveolar epithelium is mucin depleted with cuboidal cells and hyperchromatic nuclei; the oxyntic mucosa is unremarkable. [There is smooth muscle proliferation and vascular congestion in the lamina propria with interfoveolar smooth muscle fibers.] No Helicobacter-like organisms are seen. \n ",
        //  INCREASED LP EOS
        mxLine164: "Sections from the 'stomach' biopsy show fragments of mildly reactive gastric mucosa. The lamina propria shows increased cellularity with a prominent eosinophilic infiltrate. Eosinophils extend into the crypt epithelium and along the base of the crypts. No neutrophilic infiltrates are seen. No Helicobacter-like organisms are seen. \n",
        // FOCAL ACUTE GASTRITIS, BUT NO HP
        mxLine165: "Sections from the 'stomach' biopsy show fragments of gastric mucosa with increased lamina propria cellularity that is due to lymphocytes and plasma cells. There is a focal neutrophilic infiltrate extends into some glands with reactive epithelial changes. No Helicobacter-like organisms are seen. \n",
        // FOCAL ACUTE GASTRITIS WITH POSITIVE HP
        mxLine166: "Sections from the 'stomach' biopsy show fragments of gastric mucosa with increased lamina propria cellularity that is due to lymphocytes and plasma cells. There is a focal neutrophilic infiltrate extends into some glands with reactive epithelial changes. Helicobacter-like organisms are seen on routine stains. \n",
        // ATROPHIC GASTRITIS
        mxLine167: "Sections from the 'stomach' biopsy show fragments of gastric mucosa with increased lamina propria cellularity that is due to lymphocytes, plasma cells and neutrophils. The neutrophilic infiltrate extends into glands with reactive epithelial changes. There are multifocal areas with loss of oxyntic glands due to the inflammatory infiltrate. Focal pseudo-pyloric glandular metaplasia is evident. No Helicobacter-like organisms are seen.   \n",
        // COLLAGENOUS GASTRITIS
        mxLine168: "Sections from the 'stomach' biopsy show fragments of unremarkable gastric mucosa and separate fragments of inflamed mucosa. The latter is characterized by reactive gastric epithelium. The lamina propria shows increased cellularity with a prominent eosinophilic and plasma cell infiltrate. Eosinophils extend into the crypt epithelium and along the base of the crypts. No neutrophilic infiltrates are seen. There is prominent background interstitial fibroplasia and thick subepithelial mature collagen. This is highlighted with a trichrome stain. No Helicobacter-like organisms are seen.   \n",
        // IRON SALT GASTRITIS
        mxLine169: "Sections from the 'stomach' biopsy show fragments of edematous gastric antral mucosa with increased lamina propria cellularity, comprised of lymphocytes and neutrophils. There is foveolar hyperplasia with surface foveolar mucin depletion and surface erosion. Iron-salt deposits are present along the areas of erosion. No Helicobacter-like organisms are seen.  \n",

        //ESOPHAGUS MICROS 200
        // NORMAL ESOPHAGUS, SINGLE
        mxLine200: "Sections from the 'esophagus' biopsy show fragments of unremarkable squamous mucosa without intraepithelial inflammatory infiltrates. \n",
        // NORMAL EOSPHAGUS, ALL SITES
        mxLine201: "Sections from the '###' esophageal biopsies show similar findings. They show fragments of unremarkable squamous mucosa without intraepithelial inflammatory infiltrates. \n",
        // TYPICAL REFLUX, 1 SITE
        mxLine202: "Sections from the 'esophagus' biopsy show fragments of reactive squamous mucosa characterized by prominent basal cell hyperplasia and spongiosis. There is a mild increase in intraepithelial eosinophils which number up to 5 in a representative high-powered field. \n",
        // TYPICAL REFLUX, ALL SITES
        mxLine203: "Sections from the '###' esophageal biopsies show similar findings which are described together. They show fragments of reactive squamous mucosa characterized by prominent basal cell hyperplasia and spongiosis. There is a mild increase in intraepithelial eosinophils which number up to 10 in a representative high-powered field at each site. \n",
        // TYPICAL EE, ALL SITES
        mxLine204: "Sections from the '###' esophageal biopsies show similar findings. They show fragments of reactive squamous mucosa characterized by prominent basal cell hyperplasia and spongiosis. There is a marked increase in intraepithelial eosinophils which number up to 80 in a representative high-powered field at each site. The infiltrate extends the entire thickness of the mucosa and focally includes small superficial aggregates. \n",
        // ACUTE ESOPHAGITIS, 1 SITE, NO CANDIDA
        mxLine205: "Sections from the 'esophagus' biopsy show fragments of reactive squamous mucosa with a superficial neutrophilic infiltrate [and areas of surface ulceration]. No intraepithelial eosinophils are seen. A PAS-f stain shows no fungal organisms. \n",
        // ACUTE ESOPHAGITIS, 1 SITE, WITH CANDIDA
        mxLine206: "Sections from the 'esophagus' biopsy show fragments of reactive squamous mucosa with a superficial neutrophilic infiltrate [and areas of surface ulceration]. No intraepithelial eosinophils are seen. A PAS-f stain shows yeast with pseudohyphae in the areas of inflammation. \n",
        // CANDIDA ONLY
        mxLine207: "Sections from the 'esophagus' biopsy show fragments of unremarkable squamous mucosa without intraepithelial inflammatory infiltrates. A PAS-f stain shows yeast with pseudohyphae attached to the luminal surface, and focally invading into the mucosal epithelium. \n",
        // REACTIVE ESOPH WITH INCREASED LYMPHS (CROHNS LIKE)
        mxLine208: "Sections from the 'esophagus' biopsy show fragments of reactive squamous mucosa characterized by prominent basal cell hyperplasia and prominent spongiosis. There are increased numbers of intraepithelial lymphocytes extending from the mucosal base to the surface. \n ",
        // REACTIVE ESOPH, NO IEE
        mxLine209: "Sections from the 'esophagus' biopsy show fragments of reactive squamous mucosa characterized by basal cell hyperplasia and spongiosis. There are few intraepithelial lymphocytes; no intraepithelial eosinophils or neutrophils are seen. \n ",
        // REACTIVE ESOPH, NO IEE, ALL SITES
        mxLine210: "Sections from the '###' esophageal biopsies show similar findings. They show fragments of reactive squamous mucosa characterized by basal cell hyperplasia and spongiosis. There are few intraepithelial lymphocytes; no intraepithelial eosinophils or neutrophils are seen. \n ",
        // NORMAL GEJ BIOPSY
        mxLine211: "Sections from the 'esophagus' biopsy show fragments of unremarkable squamous mucosa without intraepithelial inflammatory infiltrates. There is sampling of gastric cardia-type mucosa with a mild increase in lamina propria cellularity comprised of lymphocytes and plasma cells. No intestinal metaplasia is seen. ",
        // TYPICAL EE, 1 SITE
        mxLine212: "Sections from the 'esophagus' biopsy show fragments of reactive squamous mucosa characterized by prominent basal cell hyperplasia and spongiosis. There is a marked increase in intraepithelial eosinophils which number up to 75 in a representative high-powered field. The infiltrate extends the entire thickness of the mucosa and focally includes small superficial aggregates. \n",
        // MILD RE
        mxLine213: "Sections from the 'esophagus' biopsy show fragments of mildly reactive squamous mucosa characterized by minimal basal cell hyperplasia and some spongiosis. There are few intraepithelial lymphocytes; no intraepithelial eosinophils or neutrophils are seen. \n ",
        // MILD REE
        mxLine214: "Sections from the 'esophagus' biopsy show fragments of mildly reactive squamous mucosa characterized by spongiosis. There are few intraepithelial eosinophils which number up to 5 in a representative high-powered field. \n",
        // GEJ WITH IM; NO DYS OR CA
        mxLine215: "Sections from the 'esophagus' biopsy show fragments of unremarkable squamous mucosa without intraepithelial inflammatory infiltrates. There is sampling of the gastroesophageal junction with gastric cardia-type mucosa bearing a mild increase in lamina propria cellularity comprised of lymphocytes and plasma cells. There is intestinal metaplasia without dysplasia or carcinoma.  \n",
        // ACUTE EROSIVE ESOPHAGITIS
        mxLine216: "Sections from the 'esophagus' biopsy show fragments of markedly reactive squamous mucosa with confluent surface erosion and squamous epithelial degeneration. There is a brisk surface neutrophilic infiltrate and sparse eosinophils. A PAS-f stain shows no fungal organisms.  \n",


        // TERMINAL ILEUM 250
        // NORMAL TI
        mxLine250: "Sections from the 'terminal ileum' show fragments of small bowel tissue with a normal villous architecture. The lamina propria shows scattered lymphoid aggregates, but no neutrophilic infiltrates. \n",
        // CHRONIC ACTIVE ILEITIS
        mxLine251: "Sections from the 'terminal ileum' biopsy show fragments of reactive small bowel tissue with disorganized villi and increased lamina propria cellularity comprised of plasma cells, lymphocytes and neutrophils. There is patchy cryptitis with rare crypt abscesses. Prominent submucosal lymphoid aggregates are evident. \n",
        // CHRONIC ACTIVE ILEITIS WITH ULCER
        mxLine252: "Sections from the 'terminal ileum' biopsy show fragments of reactive small bowel tissue with disorganized villi and increased lamina propria cellularity comprised of plasma cells, lymphocytes and neutrophils. There is patchy cryptitis with rare crypt abscesses. Some areas of the surface show ulcer formation. \n",
        // NON-SPECIFIC CHANGES WITH INCREASED EOS
        mxLine253: "Sections from the 'terminal ileum' show fragments of small bowel tissue with a normal villous architecture. The lamina propria shows scattered lymphoid aggregates, but no neutrophilic infiltrates. There is a mild, non-specific increase in lamina propria eosinophils. \n",
        // INCREASED LP CELLULARITY, TI
        mxLine254: "Sections from the 'terminal ileum' show fragments of small bowel tissue with a normal villous architecture. The lamina propria shows a nonspecific increase in overall cellularity, comprised mainly of lymphocytes and plasma cells; prominent lymphoid aggregates are also present. No undue neutrophilic or eosinophilic infiltrates are seen. No increase in intraepithelial lymphocytes is seen. \n",
        // FOCAL ACUTE INFLAMMATION TI
        mxLine255: 'Sections from the \'terminal ileum\' biopsy show fragments of small bowel tissue with normal villous architecture. Overall, the lamina propria shows a mild increase in cellularity, including focal neutrophilic infiltrates within the surface mucosa. ',
        // CHRONIC FOCAL ACTIVE ILEITIS
        mxLine256: "Sections from the 'terminal ileum' biopsy show fragments of reactive small bowel tissue with disorganized villi and increased lamina propria cellularity comprised of plasma cells and lymphocytes. There is a focal neutrophilic infiltrate that extends into the surface epithelium. Prominent submucosal lymphoid aggregates are evident. \n",
        // CHRONIC ACTIVE ILEITIS WITH ULCER
        mxLine257: "Sections from the 'terminal ileum' biopsy show fragments of reactive small bowel tissue with disorganized villi and increased lamina propria cellularity comprised of plasma cells, lymphocytes and neutrophils. There is patchy cryptitis with rare crypt abscesses. There are focal [is a single granuloma] non-necrotizing granulomas in the submucosa. \n",
        // GRANULOMATOUS INFLAMMATION
        mxLine258: "Sections from the 'terminal ileum' show fragments of small bowel tissue with a normal villous architecture. The lamina propria shows scattered lymphoid aggregates, but no neutrophilic infiltrates. Few lamina propria non-necrotizing granulomata are present. \n",

        // COLON MICROS 300
        // COLON NSA, 1 SITE
        mxLine300: "Sections from the 'colon' biopsy show fragments of colonic tissue with normal glandular architecture. The lamina propria is not excessively cellular. No neutrophilic infiltrates are seen. \n",
        // COLON NSA, ALL SITES
        mxLine301: "Sections from all the colonic biopsies show similar findings and are described together. They show fragments of colonic tissue with normal glandular architecture. The lamina propria is not excessively cellular. No neutrophilic infiltrates are seen. \n",
        // COLON MILD IBD, 1 SITE
        mxLine302: "Sections from the 'colon' biopsy show fragments of colonic tissue with increased lamina propria cellularity comprised of plasma cells, lymphocytes, eosinophils and neutrophils. Some crypts show active cryptitis with scattered intraepithelial neutrophils. The overall glandular architecture is mildly disorganized. \n",
        // COLON MILD IBD, ALL SITES
        mxLine303: "Sections from all the colonic biopsies show similar findings and are described together. They show fragments of colonic tissue with increased lamina propria cellularity comprised of plasma cells, lymphocytes, eosinophils and neutrophils. Some crypts show active cryptitis with scattered intraepithelial neutrophils. The overall glandular architecture is mildly disorganized, as evidenced by irregular distribution and occasional gland branching. \n",
        // COLON SEVERE IBD, 1 SITE
        mxLine304: "Sections from the 'colon' biopsy show fragments of colonic tissue with increased lamina propria cellularity comprised of plasma cells, lymphocytes, eosinophils and neutrophils. There is extensive cryptitis with scattered crypt abscesses. The overall glandular architecture is disorganized and shows reactive glandular epithelium. [Focal surface ulcers are present]. \n",
        // COLON SEVERE IBD, ALL SITES
        mxLine305: "Sections from all the colonic biopsies show similar findings and are described together. They show fragments of colonic tissue with increased lamina propria cellularity comprised of plasma cells, lymphocytes, eosinophils and neutrophils. There is extensive cryptitis with scattered crypt abscesses. The overall glandular architecture is disorganized and shows reactive glandular epithelium. [Focal surface ulcers are present]. \n",
        // COLON LP EOS, 1 SITE
        mxLine306: "Sections from the 'colon' biopsy show fragments of colonic tissue with normal glandular architecture. The lamina propria is not excessively cellular; however, there is a relative prominence of eosinophils that are focally intraepithelial. No neutrophilic infiltrates are seen. \n",
        // RECTUM NSA
        mxLine307: "Sections from the 'rectum' biopsy show fragments of colonic tissue with normal glandular architecture. The lamina propria is not excessively cellular. No neutrophilic infiltrates are seen. \n",
        // RECTUM, JUVENILE POLYP
        mxLine308: "Sections from the '_____ ' show a polyp composed of cystically dilated glands and a mixed inflammatory stroma. The surface of the polyp shows extensive ulceration with granulation tissue reaction. Some of the glands show mucin extravasation and luminal neutrophils. \n",
        // HIRSCHSPRUNGS, NORMAL
        mxLine309: "Multiple serial step sections from the rectum biopsy show #NUM# fragments of large bowel tissue, #ADEQ# of which show adequate amounts of submucosa for evaluation of ganglion cells. Ganglion cells are present in the submucosa of all adequate biopsy fragments. No hypertrophic nerve trunks are apparent. The mucosa is unremarkable. Immunohistochemistry is performed (with adequate controls) to further assess the presence of innervating nerve fibers. A calretinin stain shows a normal pattern of lamina propria nerve fibers. \n",
        // HIRSCHSPRUNGS, ABNORMAL
        mxLine310: "Multiple serial step sections  from the rectum biopsy show #NUM# fragments of large bowel tissue, #ADEQ# of which show adequate amounts of submucosa for evaluation of ganglion cells. Ganglion cells are not seen in the submucosa in any of the adequate biopsy fragments. Few hypertrophic nerve trunks are seen in the submucosa. The mucosa is unremarkable. Immunohistochemistry is performed (with adequate controls) to further assess the presence of innervating nerve fibers. A calretinin stain shows an abnormal pattern, as evidenced by a lack of lamina propria nerve fibers. \n",
        // COLON, IBD + GRANULOMAS, NEG AFB/GMS (1 SITE)
        mxLine311: "Sections from the 'colon' biopsy show fragments of colonic tissue with increased lamina propria cellularity comprised of plasma cells, lymphocytes, eosinophils and neutrophils. Some crypts show active cryptitis with scattered intraepithelial neutrophils. Few non-necrotizing granulomas are present. The overall glandular architecture is mildly disorganized.\n ",
        // COLON, IBD + GRANULOMAS, NEG AFB/GMS (MULT SITES)
        mxLine312: "Sections from all the colonic biopsies show similar findings and are described together. They show fragments of colonic tissue with increased lamina propria cellularity comprised of plasma cells, lymphocytes, eosinophils and neutrophils. Some crypts show active cryptitis with scattered intraepithelial neutrophils. Few non-necrotizing granulomas are present. The overall glandular architecture is mildly disorganized. \n",
        // COLON, NON-SPECIFIC INCREASE IN LP CELLULARITY AND MILD ARCH CHANGES
        mxLine313: "Sections from the 'colon' biopsy show fragments of colonic tissue with a mostly normal glandular architecture. Few glands show architectural alterations characterized by irregular outlines and gland branching. The lamina propria shows increased cellularity, comprised of lymphocytes and plasma cells. No neutrophilic infiltrates are seen. \n ",
        // COLON, FOCAL ACUTE 1 SITE
        mxLine314: "Sections from the 'colon' biopsy show fragments of colonic tissue with normal glandular architecture. Overall, the lamina propria is not excessively cellular; however, there is a focal neutrophilic infiltrate within a crypt. \n",
        // COLON, CHRONIC AND FOCAL ACTIVE, 1 SITE
        mxLine315: "Sections from the 'colon' biopsy show fragments of colonic tissue with normal glandular architecture. Few glands show architectural alterations characterized by irregular outlines and gland branching. The lamina propria shows increased cellularity, comprised of lymphocytes and plasma cells. Additionally, there is a focal neutrophilic infiltrate within some crypts. \n",
        // MELANOSIS COLI, 1 SITE
        mxLine316: "Sections from the 'colon' biopsy show fragments of colonic tissue with a mostly normal glandular architecture. The lamina propria is not excessively cellular. There are frequent lamina propria macrophages with cytoplasmic granular pigment (melanosis coli). No neutrophilic infiltrates are seen. \n",
        // MELANOSIS COLI, ALL SITES
        mxLine317: "Sections from all the colonic biopsies show fragments of colonic tissue with a mostly normal glandular architecture. The lamina propria is not excessively cellular. There are frequent lamina propria macrophages with cytoplasmic granular pigment (melanosis coli). No neutrophilic infiltrates are seen. \n",
        // GRANULOMATOUS INFLAMMATION, 1 SITE
        mxLine318: "Sections from the 'colon' biopsy show fragments of colonic tissue with normal glandular architecture. The lamina propria shows increased overall cellularity comprised of lymphocytes, plasma cells and eosinophils. There are few non-necrotizing granulomas. No neutrophilic infiltrates, cryptitis or surface ulcers are seen. \n",
        // GRANULOMATOUS INFLAMMATION, ALL SITES
        mxLine319: "Sections from all the colonic biopsies show fragments of colonic tissue with normal glandular architecture. The lamina propria shows increased overall cellularity comprised of lymphocytes, plasma cells and eosinophils. There are few non-necrotizing granulomas. No neutrophilic infiltrates, cryptitis or surface ulcers are seen. \n",
        // TA, 1 site
        mxLine320: "Sections from the 'colon' show colonic mucosa exhibiting adenomatous changes characterized by tubular gland morphology, hyperchromatic, elongate nuclei and depletion of goblet cells. No high-grade dysplasia or carcinoma is seen. \n",
        // TA, many sites
        mxLine321: "Sections from the ' ' and ' ' biopsies show similar findings and are described together. They show colonic mucosa exhibiting adenomatous changes characterized by tubular gland morphology, hyperchromatic, elongate nuclei and depletion of goblet cells. No high-grade dysplasia or carcinoma is seen. \n",
        // SSA, 1 site
        mxLine322: "Sections from the 'colon' show a mucosal lesion with deep crypt serration, some inverted T- and L-shaped crypts and focal lateral crypt budding. There is no dysplasia, undue acute inflammatory infiltrates. \n",
        // SSA, many sites
        mxLine323: "Sections from the ' ' and ' ' biopsies show similar findings and are described together. They show a mucosal lesion with deep crypt serration, some inverted T- and L-shaped crypts and focal lateral crypt budding. There is no dysplasia, undue acute inflammatory infiltrates. \n",
        // SSA W DYSPLASIA, 1 site
        mxLine324: "Sections from the 'colon' show a mucosal lesion with deep crypt serration, some inverted T- and L-shaped crypts and focal lateral crypt budding. There is an area of adenomatous epithelium adenomatous changes characterized by tubular gland morphology, hyperchromatic, elongate nuclei. The dysplasia is low grade; There is no evidence of high-grade dysplasia or malignancy. \n",
        // SSA W DYSPLASIA, many sites
        mxLine325: "Sections from the ' ' and ' ' biopsies show similar findings and are described together. They show a mucosal lesion with deep crypt serration, horizontal, inverted T- and L-shaped crypts with lateral spread of the crypts.  There is an area of adenomatous epithelium adenomatous changes characterized by tubular gland morphology, hyperchromatic, elongate nuclei. The dysplasia is low grade. There is no evidence of high-grade dysplasia or malignancy. \n",
        // Hyperplastic polyp, 1 site
        mxLine326: "Sections from the 'colon' show a hyperplastic mucosal lesion with luminal crypt scalloping and funnel-shaped elongated crypts.  The crypt serration is confined to the upper crypt. There is no adenomatous change. \n",
        // Hyperplastic poly, many sites
        mxLine327: "Sections from the ' ' and ' ' biopsies show similar findings and are described together. They show  a hyperplastic mucosal lesion with luminal crypt scalloping and funnel-shaped elongated crypts.  The crypt serration is confined to the upper crypt. There is no adenomatous change.  \n",
        // TA W DYS, 1 site
        mxLine328: "Sections from the 'colon' show colonic mucosa exhibiting adenomatous changes characterized by tubular gland morphology, hyperchromatic, elongate nuclei and depletion of goblet cells. In some areas, the glands show complex architecture with budding and back-to-back configuration. These areas also exhibit overt cytologic atypia, loss of nuclear polarity and high N:C ratios (high-grade dysplasia). No invasive component is seen. The lesion appears entirely excised within the sample. [The fragmented nature of the biopsy precludes determination of whether the lesion has been completely removed.] \n",
        // TA W DYS, many sites
        mxLine329: "Sections from the ' ' and ' ' biopsies show similar findings and are described together. They show colonic mucosa exhibiting adenomatous changes characterized by tubular gland morphology, hyperchromatic, elongate nuclei and depletion of goblet cells. In some areas, the glands show complex architecture with budding and back-to-back configuration. These areas also exhibit overt cytologic atypia, loss of nuclear polarity and high N:C ratios (high-grade dysplasia). No invasive component is seen. The lesion appears entirely excised within the sample. [The fragmented nature of the biopsy precludes determination of whether the lesion has been completely removed.] \n",
        // TSA, 1 site
        mxLine330: "Sections from the 'colon' show a serrated adenomatous lesion characterized by columnar epithelium with eosinophilic cytoplasm, a centrally placed elongated nucleus that is somewhat hyperchromatic and mild pseudostratification.  Mitoses are few.  There are ectopic crypt foci. The overall architecture is villiform and protuberant rather than sessile.  There is no high-grade dysplasia or invasive malignancy. \n",
        // TSA, many sites
        mxLine331: "Sections from the ' ' and ' ' biopsies show similar findings and are described together. They show  a serrated adenomatous lesion characterized by columnar epithelium with eosinophilic cytoplasm, a centrally placed elongated nucleus that is somewhat hyperchromatic and mild pseudostratification.  Mitoses are few.  There are ectopic crypt foci. The overall architecture is villiform and protuberant rather than sessile.  There is no high-grade dysplasia or invasive malignancy. \n",
        // Rectum, prolapse/SRUS
        mxLine332: "Sections from the 'rectum' biopsy show fragments of architecturally disorganized colonic mucosa with interstitial fibrosis, dilated lamina propria lymphatics and focal areas of surface erosion and ulceration. The lamina propria is not excessively cellular and does not show a prominent basal lymphoplasmacytic infiltrate. There is sampling of ulcer bed material consisting of granulation tissue. No viral cytopathic changes are seen. \n",
        // Lymphocytic colitis
        mxLine333: "Sections from the 'colon' biopsy show fragments of colonic tissue with normal glandular architecture. The lamina propria is not excessively cellular; however, there is a conspicuous increase in intraepithelial lymphocytes. These are enumerated at >30 per 100 enterocytes. No concomitant thickening of the basement membrane collagen table is evident. No neutrophilic infiltrates are seen. \n",
        // Collagenous colitis
        mxLine334: "Sections from the 'colon' biopsy show fragments of colonic tissue with normal glandular architecture. The lamina propria shows a non-specific increase in overall cellularity, comprised of a heterogeneous mixture of lymphocytes, plasma cells and eosinophils. No neutrophilic infiltrates are seen. There is a conspicuous increase in the subepithelial collagen table (as highlighted with a trichrome stain). While no excess in surface intraepithelial lymphocytes is evident, some crypts show prominent intraglandular lymphocytes. \n",
        // Collagenous colitis all sites
        mxLine335: "Sections from all the colon biopsies show similar findings and are described together. They show fragments of colonic tissue with normal glandular architecture. The lamina propria shows a non-specific increase in overall cellularity, comprised of a heterogeneous mixture of lymphocytes, plasma cells and eosinophils. No neutrophilic infiltrates are seen. There is a conspicuous increase in the subepithelial collagen table (as highlighted with a trichrome stain). While no excess in surface intraepithelial lymphocytes is evident, some crypts show prominent intraglandular lymphocytes. \n",


        mxLine999: " "
    };

    comLines = {
// CASE DISCUSSED WITH
        comLine100: '\nThe case was discussed with XXXX on QQQQ. \n',
// TYPICAL CELIAC
        comLine101: 'The duodenum findings, in the appropriate clinical context, are compatible with celiac disease. \n',
// CELIAC SEROLOGY, NOT HISTOLOGY
        comLine102: 'The duodenum findings are mild and non-specific. Furthermore, definitive features of celiac disease are not present. In some patients with strong clinical / serologic suspicion for celiac disease, the histologic manifestations can be patchy and/or focal within the small bowel.[1] If celiac disease is strongly suspected on clinicoserologic grounds, consideration for HLA-DQ typing on a peripheral blood sample may help provide additional support for this diagnosis [refer to Mayo Medical Laboratories test code CELI].\n\nReferences:\n1. Weir DC, et al. Variability of histopathological changes in childhood celiac disease. Am J Gastroenterol. 2010 Jan;105(1):207-12 \n',
// INCREASED IELS, NL VILLI
        comLine103: 'In the absence of villous blunting and significant lamina propria cellularity, the significance of a mild intraepithelial lymphocytosis is uncertain. The differential diagnosis includes gastric H. pylori infection, NSAID usage, autoimmune or early celiac disease. Correlation with clinical findings and serologic studies is recommended to better assess for the possibility of celiac disease or autoimmune gastroenteritis. \n',
// EE VS REFLUX
        comLine104: 'The esophageal changes are suggestive of eosinophilic esophagitis; however, the pattern does not completely exclude reflux. Correlation with other laboratory data is recommended. \n',
// TYPICAL EE PATTERN
        comLine105: 'The pattern of esophageal eosinophils is consistent with eosinophilic esophagitis. \n',
// IBD, NONSPECIFIC
        comLine106: 'The findings are suggestive of an inflammatory bowel disorder. If the symptoms are acute in nature, a self-limited colitis cannot be entirely excluded. Correlation with clinical findings and other laboratory data is recommended. \n',
// IBD, SUGGESTING CROHN
        comLine107: 'The pattern of acute inflammation is suggestive of Crohn disease. Ulcerative colitis with non-specific upper gastrointestinal inflammation or rare infections may also show a similar pattern. \n',
// IBD W GRANULOMAS
        comLine108: 'The pattern of acute inflammation and presence of granulomas is consistent with an inflammatory bowel disorder, namely Crohn disease. \n',
// REACTIVE GASTROPATHY
        comLine109: 'The features are those of a reactive gastropathy (chemical gastropathy). Chemical/reflux-associated reactive gastropathy is a reaction to noninfectious irritants. This can be to protracted exposure to bile and pancreatic juice (especially post gastric surgery) or a reaction to ingested irritants (such as NSAIDs, other pill medications or ethanol). \n',
// FEG
        comLine110: 'Focally enhanced gastritis, in the appropriate clinical context, is reported to be overrepresented in patients with inflammatory bowel disorders. Correlation with other clinical and lower-gastrointestinal findings is recommended (see reference).\n\n\nREFERENCES:\n1. McHugh JB, et al. The clinical significance of focally enhanced gastritis in children. Am J Surg Pathol. Feb;37(2):295-9 2013. \n',
// MELANOSIS COLI
        comLine111: 'Melanosis coli is a non-specific change which is often observed in the setting of prolonged laxative use (senna or magnesium containing laxatives in particular). Clinical correlation is recommended. \n',
// JPS COMMENT
        comLine112: 'Currently accepted criteria recommend documentation of 5 colorectal juvenile polyps to consider a diagnosis of juvenile polyposis syndrome. If other gastrointestinal polyps were seen during endoscopy, or if other clinical history is suggestive, consideration for genetic testing of mutations in the BMPR1A and SMAD4 genes may be helpful. BMPR1A and SMAD4 mutations are known to cause juvenile polyposis syndrome and can be tested on peripheral blood. \n',
// SSA COMMENT
        comLine113: 'Sessile serrated lesion (previously known as sessile serrated adenoma) should be entirely removed endoscopically, if possible.  Consensus guidelines recommend that if the lesion cannot be entirely removed, then watchful waiting with repeated colonoscopy at a shortened interval is warranted.  This ensures there is no re-growth of the lesion since there may difficulty in identifying the margins of the lesion.  Future surveillance should be individualized. \n',

// IBD IN INFANTS COMMENT
        comLine114: 'The findings, on a histologic basis alone, raise a differential diagnosis of inflammatory bowel disorder or a self-limited colitis. In very young patients, other less common entities can show an "IBD-like" histologic picture, including: congenital immune deficiencies, autoimmune enteropathy, Bechet\'s disease, chronic granulomatous disease or severe allergic enterocolitis [see reference].  Correlation with clinical findings and other laboratory data is recommended. \n\nReference:\n1. Kappelman MD, Grand RJ. Does inflammatory bowel disease develop in infants? Inflamm Bowel Dis. 2008;14.',

// EOSINOPHILIC GASTRITIS
        comLine115: 'Increased numbers of eosinophils in the lamina propria of the stomach have been reported after eradication therapy for Helicobacter pylori, in reactive gastropathy caused by certain drugs, and, in some cases, as a downstream finding in esophageal eosinophilia. The latter is not present in the esophageal biopsies here. Clinical correlation is recommended.',

// AUTOIMMUNE ENTERITIS
        comLine116: 'The \'duodenum\' changes show striking villous atrophy and increased intraepithelial lymphocytes. In light of the patient\'s age, the differential diagnosis includes severe food protein intolerance, viral gastroenteritis, or possibly an autoimmune condition (such as IPEX syndrome). Correlation with other laboratory data and serologic markers, including anti-enterocyte or anti-goblet cell antibodies may be helpful.',

// INCREASED GASTRIC EOS + CHRONIC GASTRITIS
        comLine117: 'There are increased lamina propria eosinophils within the stomach, in the context of chronic gastritis. The presence of such an isolated infiltrate is of unclear significance. This phenomenon has been reported in the setting of active or eradicated H. pylori, medication reaction or as stigmata of reflux. Clinical correlation is recommended. ',

// LYMPHOCYTIC COLITIS
        comLine118: 'There is a conspicuous increase in colonic intraepithelial lymphocytes without increased subepithelial collagen. This finding may be seen with so-called lymphocytic (microscopic) colitis. Most such cases are associated with watery diarrhea, though on occasion, some present with constipation. Similar changes can be seen in the setting of celiac disease [not likely given normal duodenum findings], autoimmune enteritis, primary immunodeficiency or with chronic use of certain medications (like NSAIDs).  ',

// COLLAGENOUS COLITIS
        comLine119: 'There is a conspicuous increase in subepithelial collagen thickness in the colon, consistent with the histologic diagnosis of collagenous colitis. Collagenous colitis may represent a later stage histologic change in patients with microscopic (lymphocytic) colitis, who often present with chronic watery diarrhea. Collagenous colitis may be associated with celiac disease [assuming appropriate serologic setting], type 1 diabetes, primary immunodeficiency or with chronic use of certain medications. ',

// FOCAL DUODENAL INFLAMMATION
        comLine120: 'The degree of \'duodenum\' inflammation is focal and limited mostly to the lamina propria. The significance of this is unclear and may represent resolving inflammation or healing mucosal injury. Clinical correlation is recommended. ',

// COLLAGENOUS GASTRITIS
        comLine121: 'There is a conspicuous increase in subepithelial collagen thickness in the specimen designated \' \', reminiscent of changes seen with collagenous gastritis. Collagenous gastritis is often associated with endoscopically visualized nodularity. In the pediatric setting, it is usually not associated with colonic disease or diarrhea. Anemia and pain are the most common reported findings. \n\nSimilar histologic changes may also be seen with healing ulcer. Clinical correlation is recommended. ',

// EE VS. GERD
        comLine122: 'The prior biopsy ( ) is reviewed in conjunction with these current biopsies. The prior biopsies show variably increased eosinophils throughout the length of the esophagus, with some areas resembling eosinophilic esophagitis. The current biopsies show subjectively fewer intraepithelial eosinophils, particularly in the __ biopsy. In the context of clinical eosinophilic esophagitis, these changes may represent incomplete treatment or superimposed GERD. ',

// VILLOUS BLUNTING, NO IELS (NON-SPECIFIC)
        comLine123: 'The duodenum changes show villous blunting without concomitant increase in intraepithelial lymphocytes. This is a non-specific pattern that can be seen with acute or post-viral gastroenteritis, autoimmune gastroenteropathies or primary disorders of the brush border or enterocyte junctions. Changes indicative of the latter are not evident in the biopsies. Clinical correlation is recommended.  ',

// VILLOUS BLUNTING, NO IELS, TUFTING
        comLine124: 'The duodenum changes show villous blunting without concomitant increase in intraepithelial lymphocytes. The abnormal EpCAM/MOC31 staining indicates a primary disorder of enterocyte junctions, as is expected for tufting enteropathy. Tufting enteropathy (aka intestinal epithelial dysplasia) is an etiology for chronic infantile diarrhea, which can be associated with other extra-gastrointestinal manifestations, including keratitis. ',

// GASTRIC FOVEOLAR METAPLASIS, INACTIVE
        comLine125: 'The presence of gastric foveolar metaplasia in the duodenum is a non-specific finding, but one that is often indicative of prior mucosal injury and subsequent healing. This may represent peptic duodenitis, healing ulcer or previously resolved active inflammation. ',

// EROSIVE ESOPHAGITIS W/ NEUTS, NO  FUNGUS
        comLine126: 'Erosive esophagitis, in the absence of demonstrable fungal infection, can be seen with severe acid reflux, chronic injury in the setting of a hiatal hernia or secondary to trauma from a foreign body. Clinical correlation is recommended. ',

// IRON SALT GASTRITIS
        comLine127: 'Excess iron-salt precipitates in the stomach may be seen with certain formulations of iron replacement therapy, or if dosing is too high. Consideration for an alternative formulation is recommended. ',

        comLine999: ' '
    };


});



/**
 * Created by chandrakrishnan on 4/28/2017.
 */
