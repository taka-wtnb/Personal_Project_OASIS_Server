const dashboardSpendingChartByItemQuery = `SELECT  DATE_PART('year', order_date) AS Year,
DATE_PART('month', order_date) AS Month,
TO_CHAR(date_trunc('month', order_date), 'Mon-yy') AS MONYY,
SUM(qty*unit_price) AS Total
FROM orders
WHERE supplier_id = $1
AND item_id = $2
AND order_date >= $3
AND order_date <= $4
GROUP BY Year, Month, MONYY
ORDER BY Year, Month;`;

module.exports = {
    dashboardSpendingChartByItemQuery,
}