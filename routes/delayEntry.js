const { delayEntryQuery } = require('../queries/delay_entry_query');

const postDelayEntry = (pool) => (request, response) => { 
    const orderId = parseInt(request.body.orderId);
    const delayReasonId = parseInt(request.body.delayReasonId);
  
    pool.query(delayEntryQuery, [orderId, delayReasonId], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    postDelayEntry,
}