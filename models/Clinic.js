
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formidable = require("formidable");

// clinicSchema
const clinicSchema = new Schema({
	name: { type: String, required: true },
    location: { type: Point, required: true },
    phone: { type: String, required: true}
});

const Post = mongoose.model("Clinic", clinicSchema);

module.exports = Clinic;



// just brought code from POST
