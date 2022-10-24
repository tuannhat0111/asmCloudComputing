var express = require('express');
// const session = require('express-session');
const get_data_account = require('../model/getdatabyaccount');
var router = express.Router();
const set_data_account = require('../model/setdatabyaccount');
const deleteFunc = require('../model/deletedatabyaccount');
const[getproduct, setproduct] = require('../model/getproduct');
var shopid;
// var session;
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let session = req.session;
  // let dataInDb = session.dataInDb;
   shopid = session.shop_id;
  // let shopIdList = session.shopIdList;
  // res.send('repond with a resource');
  let [dataInDb, shopIdList] = await get_data_account(shopid);
        res.render('user', { title: 'USER PAGE', products: dataInDb.rows, shopid: shopid });
});


router.get('/createproduct/', function(req, res, next) {
  res.render('createproduct', { title: 'Create Product PAGE' });
});

router.post('/createproduct/', async function(req, res, next) {
console.log(req.body.nameproduct);
  var data = await set_data_account(req.body.nameproduct, parseInt(req.body.quantity), parseInt(req.body.price), req.body.description, shopid);
  let [dataInDb, shopIdList] = await get_data_account(shopid);

  res.render('user', { title: 'Hello', products: dataInDb.rows });
});

router.post('/deleteproduct', async function(req, res, next) {
  var data = await deleteFunc(parseInt(req.body.idproduct));
  let [dataInDb, shopIdList] = await get_data_account(shopid);

  res.render('user', { title: 'Hello', products: dataInDb.rows });
});


router.get('/updateproduct', async function (req,res,next){
  var data = await getproduct(parseInt(req.query.idproducttoupdate));
  // var data = await updateFunc(parseInt(req.body.idproduct));
  // let [dataInDb, shopIdList] = await get_data_account(shopid);
  console.log(data.rows[0]);
  res.render('updateproduct', { product: data.rows[0]});
});

router.post('/updateproduct', async function (req,res,next){
  const productquantity = req.body.quantity;
  console.log(productquantity);
  const productprice = req.body.price;
  const productdescription = req.body.description;
  var data = await setproduct( parseInt(productquantity), parseInt(productprice), productdescription);
  let [dataInDb, shopIdList] = await get_data_account(shopid);
  res.render('user', { title: 'USER PAGE', products: dataInDb.rows, shopid: shopid });

});

module.exports = router;