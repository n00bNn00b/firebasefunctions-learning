// const functions = require("firebase-functions");
const express = require("express");
const app = express();
const admin = require("firebase-admin");
const firebaseConfig = require("./functionsCloud.json");
const cors = require("cors");

// firebase config initialization
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});
const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

app.get("/courses", async (req, res) => {
  try {
    const courses = db.collection("tasks");
    const responses = await courses.get();
    const result = [];
    responses.forEach((response) => {
      const course = response.data();
      result.push({
        id: response.id,
        ...course,
      });
      res.send(result);
    });
  } catch {
    //
  }
});

app.post("/course", async (req, res) => {
  try {
    //
    const courseRequest = {
      course: req.body.task,
    };
    const response = await db.collection("courses").add(courseRequest);
    res.send(response);
  } catch (err) {
    //
    res.send(err);
  }
});

// root
app.get("/", (req, res) => {
  res.send("Server is running!");
});
app.listen(port, () => {
  console.log("listening to the port: ", port);
});
