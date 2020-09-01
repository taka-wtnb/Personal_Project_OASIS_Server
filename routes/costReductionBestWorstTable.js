const {costReductionBestWorstTableQuery} = require('../queries/cost_reduction_best_worst_table_query');

const getCostReductionBestWorstTable = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const oldStart = request.query.oldStart;
    const newStart = request.query.newStart;
    const newEnd = request.query.newEnd;
  
    pool.query(costReductionBestWorstTableQuery, [supplierId, oldStart, newStart, newEnd], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}
  
module.exports = {
    getCostReductionBestWorstTable,
}