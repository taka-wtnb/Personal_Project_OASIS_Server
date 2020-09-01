const dashboardOpenOrderTableQuery = `SELECT item_open_orders.order_id, item_open_orders.item_num, item_open_orders.item_name, item_open_orders.unit_price, item_open_orders.qty, item_unit.unit, item_open_orders.order_date, item_open_orders.promise_date
FROM item_unit
INNER JOIN (
SELECT open_orders.order_id, item.item_num, item.item_name, open_orders.qty, item.unit_id, open_orders.unit_price, open_orders.order_date, open_orders.promise_date
FROM item
INNER JOIN (
SELECT supplier_orders.order_id, otd.delivery_date, supplier_orders.item_id, qty, supplier_orders.unit_price, supplier_orders.order_date, supplier_orders.promise_date
FROM otd
FULL OUTER JOIN (
SELECT order_id, item_id, qty, unit_price, order_date, promise_date
FROM orders
WHERE supplier_id=$1
) AS supplier_orders
ON supplier_orders.order_id = otd.order_id
WHERE otd.delivery_date IS NULL
)AS open_orders
ON open_orders.item_id=item.id
) AS item_open_orders
ON item_open_orders.unit_id = item_unit.id
ORDER BY item_open_orders.promise_date LIMIT 5;`;

module.exports = {
    dashboardOpenOrderTableQuery,
}