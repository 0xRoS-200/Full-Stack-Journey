import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from "./utils/database.js"

dotenv.config()

const app = express()

app.use(cors({
  origin: process.env.BASE_URL,
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 5500

app.get('/', (req, res) => {
  res.send('Cohort!')
})

app.get('/rohit-singh', (req, res) => {
  res.send('Aagye Apni Maut ka Tamasha Dekhne!')
})

app.get('/divyam', (req, res) => {
  res.send('Hi Girlie!')
})

//connect to db 
db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})