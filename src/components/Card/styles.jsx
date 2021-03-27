import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const cardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default cardStyles;
