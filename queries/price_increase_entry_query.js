const priceIncreaseEntryQuery = `INSERT INTO price_change (order_id, increase_reason_id) VALUES($1, $2);`;

module.exports = {
    priceIncreaseEntryQuery,
}