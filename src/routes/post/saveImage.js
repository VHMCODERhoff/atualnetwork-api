import Express from "express";
const router = Express.Router();
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        const extFile = file.originalname.split('.')[1];
        const newFileName = file.originalname.split('.')[0] + '-' + Date.now();

        cb(null, `${newFileName}.${extFile.toLowerCase()}`)
    }
});

const upload = multer({ storage });



router.post("/", upload.single('file'), (req, res) => {
  res.status(200).send(req.file);
});

export default router;