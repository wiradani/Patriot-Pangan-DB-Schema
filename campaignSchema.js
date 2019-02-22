let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let campaignSchema = new Schema({
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    judulCampaign: {
        type: String,
        required: true
    },
    fotoCampaign: {
        type: String,
        required: true
    },
    fotoPendukung: {
        foto1:{
            type: string,
             required: false,
        },
        foto2:{
            type: string,
             required: false,
        },
        foto3:{
            type: string,
             required: false,
        },
        foto4:{
            type: string,
             required: false,
        },
        foto5:{
            type: string,
             required: false,
        },
    },
    isVerified: {
        type: Boolean,
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
    detail:{
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
    },
    katagori:{
        type: String,
        required: true
    },  
   
});

// create a model
let Campaign = mongoose.model('campaign', campaignSchema);

// export the model
module.exports = Campaign;