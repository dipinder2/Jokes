const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({

	setup: {
		type: String,
		required: true,
		minLength: 8,
	},
	punchline: {
		type: String,
		required: true,
		minLength: 8,
	}
});

const Jokes = mongoose.model('Jokes', JokesSchema);

module.exports = Jokes