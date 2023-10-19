import { Typography } from "@mui/material";
import "./HeroLabel.css";

function HeroLabel() {
  return (
    <div className="herolabel">
      <Typography fontSize={"40px"}>26 C</Typography>
      <div className="herolabel-footer">
        <Typography>Sunday</Typography>
        <Typography>&nbsp; | &nbsp;</Typography>
        <Typography> 12 DEC 2023</Typography>
      </div>
    </div>
  );
}

export default HeroLabel;
