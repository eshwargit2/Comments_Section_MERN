
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/CommentSection', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error: ", err));

const commantSchema = new mongoose.Schema({
  name:String,
    email: String,
    comment: String,
});

const commantData = mongoose.model('Commant', commantSchema);

module.exports = { commantData };
