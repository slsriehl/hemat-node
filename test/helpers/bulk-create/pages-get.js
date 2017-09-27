

const helpers = {
	appGroups: [{
		name: 'Autopsy Tools',
		slug: 'autopsy'
	}, {
		name: 'Clinical Pathology Tools',
		slug: 'clin-path'
	}, {
		name: 'Hemepath Tools',
		slug: 'heme-path'
	}, {
		name: 'Surgical Pathology Tools',
		slug: 'surg-path'
	}, {
		name: 'GI Tools',
		slug: 'gi-path'
	}, {
		name: 'CAP Cancer Checklists',
		slug: 'cap'
	}],
	apps: [{
		name: 'Autopsy Weights Table',
		slug: 'weights-table',
		appGroupId: 1
	}, {
		name: 'Stillbirth Report Generator',
		slug: 'stillbirth',
		appGroupId: 1
	}, {
		name: 'CSF Reports',
		slug: 'csf',
		appGroupId: 2
	}, {
		name: 'BAL Reports',
		slug: 'bal',
		appGroupId: 2
	}, {
		name: 'Transfusion Antibody ID',
		slug: 'antibody-id',
		appGroupId: 2
	}, {
		name: 'Transfusion Reaction Workup',
		slug: 'tx-rxn',
		appGroupId: 2
	}, {
		name: 'Peripheral Smear Reports',
		slug: 'pb-smears',
		appGroupId: 3
	}, {
		name: 'Bone Marrow Reports',
		slug: 'bone-marrow',
		appGroupId: 3
	}, {
		name: 'WBC Diff Counter',
		slug: 'heme-diff',
		appGroupId: 3
	}, {
		name: 'Custom Tally Counter',
		slug: 'counter',
		appGroupId: 3
	}, {
		name: 'Large B-cell Lymphoma Synoptic',
		slug: 'dlbcl',
		appGroupId: 3
	}, {
		name: 'Immunohistochemistry Table',
		slug: 'ihc-table',
		appGroupId: 4
	}, {
		name: 'Breast Fixation Times',
		slug: 'fixation',
		appGroupId: 4
	}, {
		name: 'Surg Path Snippet Locker',
		slug: 'snippets',
		appGroupId: 4
	}, {
		name: 'GI Biopsies',
		slug: 'gi-bx',
		appGroupId: 5
	}, {
		name: 'Liver Biopsies',
		slug: 'liver-bx',
		appGroupId: 5
	}, {
		name: 'Bone Tumors, Biopsy',
		slug: 'bone-t-bx',
		appGroupId: 6
	}, {
		name: 'Bone Tumors, Resection',
		slug: 'bone-t-rx',
		appGroupId: 6
	}, {
		name: 'CNS Tumors',
		slug: 'neuro-t',
		appGroupId: 6
	}, {
		name: 'CNS Tumors, Biomarker',
		slug: 'neuro-t-biomarker',
		appGroupId: 6
	}, {
		name: 'Ewing Sarcoma/PNET, Biopsy',
		slug: 'pnet-bx',
		appGroupId: 6
	}, {
		name: 'Ewing Sarcoma/PNET, Resection',
		slug: 'pnet-rx',
		appGroupId: 6
	}, {
		name: 'Extra-gonadal Germ Cell Tumors',
		slug: 'ex-gon-gct',
		appGroupId: 6
	}, {
		name: 'Hepatoblastoma',
		slug: 'hepatoblast',
		appGroupId: 6
	}, {
		name: 'Neuroblastoma',
		slug: 'neuroblast',
		appGroupId: 6
	}, {
		name: 'Neuroendocrine Tumors: Appendix, Colon or Pancreas',
		slug: 'neuroend-t',
		appGroupId: 6
	}, {
		name: 'Ovary Tumors',
		slug: 'ovary-t',
		appGroupId: 6
	}, {
		name: 'Pediatric Renal Tumor',
		slug: 'wilms-t',
		appGroupId: 6
	}, {
		name: 'Retinoblastoma',
		slug: 'retinoblast',
		appGroupId: 6
	}, {
		name: 'Rhabdomyosarcoma',
		slug: 'rhabdo',
		appGroupId: 6
	}, {
		name: 'Testicular Tumors',
		slug: 'testis-t',
		appGroupId: 6
	}, {
		name: 'Soft Tissue Tumors, Resection',
		slug: 'soft-t-rx',
		appGroupId: 6
	}, {
		name: 'Breast Cancer, Invasive',
		slug: 'breast',
		appGroupId: 6
	}, {
		name: 'Cervical cancer - Leep/Cone',
		slug: 'cervix-leep',
		appGroupId: 6
	}, {
		name: 'Cervical cancer - Hysterectomy / Exenteration',
		slug: 'cervix-rx',
		appGroupId: 6
	}, {
		name: 'Colon/Rectal Cancer Arising within a Polyp',
		slug: 'colon-polyp',
		appGroupId: 6
	}, {
		name: 'Colon/Rectal Cancer, Resection',
		slug: 'colon-rx',
		appGroupId: 6
	}, {
		name: 'Endometrial Tumors',
		slug: 'endometrium-t',
		appGroupId: 6
	}, {
		name: 'Esophageal & GEJ carcinomas',
		slug: 'esophagus',
		appGroupId: 6
	}, {
		name: 'Kidney Tumor, Resection',
		slug: 'kidney-rx',
		appGroupId: 6
	}, {
		name: 'Lung Tumor, Resection',
		slug: 'lung-rx',
		appGroupId: 6
	}, {
		name: 'Melanoma, Biopsy or Resection',
		slug: 'melanoma',
		appGroupId: 6
	}, {
		name: 'Plasma Cell Tumor, Targeted Biopsy, not Bone Marrow',
		slug: 'plasmacytoma',
		appGroupId: 6
	}, {
		name: 'Pancreatic (Exocrine) Tumors',
		slug: 'pancexo-t',
		appGroupId: 6
	}, {
		name: 'Thyroid Tumors',
		slug: 'thyroid-t',
		appGroupId: 6
	}, {
		name: 'Salivary Gland Tumors',
		slug: 'salivary-t',
		appGroupId: 6
	}, {
		name: 'Stomach Carcinomas (Excluding Cancers within 5cm of the GEJ)',
		slug: 'stomach',
		appGroupId: 6
	}]
}

module.exports = helpers;
