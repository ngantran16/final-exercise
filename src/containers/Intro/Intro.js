import React from 'react';
import Popup from 'reactjs-popup';
 
import './Intro.scss';
import 'reactjs-popup/dist/index.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Images from '../../themes/Images';
import Button from '../../components/Button/Button';

const Intro  = () => {
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
    return (
        <div>
            <Header />
            <div>
                <div className="intro-session">
                    <img src={Images.backgroundIntro} alt="" className="background-image" />   
                    <div className ="intro-content">
                        <div className="intro-title">
                            <p>You ride, on demand</p>
                        </div>  
                        <div className="text-content">
                            <p>
                                Wherether you're headed to work, the airport, or out on the town. Uber connects you with a reliable ride in minutes. On tap and a car comes directly to you
                            </p>
                        </div> 
                        <Button />
                    </div>          
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Intro;