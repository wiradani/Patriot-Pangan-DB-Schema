let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let achivementSchema = new Schema({
    
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
        required: true,
    },
    patriotID: {
        type: String,
        required: true
    },
    rewardID:{
        type: String,
        required: true
    }
});

// create a model
let Achivement = mongoose.model('achivement', achivementSchema);

// export the model
module.exports = Achivement;