const {qualityManagementPieChartQuery} = require('../queries/quality_management_pie_chart_query');

const getQualityManagementPieChart = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(qualityManagementPieChartQuery, [supplierId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getQualityManagementPieChart,
}