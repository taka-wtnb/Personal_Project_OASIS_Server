const costReductionPieChartQuery = `SELECT 	
reason, 
COUNT(id) AS Total
FROM	(
SELECT reason, price_increase_reason.id, increase_orders.order_date
FROM price_increase_reason
INNER JOIN (
SELECT price_change.order_id, increase_reason_id, base_orders.order_date
FROM price_change
INNER JOIN (
SELECT order_id, supplier_id, item_id, order_date
FROM orders
WHERE supplier_id = $1
) AS base_orders
ON base_orders.order_id = price_change.order_id
) AS increase_orders
ON increase_orders.increase_reason_id = price_increase_reason.id
) AS reason_count
WHERE reason_count.order_date >= $2 
AND reason_count.order_date <= $3
GROUP BY reason
ORDER BY Total DESC;`;

module.exports = {
    costReductionPieChartQuery,
}