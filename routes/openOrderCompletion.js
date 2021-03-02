const {openOrderCompletionQuery} = require('../queries/open_order_completion_query');

const postOpenOrderCompletion = (pool) => (request, response) => { 
    const orderId = parseInt(request.body.orderId);
    const deliveryDate = request.body.deliveryDate;
    const isDelayed = request.body.isDelayed;
  
    pool.query(openOrderCompletionQuery, [orderId, deliveryDate, isDelayed], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    postOpenOrderCompletion,
}