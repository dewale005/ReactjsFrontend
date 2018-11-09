import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import './css/home.scss';

class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="padding">
                <h1 className="title">Get Vouchers of your choice at affordable prices</h1>
                <p className="content">We make vouchers available, so you can make suitable decisions on whether you should promote you business, or share love.</p>
                <div className="">
                <Button variant="contained" size="large" color="primary">
                    Get Started
                </Button>
                <IconButton>
                    <p>Questions? Meet the developer</p>
                    <ArrowRightAlt />
                </IconButton>
                </div>
                </div>
            </section>
        );
    }
}

export default Home;