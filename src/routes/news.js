const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

newsRouter.get('/', async(req, res) => {
    try {
        const newsAPI = await axios.get('https://app.sportdataapi.com/api/v1/soccer/matches?apikey=2ec45a40-1080-11ed-9c84-d9a72821bb2f&season_id=496&date_from=2020-09-19')

        const news = newsAPI.data;

        res.render('news', { matches : news.data });

    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
        } else if(error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
    }

})

module.exports = newsRouter;
