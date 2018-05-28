//http://joonku.com/project/machine_learning/apidoc#decision_tree
//load machine_learning module
var ml = require('machine_learning');
let aaa;

// Create a new 'render' controller method
exports.commonSymptomClassifier = function (req, res) {
    //read the new data
    var fever = req.body.fever;
    console.log(fever);
    var diarrhea = req.body.diarrhea;
    console.log(diarrhea);
    var muscleAches = req.body.muscleAches;
    console.log(muscleAches);
    var coughing = req.body.coughing;
    console.log(coughing);
    var severeheadache = req.body.severeheadache;
    console.log(severeheadache);
    var Fatigue = req.body.Fatigue;
    console.log(Fatigue);
    var visionProblems = req.body.visionProblems;
    console.log(visionProblems);
    var chestPain = req.body.chestPain;
    console.log(chestPain);
    var difficultyBreathing = req.body.difficultyBreathing;
    console.log(difficultyBreathing);
    var irregularHeartbeat = req.body.irregularHeartbeat;
    console.log(irregularHeartbeat);
    var chestDiscomfort = req.body.chestDiscomfort;
    console.log(chestDiscomfort);
    var nausea = req.body.nausea;
    console.log(nausea);
    var indigestion = req.body.indigestion;
    console.log(indigestion);
    var heartburn = req.body.heartburn;
    console.log(heartburn);
    var stomachPain = req.body.stomachPain;
    console.log(stomachPain);
    var age = req.body.age;
    console.log(age);
    var days = req.body.days;
    console.log(days);
    //
    // Predicting influenca
    //fever, diarrhea, muscleAches, coughing, severeheadache, Fatigue, visionProblems, chestPain, difficultyBreathing, irregularHeartbeat, chestDiscomfort, nausea, indigestion, heartburn, stomachPain
    var data =
        [
            ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 60, 5],
            ['yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 30, 6],
            ['yes', 'no', 'yes', 'yes', 'no', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 40, 7],
            ['yes', 'no', 'no', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 20, 2],
            ['yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 30, 3],
            ['no', 'no', 'no', 'yes', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 20, 7],

            ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 60, 1],
            ['yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 30, 2],
            ['yes', 'no', 'yes', 'yes', 'no', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 40, 2],
            ['yes', 'no', 'no', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 20, 1],
            ['yes', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 30, 4],
            ['no', 'no', 'no', 'yes', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 20, 2],

            ['no', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 40, 10],
            ['no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 30, 15],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no', 20, 20],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no', 38, 25],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 60, 30],

            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 70, 5],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'no', 'yes', 'no', 55, 3],
            ['no', 'no', 'no', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 35, 7],
            ['no', 'no', 'no', 'no', 'yes', 'no', 'yes', 'no', 'no', 'yes', 'no', 'no', 'yes', 'yes', 'no', 40, 6],
            ['no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 65, 4],

            ['no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 75, 15],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 'yes', 25, 20],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'no', 33, 30],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 45, 25],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 'yes', 33, 13],

            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'no', 45, 2],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 65, 3],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'no', 'no', 'yes', 'yes', 'yes', 'yes', 33, 5],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'no', 'no', 'no', 'yes', 'yes', 'no', 45, 7],
            ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes', 'no', 'no', 'no', 'no', 'yes', 'yes', 'yes', 65, 10]
        ];
    //decison made
    var result = ['Influenza+See a doctor', 'Influenza+See a doctor', 'Influenza+See a doctor', 'Cold+Stay warm', 'Influenza+See a doctor', 'Cold+See a doctor',
        'Might be Influenza+See a doctor if longer', 'Might be Influenza+See a doctor if longer', 'Might be Influenza+See a doctor if longer', 'Cold+Stay warm', 'Might be Influenza+See a doctor if longer', 'Cold+Stay warm',
        'HeartDisease+See a doctor', 'HeartDisease+See a doctor', 'HeartDisease+See a doctor', 'HeartDisease+See a doctor', 'HeartDisease+See a doctor',
        'Might be HeartDisease+See a doctor if longer', 'Might be HeartDisease+See a doctor if longer', 'Might be Hypertension+See a doctor if longer', 'Might be Hypertension+See a doctor if longer', 'Might be Hypertension+See a doctor if longer',
        'Acidity+See a doctor', 'Acidity+See a doctor', 'Acidity + See a doctor', 'Acidity+See a doctor', 'Acidity+See a doctor',
        'Might be Acidity+See a doctor if longer', 'Might be Acidity+See a doctor if longer', 'Might be Acidity+See a doctor if longer', 'Might be Acidity+See a doctor if longer', 'Might be Acidity+See a doctor if longer'];



    //create new Decision Tree using this dataset
    var dt = new ml.DecisionTree({
        data: data,
        result: result
    });
  
    dt.build();

    //classifiy new data using this Decision Tree
    console.log("Classify : ", dt.classify([fever, diarrhea, muscleAches, coughing, severeheadache, Fatigue, visionProblems, chestPain, difficultyBreathing, irregularHeartbeat, chestDiscomfort, nausea, indigestion, heartburn, stomachPain, age, days]));
    var classificationResult = dt.classify([fever, diarrhea, muscleAches, coughing, severeheadache, Fatigue, visionProblems, chestPain, difficultyBreathing, irregularHeartbeat, chestDiscomfort, nausea, indigestion, heartburn, stomachPain, age, days])
    var tree = dt.getTree();

    //Pruning Decision Tree is recommended to avoid overfitting
    // Decision Tree in this library uses simple pruning algorithm
    // which merges two branches of Decision Tree
    // when entropy loss of merging the two branches
    // is smaller than mingain value. 
    dt.prune(1.0); // 1.0 : mingain.

    // Use the 'response' object to render the 'index' view with a 'title' property
    // res.render('./results.ejs', {
    //     classificationResult: JSON.stringify(classificationResult),
    //     tree: tree
    // }
    res.status(200).json(classificationResult);
  // res.status(200).json(JSON.stringify(classificationResult));
   aaa = classificationResult;
    req.classificationResult = classificationResult;
    console.log("TTT : ", JSON.stringify(classificationResult));
      //  );

};
exports.read = function (req, res) {
    res.status(200).json(req.classificationResult);
    console.log("Mmm : ", JSON.stringify(req.classificationResult));
};

