const users = require('../../app/controllers/users.server.controller');
//const tips = require('../../app/controllers/tips.server.controller');
const tips = require('../../app/controllers/tips.server.controller');
//
module.exports = function (app) {
   // app.route('/api/tips/:userId')
           // .get(tips.listByCreator)
           // app.param('userId', tips.listByCreator);
        app.route('/api/tip')
            .post(users.requiresLogin, tips.create);
        // app.route('/api/tips')
        //     .get(tips.list)

       
};
