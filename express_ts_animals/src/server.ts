import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Animal from "./Animal";
const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/animals");
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to DB"));

app.get("/animals", async (req: Request, res: Response) => {
  try {
    const filter = {};
    const all = await Animal.find(filter);
    res.send(all);
  } catch (error) {
    throw error;
  }
});

app.get("/animal/:name", async (req: Request, res: Response) => {
  const value = req.params.name;
  try {
    const all = await Animal.find({ name: value });
    res.send(all);
  } catch (error) {
    throw error;
  }
});

app.get("/animalType/:type", async (req: Request, res: Response) => {
  const value = req.params.type;
  if (value === "all") {
    try {
      const filter = {};
      const all = await Animal.find(filter);
      res.send(all);
    } catch (error) {
      throw error;
    }
  } else {
    try {
      const all = await Animal.find({ type: value });
      res.send(all);
    } catch (error) {
      throw error;
    }
  }
});

app.post(`/addAnimal`, async (req: Request, res: Response) => {
  const name = req.body.name;
  const type = req.body.type;
  const img = req.body.img;
  try {
    await Animal.create({ name: name, type: type, img: img });
  } catch (error) {
    throw error;
  }
});

app.delete(`/animalDelete/:id`, async (req: Request, res: Response) => {
  const value = req.params.id;
  res.send(value);
  try {
    await Animal.deleteOne({ _id: value });
  } catch (error) {
    throw error;
  }
});

app.get("/1", (req: Request, res: Response) => {
  res.send("Application works!"); 
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
