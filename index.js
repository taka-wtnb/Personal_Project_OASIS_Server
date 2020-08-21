const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')
const {otdLineChartQuery} = require('./otd_line_chart_query')
const {otdPieChartQuery} = require('./otd_pie_chart_query')
const {otdTableQuery} = require('./otd_table_query')
const {costReductionLineChartQuery} = require('./cost_reduction_line_chart_query')

const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
//app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });



const getSuppliers = (request, response) => {
  pool.query('SELECT * FROM supplier ORDER BY supplier_name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getItems = (request, response) => {
  pool.query('SELECT * FROM item ORDER BY item_num ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOTDLineChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdLineChartQuery, [supplierId, start, end], (error, results) => {
// console.log(request.query); 
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOTDPieChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdPieChartQuery, [supplierId, start, end], (error, results) => {
// console.log(request.query); 
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOTDTable = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdTableQuery, [supplierId, start, end], (error, results) => {
// console.log(request.query); 
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCostReductionLineChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(costReductionLineChartQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows)
  })
}

app.get('/suppliers', getSuppliers);
app.get('/items', getItems);
app.get('/otdlinechart/', getOTDLineChart);
app.get('/otdpiechart/', getOTDPieChart);
app.get('/otdtable/', getOTDTable);
app.get('/costreductionlinechart/', getCostReductionLineChart);

// app
//   .route('/app/dashboard')
//   // GET endpoint
//   .get(getSuppliers)
//   // POST endpoint
//   //.post(addBook)


app.listen(3002, () => {
  console.log("Example app listening");
});

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Example app listening");
// });