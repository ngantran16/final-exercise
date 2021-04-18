import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Images from '../../themes/Images';
import './Form.scss';

const ConfirmForm = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    const history = useHistory();

    const response = useSelector((state) => state.register.response);
    response && console.log('1111111111111' + response.otp);

    const onSubmitOtp = () => {
        const otp = num1 + num2 + num3 + num4;
        console.log(response);
        if (response && (response.otp === otp)) {
            alert('Register successfull!');
            history.push('/information');
        } else {
            alert('The OTP not match!');
        }
    }

    return (
        <form>
            <div className ="otp-input">
                <input onChange={(event) => setNum1(event.target.value)} className="input-item" />
                <input onChange={(event) => setNum2(event.target.value)} className="input-item"/>
                <input onChange={(event) => setNum3(event.target.value)} className="input-item"/>
                <input onChange={(event) => setNum4(event.target.value)} className="input-item"/> 
            </div>

            <div className="confirm-button">
                <div>
                    <a href="reactjs.org" className="request-link">I didn't receive code</a>
                </div>
                <button onClick = {onSubmitOtp} className="radius-button">
                    <img src={Images.arrow} alt="arrow-img" />
                </button>
            </div>
        </form>
    );
}

export default ConfirmForm;