const {recentPriceIncreaseQuery} = require('../queries/recent_price_increase_query');

const getRecentPriceIncrease = (pool) => (request, response) => { 
    pool.query(recentPriceIncreaseQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getRecentPriceIncrease,
}