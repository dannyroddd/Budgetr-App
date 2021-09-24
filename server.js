const express = require('express');
const app = express();

const budget = require('./models/budget')


app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))




app.get('/budget', (req, res) => {
    let bank = (budget) => budget.reduce((sum, item) => Number(item.amount) + sum,0)
  bank(budget)
  console.log(bank(budget))
    res.render('index.ejs', {allBudgets: budget , bankAccount: bank(budget)})
})

app.get('/budget/new', (req, res)=>{
    res.render('new.ejs')
})

app.post('/budget', (req, res)=>{
    budget.push(req.body)
    
    res.redirect('/budget')  
  
})


app.get('/budget/:indexOfBudgetArray', (req, res) => {
    res.render("show.ejs", {budgets: budget[req.params.indexOfBudgetArray]})
  })





app.listen(3000, () => {
    console.log('listening')
});

