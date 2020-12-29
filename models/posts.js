let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    date: Date,
    description: String,
    text: String,
    country: String,
    imageURL: String,
    id: String
});

let Post = mongoose.model('Post', postSchema);

module.exports = { Post }

/*
let post1 = new Post({
    title: 'Statue of Liberty',
    date: new Date(),
    description: 'Some description',
    text: 'some text',
    country: 'USA',
    imageURL: '/images/1.jpg',
    id: 2    
});

post1.save();
*/