const {allOpenOrdersQuery} = require('../queries/all_open_orders_query');

const getAllOpenOrders = (pool) => (request, response) => { 
    pool.query(allOpenOrdersQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getAllOpenOrders,
}