const {newOrderEntryQuery} = require('../queries/new_order_entry_query');

const postNewOrderEntry = (pool) => (request, response) => { 
    const itemId = parseInt(request.body.itemId);
    const supplierId = parseInt(request.body.supplierId);
    const qty = parseFloat(request.body.qty).toFixed(2);
    const unitPrice = parseFloat(request.body.unitPrice).toFixed(2);
    const orderDate = request.body.orderDate;
    const promiseDate = request.body.promiseDate;
  
    pool.query(newOrderEntryQuery, [itemId, supplierId, qty, unitPrice, orderDate, promiseDate], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    postNewOrderEntry,
}