const Task = require('./src/Task')

const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/tasks', (req, res) => {
    res.send(Task.all)
})
app.post('/tasks', (req, res) => {
    Task.all.push(req.body)
    res.send()
})

app.get('/tasks/:id/delete', (req, res) => {
    const task = Task.all.findIndex(task => task.id == req.params.id)
    Task.all.splice(task, 1)
    res.send()
})

app.listen(3000, () => {
    console.log('server is runnning', 3000)
})