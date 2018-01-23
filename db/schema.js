const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String
});

const storySchema = mongoose.Schema({
    title: String,
    content: String,
    genres: [],
    userId: String
});

const promptSchema = mongoose.Schema({
    title: String,
    content: String,
    userId: String,
    stories: [storySchema]
});

const userModel = mongoose.model('User', userSchema);
const storyModel = mongoose.model('Story', storySchema);
const promptModel = mongoose.model('Prompt', promptSchema);

module.exports = {
    userModel, storyModel, promptModel
};