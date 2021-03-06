const {closedOrdersQuery} = require('../queries/closed_orders_query');

const getClosedOrders = (pool) => (request, response) => { 
    pool.query(closedOrdersQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getClosedOrders,
}