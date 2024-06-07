const express = require('express');
const SongData = express.Router();
require('dotenv/config');
const axios = require('axios');

SongData.get('/getlyrics', async (req, res) => {
    try {
        const name = req.query.name;
        const searchResponse = await axios.get(`https://melodymusicapi.vercel.app/api/search/songs?query=${name}`);
        const ID = searchResponse.data.data.results[0].id;
        const lyricsResponse = await axios.get(`https://melodymusicapi.vercel.app/api/songs/${ID}/lyrics`);
        const lyrics = lyricsResponse.data.data;
        res.send(lyrics);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
});

module.exports = SongData;
