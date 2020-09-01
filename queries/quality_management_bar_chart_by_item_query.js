const qualityManagementBarChartByItemQuery = `SELECT  DATE_PART('year', date_detected) AS Year,
DATE_PART('month', date_detected) AS Month,
TO_CHAR(date_trunc('month', date_detected), 'Mon-yy') AS MONYY,
COUNT(*) AS Total
FROM    (
SELECT id, date_detected
FROM non_conformant
INNER JOIN (
SELECT order_id
FROM orders
WHERE supplier_id = $1
AND item_id = $2
) AS supplier_orders
ON supplier_orders.order_id = non_conformant.order_id
WHERE   date_detected >= $3
AND     date_detected <= $4
) AS supplier_non_conformance
GROUP BY Year, Month, MONYY
ORDER BY Year, Month;`;

module.exports = {
    qualityManagementBarChartByItemQuery,
}