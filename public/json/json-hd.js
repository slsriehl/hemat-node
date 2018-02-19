
$(window).on('load', function() {

    grLines = {
        grLine100: "\nDuhamel pull-through\n",
        grLine105: "\nSoave pull-through\n",
        grLine110: "\nSwenson pull-through\n",
        grLine120: "\nOstomy with primary bowel resection\n",
        grLine130: "\nOstomy takedown wit Duhamel pull-through\n",
        grLine135: "\nOstomy takedown with Soave pull-through\n",
        grLine140: "\nOstomy takedown with Swenson pull-through\n",
        grLine150: "\nOstomy site: #gr-150#\n",
        grLine155: "\nPrior resections: #gr-155#\n",

        // Intraoperative biopsies
        grLine200: "\n(Part: ) Intraoperative Leveling Biopsy: Frozen section\n\tLocation: #gr-200#\n",
        grLine205: "\nSpecimen type: Seromuscular biopsy",
        grLine210: "\nSpecimen type: Full-thickness biopsy",

        // Resection frozen section
        grLine250: "\nFrozen section residue: Stored in OCT\n",
        grLine255: "\nFrozen section residue: Submitted in cassette: \n",

        // Resection gross data
        grLine260: "Specimen fixation: Unfixed\n",
        grLine265: "Specimen fixation: Formalin fixed\n",

        grLine270: "Specimen length: \n",
        grLine275: "Mucosal sleeve length: \n",

        grLine280: "Minimum external diameter: \n",
        grLine285: "Maximum external diameter: \n",
        grLine287: "Proximal margin  diameter: \n",

        grLine290: "Gross transition zone: Not identified \n",
        grLine295: "Gross transition zone: Present, ## from distal margin \n",
        grLine300: "Location of intraoperative biopsy sites: \n",


        end: ""
    }


    mxLines = {
        // PROXIMAL MARGIN FROZEN SECTION DIAGNOSES
        // Intraoperative proximal margin part type
        mxLine50: "\n(Part: ) Resection:\n\n",

        // No diagnostic abnormality
        mxLine100: "Normal, full-circumferential ganglion cell distribution in the intermyenteric and submucosal regions. \n",
        // Features of transition zone - partial aganglionosis both
        mxLine105: "Features of a transition zone, as evidenced by segmental (>1/8th of circumference) aganglionosis in the intermyenteric and submucosal regions. \n",
        // Features of transition zone - partial aganglionosis myenteric
        mxLine110: "Features of a transition zone, as evidenced by segmental (>1/8th of circumference) aganglionosis in the intermyenteric region. \n",
        // Features of transition zone - partial aganglionosis submucosa
        mxLine115: "Features of a transition zone, as evidenced by segmental (>1/8th of circumference) aganglionosis in the submucosal region. \n",

        end:""
    };

    dxLines = {
        dxLine100: "Test DX line",


        end:""

    };

    commLines = {
        commLine100: "Test COMM line",
        end:""

    };

});



/**
 * Created by chandrakrishnan on 5/16/2017.
 */


/**
 * Created by Chandra Krishnan on 2/3/2018.
 */
