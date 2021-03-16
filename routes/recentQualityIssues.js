const {recentQualityIssuesQuery} = require('../queries/recent_quality_issues_query');

const getRecentQualityIssues = (pool) => (request, response) => { 
    pool.query(recentQualityIssuesQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getRecentQualityIssues,
}