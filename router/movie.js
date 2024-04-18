const libExpress = require('express');
const { libUtil } = require('../util');
const router = libExpress.Router();

//get All movies
router.get("/", (req, res) => {

    libUtil.getMongoDbConnection(async (db) =>
        res.status(200).json({ movies: await db.collection("movies").find().toArray() })
    )
})

//get speicific movie
router.get("/:id", (req, res) => {
    libUtil.getMongoDbConnection(async (db) =>
        res.status(200).json({
            movies: await db.collection("movies").find({
                _id: req.params.id
            }).toArray()
        })
    )
})

//no such method supported for movies
router.use((req, res) => {
    res.status(404).json({ error: "Method Not Supported" })
})


module.exports = router


