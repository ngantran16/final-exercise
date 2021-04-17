import React, { useState } from 'react';

import './Register.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/Form/RegisterForm';
import ConfirmForm from '../../components/Form/ConfirmForm';

const Register = () => {
    const [isConfirm, setIsConfirm] = useState(false);

    return (
        <div>
            <Header />
            <div className="register-page">
                {
                    isConfirm ? (
                    <div className="register-session">
                        <div>
                            <p className="title-form">Enter the 4-digit code sent to you at 1847129477<a> did you enter the correct number?</a></p>
                        </div>
                        <ConfirmForm />
                    </div>
                    ) : (
                    <div className="register-session">
                        <div>
                            <h3 className="title-form">Get moving with Uber</h3>
                        </div>
                        <RegisterForm />
                    </div>
                    )
                }        
            </div>
            <Footer />
        </div>
    )
}

export default Register;