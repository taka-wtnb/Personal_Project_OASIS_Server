const {qualityIssueClosingQuery} = require('../queries/quality_issue_closing_query');

const putQualityIssueClosing = (pool) => (request, response) => { 
    const orderId = parseInt(request.body.orderId);
    const dateClosed = request.body.dateClosed;
  
    pool.query(qualityIssueClosingQuery, [orderId, dateClosed], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    putQualityIssueClosing,
}