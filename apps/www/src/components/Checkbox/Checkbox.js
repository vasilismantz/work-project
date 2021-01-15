import { Check } from "@material-ui/icons";

const Checkbox = ({ id, onClick }) => {
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={onClick}
    >
      <span className="checkbox" />
    </div>
  );
};

export default Checkbox;
