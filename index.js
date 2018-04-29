const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({ abaya: 'blue', product: '7', stock: '11' }))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
