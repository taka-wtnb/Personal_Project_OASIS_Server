const express = require('express');
const cors = require('cors');

const {pool} = require('./config');

const suppliers = require('./routes/suppliers');
const items = require('./routes/items');
const dashboardopenordertable = require('./routes/dashboardOpenOrderTable');
const dashboardPendingQualityIssueTable = require('./routes/dashboardPendingQualityIssueTable');
const dashboardSpendingChart = require('./routes/dashboardSpendingChart');
const dashboardSpendingChartByItem = require('./routes/dashboardSpendingChartByItem');
const dashboardSpendingTable = require('./routes/dashboardSpendingTable');
const otdLineChart = require('./routes/otdLineChart');
const otdLineChartByItem = require('./routes/otdLineChartByItem');
const otdPieChart = require('./routes/otdPieChart');
const otdPieChartByItem = require('./routes/otdPieChartByItem');
const otdTable = require('./routes/otdTable');
const costReductionLineChart = require('./routes/costReductionLineChart');
const costReductionPieChart = require('./routes/costReductionPieChart');
const costReductionPieChartByItem = require('./routes/costReductionPieChartByItem');
const costReductionTable = require('./routes/costReductionTable');
const costReductionBestWorstTable = require('./routes/costReductionBestWorstTable');
const qualityManagementBarChart = require('./routes/qualityManagementBarChart');
const qualityManagementBarChartByItem = require('./routes/qualityManagementBarChartByItem');
const qualityManagementPieChart = require('./routes/qualityManagementPieChart');
const qualityManagementPieChartByItem = require('./routes/qualityManagementPieChartByItem');
const qualityTable = require('./routes/qualityTable');

const app = express();

//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var whitelist = ['https://spar-web-app.herokuapp.com'];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

//app.use(cors(corsOptions));

app.get('/', cors(corsOptions), (req, res) => { res.send('It is working!') });
app.get('/suppliers', cors(corsOptions), suppliers.getSuppliers(pool));
app.get('/items', cors(corsOptions), items.getItems(pool));
app.get('/dashboardopenordertable/', cors(corsOptions), dashboardopenordertable.getDashboardOpenOrderTable(pool));
app.get('/dashboardpendingqualityissuetable/', cors(corsOptions), dashboardPendingQualityIssueTable.getDashboardPendingQualityIssueTable(pool));
app.get('/dashboardspendingchart/', cors(corsOptions), dashboardSpendingChart.getDashboardSpendingChart(pool));
app.get('/dashboardspendingchartbyitem/', cors(corsOptions), dashboardSpendingChartByItem.getDashboardSpendingChartByItem(pool));
app.get('/dashboardspendingtable/', cors(corsOptions), dashboardSpendingTable.getDashboardSpendingTable(pool));
app.get('/otdlinechart/', cors(corsOptions), otdLineChart.getOTDLineChart(pool));
app.get('/otdlinechartbyitem/', cors(corsOptions), otdLineChartByItem.getOTDLineChartByItem(pool));
app.get('/otdpiechart/', cors(corsOptions), otdPieChart.getOTDPieChart(pool));
app.get('/otdpiechartbyitem/', cors(corsOptions), otdPieChartByItem.getOTDPieChartByItem(pool));
app.get('/otdtable/', cors(corsOptions), otdTable.getOTDTable(pool));
app.get('/costreductionlinechart/', cors(corsOptions), costReductionLineChart.getCostReductionLineChart(pool));
app.get('/costreductionpiechart/', cors(corsOptions), costReductionPieChart.getCostReductionPieChart(pool));
app.get('/costreductionpiechartbyitem/', cors(corsOptions), costReductionPieChartByItem.getCostReductionPieChartByItem(pool));
app.get('/costreductiontable/', cors(corsOptions), costReductionTable.getCostReductionTable(pool));
app.get('/costreductionbestworsttable/', cors(corsOptions), costReductionBestWorstTable.getCostReductionBestWorstTable(pool));
app.get('/qualitymanagementbarchart/', cors(corsOptions), qualityManagementBarChart.getQualityManagementBarChart(pool));
app.get('/qualitymanagementbarchartbyitem/', cors(corsOptions), qualityManagementBarChartByItem.getQualityManagementBarChartByItem(pool));
app.get('/qualitymanagementpiechart/', cors(corsOptions), qualityManagementPieChart.getQualityManagementPieChart(pool));
app.get('/qualitymanagementpiechartbyitem/', cors(corsOptions), qualityManagementPieChartByItem.getQualityManagementPieChartByItem(pool));
app.get('/qualitytable/', cors(corsOptions), qualityTable.getQualityTable(pool));

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is listening");
});