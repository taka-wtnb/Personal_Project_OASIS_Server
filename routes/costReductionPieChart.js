const {costReductionPieChartQuery} = require('../queries/cost_reduction_pie_chart_query');

const getCostReductionPieChart = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(costReductionPieChartQuery, [supplierId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getCostReductionPieChart,
}