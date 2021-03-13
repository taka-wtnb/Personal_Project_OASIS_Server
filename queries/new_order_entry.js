const newOrderEntryQuery = `INSERT INTO orders (item_id, supplier_id, qty, unit_price, order_date, promise_date)
VALUES ($1, $2, $3, $4, $5, $6);`;

module.exports = {
    newOrderEntryQuery,
}