var mongoose    = require('mongoose');
var log         = require('./log')(module);
var config      = require('./config');

mongoose.connect(config.get('mongoose:uri'));
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connection to Database is open");
});

var Schema = mongoose.Schema;

// Schemas

var Images = new Schema({
    title: {
        type: String,
        required: true
    },
    url: { type: String, required: true }
});

var Article = new Schema({
    title:       { type: String, required: true },
    description: { type: String, required: false },
    completed:   { type: Boolean, required: true },
    urgency:     { type: String, enum: ["hi", "middle", "low"], required: true},
    modified:    { type: Date, default: Date.now },
    images:      [Images]
});

// validation
Article.path('title').validate(function (v) {
    return v.length > 2 && v.length < 70;
});


module.exports.ArticleModel = mongoose.model('Article', Article);