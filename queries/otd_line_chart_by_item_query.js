const otdLineChartByItemQuery = `SELECT  DATE_PART('year', delivery_date) AS Year,
DATE_PART('month', delivery_date) AS Month,
CONCAT (TO_CHAR(date_trunc('month', order_date), 'Mon'), ' ''',  TO_CHAR(date_trunc('month', order_date), 'yy')) AS MONYY,
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
AND item_id = $2
) AS supplier_orders
ON supplier_orders.order_id = otd.order_id
) AS supplier_otds
WHERE   supplier_otds.delivery_date >= $3 
AND     supplier_otds.delivery_date <= $4
GROUP BY Year, Month, MONYY
ORDER BY Year, Month;`;

module.exports = {
    otdLineChartByItemQuery,
}