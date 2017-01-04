var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Reservation = new keystone.List('Reservation', {
    autokey: { path: 'slug', from: 'reservationID', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

Reservation.add({
    day: { type: Date },
		title: {type: String},
		packageType: { type: Types.Select, options: [
			{ value: 'p1', label: "Package 1" },
			{ value: 'p2', label: "Package 2" },
			{ value: 'p3', label: "Package 3" },
		] },
		reservationID: { type: String}
});

Reservation.defaultColumns = 'title, state|20%, author, publishedAt|15%'
Reservation.register();
