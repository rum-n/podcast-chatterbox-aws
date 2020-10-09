import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import InsideFooter from './../components/footer/InsideFooter';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { listGuests } from './../graphql/queries';
import Modal from "./../components/modal/Modal";
// import useModal from './../useModal';

Amplify.configure(awsconfig);

const Main = () => {
    const [guests, setGuests] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
      setIsShowing(!isShowing);
    }

    useEffect(() => {
        fetchGuests()
      }, []);
    
      const fetchGuests = async () => {
        try {
          const guestData = await API.graphql(graphqlOperation(listGuests));
          const guestList = guestData.data.listGuests.items;
          setGuests(guestList);
        } catch (error) {
          console.log('Error when fetching guests.', error);
        }
    }

    return (
        <React.Fragment>
            <AmplifySignOut/>
            <div className='main main-blue'>
                <h1>Pick a category</h1>
                <div className='categories'>
                    <button>Business</button>
                    <button>Lifestyle</button>
                    <button>Travel</button>
                    <button>Tech</button>
                    <button>Design</button>
                    <button>Comedy</button>
                    <button>Education</button>
                    <button>Music</button>
                    <button>Sports</button>
                    <button>Gaming</button>
                </div>
            </div>
                <div className='guests-wrapper'>
                    {guests.map(guest => (
                        <div key={guest.id} className='guest-card'>
                            <h2>{guest.name} <span>{guest.timezone}</span></h2>
                            <h4>{guest.title}</h4>
                                <div className='guest-full-category'>
                                    <div className='category-tag'>Business</div>
                                    <div className='category-tag'>Comedy</div>
                                </div>
                                <hr className='details-separator'/>
                            <h4>🎉 Achievements:</h4>
                            <ul>{guest.achievements}</ul>
                            <h4>🎙 I'd be happy to talk about:</h4>
                            <ul>{guest.topics}</ul>
                            {/* <p onClick={toggle}>Read more</p> */}
                        </div>
                    ))}
                </div>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            <InsideFooter/>
        </React.Fragment>
    )
};

export default withAuthenticator(Main);