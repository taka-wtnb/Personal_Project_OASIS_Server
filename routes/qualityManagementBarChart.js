const {qualityManagementBarChartQuery} = require('../queries/quality_management_bar_chart_query');

const getQualityManagementBarChart = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(qualityManagementBarChartQuery, [supplierId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}  

module.exports = {
    getQualityManagementBarChart,
}