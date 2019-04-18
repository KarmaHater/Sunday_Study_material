var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  pg = require("pg"),
  app = express();

var connectString =
  "postgres://test:Adnard1987@localhost:5432/recipe_cookbook_db";
var pool = new pg.Pool({ connectionString: connectString });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(4000, () => {
  pool.connect((err, client, done) => {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    pool.query("SELECT $1::int AS number", ["1"], () => {
      done();
      if (err) {
        return console.error("error running query".err);
      }
      pool.query("SELECT NOW()", (err, res) => {
        console.log(err, res.rows[0]);
      });
    });
  });
});

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/recipes", (req, res) => {
  pool.query("SELECT * FROM recipes", (err, result) => {
    res.send({ recipes: result.rows });
  });
});
