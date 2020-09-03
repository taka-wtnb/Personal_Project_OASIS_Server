const otdLineChartQuery = `SELECT  DATE_PART('year', delivery_date) AS Year,
DATE_PART('month', delivery_date) AS Month,
CONCAT (TO_CHAR(date_trunc('month', delivery_date), 'Mon'), ' ''',  TO_CHAR(date_trunc('month', delivery_date), 'yy')) AS MONYY,
COUNT(id) AS Total,
SUM(
CASE WHEN isDelayed = FALSE
    THEN 1
    ELSE 0
END
) AS OTDs
FROM    (
SELECT id, delivery_date, isdelayed
FROM otd
INNER JOIN (
SELECT order_id
FROM orders
WHERE supplier_id = $1
) AS supplier_orders
ON supplier_orders.order_id = otd.order_id
) AS supplier_otds
WHERE   supplier_otds.delivery_date >= $2 
AND     supplier_otds.delivery_date <= $3
GROUP BY Year, Month, MONYY
ORDER BY Year, Month;`;

module.exports = {
    otdLineChartQuery,
}