import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    color: theme.palette.secondary,
    "font-size": 17,
  },
}));

export default function MenuBar() {
  const classes = useStyles();
  return (
    <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
      <Box flexGrow={0} textAlign="left">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <Typography className={classes.header}>Bitcoin UI</Typography>
    </Box>
  );
}
