$(window).on('load', function() {
    dxLines = {
        // Normal PT and PTTs
        dxLine100 : '- Normal PT\n- Normal PTT\n',
        dxLine101 : '- Normal PT\n',
        dxLine102 : '- Normal PTT\n',
        // Prolonged PTT and PT
        // Both corrects at Immediate and Incubation
        dxLine200 : '- Prolonged PTT and PT, both correcting sufficiently with mixing studies performed immediately and after incubation (see comment)\n',
        // Both corrects at Immediate but not after Incubation
        dxLine205 : '- Prolonged PTT and PT, both correcting sufficiently with mixing studies performed immediately, but not after incubation (see comment)\n',
        // Both not correcting at Immediate or Incubation
        dxLine210 : '- Prolonged PTT and PT, neither correcting sufficiently with mixing studies performed immediately or after incubation (see comment)\n',
        // Prolonged PTT, normal or unknown PT
        // Prolonged PTT correcting at Immediate and after Incubation
        dxLine300 : '- Prolonged PTT, correcting sufficiently with mixing studies performed immediately and after incubation (see comment)\n',
        // Prolonged PTT correcting at Immediate but not after Incubation
        dxLine305 : '- Prolonged PTT, correcting sufficiently with mixing studies performed after incubation, but not immediately (see comment)\n',
        // PTT not correcting Immediate or after Incubation
        dxLine310 : '- Prolonged PTT, not correcting sufficiently with mixing studies performed immediately or after incubation (see comment)\n',
        // Prolonged PT, normal or unknown PTT
        // Prolonged PT correcting at Immediate and after Incubation
        dxLine400 : '- Prolonged PT, correcting sufficiently with mixing studies performed immediately and after incubation (see comment)\n',
        // Prolonged PT correcting at Immediate but not after Incubation
        dxLine405 : '- Prolonged PT, correcting sufficiently with mixing studies performed immediately, but not after incubation (see comment)\n',
        // PT not correcting Immediate or after Incubation
        dxLine410 : '- Prolonged PT, not correcting sufficiently with mixing studies performed immediately or after incubation (see comment)\n',



        dxLine999 : ''
    };

    commLines = {
        // Normal PT and PTTs
        commLine100 : 'PT and PTTs are not prolonged and do not suggest an intrinsic abnormality in clotting factor levels, the presence of heparin or direct inhibitors. \n\n',
        // Normal PT
        commLine101 : 'PT is not prolonged and does not suggest an intrinsic abnormality in vitamin-K dependent clotting factors (II, V and X). \n\n',
        // Normal PTT
        commLine102 : 'PTT is not prolonged and does not suggest an intrinsic abnormality in the clotting factors VIII, IX, XI or XII. A normal PTT also suggests that there is no significant heparin, dabigataran, argatroban or bivalirudin effect. \n\n',
        // Prolonged PTT and PT
        // Both corrects at Immediate and Incubation
        commLine200 : 'These results suggest the presence of a factor deficiency or deficiencies in the intrinsic pathway (VIII, IX, XI, XII, PK, HMWK) and extrinsic pathway (VII) and/or final common pathway (fibrinogen, II, V, X). This may be due to inherited or acquired factor deficiency, the latter of which may be due to warfarin use (which induces vitamin K deficiency), liver disease, and consumptive coagulopathy, among others. Clinical correlation and additional testing (such as, specific factor assays, fibrinogen, and D-dimer) are suggested, as clinically indicated. \n\n ',
        // Both corrects at Immediate but not after Incubation
        commLine205 : 'These results suggest the presence of a delayed inhibitor, such as potent lupus anticoagulants and other nonspecific inhibitors, such as those seen in association with lymphoproliferative disorders or monoclonal protein disorders. Clinical correlation and additional testing are suggested, as clinically indicated. \n\n',
        // Both not correcting at Immediate or Incubation
        commLine210 : 'These results may be seen in the presence of Factor II, V or X inhibitors, or in the setting of Apixiban (anti-Xa agent, aka Eliquis). They may also be seen with excess heparin in the sample, during disseminated intravascular coagulopathy or severe liver disease. Clinical correlation and additional testing are suggested, as clinically indicated. \n\n',
        // Prolonged PTT
        // PTT correcting Immediate and after Incubation
        commLine300 : 'The PTT results suggest the presence of a factor deficiency or deficiencies in the intrinsic pathway (VIII, IX, XI, XII, PK, HMWK) and/or final common pathway (fibrinogen, II, V, X). Clinical correlation and additional testing (such as specific factor assays, fibrinogen, and D-dimer) are suggested, as clinically indicated. \n\n',
        // PTT correcting Immediate, but not after Incubation
        commLine305 : 'The PTT results suggest the presence of a delayed inhibitor, most commonly a specific factor VIII inhibitor. Occasionally, lupus anticoagulants and other specific factor inhibitors can also show this pattern. Clinical correlation and additional testing (including, a factor VIII assay; if decreased, a factor VIII inhibitor assay; and lupus anticoagulant assays) are suggested, as clinically indicated. \n\n',
        // PTT not correcting Immediate or after Incubation
        commLine310 : 'The PTT results suggest anticoagulant effect, such as heparin, heparin-like agents, or newer direct oral anticoagulants - specifically dabigatran (aka Praxada). A nonspecific inhibitor, such as a lupus anticoagulant cannot be excluded. Correlation with prior medication history and review for blood draw inline with heparinized access is recommended. Additional testing for lupus anticoagulant can be performed as clinically indicated. \n\n',
        // Prolonged PT
        // PT correcting Immediate and after Incubation
        commLine400 : 'The PT results suggest the presence of a factor deficiency or deficiencies in the extrinsic pathway (VII) and/or final common pathway (fibrinogen, II, V, X). In the context of a normal PTT, this is most often a Factor VII deficiency. It also be seen in the setting of vitamin-K deficiency. Clinical correlation and evaluation of medication history is recommended.\n\n',
        // PT correcting Immediate, but not after Incubation
        commLine405 : 'The PT results suggest the presence of a delayed inhibitor, most commonly a specific factor inhibitor or a lupus anticoagulant. Clinical correlation and additional testing (such as, PTT, specific factor assays and inhibitor assays, and lupus anticoagulant assays) are suggested, as clinically indicated. \n\n',
        // PT not correcting Immediate or after Incubation
        commLine410 : 'The PT results suggest the possibility of a factor VII inhibitor or rivaroxaban (anti-Xa agent, aka Xarelto) effect. An anti-Xa assay may be helpful to distinguish between these possibilities. Clinical correlation and review of medication history is recommended. \n\n',

        dxLine999 : ''
    };

dxLines_old = $.extend(true, {}, dxLines);

});
