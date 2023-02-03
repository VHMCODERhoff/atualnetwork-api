import Express from "express";
import cors from "cors";

import article from "./routes/get/article.js";
import articleId from "./routes/get/articleId.js";
import updateArticle from "./routes/put/updateArticleid.js";
import uploadImage from "./routes/post/saveImage.js";
import BodyParser from "body-parser";
const app = Express();

app.use(Express.static('public'));
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested0With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use("/", article);
app.use("/api/getArticle", articleId);
app.use("/api/updateArticle", updateArticle);
app.use("/api/uploadImage", uploadImage);




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

