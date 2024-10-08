const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Paasport Local mongoose will automatically filled usename and password for us , so don't need to define in schema.
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }, 
   
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
