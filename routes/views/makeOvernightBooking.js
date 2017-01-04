var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var HotelReservation = keystone.list('HotelReservation');
var moment = require('moment');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var date = req.body.date
	locals.section = 'contact';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	view.on('post', { action: 'hotelreservation' }, function (next) {
		req.body.date = new Date(req.body.date).addHours(4);
		var application = new HotelReservation.model();
		var updater = application.getUpdateHandler(req);
		updater.process(req.body, {
			flashErrors: true
		}, function (err) {
			if (err) {
				locals.validationErrors = err.error;
				console.log('whoo we got it set');
				console.log(err.error);
				console.log(err);
			} else {
				locals.enquirySubmitted = true;
				console.log('whoo we did not get it set.');
			}
			console.log('whoo we got called!');
			next();
		});

	});
	view.on('post', { action: 'start' }, function (next) {
			next();
	});
	view.render('makeOvernightBooking', {
		section: 'contact',
	});

}
