const {dashboardPendingQualityIssueTableQuery} = require('../queries/dashboard_pending_quality_issue_table_query');

const getDashboardPendingQualityIssueTable = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
  
    pool.query(dashboardPendingQualityIssueTableQuery, [supplierId], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getDashboardPendingQualityIssueTable,
}