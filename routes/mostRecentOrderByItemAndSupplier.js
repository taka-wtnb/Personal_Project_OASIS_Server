const {mostRecentOrderByItemAndSupplierQuery} = require('../queries/most_recent_order_by_item_and_supplier_query');

const getMostRecentOrderByItemAndSupplierQuery = (pool) => (request, response) => { 

    const itemId = parseInt(request.body.itemId);
    const supplierId = parseInt(request.body.supplierId);

    pool.query(mostRecentOrderByItemAndSupplierQuery,  [itemId, supplierId], (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getMostRecentOrderByItemAndSupplierQuery,
}