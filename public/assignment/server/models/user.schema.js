module.exports = function(app, mongoose) {
    
    var UserSchema = new mongoose.Schema({
        firstName : String,
        lastName : String,
        username : String,
        password : String
    }, {collection : "user"});
    
    return UserSchema;
};