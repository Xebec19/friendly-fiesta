import "./Card.component.scss";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const CardComponent = (props) => {
  const [name, id] = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="h5" component="div">
        {id}
      </Typography>
    </Card>
  );
};

export default CardComponent;