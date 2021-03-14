const {thirtyMostRecentOrdersQuery} = require('../queries/thirty_most_recent_orders_query');

const getThirtyMostRecentOrders = (pool) => (request, response) => { 
    pool.query(thirtyMostRecentOrdersQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getThirtyMostRecentOrders,
}