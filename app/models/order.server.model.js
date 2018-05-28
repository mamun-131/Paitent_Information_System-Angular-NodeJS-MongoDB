const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    movedate: {
        type: Date,
    },
    addressOrigin: {
        type: String,
        trim: true,
        required: 'Section cannot be blank'
    },
    zipOrigin: {
        type: String,
        trim: true,
        required: 'Section cannot be blank'
    },
    addressDestination: {
        type: String,
        trim: true,
        required: 'Section cannot be blank'
    },
    zipDestination: {
        type: String,
        trim: true,
        required: 'Section cannot be blank'
    },
    truckSize: {
        type: String,
        trim: true,
        required: 'Semester cannot be blank'
    },
    totalDistance: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    creator: {
        type: Schema.ObjectId,Order,
        ref: 'User'
    }
});
mongoose.model('Order', OrderSchema);
