let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let addressSchema = new Schema({
    
    id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    addresstype: {
        type: String,
        required: true
    },
    provinsi:{
        type: String,
        required: true
    },
    kota:{
        type: String,
        required: true
    },
    kecamatan:{
        type: String,
        required: true
    },
    kelurahan:{
        type: String,
        required: true
    },
    jalan:{
        type: String,
        required: true
    }
});

// create a model
let address = mongoose.model('address', userSchema);

// export the model
module.exports = Address;