const express = require('express')
const cors = require('cors')

const pool = require('./db')

const app = express()

app.use(cors())
app.use(express.json())


app.post('/add', async (req, res) => {
    try {

        const { firstname, lastname, registernumber, dob, gender, email, phonenumber, addressline1, addressline2, city, state, zipcode, country } = req.body
        const user = await pool.query("INSERT INTO users (firstname, lastname, registernumber,dob, gender, email,phonenumber, addressline1, addressline2, city, state, zipcode, country) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
            [firstname, lastname, registernumber, dob, gender, email, phonenumber, addressline1, addressline2, city, state, zipcode, country])
        res.json(user.rows[0])

    } catch (error) {
        console.log(error.message);
    }
})

app.get('/details', async (req, res) => {
    try {

        const users = await pool.query("SELECT * FROM users")
        res.json(users.rows)

    } catch (error) {
        console.log(error.message);
    }
})

app.listen(3000, () => {
    console.log('server running');
})