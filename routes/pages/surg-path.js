
const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

const render = controller.render;

const userWall = require('../middleware/user-wall');

//needs database connection
router.get('/surg-path/hirsch', (req, res) => {
    return render(req, res, './page-views/surg-path/hd.hbs', [
        "/js/surg-path/hd.js",
		"/json/json-hd.js"
    ]);
});


router.get('/surg-path/ihc-table', (req, res) => {
	return render(req, res, './page-views/surg-path/ihc-table.hbs', [
		"/js/surg-path/ihc-scripts.js"
	]);
});

router.get('/surg-path/prostate-bx', userWall, (req, res) => {
    return render(req, res, './page-views/surg-path/prostate-bx.hbs', [
    "/js/surg-path/prostate-bx-scripts.js"
]);
});

router.get('/surg-path/fixation', (req, res) => {
	return render(req, res, './page-views/surg-path/fixation.hbs', [
		"/js/surg-path/fixation-scripts.js"
	]);
});

router.get('/surg-path/sjogrens', (req, res) => {
    return render(req, res, './page-views/surg-path/sjogrens.hbs', [
    "/js/surg-path/sjogrens-scripts.js",
	"/json/json-sjogrens.js"
	]);
});

router.get('/surg-path/placenta', (req, res) => {
    return render(req, res, './page-views/surg-path/placenta.hbs', [
		// "https://d3js.org/d3.v4.min.js",
        "/js/surg-path/placenta-scripts.js",
        "/json/json-placenta.js",
    ]);
});

router.get('/surg-path/plac-view', (req, res) => {
    return render(req, res, './page-views/surg-path/plac-view.hbs', [
        "/js/surg-path/plac-view.js"
	]);
});

router.get('/surg-path/snippets', userWall, (req, res) => {
	return render(req, res, './page-views/surg-path/snippets.hbs', [
		"/vendor/tag-it/js/tag-it.min.js",
		"/vendor/he/he.min.js",
		"/js/surg-path/snippets-scripts.js",
        "/js/surg-path/ihc-scripts.js"

    ], [
		"/vendor/tag-it/css/jquery.tagit.css",
		"/vendor/tag-it/css/tagit.ui-zendesk.css"
	]);
});

router.get('/surg-path/heart-bx', (req, res) => {
    return render(req, res, './page-views/surg-path/heart-bx.hbs', [
        "/js/surg-path/heartbx.js"
    ]);
});

//post new interp to db
router.post('/ihc/save', (req, res) => {
	return controller.saveIhcPreset(req, res);
});

//search db for matching reports
router.post('/snippets/search', (req, res) => {
	return controller.searchSnippets(req, res);
});

//save snippet as a new snippet
router.post('/snippet/save', (req, res) => {
	return controller.saveSnippet(req, res);
});

//update an existing snippet (only if created by user)
router.post('/snippet/update', (req, res) => {
	return controller.updateSnippet(req, res);
});

//delete an existing snippet (only if created by user)
router.post('/snippet/delete', (req, res) => {
	return controller.deleteSnippet(req, res);
})

module.exports = router;
