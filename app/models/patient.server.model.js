const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
  //  pulseRate, bloodPressure, weight, temperature, respiratoryRate, clinicalHistory

    created: {
        type: Date,
        default: Date.now
    },
    patientId: String,
    firstName: String,
    lastName: String,
    bloodPressure: {
        type: String,
        trim: true,
        required: 'Course name cannot be blank'
    },
    pulseRate: {
        type: String,
        // Validate 'courseCode' value existance
        required: 'Course code is required',
        // Trim the 'courseCode' field
        trim: true
    },
    weight: {
        type: String,
        trim: true,
        required: 'Section cannot be blank'
    },
    temperature: {
        type: String,
        trim: true,
        required: 'Semester cannot be blank'
    },
    respiratoryRate: {
        type: String,
        trim: true,
        required: 'Semester cannot be blank'
    },
    clinicalHistory: {
        type: String,
        trim: true,
        required: 'Semester cannot be blank'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Article', ArticleSchema);
