import NavItem from "../../components/NavItem/NavItem";
import Icon from "@mui/material/Icon";
import { Thunderstorm, CompassCalibration, Map } from "@mui/icons-material";
import "./Nav.css";

export default function NavComponent() {
  return (
    <div className="nav-component">
      <NavItem
        className="item"
        title={"weather"}
        image={Thunderstorm}
      ></NavItem>
      <NavItem
        className="item"
        title={"explore"}
        image={CompassCalibration}
      ></NavItem>
      <NavItem className="item" title={"cities"} image={Map}></NavItem>
    </div>
  );
}
