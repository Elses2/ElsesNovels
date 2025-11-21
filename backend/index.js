import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.get("/novels", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Obra;");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error consultando DB" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor iniciado en puerto " + PORT));



