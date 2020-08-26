const dashboardSpendingTableQuery = `SELECT item_num, item_name, supplier_orders.Total 
FROM item
INNER JOIN (
SELECT item_id, SUM(qty*unit_price) AS Total
FROM orders
WHERE supplier_id = $1
AND order_date >= $2
AND order_date <= $3
GROUP BY item_id
) AS supplier_orders
ON supplier_orders.item_id = item.id;`;

module.exports = {
    dashboardSpendingTableQuery,
}