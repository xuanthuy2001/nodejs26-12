const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const  route =require('./routes');
// tự động vào thư mục index 
// bình thường viết rõ là [const  route =require('./route/index.js');]  


app.use(express.static(path.join(__dirname, 'public')));
// thu muc public phai de ben ngoai
// express.static sẽ hiểu là khi gặp cái 3000/img/f8_icon.png nó sẽ phải kiểm tra cái thư mục mà join cung cấp cho nó 
// trong phương thức static này 
// join(__dirname, 'public') trả về đúng thư mục public này 
// http://localhost:3000/ coi như là cái public của mình
app.use(morgan('combined'));
app.use(express.urlencoded(
  {
    extended:true
  }
));
app.use(express.json());
// template Engine

// bình thường là như này   app.engine('handlebars', handlebars()); 

app.engine('hbs', handlebars({
  extname: ".hbs"

}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

// route init : 
route (app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
