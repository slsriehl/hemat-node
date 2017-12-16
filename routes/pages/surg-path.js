
const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

//needs database connection
router.get('/surg-path/ihc-table', (req, res) => {
	controller.userWall(req, res, './page-views/surg-path/ihc-table.hbs', [
		"/js/surg-path/ihc-scripts.js"
	])
})

router.get('/surg-path/prostate-bx', (req, res) => {
    controller.userWall(req, res, './page-views/surg-path/prostate-bx.hbs', [
    "/js/surg-path/prostate-bx-scripts.js"
])
})

router.get('/surg-path/fixation', (req, res) => {
	controller.openAccess(req, res, './page-views/surg-path/fixation.hbs', [
		"/js/surg-path/fixation-scripts.js"
	])
})

router.get('/surg-path/sjogrens', (req, res) => {
    controller.openAccess(req, res, './page-views/surg-path/sjogrens.hbs', [
    "/js/surg-path/sjogrens-scripts.js",
	"/json/json-sjogrens.js"
	])
})

router.get('/surg-path/snippets', (req, res) => {
	controller.userWall(req, res, './page-views/surg-path/snippets.hbs', [
		"/vendor/tag-it/js/tag-it.min.js",
		"/vendor/he/he.min.js",
		"/js/surg-path/snippets-scripts.js"
	], [
		"/vendor/tag-it/css/jquery.tagit.css",
		"/vendor/tag-it/css/tagit.ui-zendesk.css"
	])
})

//post new interp to db
router.post('/ihc/save', (req, res) => {
	controller.saveIhcPreset(req, res);
});

//search db for matching reports
router.post('/snippets/search', (req, res) => {
	controller.searchSnippets(req, res);
});

//save snippet as a new snippet
router.post('/snippet/save', (req, res) => {
	controller.saveSnippet(req, res);
});

//update an existing snippet (only if created by user)
router.post('/snippet/update', (req, res) => {
	controller.updateSnippet(req, res);
});

//delete an existing snippet (only if created by user)
router.post('/snippet/delete', (req, res) => {
	controller.deleteSnippet(req, res);
})

module.exports = router;
