var keystone = require('keystone');
var async = require('async');
var Attraction = keystone.list('Attraction');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'blog';
	locals.Attractions = [];
	locals.categories = [];

	// Load the Attractions
	view.on('init', function (next) {

		var q = Attraction.paginate({
				page: req.query.page || 1,
 				perPage: 10,
 				maxPages: 10,
			})
			.sort('-publishedDate')
			.populate('author categories');


		q.exec(function (err, results) {
			locals.Attractions = results;
			next(err);
		});

	});

	// Render the view
	view.render('attractions');

}
