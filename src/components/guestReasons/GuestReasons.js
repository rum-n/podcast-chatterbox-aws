
import React from 'react';
import './styles.css';
import guestProud from './../../assets/proud.svg';
import guestBoost from './../../assets/unicorn.svg';
import guestNetwork from './../../assets/network.svg';

const GuestReasons = () => {
    return (
        <div className='host-reasons-wrapper'>
            <p className='title-tag'>Why join?</p>
            <h2>Have you ever wanted to be on TV?<br/> This is the next best thing.</h2>
            <p className='why-subtitle'>Reach a wider audience and promote yourself</p>
            <div className='why-join'>
                <img src={guestBoost} alt="Searching for people"/>
                <div className="why-details">
                    <p className='title-tag' id='reason-tag'>Showcase</p>
                    <h3 className='host-reason'>Reach a <br/>wider audience</h3>
                    <p className='why-subtitle' id='why-details'>Building an audience is smart. Using someone else's audience is even smarter. Use the opportunity to present your product or service to podcast listeners.</p>
                </div>
            </div>
            <div className='why-join'>
                <div className="why-details">
                    <p className='title-tag' id='reason-tag'>Boost</p>
                    <h3 className='host-reason'>Boost your <br/> personal brand</h3>
                    <p className='why-subtitle' id='why-details'>Establish yourself as a thought leader in your field and increase your authority by speaking on a topic you know well.</p>
                </div>
                <img src={guestProud} alt="Astronaut"/>
            </div>
            <div className='why-join'>
                <img src={guestNetwork} alt="Calendar schedule"/>
                <div className="why-details">
                    <p className='title-tag' id='reason-tag'>Network</p>
                    <h3 className='host-reason'>Expand your <br/> personal network</h3>
                    <p className='why-subtitle' id='why-details'>Reach out and connect with new people through a podcast's audience. After an interview, likeminded people will likely reach out to connect with you.</p>
                </div>
            </div>
        </div>
    )
};

export default GuestReasons;