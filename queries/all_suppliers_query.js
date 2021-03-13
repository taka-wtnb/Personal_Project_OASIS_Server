const allSuppliersQuery = `SELECT
supplier_info.id, supplier_info.supplier_code, supplier_info.supplier_name, supplier_type.type
FROM supplier_type
INNER JOIN (
SELECT id, supplier_code, supplier_name, supplier_type_id FROM supplier ORDER BY supplier_code ASC
) AS supplier_info
ON supplier_info.supplier_type_id = supplier_type.id;`;

module.exports = {
    allSuppliersQuery,
}