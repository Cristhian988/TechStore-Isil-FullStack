const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRoute");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use("/productos", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
