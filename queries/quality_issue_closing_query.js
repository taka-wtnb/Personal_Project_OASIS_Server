const qualityIssueClosingQuery = `UPDATE non_conformant SET date_closed = $2 WHERE date_closed IS NULL AND order_id = $1;`;

module.exports = {
    qualityIssueClosingQuery,
}