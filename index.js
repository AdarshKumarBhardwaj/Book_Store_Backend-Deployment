import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// //for deployment
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

app.use(cors());
dotenv.config();
//for deployment
// app.use(express.static(path.join(__dirname, "./client/build")));

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDbURI;

//connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// //defining routes
app.use("/book", bookRoute);

app.use("/user", userRoute);

// //for deployment
// app.use("*", function (req, resp) {
//   resp.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
