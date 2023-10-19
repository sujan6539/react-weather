import ChevronRight from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";
import './Textview.css';

function Textview() {
  return (
    <div>
      <div className="primary-style">
        <DeleteIcon color="primary"></DeleteIcon>
        <div>Text 2</div>
        <ChevronRight  color="primary"></ChevronRight>
      </div>
    </div>
  );
}

export default Textview;
