let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },
    privilege: {
        type: String,
        enum: ['admin', 'patriot', 'donatur'],
        required: true
    },
    details:{
        birthDate: {
            type: Date
        },
        mobile_phone:{
            type: Number,
             required: true,
        },
        home_phone:{
            type: Number,
            required: true,
        }
    },
    admin: {
        joinDate:{
            type: Date,
            default: Date.now,
        }

    },
    patriot: {
        joinDate: {
            type: Date,
            default: Date.now,
        },
        jumlahLaporan: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum:['is ative','is not'],
            required: true
        }
    },
    donatur: {
        status: {
            type: String,
            enum:['is ative','is not'],
            required: true
        },
        donasi: {
            type: Number,
            default: 0
        },
        campaign: {
            type: Number,
            default: 0
        },
        donasiDisalurkan: {
            type: Number,
            default: 0
        },
        ktpPicture: {
            type: String
        },
        ktpAndSelfPicture: {
            type: String
        },

    },
   
});

// create a model
let User = mongoose.model('user', userSchema);

// export the model
module.exports = User;