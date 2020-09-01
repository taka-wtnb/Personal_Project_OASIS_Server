const {dashboardSpendingChartQuery} = require('../queries/dashboard_spending_chart_query');

const getDashboardSpendingChart = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(dashboardSpendingChartQuery, [supplierId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
  }

module.exports = {
    getDashboardSpendingChart,
}