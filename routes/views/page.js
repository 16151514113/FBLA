var keystone = require('keystone');
var async = require('async');
var Page = keystone.list('Page');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'blog';
	locals.Attractions = [];
	locals.categories = [];

	// Load the Attractions
	view.on('init', function (next) {

    var q = Page.model.findOne({
			slug: req.params.page
    }).populate('author categories');
		q.exec(function (err, results) {
			locals.Page = results;
			next(err);
		});

	});

	// Render the view
	view.render(req.params.page);

}
