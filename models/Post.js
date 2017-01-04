var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Attraction = new keystone.List('Attraction', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

Attraction.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    author: { type: Types.Relationship, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date,
    image: { type: Types.CloudinaryImage , autoCleanup : true },
    circleImage: { type: Types.CloudinaryImage , autoCleanup : true },
    classToApply: { type: String },
    marginTop: {type: String},
    leftOrRight: {type: String},
   	zIndex: {type: String},
   	megaBandPrice: {type: String},
   	superBandPrice: {type: String},
   	childPrice: {type: String},
   	adultPrice: {type: String},
   	slideInOffset: {type: String},
    content: { type: Types.Html, wysiwyg: true, height: 150 },
		row: {type: String}
});

Attraction.defaultColumns = 'title, state|20%, author, publishedAt|15%'
Attraction.register();
