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

    var q = Attraction.model.findOne({
			slug: req.params.attraction
    }).populate('author categories');
		q.exec(function (err, results) {
			locals.attraction = results;
			next(err);
		});

	});

	// Render the view
	view.render('attraction');

}
