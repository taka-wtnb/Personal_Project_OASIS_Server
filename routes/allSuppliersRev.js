const {allSuppliersQuery} = require('../queries/all_suppliers_query');

const getAllSuppliers = (pool) => (request, response) => { 
    pool.query(allSuppliersQuery, (error, results) => {
      if (error) { 
        throw error;
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getAllSuppliers,
}