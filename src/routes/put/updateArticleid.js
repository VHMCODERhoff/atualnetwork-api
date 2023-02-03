import Express from "express";
import db from "../../db/index.js";
const router = Express.Router();

router.put("/", (req, res) => {
    let id = req.query.id;
    let article = db.filter((item) => {
        if (item.id == parseFloat(id)) {
            item.content = req.body.content;
            item.type = req.body.type;
            return item;
        }
    });


    try {
        res.status(200).send(article);
    } catch (error) {
        res.status(400).send(error)
    }
});

export default router;