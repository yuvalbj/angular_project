const mongoose = require('mongoose');

let userSchema = mongoose.Schema;

let UserSchema = new userSchema({
    userName : String,
    email : String,
    street: String,
    city: String,
    zipcode: Number,
    tasks : [{ title: String, completed: Boolean}],
    posts: [{ title: String, body: String}]
});

module.exports = mongoose.model('users',UserSchema);