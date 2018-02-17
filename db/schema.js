const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    dateCreated: Date, 
    userName: String,
    password: String,
    email: String,
    prompts: [],
    stories: []
});

const storySchema = mongoose.Schema({
    dateCreated: Date,
    title: String,
    content: String,
    author: String,
});

const promptSchema = mongoose.Schema({
    dateCreated: Date,
    content: String,
    author: String,
    stories: [storySchema]
});

const userModel = mongoose.model('User', userSchema);
const storyModel = mongoose.model('Story', storySchema);
const promptModel = mongoose.model('Prompt', promptSchema);

module.exports = {
    userModel, storyModel, promptModel
};