var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var Reservation = keystone.list('Reservation');
var moment = require('moment');
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var date = req.body.date
	locals.section = 'contact';
	locals.packageTypes = Enquiry.fields.packageType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	view.on('post', { action: 'contact' }, function (next) {

		var application = new Enquiry.model();
		var updater = application.getUpdateHandler(req);
		updater.process(req.body, {
			flashErrors: true
		}, function (err) {
			if (err) {
				locals.validationErrors = err.error;
				console.log('whoo we got it set');
				console.log(err.error);
			} else {
				var newReservation = new Reservation.model({
					day: new Date(date).addHours(4),
					packageType: req.body.packageType,
					title: req.body["name.full"]
				});
				newReservation.save(function(err) {
				// post has been saved
				});
				locals.enquirySubmitted = true;
				console.log('whoo we did not get it set.');
			}
			console.log('whoo we got called!');
			next();
		});

	});
	view.on('post', { action: 'start' }, function (next) {
		var startDate = new Date(req.body.date);
		var endDate = new Date(req.body.date);
		endDate.setDate(endDate.getDate() + 1);
		console.log(startDate, endDate);
		Reservation.model.findOne()
		.where('day').gt(startDate).lt(endDate)
		.where('packageType', 'p1')
		.exec(function(err, results) {
			Reservation.model.findOne()
			.where('day').gt(startDate).lt(endDate)
			.where('packageType', 'p2')
			.exec(function(err, results) {
					locals.p2 = results;
					Reservation.model.findOne()
					.where('day').gt(startDate).lt(endDate)
					.where('packageType', 'p3')
					.exec(function(err, results) {
							locals.p3 = results;
							console.log('called');
							next();
					});
			});
				locals.p1 = results;
		});
	});
	view.render('makePartyReservation', {
		section: 'contact',
	});

}
