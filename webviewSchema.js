let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let webviewSchema = new Schema({
    
    id: {
        type: String,
        default: function genUUID() {uuid.v1()},
        required: true,
    },
    totalDanaDisalrukan: {
        type: integer,
        required: true
    },
    totalBarangDisalurkan:{
        type: integer,
        required: true
    },
    jumlahPatriotBergabung:{
        type: integer,
        required: true
    }
});

// create a model
let Webview = mongoose.model('webview', webviewSchema);

// export the model
module.exports = Webview;