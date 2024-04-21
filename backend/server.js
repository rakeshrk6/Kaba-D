const connectDatabase = require("./db/Database")
const express = require("express")
const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

const app = express()
// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`shutting down the server for handling uncaught exception`)
})

// config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//         path:"config/.env",
//     });
// }

// connect db
connectDatabase()

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on https://localhost:${process.env.PORT}`)
})

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`)
  console.log(`Shutting down the server for unhandle promise rejection`)
  console.log(`${process.env.DB_URL}`)

  server.close(() => {
    process.exit(1)
  })
})
