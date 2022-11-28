const mongoose = require("./../db");


const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Department name required"],
        lowerCase: true,
        trim: true,
        unique: true    
    },
    description: {
        type: String,
        required: [true, "Department description required"],
        lowerCase: true,
        trim: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model("department", DepartmentSchema);