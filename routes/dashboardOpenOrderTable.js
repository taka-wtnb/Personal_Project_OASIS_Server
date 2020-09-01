const {dashboardOpenOrderTableQuery} = require('../queries/dashboard_open_order_table_query');

const getDashboardOpenOrderTable = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
  
    pool.query(dashboardOpenOrderTableQuery, [supplierId], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getDashboardOpenOrderTable,
}