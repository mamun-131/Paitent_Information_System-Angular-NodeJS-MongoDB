const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TipSchema = new Schema({
  //  created, tips, creator

    created: {
        type: Date,
        default: Date.now
    },
    tips: String,
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Tip', TipSchema);
