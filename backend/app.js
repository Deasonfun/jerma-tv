const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
app.use(cors())

mongoose.connect('mongodb://localhost/jermatv', function (err) {
    if (err) throw err;

    console.log('>> Database connected');

    const Schema = mongoose.Schema;
    const VideoSchema = new Schema ({
        title: String,
        link: String,
        thumb: String
    });

    const Model = mongoose.model;
    const video = Model('Videos', VideoSchema);

    app.get('/getvideos', async (req, res) => {
        console.log('>> Getting videos');
        video.find({}, (err, data) => {
            console.log(data)
            if (err) {
                res.send(err);
            }
            res.send (data);
        });
    });
});