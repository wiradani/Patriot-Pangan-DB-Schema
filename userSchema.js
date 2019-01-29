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
    joinDate: {
        type: Date,
        default: Date.now,
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
        status:{
            type: String,
            enum: ['admin', 'superAdmin'],
            default: 'admin'
        }
    },
    patriot: {
        jumlahLaporan: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: String,
            enum:['is ative','is not'],
            required: true
        }
    },
    donatur: {
        isVerified: {
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