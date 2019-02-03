let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let campaignSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    fotoCampaign: {
        type: String,
        required: true
    },
    namaCampaign: {
        type: String,
        required: true
    },
    dateStart: {
        type: Date,
        default: date.now,
        required: true
    },
    dateFinish: {
        type: Date,
        required: true
    },
    deskripsi:{
        type: String,
        required: true
    }, 
    isDone:{
        type: Boolean,
        required: true
    },
    targetDana:{
        type: float,
        required: true
    },
    danaTerkumpul:{
        type: float,
        required: true
    }
   
});

// create a model
let Campaign = mongoose.model('campaign', campaignSchema);

// export the model
module.exports = Campaign;