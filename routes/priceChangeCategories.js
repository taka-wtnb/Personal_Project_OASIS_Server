const {priceChangeCategoriesQuery} = require('../queries/price_change_categories_query');

const getPriceChangeCategories = (pool) => (request, response) => { 
    pool.query(priceChangeCategoriesQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getPriceChangeCategories,
}