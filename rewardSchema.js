let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let rewardSchema = new Schema({
    
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
        required: true,
    },
    namaReward: {
        type: String,
        required: true
    },
    deskripsi:{
        type: String,
        required: true
    },
    syaratReward:{
        type: int,
        required: true
    },
    badgeLogo:{
        type: String,
        required: true
    }
});

// create a model
let rewards = mongoose.model('rewards', userSchema);

// export the model
module.exports = Address;