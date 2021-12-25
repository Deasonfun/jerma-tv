const PORT = 3001;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

var apiKey = process.env.YT_API_KEY;
var playlistID = process.env.YT_PLAYLIST_ID;
var URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playlistID}&key=${apiKey}`;

const app = express();

app.use(cors());

app.get('/videos', (req, res) => {
    axios.get(URL).then((response) => {
        res.json(response.data);
    }).catch ((err) => {
        console.log(err);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
