const {pendingQualityIssuesQuery} = require('../queries/pending_quality_issues_query');

const getPendingQualityIssuesOrders = (pool) => (request, response) => { 
    pool.query(pendingQualityIssuesQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getPendingQualityIssuesOrders,
}