const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'spar_db',
  password: 'nabe2371',
  port: 5432,
});

const getDashboardInfo = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY supplier_name ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }