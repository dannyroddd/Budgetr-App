const express = require('express');
const app = express();

const budget = require('./models/budget')

app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('Hello Adult Life')
})

app.get('/test/', (req, res) => {
    res.render('index.ejs');
});





app.listen(3000, () => {
    console.log('listening');
});