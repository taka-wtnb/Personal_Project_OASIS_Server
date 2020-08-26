const express = require('express');
const cors = require('cors');

const {pool} = require('./config');

const {dashboardOpenOrderTableQuery} = require('./dashboard_open_order_table_query');
const {dashboardPendingQualityIssueTableQuery} = require('./dashboard_pending_quality_issue_table_query');
const {dashboardSpendingChartQuery} = require('./dashboard_spending_chart_query');
const {dashboardSpendingChartByItemQuery} = require('./dashboard_spending_chart_by_item_query');
const {dashboardSpendingTableQuery} = require('./dashboard_spending_table_query');
const {otdLineChartQuery} = require('./otd_line_chart_query');
const {otdLineChartByItemQuery} = require('./otd_line_chart_by_item_query');
const {otdPieChartQuery} = require('./otd_pie_chart_query');
const {otdPieChartByItemQuery} = require('./otd_pie_chart_by_item_query');
const {otdTableQuery} = require('./otd_table_query');
const {costReductionLineChartQuery} = require('./cost_reduction_line_chart_query');
const {costReductionPieChartQuery} = require('./cost_reduction_pie_chart_query');
const {costReductionPieChartByItemQuery} = require('./cost_reduction_pie_chart_by_item_query');
const {costReductionTableQuery} = require('./cost_reduction_table_query');
const {costReductionBestWorstTableQuery} = require('./cost_reduction_best_worst_table_query');
const {qualityManagementLineChartQuery} = require('./quality_management_line_chart_query');
const {qualityManagementLineChartByItemQuery} = require('./quality_management_line_chart_by_item_query');
const {qualityManagementPieChartQuery} = require('./quality_management_pie_chart_query');
const {qualityManagementPieChartByItemQuery} = require('./quality_management_pie_chart_by_item_query');
const {qualityTableQuery} = require('./quality_table_query');

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

const getDashboardOpenOrderTable = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);

  pool.query(dashboardOpenOrderTableQuery, [supplierId], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getDashboardPendingQualityIssueTable = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);

  pool.query(dashboardPendingQualityIssueTableQuery, [supplierId], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getDashboardSpendingChart = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(dashboardSpendingChartQuery, [supplierId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getDashboardSpendingChartByItem = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const itemId = parseInt(request.query.itemId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(dashboardSpendingChartByItemQuery, [supplierId, itemId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}

const getDashboardSpendingTable = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(dashboardSpendingTableQuery, [supplierId, start, end], (error, results) => {
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

const getCostReductionBestWorstTable = (request, response) => { 
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

const getQualityTable = (request, response) => { 
  const supplierId = parseInt(request.query.supplierId);
  const start = request.query.start;
  const end = request.query.end;

  pool.query(qualityTableQuery, [supplierId, start, end], (error, results) => {
    if (error) { 
      throw error
    }
    response.status(200).json(results.rows);
  });
}


app.get('/suppliers', getSuppliers);
app.get('/items', getItems);
app.get('/dashboardopenordertable/', getDashboardOpenOrderTable);
app.get('/dashboardpendingqualityissuetable/', getDashboardPendingQualityIssueTable);
app.get('/dashboardspendingchart/', getDashboardSpendingChart);
app.get('/dashboardspendingchartbyitem/', getDashboardSpendingChartByItem);
app.get('/dashboardspendingtable/', getDashboardSpendingTable);
app.get('/otdlinechart/', getOTDLineChart);
app.get('/otdlinechartbyitem/', getOTDLineChartByItem);
app.get('/otdpiechart/', getOTDPieChart);
app.get('/otdpiechartbyitem/', getOTDPieChartByItem);
app.get('/otdtable/', getOTDTable);
app.get('/costreductionlinechart/', getCostReductionLineChart);
app.get('/costreductionpiechart/', getCostReductionPieChart);
app.get('/costreductionpiechartbyitem/', getCostReductionPieChartByItem);
app.get('/costreductiontable/', getCostReductionTable);
app.get('/costreductionbestworsttable/', getCostReductionBestWorstTable);
app.get('/qualitymanagementlinechart/', getQualityManagementLineChart);
app.get('/qualitymanagementlinechartbyitem/', getQualityManagementLineChartByItem);
app.get('/qualitymanagementpiechart/', getQualityManagementPieChart);
app.get('/qualitymanagementpiechartbyitem/', getQualityManagementPieChartByItem);
app.get('/qualitytable/', getQualityTable);

app.listen(3002, () => {
  console.log("Server is listening");
});

// app.listen(process.env.PORT || 3002, () => {
//   console.log("Server is listening");
// });