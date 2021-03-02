const {delayReasonsQuery} = require('../queries/delay_reasons_query');

const getDelayReasons = (pool) => (request, response) => { 
    pool.query(delayReasonsQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getDelayReasons,
}