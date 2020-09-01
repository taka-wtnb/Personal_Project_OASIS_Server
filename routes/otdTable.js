const {otdTableQuery} = require('../queries/otd_table_query');

const getOTDTable = (pool) => (request, response) => { 
    const supplierId = parseInt(request.query.supplierId);
    const start = request.query.start;
    const end = request.query.end;
  
    pool.query(otdTableQuery, [supplierId, start, end], (error, results) => {
      if (error) { 
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getOTDTable,
}