const {allItemsQuery} = require('../queries/all_items_query');

const getAllItems = (pool) => (request, response) => { 
    pool.query(allItemsQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getAllItems,
}