import { useState } from "react";
import "./App.css";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Resistor from "./components/Resistor";
import Select from "./components/Select";
import axios from "axios";

const colors = [
  "Black",
  "Brown",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet",
  "Gray",
  "White",
  "Gold",
  "Silver",
];


function App() {
  const [First, setFirst] = useState("");
  const [Second, setSecond] = useState("");
  const [Third, setThird] = useState("");
  const [Fourth, setFourth] = useState("");
  const [Response, setResponse] = useState<{
    value: number | null, tolerance: number | null
  }>({
    value: null, tolerance: null
  });
  const fetchCodeValue = async () => {
    const response = await axios.post("http://localhost:4000/", {
      First,
      Second,
      Third,
      Fourth,
    });
       
    setResponse(response.data);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: "10%",
      }}
    >
      <Paper sx={{ padding: "10px" }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Color Code Calculator
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Select
              placeholder="1ra Banda"
              name="1ra Banda"
              value={First}
              onChange={(e) => setFirst(e.target.value)}
              options={colors}
            />
            <Select
              placeholder="2da Banda"
              name="2da Banda"
              value={Second}
              onChange={(e) => setSecond(e.target.value)}
              options={colors}
            />
            <Select
              placeholder="3ra Banda"
              name="3ra Banda"
              value={Third}
              onChange={(e) => setThird(e.target.value)}
              options={colors}
            />
            <Select
              placeholder="4ta Banda"
              name="4ta Banda"
              value={Fourth}
              onChange={(e) => setFourth(e.target.value)}
              options={colors}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Resistor bandColors={[First, Second, Third, Fourth]} value={Response.value} tolerance={Response.tolerance}/>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button variant="contained" onClick={fetchCodeValue}>
            Calcular
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
