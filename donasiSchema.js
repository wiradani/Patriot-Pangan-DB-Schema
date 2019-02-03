let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let donasiSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    tglDiterima: {
        type: Date,
        default : Date.now,
        required: true
    },
    pesan: {
        type: String
    },
    isDone: {
        type: Boolean,
        required: true
    },
    uang:{
        kodeUnik:{
            type: Number,
            required: true
        },
        jumlah:{
            type: Number,
            required: true
        },
        status:{
            type: String,
            required: true,
            enum: ['paid','pending','failed']
        }
    },
    barang:{
        namaBarang:{
            type: String,
            required: true
        },
        jenisBarang:{
            type: String,
            required: true
        },
        kadaluarsa:{
            type: Date
        }
    }
   
});

// create a model
let Donasi = mongoose.model('donasi', donasiSchema);

// export the model
module.exports = Donasi;