const otdPieChartByItemQuery = `
SELECT 	reason, 
	COUNT(id) AS cases
FROM	(
SELECT delay_reason.id, reason, supplier_delay.delivery_date
FROM delay_reason
INNER JOIN (
SELECT  id, delay.order_id, delay_reason_id, supplier_delivery.delivery_date
FROM  delay
INNER JOIN (
SELECT otd.order_id, delivery_date
FROM otd
INNER JOIN (
SELECT order_id
FROM orders
WHERE supplier_id = $1
AND item_id = $2
) AS supplier_orders
ON supplier_orders.order_id = otd.order_id
) AS supplier_delivery
ON supplier_delivery.order_id = delay.order_id
) AS supplier_delay
ON supplier_delay.delay_reason_id = delay_reason.id
) AS supplier_reason
WHERE   supplier_reason.delivery_date >= $3
AND     supplier_reason.delivery_date <= $4
GROUP BY reason
ORDER BY cases DESC;`;

module.exports = {
    otdPieChartByItemQuery,
}