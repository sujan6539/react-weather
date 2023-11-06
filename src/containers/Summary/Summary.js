import { Typography } from "@mui/material";
import  HeroLabel  from "../../components/HeroLabel/HeroLabel.js";
import  TextField  from "../../components/TextField/Textview.js";
import './Summary.css'

function Summary() {
  return (
    <div className="summary">
      <TextField></TextField>
      <Typography>Cloudy</Typography>
      <HeroLabel></HeroLabel>
    </div>
  );
}

export default Summary;
