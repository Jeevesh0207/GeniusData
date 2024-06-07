const express = require('express');
const GetPoster = express.Router();
require('dotenv/config');
const axios = require('axios');

GetPoster.get('/getposter', async (req, res) => {
    try {
        const name = req.query.name;
        const searchResponse = await axios.get(`https://melodymusicapi.vercel.app/api/search/songs?query=${name}`);
        const poster = searchResponse.data.data.results[0].image;
        res.send(poster);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
});

module.exports = GetPoster;
