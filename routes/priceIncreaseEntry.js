const { priceIncreaseEntryQuery } = require('../queries/price_increase_entry_query');

const postPriceIncreaseEntry = (pool) => (request, response) => { 
    const orderId = parseInt(request.body.orderId);
    const increaseReasonId = parseInt(request.body.increaseReasonId);
  
    pool.query(priceIncreaseEntryQuery, [orderId, increaseReasonId], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    postPriceIncreaseEntry,
}