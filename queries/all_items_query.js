const allItemsQuery = `SELECT 
supplier_orders.item_id, item_num, item_name, supplier_orders.unit_price, supplier_orders.qty, supplier_orders.order_date
FROM item
INNER JOIN (
SELECT item_id, qty, unit_price, order_date
FROM orders
WHERE supplier_id = $1
AND item_id = $2
AND order_date >= $3
AND order_date <= $4
) AS supplier_orders
ON supplier_orders.item_id = item.id;`;

module.exports = {
    allItemsQuery,
}