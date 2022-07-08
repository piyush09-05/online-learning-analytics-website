
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const Sequelize = require('sequelize');

const sequelize = require('./util/database');

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const cartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');


app.use((req,res,next) => {
  User.findByPk(1)
  .then(user => {
    return req.user = user;
  })
  .then(() => {
    // console.log(req.user)
    next();
  })
  .catch(err => {
    console.log(err)
  })
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });

Product.belongsTo(User , { constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: cartItem});
Product.belongsToMany(Cart ,{through:cartItem});
Order.belongsTo(User);
User.hasMany(Order);
Order.hasMany(Product);
Product.belongsToMany(Order, {through:OrderItem});


sequelize.sync() 
.then(result => {
  return User.findByPk(1)
})
.then(user => {
  if(!user){
    return User.create({name:'Piyush',email:'piyush@mail.com'})
    .then(customer => {
      customer.createCart();
    })
  }
  else{
    return user;
  }
})
.then(() => {
  app.listen(3000);
})
.catch(err => {
  console.log(err)
})


