const Jokes = require('../models/jokes.model.js');

const getAllJokes = (req,res) =>{
	Jokes.find()
	.then(jokes=>res.json(jokes))
	.catch(err=>res.status(401).json(err))
}

const getSingleJoke = (req,res) =>{
	Jokes.findOne({_id:req.params.id})
	.then(joke=>res.json(joke))
	.catch(err=>res.status(401).json(err))
}

const createJoke = (req,res) =>{
	console.log("comes")
	Jokes.create(req.body)
	.then(joke=>res.json(joke))
	.catch(err=>res.status(401).json(err))
}


const updateJoke = (req,res) =>{
	Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
.then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

const deleteJoke = (req,res) =>{
	 Jokes.deleteOne({ _id: req.params.id })
.then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports={
	getAllJokes,
	getSingleJoke,
	createJoke,
	updateJoke,
	deleteJoke
}