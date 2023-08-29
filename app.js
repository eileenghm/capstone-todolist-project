import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = []

app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

app.post('/create', (req, res) => {
    const text = req.body.task;
    tasks.push({text: text, completed: false});
    res.redirect("/"); //fishined creating
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });