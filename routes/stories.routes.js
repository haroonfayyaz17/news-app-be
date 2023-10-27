const router = require("express").Router()
const controller = require("../controller/StoriesController")

module.exports = app => {
    // console.log("app: ", app)
    router.get("/:type", controller.getStories)
    app.use("/stories", router)
}