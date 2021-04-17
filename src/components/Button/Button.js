import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';
import Images from '../../themes/Images';
import tableRoutes from '../../utils/route-strings';

const Button = () => {
    return(
        <Link to={tableRoutes.registration} className="btn-register">
                Register with Phone 
                <img src={Images.whiteArrow} alt="" className="img-arrow" />
        </Link> 
    )
}

export default Button;