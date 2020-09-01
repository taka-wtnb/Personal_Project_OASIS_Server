const costReductionLineChartQuery = `SELECT unit_price, order_date
FROM orders
WHERE supplier_id = $1
AND item_id = $2
AND order_date >= $3 
AND order_date <= $4
ORDER BY order_date ASC;`;

module.exports = {
    costReductionLineChartQuery,
}