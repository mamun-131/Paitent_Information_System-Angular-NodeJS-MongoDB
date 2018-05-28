const users = require('../../app/controllers/users.server.controller');
//const alerts = require('../../app/controllers/alerts.server.controller');
const alerts = require('../../app/controllers/alerts.server.controller');
//
module.exports = function (app) {
   // app.route('/api/alerts/:userId')
           // .get(alerts.listByCreator)
           // app.param('userId', alerts.listByCreator);
        app.route('/api/alert')
            .get(alerts.list)
            .post(users.requiresLogin, alerts.create);
        app.route('/api/alerts/:alertId')
            .get(alerts.read)
            .put(users.requiresLogin, alerts.hasAuthorization, alerts.
                update)
            .delete(users.requiresLogin, alerts.hasAuthorization, alerts.
                delete);
        app.param('alertId', alerts.alertByID);

        app.route('/api/alerts/:courseId/viewByCourse')
            .get(alerts.read)
        app.param('courseId', alerts.alertByCourseID)

        app.route('/api/alerts/:studentId/viewByStudent')
        .get(alerts.read)
    app.param('studentId', alerts.alertByStudentID)

};
