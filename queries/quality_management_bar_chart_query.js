const qualityManagementBarChartQuery = `SELECT  DATE_PART('year', date_detected) AS Year,
DATE_PART('month', date_detected) AS Month,
CONCAT (TO_CHAR(date_trunc('month', date_detected), 'Mon'), ' ''',  TO_CHAR(date_trunc('month', date_detected), 'yy')) AS MONYY,
COUNT(*) AS Total
FROM    (
SELECT id, date_detected
FROM non_conformant
INNER JOIN (
SELECT order_id
FROM orders
WHERE supplier_id = $1
) AS supplier_orders
ON supplier_orders.order_id = non_conformant.order_id
WHERE   date_detected >= $2
AND     date_detected <= $3
) AS supplier_non_conformance
GROUP BY Year, Month, MONYY
ORDER BY Year, Month;`;

module.exports = {
    qualityManagementBarChartQuery,
}