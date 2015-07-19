'use strict';

module.exports = {
	db: 'mongodb://localhost/store-locator-dev',
	app: {
		title: 'Store Locator - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '886230308140649',
		clientSecret: process.env.FACEBOOK_SECRET || '031cb5b8387d8081beb6eb11f3e0cfea',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '209128206410-67ugfpgqn9r2msuii0iagalej0pr2iup.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'baOUsxkfEImES6Ogv_8ZAjwv',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'd71f3fc189a87517474c',
		clientSecret: process.env.GITHUB_SECRET || 'df81f7e63c2fba82892291857d41897b74f9223e',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'Store Locator',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'pobed21@gmail.com',
				pass: process.env.MAILER_PASSWORD || 'Potato456'
			}
		}
	}
};
