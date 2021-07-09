import express from "express"
import userCtrl from "./controllers/user.controller.js";

// route files
import parcelRoute from "./routes/parcel.routes.js"
import userRoute from "./routes/user.routes.js"

// create the app
const app = express();

// configure the app
app.use(express.json())

// aggregate routes for the app
app.use('/parcel',parcelRoute) // app uses other middleware, router instances are middleware.
app.use('/user',userRoute)

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'))


// export the app
export default app

