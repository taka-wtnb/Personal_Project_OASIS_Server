const {qualityIssueEntryQuery} = require('../queries/quality_issue_entry_query');

const postQualityIssueEntry = (pool) => (request, response) => { 
    const orderId = parseInt(request.body.orderId);
    const categoryId = request.body.categoryId;
    const dateDetected = request.body.dateDetected;
  
    pool.query(qualityIssueEntryQuery, [orderId, categoryId, dateDetected], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    postQualityIssueEntry,
}