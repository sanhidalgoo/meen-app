const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });


// BlogPost.create({
//     title: 'How to create an onnline course',
//     body: 'If you are familiar with online courses, you will know that it makes learning affective'
// }, (error, blogpost) => {
//     console.log(error, blogpost);
// });

var id = "620d124a964e9d83a943158b";
BlogPost.findByIdAndDelete(id, {
    title: 'updated title'
}, (error, blogspot) => {
    console.log(error, blogspot);
});