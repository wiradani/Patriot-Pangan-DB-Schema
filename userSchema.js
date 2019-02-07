let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let userSchema = new Schema({
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
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
    privilege: {
        type: String,
        enum: ['admin', 'patriot', 'donatur'],
        required: true
    },
    profilePicture: {
        type: String
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
        password:{
            type:String,
            required: true
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
        },
        joinDate: {
            type: Date,
            default: Date.now,
        },
        ktpImage: {
            type: String
        },
        selfImage: {
            type: String
        },
    },
    donatur: {
        isVerified: {
            type: String,
            enum:['is ative','is not'],
            required: true
        },
        joinDate: {
            type: Date,
            default: Date.now,
        },
        totalDonasi: {
            type: Number,
            default: 0
        },
        totalCampaign: {
            type: Number,
            default: 0
        },
        totalNilaiDonasi: {
            type: Number,
            default: 0
        },
        ktpImage: {
            type: String
        },
        selfImage: {
            type: String
        },

    },
   
});

// create a model
let User = mongoose.model('user', userSchema);

// export the model
module.exports = User;