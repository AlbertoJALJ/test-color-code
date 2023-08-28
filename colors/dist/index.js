"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Calculator_1 = require("./Calculator");
const cors_1 = __importDefault(require("cors"));
const colors_model_1 = __importDefault(require("./colors.model"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { First, Second, Third, Fourth } = req.body;
    console.log(First, Second, Third, Fourth);
    const calculator = new Calculator_1.OhmValueCalculator();
    const ohmValue = yield calculator.calculateOhmValue(First, Second, Third, Fourth);
    console.log(ohmValue);
    res.status(200).json(ohmValue);
}));
app.get("/load-db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    ];
    const isCreated = yield colors_model_1.default.insertMany(data);
    res.status(200).send(isCreated);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
