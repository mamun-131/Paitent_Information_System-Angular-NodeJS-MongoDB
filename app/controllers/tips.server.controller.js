const mongoose = require('mongoose');
const Tip = mongoose.model('Tip');
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
    const tip = new Tip(req.body);
    tip.creator = req.user;
    tip.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(tip);
        }
    });
};
//
exports.list = function (req, res) {
  //  var query = { creator: { _id: studentId}};
  Tip.find().sort('-created').populate('creator', 'roleSeleted idSeleted firstName lastName fullName').exec((err, tips) => {
if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
    } else {
        res.status(200).json(tips);
        
        console.log(JSON.parse(JSON.stringify(tips)));
    }
});
}

