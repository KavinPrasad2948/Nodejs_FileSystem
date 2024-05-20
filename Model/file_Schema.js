const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const File = mongoose.model("File", FileSchema);

module.exports = File;
