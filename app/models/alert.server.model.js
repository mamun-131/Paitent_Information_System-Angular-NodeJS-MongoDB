const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlertSchema = new Schema({
  //  patientId, alertSubject, alertMsg, creator

    created: {
        type: Date,
        default: Date.now
    },
    patientId: String,
    alertSubject: String,
    alertMsg: String,
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Alert', AlertSchema);
