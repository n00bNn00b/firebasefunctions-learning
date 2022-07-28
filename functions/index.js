const functions = require("firebase-functions");

// http request 1
exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100);
  console.log(number);
  res.send(number.toString());
});

// http request 2
exports.toThePortfolio = functions.https.onRequest((req, res) => {
  res.redirect("https://realdewan.netlify.app/");
});

// http callable functions
// exports.sayHello = functions.https.onCall((data, context) => {
//   return "`hello, coders`";
// });
