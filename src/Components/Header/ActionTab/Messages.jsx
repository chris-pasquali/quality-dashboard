import React, { Fragment, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import { useStyles } from "../HeaderStyle";

export default function Messages() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log("handleClick", e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Test 1", description: "commodi dicta ..." },
    { label: "Test 2", description: "ipsum dolor sit ..." },
    { label: "Test 3", description: "llum porro saepe ..." },
  ];

  return (
    <Fragment>
      <IconButton
        aria-controls="Messages"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={dropDownData.length} color="secondary">
          <ForumIcon />
        </Badge>
      </IconButton>
      <Menu
        id="Messages"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        placement="bottom-start"
      >
        <List dense={true} className={classes.dropdownlist}>
          {dropDownData.map((item, i) => (
            <ListItem
              key={i}
              component={Button}
              onClick={handleClose}
              className={classes.ListItem}
            >
              <ListItemAvatar>
                <Avatar className={classes.navImg}>{item.label[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.label}
                secondary={item.description}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Fragment>
  );
}
