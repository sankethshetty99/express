import express from "express"

// create the app
const app = express();

//configure the app
app.use(express.json())

// export the app
export default app

