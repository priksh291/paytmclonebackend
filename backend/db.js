const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://kshitijpal717:ZmA9erPer9nEdlZB@cluster0.nb8mb5g.mongodb.net/');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
    }
})

const User = mongoose.model('UserSchema', userSchema);

module.exports = {
    User
}

