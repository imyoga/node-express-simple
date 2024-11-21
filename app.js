const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

// Enable CORS for all origins
app.use(cors({origin: '*'}))

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.get('/', async (req, res) => {
	res.status(200).send({msg: 'Hello from server'})
})

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}....`)
})
