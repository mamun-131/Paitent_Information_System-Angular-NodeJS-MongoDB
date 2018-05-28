﻿const users = require('../../app/controllers/users.server.controller');
const articles = require('../../app/controllers/patients.server.controller');
const alerts = require('../../app/controllers/alerts.server.controller');
const commonSymptom = require('../../app/controllers/commonSymptom.server.controller');
const tips = require('../../app/controllers/tips.server.controller');
module.exports = function (app) {
   // app.route('/api/articles/:userId')
           // .get(articles.listByCreator)
           // app.param('userId', articles.listByCreator);
        app.route('/api/articles')
            .get(articles.list)
            .post(users.requiresLogin, articles.create);

        app.route('/api/articles/:articleId')
            .get(articles.read)
            .put(users.requiresLogin, articles.hasAuthorization, articles.
                update)
            .delete(users.requiresLogin, articles.hasAuthorization, articles.
                delete);
        app.param('articleId', articles.articleByID);

        app.route('/api/articles/:courseId/viewByCourse')
            .get(articles.read);
        app.param('courseId', articles.articleByCourseID);

        app.route('/api/articles/:studentId/viewByStudent')
        .get(articles.read);
    app.param('studentId', articles.articleByStudentID);

    app.route('/api/articles/:patientId/viewByPatientId')
    .get(articles.read);
    app.param('patientId', articles.articleByPatientID);
    

    app.route('/api/commonSymptom')
    .get(commonSymptom.commonSymptomClassifier)
    .post(commonSymptom.commonSymptomClassifier);

    app.route('/api/tips')
    .get(tips.list)
};
