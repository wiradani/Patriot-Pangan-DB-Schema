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
    admin: {

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
        }
    },
    donatur: {

    },
    // method: {
    //     type: String,
    //     enum: ['local', 'google'],
    //     required: true
    // },
    // local: {
    //     email: {
    //         type: String,
    //         lowercase: true
    //     },
    //     password: {
    //         type: String,
    //     }
    // },
    // google: {
    //     id: {
    //         type: String
    //     },
    //     email: {
    //         type: String,
    //         lowercase: true
    //     }
    // }
});

// create a model
let User = mongoose.model('user', userSchema);

// export the model
module.exports = User;