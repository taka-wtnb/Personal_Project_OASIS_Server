const recentQualityIssuesQuery = `SELECT 
non_conformant.id, base_orders.supplier_id, non_conformant.order_id, category_id, date_detected, date_closed
FROM non_conformant
INNER JOIN (
SELECT supplier_id, order_id
FROM orders
) AS base_orders
ON base_orders.order_id = non_conformant.order_id
ORDER BY date_detected DESC LIMIT 30;`;

module.exports = {
    recentQualityIssuesQuery,
}