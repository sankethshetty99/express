import parcelCtrl from "../controllers/parcel.controller.js"
import express from "express"

// use the express router pattern
// create an instance of router, its a middleware in itself
const router = express.Router()

// configure something specific for this router
router.route('/:id')
    .get(parcelCtrl)
    .post(parcelCtrl)

export default router