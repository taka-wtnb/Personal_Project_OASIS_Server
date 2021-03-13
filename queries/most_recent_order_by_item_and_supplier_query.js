const mostRecentOrderByItemAndSupplierQuery = `SELECT * FROM orders 
WHERE supplier_id = $2 AND item_id = $1 
ORDER BY order_date DESC LIMIT 1;`;

module.exports = {
    mostRecentOrderByItemAndSupplierQuery,
}