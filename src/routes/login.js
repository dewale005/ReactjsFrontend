import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import logo from '../img/wale.png'
import './css/login.scss';

class Login extends Component {
    state = {
        password: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        return (
            <div className="">
                <div className="logo">
                    <img src={logo} alt={"logo"} />
                </div>
                <div className="formfield">
                    <div className="form">
                        <h1>Log in to your account</h1>
                        <TextField
                            id="outlined-with-placeholder"
                            label="Email"
                            placeholder="Email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-adornment-password"
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" color="secondary">
                            Log in
                    </Button>
                    <Divider light />
                    <p>Register a new account</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;