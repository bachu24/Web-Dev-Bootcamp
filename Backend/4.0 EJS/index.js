import express from "express";
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

const today=new Date();
const dayOfWeek = today.getDay();
console.log(dayOfWeek);


app.get("/", (req, res) => {
    if (dayOfWeek== 6 || dayOfWeek==0) {
        res.render("index.ejs", 
        {day: "It's the Weekend, it's time to have fun!"});
      return;
    } else{
        res.render("index.ejs", 
        {day: "It's a Weekday, it's time to work hard!"});    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });