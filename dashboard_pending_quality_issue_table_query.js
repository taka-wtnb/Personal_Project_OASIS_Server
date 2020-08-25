const dashboardPendingQualityIssueTableQuery = `SELECT pending_category.order_id, item.item_num, item.item_name, pending_category.category, pending_category.date_detected
FROM item
INNER JOIN (
SELECT pending_issues.order_id, pending_issues.item_id, non_conformance_category.category, pending_issues.date_detected
FROM non_conformance_category
INNER JOIN (
SELECT supplier_orders.order_id, supplier_orders.item_id, non_conformant.category_id, non_conformant.date_detected
FROM non_conformant
INNER JOIN (
SELECT order_id, item_id
FROM orders
WHERE supplier_id=$1
) AS supplier_orders
ON supplier_orders.order_id = non_conformant.order_id
WHERE date_closed IS NULL
) AS pending_issues
ON pending_issues.category_id = non_conformance_category.id
) AS pending_category
ON pending_category.item_id = item.id
ORDER BY pending_category.date_detected LIMIT 5;`;

module.exports = {
    dashboardPendingQualityIssueTableQuery,
}