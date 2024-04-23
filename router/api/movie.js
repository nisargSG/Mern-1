const libExpress = require('express');
const { libUtil } = require('../../util');
const router = libExpress.Router();
const libPath = require('path');
const { ObjectId } = require('mongodb');



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
                _id: new ObjectId(req.params.id)
            }).toArray()
        })
    )
})


//post speicific movie
router.post("/", (req, res) => {
    libUtil.getMongoDbConnection(async (db) => {
        await db.collection("movies").insertOne(req.body)
        res.status(201).json()
    }

    )
})


//put the object
router.put("/:id", (req, res) => {
    libUtil.getMongoDbConnection(async (db) => {
        await db.collection("movies").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        res.status(200).json()
    }

    )
})

//patch the object
router.patch("/:id", (req, res) => {
    libUtil.getMongoDbConnection(async (db) => {
        await db.collection("movies").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        res.status(200).json()
    }

    )
})


//patch the object
router.delete("/:id", (req, res) => {
    libUtil.getMongoDbConnection(async (db) => {
        await db.collection("movies").deleteOne({ _id: new ObjectId(req.params.id) })
        res.status(200).json()
    }

    )
})


//no such method supported for movies
router.use((req, res) => {
    res.status(404).json({ error: "Method Not Supported" })
})


module.exports = router


