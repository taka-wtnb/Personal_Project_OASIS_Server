const getSuppliers = (pool) => (request, response) => {
    pool.query('SELECT * FROM supplier ORDER BY supplier_name ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getSuppliers,
}