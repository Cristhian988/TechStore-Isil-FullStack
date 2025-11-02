const fs = require("fs");
const path = require("path");
const productos = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/products.json"), "utf-8")
);

module.exports = {
  show: (req, res) => {
    try {
      const respuesta = {
        info: {
          Cantidad: productos.length,
          status: 200,
          uri: "http://localhost:4000/productos",
        },
        results: productos,
      };
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(500).json({ error: "Error Internal Server" });
    }
  },
};
