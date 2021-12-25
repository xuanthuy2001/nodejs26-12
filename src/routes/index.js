
const newsRoute = require('./news')
const siteRoute = require('./site')

function route (app)
{
    // parth sẽ chạy từ trên xuống  
    app.use('/news', newsRoute);
    
    app.use('/', siteRoute);

}

module.exports = route;
