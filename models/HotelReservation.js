var keystone = require('keystone');
var Types = keystone.Field.Types;

var HotelReservation = new keystone.List('HotelReservation', {
	nocreate: true,
});

HotelReservation.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	date: { type: Date },
	qty: { type: Number }
});

HotelReservation.track = true;
HotelReservation.defaultSort = '-createdAt';
HotelReservation.defaultColumns = 'name, email, packageType, createdAt';
HotelReservation.register();
