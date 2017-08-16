$(window).on('load', function(){
    dxLines = {
// Anti-A1
        dxLine_100: 'ANTIBODY IDENTIFIED:\n- Anti-A1\n',
        // Anti-C
        dxLine_110: 'ANTIBODY IDENTIFIED:\n- Anti-C \n',
        // Anti-C + e
        dxLine_111: 'ANTIBODY IDENTIFIED:\n- Anti-C + Anti-e \n',
        // Anti - D baby
        dxLine_120: 'ANTIBODY IDENTIFIED:\n- Anti-D \n',
        // Anti D mom
        dxLine_121: 'ANTIBODY IDENTIFIED:\n- Anti-D (maternal) \n',
        // Anti - E
        dxLine_130: 'ANTIBODY IDENTIFIED:\n- Anti-E \n',
        // Anti - I
        dxLine_140: 'ANTIBODY IDENTIFIED:\n- Anti-I \n',
        // Anti - IH
        dxLine_141: 'ANTIBODY IDENTIFIED:\n- Anti-IH\n',
        // Anti - K
        dxLine_150: 'ANTIBODY IDENTIFIED:\n- Anti-K \n',
        // Anti - Lea
        dxLine_160: 'ANTIBODY IDENTIFIED:\n- Anti-Le(a) \n',
        // Anti - M
        dxLine_170: 'ANTIBODY IDENTIFIED:\n- Anti-M \n',
        // Anti - M
        dxLine_180: 'ANTIBODY IDENTIFIED:\n- Anti-P1 \n',
        // warm auto
        dxLine_190: 'ANTIBODY IDENTIFIED:\n- Warm auto-antibody \n',
        // cold agglutinin
        dxLine_191: 'ANTIBODY IDENTIFIED:\n- Cold agglutinin \n',
        // positive DAT
        dxLine_200: 'ANTIBODY IDENTIFIED:\n- Positive DAT with reactive elution',
        dxLine_999: ''
    };

    comLines = {
// Anti-A1
        comLine_100: 'COMMENT:\nAnti-A1 is usually an IgM, naturally occurring antibody that is usually not considered clinically significant. It can appear to cause in-vitro crossmatch incompatibility, due to reaction below 30 C. Some examples of this antibody can be clnically significant when active at body temperature, and only A2 or O type RBCs should be used. \n',
        // Anti-C
        comLine_110: 'COMMENT:\nAnti-C is an IgG, immune antibody which has been reported to cause hemolytic disease of the newborn and hemolytic transfusion reactions.  Crossmatch compatible units lacking the C, E and K antigens should ideally be used in future red cell transfusions. Approximately 19% of random donors are expected to be compatible; however, delays in obtaining compatible units may occur.\n',
        // Anti-C + e
        comLine_111: 'COMMENT:\n Anti-C and anti-e are IgG, immune antibodies which have been reported to cause hemolytic disease of the newborn and hemolytic transfusion reactions.  Crossmatch compatible units lacking the C and e antigens will be used in future red cell transfusions. <1% of random donors are expected to be compatible, thus, delays in obtaining compatible units may occur. Scheduled surgical procedures should be made known to the blood bank to allow for collection of appropriate units. \n',
        // Anti - D baby
        comLine_120: 'COMMENT:\n Anti-D is an IgG, immune antibody which as been reported to cause hemolytic disease of the newborn and hemolytic transfusion reactions. Records indicate that this patient\'s mother received Rh-immune globulin (RhoGam, WinRho) prior to delivery. The patient\'s blood type is O-neg. The observed anti-D likely represents persistent Rh-immune globulin, or less likely a maternally derived allo antibody. The presence of anti-D in the serum after six months may be indicative of alloimmunization.\n',
        // Anti D mom
        comLine_121: 'COMMENT:\n Records indicate that this patient received Rh-immune globulin (RhoGam, WinRho, Rhophylac) prior to delivery / transfusion. The patient\'s blood type is O-neg. The observed anti-D likely represents persistent therapeutic Rh-immune globulin. Rh-immune globulins are indicated for suppression of rhesus (Rh) isoimmunization in incompatible transfusions in Rh-negative individuals transfused with blood components containing Rh-positive red blood cells. The duration of response is variable.\n',
        // Anti - E
        comLine_130: 'COMMENT:\n Anti-E is a clinically significant IgG antibody which has been reported to cause hemolytic disease of the newborn and hemolytic transfusion reactions.  Rh-negative, crossmatch compatible units, negative for the E antigen was provided for possible transfusion. Future transfusions must include units which lack the E antigen.  Delays in obtaining compatible units may be encountered.\n',
        // Anti - I
        comLine_140: 'COMMENT:\n Anti-I is a cold-reactive, common autoantibody that usually reacts within a narrow (non-physiologic) thermal range.  It is not usually significant for routine transfusion purposes.   On occasion, anti-I antibodies can assume pathologic significance in cold agglutinin disease and mixed autoimmune hemolytic anemia.  These occur when the thermal range is widened.\n',
        // Anti - IH
        comLine_141: 'COMMENT:\nAnti-IH is an IgM, naturally occurring antibody which is not usually considered clinically significant. If needed, crossmatch compatible units will be provided. \n',
        // Anti - K
        comLine_150: 'COMMENT:\nAnti-K is an IgG, immune antibody which has been reported to cause hemolytic disease of the newborn and hemolytic transfusion reactions.  Crossmatch compatible units lacking the K antigen should ideally be used in future red cell transfusions.    \n',
        // Anti - Lea
        comLine_160: 'COMMENT:\nAnti-Le(a) is an IgM, naturally occurring antibody which is not usually considered clinically significant. If needed, crossmatch compatible units will be provided. \n',
        // Anti - M
        comLine_170: 'COMMENT:\nAnti-M may occur as either an IgG or an IgM antibody.  This antibody has occasionally been reported to cause hemolytic disease of the newborn and hemolytic transfusion reactions.  Reactions such as these are indications for usage of units lacking M antigens in future transfusions. Since only 25% of random donors are expected to be suitable for this patient, delays in obtaining additional units may be encountered \n',
        // Anti - P1
        comLine_180: 'COMMENT:\nAnti-P1 is an IgM, naturally occurring antibody which is not usually clinically significant.  Crossmatch compatible units may be used for possible transfusion. \n',
        // warm auto
        comLine_190: 'COMMENT:\n A positive antibody screen was detected in the patient, which was later identified as a warm auto antibody.  The DAT was positive for IgG and negative for complement.  An eluate was performed on __ and was reactive with all cells tested.  \n\n Warm auto antibodies are typically IgG antibodies which can cause hemolysis of both the patient’s own and any transfused RBC units.  Usually, the rate of hemolysis is not rapid.  Future RBC transfusions will be performed with cross-match least-incompatible units, which are negative for the ____ antigens.  Approximately ___% of random donors are expected to be suitable for this patient.  If the character of the warm auto antibody changes, or if an additional allo antibody develops, delays in obtaining compatible units should be anticipated.\n',
        // cold agglutinin
        comLine_191: 'COMMENT:\nDuring routine type and screen procedures, this patient was identified as having a positive antibody screen. \n\nThis patient\'s serum was tested against a panel of antibodies which yielded a non-specific pattern of reaction. \n',
        // positive DAT and elution
        comLine_200: 'COMMENT:\nDuring routine testing procedures on __, this patient was identified as having a positive direct antiglobulin test. The serological findings of the DAT were __ for IgG and ___ for C3. An elution study on the patient\' serum was rective with all cells tested.\n\nDue to the presence of IgG coating the patient cells, further testing of the patient\'s serum would be helpful in evaluating the source of the positive DAT result. ',

        comLine_999: ''
    };


});




/**
 * Created by chandrakrishnan on 5/6/2017.
 */
