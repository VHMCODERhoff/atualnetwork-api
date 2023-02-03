import Express from "express";
import db from "../../db/index.js";
const router = Express.Router();

router.get("/", (req, res) => {
    try {
        res.status(200).send(db);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;