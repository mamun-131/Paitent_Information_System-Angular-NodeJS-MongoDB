﻿// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db);

    // Load the 'User' model 
    require('../app/models/user.server.model');
    // Load the 'Article' model 
    require('../app/models/patient.server.model');
    require('../app/models/alert.server.model');
    require('../app/models/tip.server.model');

    // Return the Mongoose connection instance
    return db;
};