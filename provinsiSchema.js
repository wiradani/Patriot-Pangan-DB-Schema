let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let provinsiSchema = new Schema({
    
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
        required: true,
    },
    nama: {
        type: string,
        required: true
    },
    longitude:{
        type: float,
        required: true
    },
    latitude:{
        type: float,
        required: true
    },
    tingkatRawanPangan:{
        type: string,
        required: true
    },
    jumlahPatriot:{
        type: integer,
        required: true
    },
    jumlahKeluarga:{
        type: integer,
        required: true
    },
    Kabupaten: {
        id: {
            type: String,
            default: function genUUID() {uuid.v1()},
            required: true,
        },
        nama: {
            type: string,
            required: true
        },
        longitude:{
            type: float,
            required: true
        },
        latitude:{
            type: float,
            required: true
        },
        tingkatRawanPangan:{
            type: string,
            required: true
        },
        jumlahPatriot:{
            type: integer,
            required: true
        },
        jumlahKeluarga:{
            type: integer,
            required: true
        },
        Kecamatan:{
            id: {
                type: String,
                default: function genUUID() {uuid.v1()},
                required: true,
            },
            nama: {
                type: string,
                required: true
            },
            longitude:{
                type: float,
                required: true
            },
            latitude:{
                type: float,
                required: true
            },
            tingkatRawanPangan:{
                type: string,
                required: true
            },
            jumlahPatriot:{
                type: integer,
                required: true
            },
            jumlahKeluarga:{
                type: integer,
                required: true
            }
        }
    }
});

// create a model
let Provinsi = mongoose.model('provinsi', provinsiSchema);

// export the model
module.exports = Provinsi;