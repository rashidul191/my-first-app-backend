const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("look mama! I can code node now !!!");
});

const users = [
  { id: 1, name: "Rased", email: "rased@gmail.com", gpa: 3 },
  {
    id: 2,
    name: "Ashik",
    email: "ashik@gmail.com",
    gpa: 3.9,
  },
  { id: 3, name: "Abdullah", email: "abdudlah@gmail.com", gpa: 3.2 },
  { id: 4, name: "Mehedi", email: "mehedi@gmail.com", gpa: 3.5 },
  { id: 5, name: "Shakib", email: "shakib@gmail.com", gpa: 3.4 },
  { id: 6, name: "Jahid", email: "jahid@gmail.com", gpa: 3.8 },
  { id: 7, name: "Rafi", email: "rafi@gmail.com", gpa: 3.2 },
];

app.get("/users", (req, res) => {
  // res.send({id:1, name:"Raded", cpga:3.4})
  console.log("query : ", req.query);
  // filter search query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  // console.log(req.params)
  const id = req.params.id;
  const user = users[id];

  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request : ", req.body);

  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
