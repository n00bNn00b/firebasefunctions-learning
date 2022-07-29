const functions = require("firebase-functions");
const express = require("express");
const app = express();
const admin = require("firebase-admin");
// auth triggers
// exports.newUserSignup = functions.auth.user().onCreate((user) => {
//   console.log("user created", user.email, user.uid);
// });
const serviceAccount = require("./functionsCloud.json");
const { response } = require("express");
const port = process.env.PORT || 8000;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
app.use(express.json());

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
