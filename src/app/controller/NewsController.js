class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('sang trang moi');
    }
}
module.exports = new NewsController;