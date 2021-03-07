const {qualityIssueCategoriesQuery} = require('../queries/quality_issue_categories_query');

const getQualityIssueCategories = (pool) => (request, response) => { 
    pool.query(qualityIssueCategoriesQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getQualityIssueCategories,
}