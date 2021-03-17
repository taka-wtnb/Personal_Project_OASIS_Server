const {recentDelaysQuery} = require('../queries/recent_delays_query');

const getRecentDelays = (pool) => (request, response) => { 
    pool.query(recentDelaysQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getRecentDelays,
}