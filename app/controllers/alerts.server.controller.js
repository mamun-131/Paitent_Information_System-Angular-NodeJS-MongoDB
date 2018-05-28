const mongoose = require('mongoose');
const Alert = mongoose.model('Alert');
let studentId;
//
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};
//
exports.create = function (req, res) {
    const alert = new Alert(req.body);
    alert.creator = req.user;
    alert.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(alert);
        }
    });
};
//
exports.list = function (req, res) {
  //  var query = { creator: { _id: studentId}};
    Alert.find().sort('-created').populate('creator', 'roleSeleted idSeleted firstName lastName fullName').exec((err, alerts) => {
if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
    } else {
        res.status(200).json(alerts);
        
        console.log(JSON.parse(JSON.stringify(alerts)));
    }
});
};

// exports.listStudent = function (req, res) {
//     console.log("listStudent");
//     console.log(studentId);
    
//     var query = { creator: { _id: studentId}};
//     Alert.find(query).sort('-created').populate('creator', 'idSeleted firstName lastName fullName').exec((err, alert) => {
// if (err) {
//         return res.status(400).send({
//             message: getErrorMessage(err)
//         });
//     } else {
//         res.status(200).json(alert);
//     }
// });
// };

// exports.listByCreator = function (req, res) {
//     const userId = req.params.alertId;
//     //let
//     let query = { creator: { _id: userId}};
//     Alert.find(query).sort('-created').populate('creator', 'idSeleted firstName lastName fullName').exec((err, alerts) => {
//         console.log(alerts);
//         if (err) {
//         return res.status(400).send({
//             message: getErrorMessage(err)
//         });
//     } else {
//         res.status(200).json(alerts);
//     }
// });
// };

//
exports.alertByID = function (req, res, next, id) {
    console.log(id);
    Alert.findById(id).populate('creator', 'roleSeleted idSeleted firstName lastName fullName').exec((err, alert) => {if (err) return next(err);
        console.log(alert);
        if (!alert) return next(new Error('Failed to load alert '
        + id));
    req.alert = alert;
    next();
});
};

exports.alertByCourseID = function (req, res, next, id) {
    console.log(id);
    Alert.find({clinicalHistory: id}).populate('creator', 'roleSeleted idSeleted firstName lastName fullName').exec((err, alert) => {if (err) return next(err);
        console.log(alert);
        console.log("LLLLLL");
        if (!alert) return next(new Error('Failed to load alert '
        + id));
    req.alert = alert;
    next();
    //console.log(req.alert);
   
});
};

exports.alertByStudentID = function (req, res, next, id) {
    studentId = id;
   console.log(id);
   // let query = {creator: { _id: id}};
    var query = { creator: { _id: id}};
    Alert.find(query).populate('creator', 'roleSeleted idSeleted firstName lastName fullName').exec((err, alert) => {if (err) return next(err);
        console.log(alert);
        if (!alert) return next(new Error('Failed to load alert '
        + id));
    req.alert = alert;
    next();
   console.log(req.alert);
   
});
};
//
exports.read = function (req, res) {
    res.status(200).json(req.alert);
};
//
exports.update = function (req, res) {
    const alert = req.alert;
    alert.courseCode = req.body.courseCode;
    alert.courseName = req.body.courseName;
    alert.section = req.body.section;
    alert.semester = req.body.semester;
    alert.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(alert);
        }
    });
};
//
exports.delete = function (req, res) {
    const alert = req.alert;
    alert.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(alert);
        }
    });
};
//The hasAuthorization() middleware uses the req.alert and req.user objects
//to verify that the current user is the creator of the current alert
exports.hasAuthorization = function (req, res, next) {
    console.log(req.alert.creator.id);
    console.log(req.user.id);
    if (req.alert.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


