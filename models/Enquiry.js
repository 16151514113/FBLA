var keystone = require('keystone');
var Types = keystone.Field.Types;

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	packageType: { type: Types.Select, options: [
		{ value: 'p1', label: "Package 1" },
		{ value: 'p2', label: "Package 2" },
		{ value: 'p3', label: "Package 3" },
	], required: true },
	message: { type: Types.Textarea, required: true },
});

Enquiry.track = true;
Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, packageType, createdAt';
Enquiry.register();
