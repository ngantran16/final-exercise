import React from 'react';

import './Register.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ConfirmForm from '../../components/Form/ConfirmForm';

const ConfirmOTP = () => {
    return (
        <div>
            <Header />
            <div className="register-page">
                <div className="register-session">
                    <div>
                        <p className="title-form">Enter the 4-digit code sent to you at 1847129477<a> did you enter the correct number?</a></p>
                    </div>
                    <ConfirmForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConfirmOTP;