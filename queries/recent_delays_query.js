const recentDelaysQuery = `SELECT supplier_id, delay_info.order_id, delay_info.delay_reason_id, promise_date
FROM orders
INNER JOIN (
SELECT order_id, delay_reason_id FROM delay 
) AS delay_info
ON delay_info.order_id = orders.order_id
ORDER BY promise_date DESC, supplier_id LIMIT 30;`;

module.exports = {
    recentDelaysQuery,
}