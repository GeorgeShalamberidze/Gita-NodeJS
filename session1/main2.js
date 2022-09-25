const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

let customer = [
    { id: 1, name: 'Vivek', email: "example@gmail.com", phone: "588234152", address: "India" },
    { id: 2, name: 'George', email: "example@gmail22.com", phone: "234515123", address: "Georgia" },
]

app.get('/api/customer', (req, res) => {
    console.log(res, 'AIT')
    res.send(customer)
})

// Get
app.get('/api/customer/:id', (req, res) => {
    let tempId = customer.filter((r) => r.id == req.params.id)
    if (tempId.length > 0) {
        res.send(tempId)
    } else {
        res.send({})
    }
})

// Post
app.post('/api/customer', (req, res) => {
    var record = req.body
    record.id = Date.now()
    customer.push(record)
    res.send({ result: "OKOKO", msg: "Customer Added Successfully" })
})

// Update
app.put('/api/customer', (req, res) => {
    var record = req.body
    customer.map((r, i) => {
        if (r.id == req.body.id) {
           r[i] = req.body
        } 
    })
    customer.push(record)
    res.send({ result: "OKOKO", msg: "Customer Updated Successfully" })
})

//Delete
app.delete('/api/customer', (req, res) => {
    console.log(req.body, 'AIT')
    let temp = customer.filter(r => r.id !== req.body.id)
    customer = temp
    res.send({ result: "OKOKO", msg: "Customer Deleted Successfully" })
})

app.listen(3000)