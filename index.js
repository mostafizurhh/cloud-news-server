const express = require('express')
const cors = require('cors') /* allow data policy */
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

/* get all categories and news */
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('checking server')
});

/* get all categories */
app.get('/categories', (req, res) => {
    res.send(categories)
})

/* get news by category */
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news) /* show all news if category_id = 08 */
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

/* get all news by id */
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log(`listening from port ${port}`)
});