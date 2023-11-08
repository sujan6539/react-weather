import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

function NavItem({ image, title }) {
  return (
    <div>
      <Icon component={image}></Icon>
      <Typography> {title}</Typography>
    </div>
  );
}

export default NavItem;
