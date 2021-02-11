const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Issue Schema
const issueSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    votes:  {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Issue', issueSchema);