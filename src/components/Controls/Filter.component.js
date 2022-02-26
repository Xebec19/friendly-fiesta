import "./Filter.component.scss";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
const FilterComponent = () => {
  return (
    <div className="filter__container">
      <TextField
        id="outlined-required"
        label="Search Field"
        defaultValue=""
        placeholder="Enter Search Text Here"
      />
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default FilterComponent;
