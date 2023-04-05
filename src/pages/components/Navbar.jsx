import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@material-ui/core';
import { Home as HomeIcon, Chat as ChatIcon, ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { HomeContext } from "../../pages/Home/HomeProvider";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
}));

function Navbar() {
  const classes = useStyles();
  const { isLoggedIn, cartItems } = useContext(HomeContext);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton component={Link} to="/" edge="start" color="inherit">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} component={Link} to="/">
          RedBock
        </Typography>
        {isLoggedIn ? (
          <>
            <IconButton component={Link} to="/chat" color="inherit">
              <Badge color="secondary" variant="dot">
                <ChatIcon />
              </Badge>
            </IconButton>
            <IconButton component={Link} to="/cart" color="inherit">
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </>
        ) : null}
        <Button component={Link} to="/login" color="inherit">
          {isLoggedIn ? '退出' : '登录'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
