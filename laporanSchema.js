let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let laporanSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    keluargaID: {
        type: String,
        required: true,
    },
    datePelaporan: {
        type: Date,
        required: true,
        default: Date.now
    },
    batasPelaporan: {
        type: date,
        required: true
    },
    fotoLaporan: {
        type: String,
        required: true
    },
   deskripsi: {
        type: String,
    },
    kondisiRawanPangan:{
        type: String,
        enum: ['1','2','3','4','5']
    },
    details:{
        x1:{
            type: Boolean,
            required: true
        },
        x2:{
            type: Boolean,
            required: true
        },
        x3:{
            type: Boolean,
            required: true
        },
        x4:{
            type: Boolean,
            required: true
        },
        x5:{
            type: Boolean,
            required: true
        },
        x6:{
            type: Boolean,
            required: true
        },
        x7:{
            type: Boolean,
            required: true
        },
        x8:{
            type: Boolean,
            required: true
        },
        x9:{
            type: Boolean,
            required: true
        },
        x10:{
            type: Boolean,
            required: true
        },
    }
   
});

// create a model
let Laporan = mongoose.model('laporan', keluargaSchema);

// export the model
module.exports = Laporan;