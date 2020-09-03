const dashboardSpendingChartQuery = `SELECT  DATE_PART('year', order_date) AS Year,
DATE_PART('month', order_date) AS Month,
TO_CHAR(date_trunc('month', order_date), "Mon 'yy") AS MONYY,
SUM(qty*unit_price) AS Total
FROM orders
WHERE supplier_id = $1
AND order_date >= $2
AND order_date <= $3
GROUP BY Year, Month, MONYY
ORDER BY Year, Month;`;

module.exports = {
    dashboardSpendingChartQuery,
}