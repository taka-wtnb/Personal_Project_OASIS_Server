const getItems = (pool) => (request, response) => {
    pool.query('SELECT * FROM item ORDER BY item_num ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    });
}

module.exports = {
    getItems,
}