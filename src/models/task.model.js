const mongoose = require('./../db');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task name required'],
        lowerCase: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Task description required'],
        lowerCase: true,
        trim: true,
        unique: true
    },
    status: {
        type: String,
        required: [true, 'Task status required'],
        lowerCase: true,
        trim: true,
        unique: true
    },
    priority: {
        type: String,
        required: [true, 'Task priority required'],
        lowerCase: true,
        trim: true,
        unique: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Assigned to required']
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Assigned by required']
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department',
        required: [true, 'Department required']
    },
    designation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'designation',
        required: [true, 'Designation required']
    },
        
}, { timestamps: true });

module.exports = mongoose.model('task', TaskSchema);
