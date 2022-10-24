// const pg_conn = require("./pg_config");



// async function updateFunc(nameproduct, quantity, price, description, idproduct){
//     const update_query= `UPDATE product SET productname = ${nameproduct}, productquantity = ${quantity}, productprice = ${price}, productdescription ${description} WHERE productid = ${idproduct}`
//     var query_data = await pg_conn.query(update_query);
//     return query_data;
// }
// module.exports = updateFunc;