import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Client } = pg

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

client.connect()

export default client
