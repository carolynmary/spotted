
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formidable = require("formidable");

// postSchema
const postSchema = new Schema({
	username: { type: String, required: true },
	// photo: { type: File, required: true },
	body: { type: String, required: true },
	date: { type: Date, default: Date.now },
	// location: { type: Point, required: true },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;



// basic location of central park
// user database requirements
// how can I require a photo?
// mongo comes with object id
// formidable should make contentType the file type of the file you're uploading
// save image as binData (aka Buffer), when reading, encode as jpg
// formidable for uploading photos with express require in controller and routes (multer is also a good npm)
// parse image object from bindata/buffer as image
// gravatar
