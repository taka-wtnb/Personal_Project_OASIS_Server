const openOrderCompletionQuery = `INSERT INTO otd (order_id,	delivery_date,	isDelayed) VALUES ($1, $2, $3);`;

module.exports = {
    openOrderCompletionQuery,
}