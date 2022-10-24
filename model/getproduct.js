var pg_conn = require('./pg_config');

var idproduct;
async function getproduct(idproducttoupdate){
        idproduct = idproducttoupdate;
        var product_query = `SELECT * FROM product WHERE productid = ${idproducttoupdate}`;
  
//     var product_query = 
//     {
//         text : 'SELECT * FROM prodcuts WHERE shop_id = $1',
//         value: [shop_id]
//     };
// }
    var data = await pg_conn.query(product_query);
//     var table_string = `
//     <h2> All product for shop </h2>
//         <table border ="1">
//         <tr>`;
//     let num_fiels = data.fields.length;
//     let num_rows = data.rowCount;
//     const list_fields = [];
//     //display table header
//     for (let i = 0; i < num_fiels; i++ )
//     {
//         let fields_name = data.fields[i].name;
//         list_fields.push(fields_name);
//         table_string += `<th>${fields_name}</th>`;
//     }
//     table_string += `<th>Funcitons</th></tr>`;

//     //display all rows
//     for(let i=0; i<num_rows; i++)
//     {
//         table_string += `<form action ="users/insert" method="post>
//             "tr>`;
//         for(let j=0; j<num_rows;j++)
//         {
//             let cell = data.rows[i][list_fields[j]];
//             let fields_name = data.fields[i].name
//             table_string += `<td>input name ${fields_name} value=${cell}</td>`;
//         }
//         table_string += `
//         <td styple="display:flex">
//         <button type="submit" value="delete">Delete</button>
//         <button type="submit" value="update">Update</button>
//         </td>
//         </tr>
//         </form>`;
//     }
//     //add an empty row and insert button
//     table_string += `<form action ="users/functions" method="post>
//     "tr>`;
//     for(let j=0; j<num_rows;j++)
//         {
//             let fields_name = data.fields[i].name
//             table_string += `<td>input name ${fields_name} </td>`;
//         }
//         table_string += `
//         <td>
//         <button type="submit" value="insert">Insert</button>
//         </td>
//         </tr>
//         </form>
//         </table>`;  
//     table_string += `</table>`;
    return data;
};
async function setproduct(quantity, price, description){

    var product_query = `UPDATE product SET  productquantity=${quantity}, 
    productprice= ${price}, productdescription= '${description}'
	WHERE productid = ${idproduct}`;
console.log(product_query);

var data = await pg_conn.query(product_query);
    return data;
};
module.exports = [getproduct,setproduct];