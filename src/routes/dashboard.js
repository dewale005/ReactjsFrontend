import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Button from '@material-ui/core/Button';
import './css/login.scss';
import './css/home.scss';
import axios from 'axios';
import RavePaymentModal from 'react-ravepayment';

class Dashboard extends Component {
constructor() {
    super(); 
    this.state = {
        vouchers:[]
    }
}


componentWillMount() {
    this.getVouchers();
}

getVouchers() {
    axios.request({
        method:'get',
        url:'https://dewalenode.herokuapp.com/vouchers',
    }).then((response) => {
        this.setState({vouchers: response.data});
    }).catch((error) => {
        console.log(error);
    });
}
    callback = (response) => {
        console.log(response);

    }

    close = () => {
        console.log("Payment closed");
    }
    getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    onLogOut() {
        this.props.onLogOut();
    }
    render() {
        const { vouchers } = this.state;
        return (
            <div>
                <Navbar 
                lock={this.lock} 
                accessToken={this.props.accessToken}
                profile={this.props.profile}
                onLogOut={this.onLogOut.bind(this)} />
                <div className='user-info'>
                <img src={this.props.profile.picture} alt={this.props.profile.name} />
                <h3>{this.props.profile.name}</h3>
                <p>{this.props.profile.nickname}</p>
                <p><strong>{this.props.profile.email}</strong></p>
                </div>
                <div className="p-title">
                <h1>Pricing</h1>
                <p>Choose any voucher that suit your need</p>
                </div>
                <div className="pricing"> 
                    {vouchers.map(voucher => (
                    <div className="price">
                        <h1>{voucher.name}</h1>
                        <p className="tagline"><strong>ID:</strong>  {voucher._id}</p>
                        <h2><span>&#8358;</span> {voucher.price}</h2>
                        <div className="description">
                        <p><strong>Voucher Code:</strong>  {voucher.code}</p>
                        </div>
                        <Button variant="contained" fullWidth >
                        <RavePaymentModal
                            fullWidth
                            variant="contained"
                            text="Make Payment"
                            class="payButton"
                            metadata={[{ metaname: 'Device', metavalue: 'IPhone X' }]}
                            reference={this.getReference()}
                            email="olagunjuadewale5@gmail.com"
                            amount={voucher.price}
                            ravePubKey="FLWPUBK-e21e723d1b2852be4660eaff4d029054-X"
                            callback={this.callback}
                            close={this.close}
                            isProduction={true}
                        />
                        Make Payment
                        </Button>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Dashboard;