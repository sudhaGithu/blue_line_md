const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    practiceName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    iAmA: {
        type: String,
        required: true
    },
    productInterest: {
        type: String,
        required: true
    },
    providers: {
        type : Number,
        required : true
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Provider', ProviderSchema);