const express = require('express');
const cors = require('cors');

const {pool} = require('./config');

const {otdLineChartQuery} = require('./otd_line_chart_query');
const {otdLineChartByItemQuery} = require('./otd_line_chart_by_item_query');
const {otdPieChartQuery} = require('./otd_pie_chart_query');
const {otdPieChartByItemQuery} = require('./otd_pie_chart_by_item_query');
const {otdTableQuery} = require('./otd_table_query');
const {costReductionLineChartQuery} = require('./cost_reduction_line_chart_query');
const {costReductionPieChartQuery} = require('./cost_reduction_pie_chart_query');
const {costReductionPieChartByItemQuery} = require('./cost_reduction_pie_chart_by_item_query');
const {costReductionTableQuery} = require('./cost_reduction_table_query');
const {qualityManagementLineChartQuery} = require('./quality_management_line_chart_query');
const {qualityManagementLineChartByItemQuery} = require('./quality_management_line_chart_by_item_query');
const {qualityManagementPieChartQuery} = require('./quality_management_pie_chart_query');
const {qualityManagementPieChartByItemQuery} = require('./quality_management_pie_chart_by_item_query');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

const getSuppliers = (request, response) => {
  pool.query('SELECT * FROM supplier ORDER BY supplier_name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getItems = (request, response) => {
  pool.query('SELECT * FROM item ORDER BY item_num ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getOTDLineChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdLineChartQuery, [supplierId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getOTDLineChartByItem = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdLineChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getOTDPieChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdPieChartQuery, [supplierId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getOTDPieChartByItem = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(otdPieChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getOTDTable = (request, response) => { 
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

const getCostReductionLineChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(costReductionLineChartQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getCostReductionPieChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(costReductionPieChartQuery, [supplierId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getCostReductionPieChartByItem = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(costReductionPieChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getCostReductionTable = (request, response) => { 
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

const getQualityManagementLineChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(qualityManagementLineChartQuery, [supplierId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getQualityManagementLineChartByItem = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(qualityManagementLineChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getQualityManagementPieChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(qualityManagementPieChartQuery, [supplierId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getQualityManagementPieChartByItem = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(qualityManagementPieChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

app.get('/suppliers', getSuppliers);
app.get('/items', getItems);
app.get('/otdlinechart/', getOTDLineChart);
app.get('/otdlinechartbyitem/', getOTDLineChartByItem);
app.get('/otdpiechart/', getOTDPieChart);
app.get('/otdpiechartbyitem/', getOTDPieChartByItem);
app.get('/otdtable/', getOTDTable);
app.get('/costreductionlinechart/', getCostReductionLineChart);
app.get('/costreductionpiechart/', getCostReductionPieChart);
app.get('/costreductionpiechartbyitem/', getCostReductionPieChartByItem);
app.get('/costreductiontable/', getCostReductionTable);
app.get('/qualitymanagementlinechart/', getQualityManagementLineChart);
app.get('/qualitymanagementlinechartbyitem/', getQualityManagementLineChartByItem);
app.get('/qualitymanagementpiechart/', getQualityManagementPieChart);
app.get('/qualitymanagementpiechartbyitem/', getQualityManagementPieChartByItem);

app.listen(3002, () => {
  console.log("Server is listening");
});

// app.listen(process.env.PORT || 3002, () => {
//   console.log("Server is listening");
// });