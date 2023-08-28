import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { OhmValueCalculator } from "./Calculator";
import cors from "cors"
import colorsModel from "./colors.model";

dotenv.config();

const app: Express = express();
const port = 4000;
app.use(cors());
app.use(express.json())

app.post("/", async (req: Request, res: Response) => {
  
  const {
    First, Second, Third, Fourth
  } = req.body
  console.log(First, Second, Third, Fourth);
  
  
  const calculator = new OhmValueCalculator();
  const ohmValue = await calculator.calculateOhmValue(
    First, Second, Third, Fourth
  );  
  console.log(ohmValue);
  
   
  res.status(200).json(ohmValue)
});

app.get("/load-db", async (req: Request,res:Response) => {
  const data = [
    {
      "color": "Black",
      "value": 0,
      "tolerance": 20
    },
    {
      "color": "Brown",
      "value": 1,
      "tolerance": 1
    },
    {
      "color": "Red",
      "value": 2,
      "tolerance": 2
    },
    {
      "color": "Orange",
      "value": 3,
      "tolerance": 0.05
    },
    {
      "color": "Yellow",
      "value": 4,
      "tolerance": 4
    },
    {
      "color": "Green",
      "value": 5,
      "tolerance": 0.5
    },
    {
      "color": "Blue",
      "value": 6,
      "tolerance": 0.25
    },
    {
      "color": "Violet",
      "value": 7,
      "tolerance": 0.1
    },
    {
      "color": "Gray",
      "value": 8,
      "tolerance": 0.01
    },
    {
      "color": "White",
      "value": 9,
      "tolerance": 20
    },
    {
      "color": "Gold",
      "value": -1,
      "tolerance": 5
    },
    {
      "color": "Silver",
      "value": -2,
      "tolerance": 10
    }
  ]

  const isCreated = await colorsModel.insertMany(data)
  res.status(200).send(isCreated)  
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
