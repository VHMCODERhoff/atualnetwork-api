import Express from "express";
import db from "../../db/index.js";
const router = Express.Router();

router.get("/", (req, res) => {
    let id = req.query.id;
    let article = db.filter((item) => item.id == id);
    try {
        res.status(200).send(article);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;