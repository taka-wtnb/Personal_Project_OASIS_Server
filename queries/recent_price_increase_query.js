const recentPriceIncreaseQuery = `SELECT * FROM price_change ORDER BY date_entered DESC, order_id DESC LIMIT 30;`;

module.exports = {
    recentPriceIncreaseQuery,
}