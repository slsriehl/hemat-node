$(window).on('load', function(){
// pinar et al.
    pinar_single = {
        wk21: {_90th: '172', _75th: '158', _50th: '143', _25th: '128', _10th: '114'},
        wk22: {_90th: '191', _75th: '175', _50th: '157', _25th: '138', _10th: '122'},
        wk23: {_90th: '211', _75th: '193', _50th: '172', _25th: '151', _10th: '133'},
        wk24: {_90th: '233', _75th: '212', _50th: '189', _25th: '166', _10th: '145'},
        wk25: {_90th: '256', _75th: '233', _50th: '208', _25th: '182', _10th: '159'},
        wk26: {_90th: '280', _75th: '255', _50th: '227', _25th: '200', _10th: '175'},
        wk27: {_90th: '305', _75th: '278', _50th: '248', _25th: '219', _10th: '192'},
        wk28: {_90th: '331', _75th: '302', _50th: '270', _25th: '238', _10th: '210'},
        wk29: {_90th: '357', _75th: '327', _50th: '293', _25th: '259', _10th: '249'},
        wk30: {_90th: '384', _75th: '352', _50th: '316', _25th: '281', _10th: '249'},
        wk31: {_90th: '411', _75th: '377', _50th: '340', _25th: '303', _10th: '269'},
        wk32: {_90th: '438', _75th: '403', _50th: '364', _25th: '325', _10th: '290'},
        wk33: {_90th: '464', _75th: '428', _50th: '387', _25th: '347', _10th: '311'},
        wk34: {_90th: '491', _75th: '453', _50th: '411', _25th: '369', _10th: '331'},
        wk35: {_90th: '516', _75th: '477', _50th: '434', _25th: '391', _10th: '352'},
        wk36: {_90th: '542', _75th: '501', _50th: '457', _25th: '412', _10th: '372'},
        wk37: {_90th: '566', _75th: '524', _50th: '478', _25th: '432', _10th: '391'},
        wk38: {_90th: '589', _75th: '547', _50th: '499', _25th: '452', _10th: '409'},
        wk39: {_90th: '611', _75th: '567', _50th: '519', _25th: '470', _10th: '426'},
        wk40: {_90th: '632', _75th: '587', _50th: '537', _25th: '487', _10th: '442'},
        wk41: {_90th: '651', _75th: '605', _50th: '553', _25th: '502', _10th: '456'}
    };

// boyd et al
    boyd_single = {
        wk22: {_90th: '285', _75th: '206', _50th: '166', _25th: '130', _10th: '107'},
        wk23: {_90th: '262', _75th: '208', _50th: '188', _25th: '168', _10th: '127'},
        wk24: {_90th: '252', _75th: '222', _50th: '192', _25th: '157', _10th: '128'},
        wk25: {_90th: '299', _75th: '216', _50th: '184', _25th: '153', _10th: '128'},
        wk26: {_90th: '281', _75th: '259', _50th: '200', _25th: '279', _10th: '138'},
        wk27: {_90th: '332', _75th: '310', _50th: '242', _25th: '166', _10th: '130'},
        wk28: {_90th: '321', _75th: '261', _50th: '214', _25th: '173', _10th: '140'},
        wk29: {_90th: '352', _75th: '309', _50th: '252', _25th: '214', _10th: '161'},
        wk30: {_90th: '433', _75th: '374', _50th: '316', _25th: '269', _10th: '208'},
        wk31: {_90th: '417', _75th: '360', _50th: '313', _25th: '246', _10th: '175'},
        wk32: {_90th: '436', _75th: '377', _50th: '318', _25th: '275', _10th: '241'},
        wk33: {_90th: '446', _75th: '413', _50th: '352', _25th: '286', _10th: '252'},
        wk34: {_90th: '479', _75th: '430', _50th: '382', _25th: '322', _10th: '283'},
        wk35: {_90th: '544', _75th: '471', _50th: '401', _25th: '344', _10th: '291'},
        wk36: {_90th: '580', _75th: '508', _50th: '440', _25th: '369', _10th: '320'},
        wk37: {_90th: '607', _75th: '531', _50th: '452', _25th: '390', _10th: '349'},
        wk38: {_90th: '629', _75th: '560', _50th: '484', _25th: '420', _10th: '365'},
        wk39: {_90th: '635', _75th: '564', _50th: '490', _25th: '426', _10th: '379'},
        wk40: {_90th: '643', _75th: '572', _50th: '501', _25th: '440', _10th: '390'},
        wk41: {_90th: '655', _75th: '583', _50th: '515', _25th: '452', _10th: '403'},
        wk42: {_90th: '658', _75th: '592', _50th: '525', _25th: '460', _10th: '412'}
    };

// pinar et al twins
    pinar_twin = {
        wk19: {_90th: '263', _75th: '239', _50th: '212', _25th: '185', _10th: '161'},
        wk20: {_90th: '270', _75th: '245', _50th: '218', _25th: '190', _10th: '166'},
        wk21: {_90th: '286', _75th: '260', _50th: '231', _25th: '202', _10th: '176'},
        wk22: {_90th: '310', _75th: '282', _50th: '251', _25th: '219', _10th: '191'},
        wk23: {_90th: '343', _75th: '311', _50th: '276', _25th: '241', _10th: '210'},
        wk24: {_90th: '382', _75th: '346', _50th: '307', _25th: '267', _10th: '232'},
        wk25: {_90th: '426', _75th: '386', _50th: '341', _25th: '297', _10th: '257'},
        wk26: {_90th: '475', _75th: '430', _50th: '380', _25th: '330', _10th: '284'},
        wk27: {_90th: '528', _75th: '478', _50th: '421', _25th: '365', _10th: '314'},
        wk28: {_90th: '584', _75th: '527', _50th: '464', _25th: '401', _10th: '345'},
        wk29: {_90th: '641', _75th: '579', _50th: '509', _25th: '439', _10th: '377'},
        wk30: {_90th: '700', _75th: '631', _50th: '554', _25th: '478', _10th: '409'},
        wk31: {_90th: '758', _75th: '683', _50th: '600', _25th: '516', _10th: '441'},
        wk32: {_90th: '815', _75th: '734', _50th: '644', _25th: '554', _10th: '472'},
        wk33: {_90th: '870', _75th: '783', _50th: '687', _25th: '590', _10th: '503'},
        wk34: {_90th: '923', _75th: '830', _50th: '727', _25th: '624', _10th: '531'},
        wk35: {_90th: '971', _75th: '873', _50th: '764', _25th: '656', _10th: '656'},
        wk36: {_90th: '1014', _75th: '912', _50th: '798', _25th: '684', _10th: '582'},
        wk37: {_90th: '1051', _75th: '945', _50th: '827', _25th: '708', _10th: '602'},
        wk38: {_90th: '1082', _75th: '972', _50th: '850', _25th: '728', _10th: '619'},
        wk39: {_90th: '1105', _75th: '993', _50th: '868', _25th: '743', _10th: '631'},
        wk40: {_90th: '1118', _75th: '1005', _50th: '879', _25th: '753', _10th: '639'},
        wk41: {_90th: '1123', _75th: '1009', _50th: '882', _25th: '756', _10th: '642'}
    };

// pinar 2002 triplets
    pinar_triple = {

    };

    partJson = {
        partType500: "PLACENTA, DELIVERY AT 00 WEEKS:\n- WEIGHT: 00 grams (between 00 and 00 %ile)\n",
        partType501: "PLACENTA, TWIN DELIVERY AT 00 WEEKS:\n- WEIGHT: 00 grams (between 00 and 00 %ile)\n",
        partType999: ""
//DON'T ADD COMMA TO LAST ITEM ABOVE
    };

    dxLines = {

        // NORMAL EVERYTHING
        dxLine500: "- UMBILICAL CORD: Three vessel cord with no significant abnormality\n- MEMBRANES: No significant abnormality\n- FETAL SURFACE: No significant abnormality\n- VILLOUS TISSUE: No significant abnormality\n- MATERNAL SURFACE: No significant abnormality \n",

        // UMBILICAL CORD
        // UMBILICAL VASCULITIS +/- FUNISITIS
        dxLine510: "- UMBILICAL CORD: Three vessel cord with no significant abnormalities\n",
        dxLine511: "- UMBILICAL CORD: Umbilical (** vessel) vasculitis @@ funisitis\n",

        // MEMBRANES
        // NORMAL MEMBRANES
        dxLine520: "- MEMBRANES: No significant abnormalities\n",
        // ACUTE CHORIO
        dxLine521: "- MEMBRANES: Acute chorioamnionitis\n",
        // MECONIUM EXPOSURE
        dxLine522: "- MEMBRANES: Features consistent with meconium exposure\n",

        // FETAL SURFACE
        // CHORIONIC PLATE VASCULITIS
        dxLine531: "- FETAL SURFACE: Chorionic plate vasculitis\n- VILLOUS TISSUE: No significant abnormalities\n",

        // VILLOUS PARENCHYMA
        dxLine540: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: No significant abnormalities\n",
        // DISTAL VILLOUS HYPOPLASIA
        dxLine541: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Distal villous hypoplasia\n",
        // CHORANGIOSIS
        dxLine542: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Chorangiosis\n",
        // CHORANGIOMA
        dxLine543: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Chorangioma\n",
        // CHRONIC VILLITIS
        dxLine544: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Chronic villitis\n",
        // ACUTE VILLITIS
        dxLine545: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Acute villitis\n",
        // ACUTE VILLITIS WITH OBLITERATIVE VASCULOPATHY
        dxLine546: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Acute villitis with obliterative vasculopathy\n",
        // INTERVILLOUS THROMBUS
        dxLine547: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Intervillous thrombus\n",
        // PLACENTAL INFARCTS
        dxLine548: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Placental infarcts (__% of disk)\n",
        // INCREASED PERIVILLOUS FIBRIN
        dxLine549: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Increased perivillous fibrin (<40% of placental disk)\n",
        // MASSIVE PERIVILLOUS FIBRIN
        dxLine550: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Massive perivillous fibrin (>40% of placental disk)\n",
        // FTV
        dxLine551: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Fetal thrombotic vasculopathy [focal, pathy, diffuse]\n",
        // FETAL NRBCS
        dxLine552: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Increased fetal nucleated red blood cells\n",
        // VILLOUS EDEMA
        dxLine553: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Villous edema, [focal, patchy, dffuse]\n",
        // ACUTE ABRUPTION
        dxLine554: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Features suggestive of acute abruption\n",
        // CHRONIC MARGINAL ABRUPTION
        dxLine555: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Features suggestive of chronic marginal abruption\n",
        // ACUTE NECROTIZING INTERVILLOSITIS
        dxLine556: "- FETAL SURFACE: No significant abnormalities\n- VILLOUS TISSUE: Acute necrotizing intervillositis\n",

        // MATERNAL SURFACE
        dxLine560: "- MATERNAL SURFACE: No significant abnormaliteis \n",
        dxLine561: "- MATERNAL SURFACE: Acute atherosis \n",
        dxLine562: "- MATERNAL SURFACE: Chronic deciduitis with plasma cells \n",

        dxLine999: ""
    };

    mxLines = {
        // NORMAL EVERYTHING
        mxLine500: "Sections of the umbilical cord confirm three vessels without neutrophilic infiltration or intravascular thrombus formation. The placental membranes consist of amnion and attached chorion without neutrophilic infiltration or prominence of pigment-laden macrophages; no acute atherosis is seen. The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen. The decidua of the maternal surface shows occasional lymphocytes but no definitive plasma cells. There is no evidence of decidual vasculopathy. \n",

        // UMBILICAL CORD - NORMAL
        mxLine510: "Sections of the umbilical cord confirm three vessels without neutrophilic infiltration or intravascular thrombus formation. ",
        // UMBILICAL VASCULITIS / FUNISITIS
        mxLine511: "Sections of the umbilical cord confirm three vessels, ** of which show a neutrophilic infiltration that #extends into the surrounding Wharton's jelly. ",

        // MEBRANES - NORMAL
        mxLine520: "The placental membranes consist of amnion and attached chorion without neutrophilic infiltration or prominence of pigment-laden macrophages; no acute atherosis is seen. ",
        // ACUTE CHORIO
        mxLine521: "The placental membranes show a [focal, patchy or diffuse] neutrophilic infiltrate in the chorion and amnion, without a prominence of pigment-laden macrophages; no acute atherosis is seen. ",
        // MECONIUM STAINING
        mxLine522: "The placental membranes consist of amnion and attached chorion without neutrophilic infiltration; however, there is a prominence of pigment-laden macrophages. No acute atherosis is seen. ",

        // CHORIONIC PLATE VASCULITIS
        mxLine531: "The placental disk shows a chorionic plate with evidence of acute inflammation, including subchorionic neutrophils, as well as marginating neutrophils that infiltrate vascular endothelium and surrounding smooth muscle walls. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen. ",


        // NORMAL PLACENTAL DISK
        mxLine540: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen. ",
        // DISTAL VILLOUS HYPOPLASIA
        mxLine541: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has has abnormal villous development for the infant's estimated gestational age, characterized by small, slender villi with decreased branching. There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen. ",
        //  CHORANGIOSIS
        mxLine542: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age; however, most of the terminal villi show expanded stroma by greater than 10 capillaries per cross section. There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen. ",
        // CHORANGIOMA
        mxLine543: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. However, there is focal marked expansion of a villous by numerous thin-walled capillaries without cytologic atypia or increased mitotic activity (i.e. chorangioma). There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen. ",
        // CHRONIC VUE
        mxLine544: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There are [focal, patchy, diffuse] areas in the terminal villi that show stromal lymphocytic inflammatory infiltrates, disrupted trophoblast layers, and increased perivillous fibrin deposition. No plasma cells are seen. There is no pathologic increase in fetal nucleated red blood cells or calcifications. ",
        // ACUTE VILLIITS
        mxLine545: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There are [focal, patchy, diffuse] areas in the terminal villi that show stromal lymphocytic and neutrophilic inflammatory infiltrates with disrupted trophoblast layers and perivillous fibrin deposition. There is no pathologic increase in fetal nucleated red blood cells or calcifications. ",
        // ACUTE VILLITIS WITH OBLITERATIVE VASCULOPATHY
        mxLine546: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There are [focal, patchy, diffuse] areas in the terminal villi that show stromal lymphocytic and neutrophilic inflammatory infiltrates with disrupted trophoblast layers and perivillous fibrin deposition. In addition, the affected villi show obiliterated fetal blood vessels with fragmented and extravasated red blood cells. There is no pathologic increase in fetal nucleated red blood cells or calcifications. ",
        // INTERVILLOUS THROMBUS
        mxLine547: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. The grossly identified parenchymal lesion(s) correspond(s) to a focally expanded intervillous space by extravasated blood, laminated fibrin deposition, and rare hemosiderin laden macrophages (intervillous thrombus). There is no pathologic increase in calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen.",
        // PLACENTAL INFARCTS
        mxLine548: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. The grossly identified parenchymal lesion(s) correspond(s) to [focal, patchy, diffuse] coagulative necrosis of villi with collapsed intervillous spaces and perivillous fibrin deposition. There is no pathologic increase in calcifications or fetal nucleated red blood cells. ",
        // INCREASED (NOT MASSIVE) PERIVLLOUS FIBRIN
        mxLine549: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. The grossly identified parenchymal lesion(s) correspond(s) to increased perivillous fibrin deposition with disrupted trophoblast layers but well preserved stromal cells and blood vessels. There is no pathologic increase in calcifications or fetal nucleated red blood cells. ",
        // FETAL THROMBOTIC VASCULOPATHY
        mxLine550: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. There are [focal, patchy, diffuse] terminal villi which are avascular with organizing intravascular thrombi. [No] intravascular thrombi are seen of upstream stem villous blood vessels. ",
        // NRBCS
        mxLine551: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There is no pathologic increase in perivillous fibrin deposition or calcifications, though there is a mild increase in fetal nucleated red blood cells. No villitis or infarcts are seen. ",
        // VILLOUS EDEMA
        mxLine552: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. However, [focal, patchy, diffuse] villous edema is seen with increased foamy stromal macrophages. There is no pathologic increase in perivillous fibrin deposition, calcifications or fetal nucleated red blood cells. No villitis or infarcts are seen. ",
        // FEATURES OF ACUTE ABRUPTION
        mxLine553: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. The parenchyma associated with grossly identified adherent clotted blood shows [focal, patchy, diffuse] intra villous extravasated blood [with the addition of associated necrotic villi]. The grossly adherent blood shows laminated fibrin deposition, indicative of pathologic acute hemorrhage.  ",
        // FEATURES OF CHRONIC MARGINAL ABRUPTION
        mxLine554: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. In the area of circummarginate insertion and grossly adherent clotted blood, there is increased fibrin deposition with hemosiderin laden macrophages demonstrated by an iron special stain with an appropriately staining control. Few necrotic villi are noted in this region. The parenchyma otherwise has villous development that is consistent with the infant’s estimated gestational age. There is no increase in fetal nucleated red blood cells or calcifications. ",
        // MASSIVE INTERVILLOUS FIBRIN
        mxLine555: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. The grossly identified full thickness lattice like induration corresponds to increased perivillous fibrin deposition with disrupted trophoblast layers but well-preserved stromal cells and fetal blood vessels. [Calcifications and fetal nucleated red blood cells are mildly increased.]  ",
        // ACUTE NECROTIZING INTERVILLOSITIS
        mxLine556: "The placental disk shows a chorionic plate without vasculitis or definitive neutrophilic infiltration. The parenchyma has villous development that is consistent with the infant’s estimated gestational age. There are [focal, patchy, diffuse] areas that show dense neutrophilic villous and intervillous infiltrates with occasional intervillous abscess formation. There is no pathologic increase in fetal nucleated red blood cells or calcifications. ",

        // MATERNAL DECIDUA - NORMAL
        mxLine560: "The decidua of the maternal surface shows occasional lymphocytes but no definitive plasma cells.  No decidual atherosis is evident. ",
        // DECIDUAL ATHEROSIS
        mxLine561: "The decidua of the maternal surface shows occasional lymphocytes but no definitive plasma cells.  Some decidual arteries show features of acute atherosis, as evidenced by maternal blood vessels exhibting subendothelial fibrinous necrosis and infiltration by foamy macrophages.  ",
        // CHORNIC DEC WITH PLASMA CELLS
        mxLine562: "The decidua of the maternal surface shows an increase in lymphocytes with associated clusters of plasma cells. There is no evidence of decidual vasculopathy. ",


        mxLine999: '',
    };

    comLines = {
        comLine500: "Acute intervillositis may be associated seen with Listeria monocytogenes,  Staphylococcus aureus or Mycobacterium tuberculosis (among others) infections. \n",
        comLine501: "Chronic villitis (or villitis of uncertain etiology) is often non-infectious in etiology, and may represent a maternal immune response to fetal antigens. When patchy or diffuse, it may complicate future pregnancies and be associated with fetal growth restriction. \n",
        comLine502: "Distal villous immaturity is most often associated with maternal conditions including impaired glucose tolerance, obesity, and excessive pregnancy weight gain. It may also be seen in placentas with hypercoiled umbilical cords, growth restricted preterm placentas or congenital malformations. \n",
        comLine503: "Increased nucleated fetal red cell precursors are indicative of fetal hypoxia, anemia and other congenital disorders leading to increased red cell turnover. \n",
        comLine504: "Massive chronic histiocytic intervillositis with perivillous fibrin deposition has a high incidence of fetal growth restriction, recurrent pregnancy loss and preterm delivery. The recurrence rate is an estimated seventy percent. The etiology remains unknown.\n\nReference: Boyd TK, Redline RW. Chronic histiocytic intervillositis: a placental lesion associated with recurrent reproductive loss. Human Pathology 2000, 31:1389-96. \n",
        comLine505: "Massively increased perivillous fibrin, when involving more than 40 percent of the placental disk, is associated with intrauterine growth restriction and/or adverse fetal outcomes. Clinical associations include maternal antiphospholipid antibody syndrome, maternal thrombophilia and recurrent pregnancy loss. \n",

        comLine999: ''

    };




});

/**
 * Created by Chandra Krishnan on 1/23/2018.
 */
