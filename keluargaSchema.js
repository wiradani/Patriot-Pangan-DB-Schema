let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let keluargaSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    userID: {
        type: String
    },
    namaKRT: {
        type: String,
        required: true
    },
    pekerjaanKRT: {
        type: String
    },
    bangunanTinggal: {
        type: String,
        enum: ['milik sendiri', 'kontrak', 'tidak ada'],
        required: true
    },
    sumberAir: {
        type: String,
        enum: ['sungai', 'laut','pdam', 'tidak ada'],
        required: true
    },
    sumberListrik:{
        type: String,
        enum: ['PLN','genset','tidak ada']
    },
    details:{
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