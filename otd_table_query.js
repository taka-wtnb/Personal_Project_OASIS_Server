const otdTableQuery = `SELECT	item.item_num, item_name, item_type, supplier_items.Total, supplier_items.OTDs
FROM item
INNER JOIN (
SELECT  supplier_otds.item_id AS new_id,
	COUNT(id) AS Total,
	SUM(
		CASE WHEN isDelayed = FALSE
			THEN 1
			ELSE 0
		END
	) AS OTDs
FROM    (
SELECT otd.id, delivery_date, isdelayed, supplier_orders.item_id
FROM otd
INNER JOIN (
SELECT order_id, item_id
FROM orders
WHERE supplier_id = $1
) AS supplier_orders
ON supplier_orders.order_id = otd.order_id
) AS supplier_otds
WHERE   supplier_otds.delivery_date >= $2 
AND     supplier_otds.delivery_date <= $3
GROUP BY supplier_otds.item_id
) AS supplier_items
ON supplier_items.new_id = item.id;`

module.exports = {
    otdTableQuery,
}