const allItemsQuery = `SELECT
item_info.id, item_info.item_num, item_info.item_name, item_info.item_type, item_unit.unit
FROM item_unit
INNER JOIN (
SELECT id, item_num, item_name, item_type, unit_id FROM item ORDER BY item_num ASC
) AS item_info
ON item_info.unit_id = item_unit.id;`;

module.exports = {
    allItemsQuery,
}