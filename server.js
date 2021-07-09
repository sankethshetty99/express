import app from "./app.js"

// access process env variables
import dotenv from "dotenv"
dotenv.config()


// connection to the database should be made here

// start serving on a port
app.listen(process.env.PORT || 5000)