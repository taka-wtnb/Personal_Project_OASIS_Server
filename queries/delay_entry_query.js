const delayEntryQuery = `INSERT INTO delay (order_id, delay_reason_id) VALUES ($1, $2);`;

module.exports = {
    delayEntryQuery,
}