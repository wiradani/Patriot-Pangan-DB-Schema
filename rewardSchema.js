let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let rewardSchema = new Schema({
    
    id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
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
    }
});

// create a model
let rewards = mongoose.model('rewards', userSchema);

// export the model
module.exports = Address;