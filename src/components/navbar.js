import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import logo from '../img/wale2.png';
import '../App.css';


class Navbar extends Component { 
    
    onLogin() {
        this.props.onLogin();
    }
    onLogOut() {
        this.props.onLogOut();
    }
    render() {
        let nav;
        if (this.props.accessToken) {
            nav = <Button color="inherit" if onClick={this.onLogOut.bind(this)}>logOut</Button>
        } else {
            nav = <Button color="inherit" if onClick={this.onLogin.bind(this)}>Login</Button>
        }
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <img src={logo} alt={"brand"} />
                    </IconButton>
                    <div className="nav-right">
                    <NavLink to=".">
                        {nav}
                    </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
};

export default Navbar;
