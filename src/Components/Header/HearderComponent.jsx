import React, { Fragment, useState } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import BlogPost from "../BodyComponent/BlogPost";
import Notification from "../BodyComponent/Notification";
import Link1 from "../BodyComponent/Link1";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
      <Switch>
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/blog' render={() => <BlogPost />} />
          <Route exact path='/link1' render={() => <Link1 />} />
          <Route exact path='/notification' render={() => <Notification />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
