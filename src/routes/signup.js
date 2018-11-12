import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import logo from '../img/wale.png'
import './css/login.scss';



class Signup extends Component {
   

    constructor(props) {
        super(props);
        this.state = {
            err: '',
            email: '',
            password: '',
            users: []
        };
    }
    
    handleChange = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    };

    handleChange = password => event => {
        this.setState({
            [password]: event.target.value,
        });
    };


    render() {
        return (
            <div className="body">
                <div className="logo">
                    <img src={logo} alt={"logo"} />
                </div>
                <div className="formfield">
                    <div className="form">
                        <h1>Sign Up A new Account</h1>
                        <form>
                            <p>{this.state.err}</p>
                            <TextField
                                id="outlined-email-input"
                                ref="email"
                                label="Email"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                fullWidth
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-password-input"
                                ref="password"
                                label="Password"
                                fullWidth
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                            />
                            <Button variant="contained" fullWidth onClick={this.Signup.bind(this)}>
                                Log in
                        </Button>
                        </form>
                        <Divider light />
                        <p>Signin your existing account</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default Signup;