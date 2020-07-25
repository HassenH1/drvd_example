import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 0.7,
      paddingLeft: "10rem",
      fontWeight: "bold",
    },
    btn: {
      fontWeight: "bold",
      fontSize: "12px",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "white", color: "black", padding: "1rem" }}
      >
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            driven
          </Typography>
          <Button color="inherit" className={classes.btn}>
            News
          </Button>
          <Button color="inherit" className={classes.btn}>
            For Brand
          </Button>
          <Button color="inherit" className={classes.btn}>
            Invest
          </Button>
          <Button color="inherit" className={classes.btn}>
            Our Brand
          </Button>
          <Button color="inherit" className={classes.btn}>
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
