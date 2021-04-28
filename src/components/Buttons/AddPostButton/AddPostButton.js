import "./AddPostButton.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const AddPostButton = () => {
  return (
    <Button className="AddPostButton" variant="outlined">
      <AddIcon />
      اضافة منشور
    </Button>
  );
};

export default AddPostButton;
