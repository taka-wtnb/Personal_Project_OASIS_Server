const costReductionBestWorstTableQuery = `SELECT old_table.oldId, new_item.newId, new_item.item_num, new_item.item_name, old_table.oldVWAP, new_item.newVWAP
FROM (
SELECT item_id AS oldId, SUM(qty*unit_price)/SUM(qty) AS oldVWAP 
FROM orders 
WHERE supplier_id=$1
AND order_date >= $2
AND order_date < $3
GROUP BY item_id
ORDER BY item_id
) AS old_table
FULL OUTER JOIN (
SELECT item_num, item_name, new_table.newId, new_table.newVWAP
FROM item
INNER JOIN (
SELECT item_id AS newId, SUM(qty*unit_price)/SUM(qty) AS newVWAP
FROM orders
WHERE supplier_id=$1
AND order_date >= $3 
AND order_date <= $4
GROUP BY item_id
ORDER BY item_id
) AS new_table
ON new_table.newId = item.id
) AS new_item
ON new_item.newId = old_table.oldId;`;

module.exports = {
    costReductionBestWorstTableQuery,
}