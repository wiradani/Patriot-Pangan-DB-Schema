let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let dropPointSchema = new Schema({
    
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
        required: true,
    },
    longitude: {
        type: float,
        required: true
    },
    latitude:{
        type: float,
        required: true
    },
    lokasi:{
        type: string,
        required: true
    }
});

// create a model
let DropPoint = mongoose.model('droppoint', dropPointSchema);

// export the model
module.exports = DropPoint;