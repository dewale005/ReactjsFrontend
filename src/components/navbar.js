import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import logo from '../img/wale2.png';
import '../App.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <img src={logo} alt={"brand"} />
                    </IconButton>
                    <div className="nav-right">
                    <NavLink to="/" exact>
                        <Button color="inherit">home</Button>
                    </NavLink>
                    <NavLink to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>
                    <NavLink to="/dashboard">
                        <Button color="inherit" >Dashboard</Button>
                    </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
