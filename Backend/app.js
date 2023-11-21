
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.use("/user", require("./routes/userRoutes"));
app.use("/tshirt", require("./routes/tshirtRoutes"));
app.use("/orders", require("./routes/ordersRoutes"));
app.use("/discount", require("./routes/discountRoutes"));
app.use('/create', require("./routes/userRoutes"));


app.get('/', (req, res) => {
    res.send("hello");
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went really wrong",
    });

});



app.listen(5000, () => {
    console.log('server is running on port 5000...');
})