let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let keluargaSchema = new Schema({
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
        required: true,
    },
    patriotID: {
        type: String
    },
    namaKRT: {
        type: String,
        required: true
    },
    pekerjaanKRT: {
        type: String
    },
    isSejahtera: {
        type: Boolean,
        required: true
    },
    details:{
        provinsi:{
            type: String,
            required: true
        },
        Kabupaten:{
            type: String,
            required: true
        },
        kecamatan:{
            type: String,
            required: true
        },
        desa:{
            type: String,
            required: true
        },
        jalan:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true,
        }
    }
   
});

// create a model
let Keluarga = mongoose.model('keluarga', keluargaSchema);

// export the model
module.exports = Keluarga;