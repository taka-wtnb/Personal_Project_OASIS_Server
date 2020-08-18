const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')
const {otdChartQuery} = require('./otd_chart_query')

const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
//app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });



const getDashboardInfo = (request, response) => {
  pool.query('SELECT * FROM supplier ORDER BY supplier_name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOTDChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdChartQuery, [supplierId, start, end], (error, results) => {
// console.log(request.query); 
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows)
  })
}


app.get('/suppliers', getDashboardInfo);
app.get('/otdchart/', getOTDChart);

// app
//   .route('/app/dashboard')
//   // GET endpoint
//   .get(getDashboardInfo)
//   // POST endpoint
//   //.post(addBook)


app.listen(3002, () => {
  console.log("Example app listening");
});

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Example app listening");
// });