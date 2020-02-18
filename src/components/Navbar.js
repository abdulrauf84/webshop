import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Typography, Toolbar, MenuItem, Badge, TextField } from '@material-ui/core'
import useStyles from './Styles'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const Nav = ({ title, bgColor, navLink1, navLink2, selectedCategory }) => {

  const classes = useStyles();

  return (
    <AppBar elevation={0} color={bgColor} position='fixed' className={classes.navbar}>
      <Toolbar >
        <MenuItem className={classes.title}>
          <Typography className={classes.titleText}><Link to='/' className={classes.link}>{title}</Link></Typography>
        </MenuItem>
      </Toolbar>

      <Toolbar className={classes.toolbarNavlinks}>
        <MenuItem onClick={() => selectedCategory("clothes")}>
          <Typography><Link to='/products' className={classes.link}>{navLink1}</Link></Typography>
        </MenuItem>
        <MenuItem onClick={() => selectedCategory("shoes")}>
          <Typography ><Link to='/products' className={classes.link}>{navLink2}</Link></Typography>
        </MenuItem>
      </Toolbar>

      <Toolbar className={classes.search}>
        <TextField id="outlined-search" label="Search" type="search" variant="outlined"
          style={{ display: 'flex', width: 600 }} />
      </Toolbar>

      <Toolbar className={classes.toolbarRight}>
        <MenuItem className={classes.icon}>
          <Badge badgeContent={1} color="error" className={classes.badge}>
            <LocalMallOutlinedIcon style={{ fontSize: 25 }} />
          </Badge>
        </MenuItem>
      </Toolbar>
    </AppBar >
  )
}

// Action
const selectCategory = (payload) => {
  return {
    type: "CHANGE_CATEGORY",
    payload
  }
}

// Connect to redux
const mapDispatchToProps = dispatch => {
  return {
    selectedCategory: data => dispatch(selectCategory(data))
  }
}

export default connect(null, mapDispatchToProps)(Nav);