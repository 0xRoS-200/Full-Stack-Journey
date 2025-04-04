import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())

const port = process.env.PORT || 5500

app.get('/', (req, res) => {
  res.send('Cohort!')
})

app.get('/rohit', (req, res) => {
  res.send('Aagye Apni Maut ka Tamasha Dekhne!')
})

app.get('/divyam', (req, res) => {
  res.send('Hi Girlie!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})