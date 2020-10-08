import React, { useRef, useState, useEffect } from "react";
import { API } from "aws-amplify";
import InsideFooter from './../components/footer/InsideFooter';

const GuestPage = ({match}) => {

  return (
    <div>
        
        
        <hr className='details-separator'/>
      <InsideFooter/>
    </div>
  );
}

export default GuestPage;