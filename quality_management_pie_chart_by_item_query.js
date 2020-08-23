const qualityManagementPieChartByItemQuery = `SELECT  category, COUNT(*) AS Total
FROM non_conformance_category
INNER JOIN (
SELECT date_detected, category_id
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
ON supplier_non_conformance.category_id = non_conformance_category.id
GROUP BY category
ORDER BY Total DESC;`;

module.exports = {
    qualityManagementPieChartByItemQuery,
}