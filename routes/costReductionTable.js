const {costReductionTableQuery} = require('../queries/cost_reduction_table_query');

const getCostReductionTable = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const itemId = parseInt(request.query.itemId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(costReductionTableQuery, [supplierId, itemId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getCostReductionTable,
}