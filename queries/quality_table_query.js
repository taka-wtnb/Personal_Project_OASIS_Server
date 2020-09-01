const qualityTableQuery = `SELECT	item_num, item_name, COUNT(*) AS Total
FROM item
INNER JOIN (
SELECT supplier_order.order_id, supplier_order.item_id
FROM non_conformant
INNER JOIN (
SELECT order_id, item_id
FROM orders
WHERE supplier_id = $1
) AS supplier_order
ON supplier_order.order_id = non_conformant.order_id
WHERE   date_detected >= $2
AND     date_detected <= $3
) AS supplier_non_conformant
ON supplier_non_conformant.item_id = item.id
GROUP BY item_num, item_name
ORDER BY item_num ASC;`

module.exports = {
    qualityTableQuery,
}