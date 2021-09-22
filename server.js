const express = require('express');
const app = express();

const budget = require('./models/budget')

app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))



app.get('/budget', (req, res) => {
    res.render('index.ejs', {allBudgets: budget});
});


app.get('/budget/:indexOfBudgetArray', (req, res) => {
    res.render("show.ejs", {budgets: budget[req.params.indexOfBudgetArray]});
  });





app.listen(3000, () => {
    console.log('listening');
});