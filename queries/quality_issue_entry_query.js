const qualityIssueEntryQuery = `INSERT INTO non_conformant (order_id, category_id, date_detected) VALUES($1, $2, $3);`;

module.exports = {
    qualityIssueEntryQuery,
}