import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InsideFooter from './../components/footer/InsideFooter';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { listGuests } from './../graphql/queries';
// import Modal from "./../components/modal/Modal";
// import useModal from './../useModal';

Amplify.configure(awsconfig);

const Main = () => {
    const [guests, setGuests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                            <p>{guest.achievements}</p>
                            <p>{guest.topics}</p>
                                <div className='guest-full-category'>
                                    <div className='category-tag'>Business</div>
                                    <div className='category-tag'>Comedy</div>
                                </div>
                            {/* <p onClick={toggle}>Read more</p> */}

                            {/* <h4><span role="img" aria-label='celebrate'>🎉</span> Achievements:</h4>
                            {(guest.achievements).map(achievement=>
                            (<li> {achievement}</li>))}
                            <h4>🎙 I'd be happy to talk about:</h4>
                            {(guest.topics).map(topic=>
                            (<li> {topic}</li>))} */}
                        </div>
                    ))}
                </div>
                {/* <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    name={guests.map(guest =>(guest.name))}
                    title={guests.map(guest =>(guest.title))}
                    achievements={guests.map(guest =>
                        (guest.achievements).map(achievement=>
                            (<li><span role="img" aria-label='dash'>➖</span> {achievement}</li>))
                    )}
                    topics={guests.map(guest =>
                        (guest.topics).map(topic=>
                            (<li><span role="img" aria-label='dash'>➖</span> {topic}</li>))
                    )}
                /> */}
            <InsideFooter/>
        </React.Fragment>
    )
};

export default withAuthenticator(Main);