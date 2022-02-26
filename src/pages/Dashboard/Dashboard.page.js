import "./Dashboard.page.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ControlsComponent from "../../components/Controls/Controls.component";
import FilterComponent from "../../components/Controls/Filter.component";
import PanelComponent from "../../components/Deck/Panel.component";
import CardComponent from "../../components/Deck/Card.component";
import ErrorBoundary from "../../globals/ErrorBoundary/ErrorBoundary";

const Dashboard = () => {
  const cards = [
    {
      name: "Naruto",
      id: 1001,
    },
    {
      name: "Sasuke",
      id: 1002,
    },
    {
      name: "Sakura",
      id: 1003,
    },
  ];

  const showCards = cards.map((cd) => {
    return <CardComponent name={cd.name} id={cd.id} />;
  });
  return (
    <ErrorBoundary>
      <ControlsComponent>
        <div className="add-new">
          <AddCircleIcon />
        </div>
        <div className="filter">
          <FilterComponent />
        </div>
      </ControlsComponent>
      <PanelComponent>{showCards}</PanelComponent>
    </ErrorBoundary>
  );
};

export default Dashboard;
