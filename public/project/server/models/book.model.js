var q = require("q");
module.exports = function(app, mongoose, db) {
    var BookSchema = require("./book.schema.js")(app, mongoose);
    var BookModel = mongoose.model("project.book", BookSchema);
    
    var api = {
        
    };
    
    
    return api;
    
};