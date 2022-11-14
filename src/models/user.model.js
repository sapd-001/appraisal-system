const mongoose = require('./../db')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name required'],
        lowerCase: true,
        trim: true,

    }, lastName: {
        type: String,
        required: [true, 'Last name required'],
        lowerCase: true,
        trim: true,

    }, email: {
        type: String,
        required: [true, 'Email address required'],
        lowerCase: true,
        trim: true,
        unique: true

    },
    password: {
        type: String,
        required: [true, 'Password address required'],
        lowerCase: true,
        trim: true,
        unique: true
    }, role: {
        type: String,
        enum: ['evaluator', 'admin', 'employee']
    }
})

module.exports = mongoose.model('user', UserSchema)