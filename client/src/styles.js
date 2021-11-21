import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginTop: "5px",
    marginLeft: "15px",
  },
  // [theme.breakpoints.down("sm")]: {
  //   mainContainer: {
  //     flexDirection: "column-reverse",
  //   },
  // },
  mainContainer: {
    flexDirection: "column-reverse",
  },
}));
