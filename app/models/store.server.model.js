'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Store Schema
 */
var StoreSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
	latitude: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	longitude: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	city: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
	country: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
	rss_range: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	tz: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	tz_index: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	duration_threshold: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	start_of_day: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
	is_updating: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
	rss_campaign: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	session_timeout: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	raw_data: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	campaign_duration: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	rss_walkby: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	visit_duration_keep_fraction: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},
	total_visitors: {
		type: Number,
		default: '',
		required: true,
		trim: true
	},

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Store', StoreSchema);
