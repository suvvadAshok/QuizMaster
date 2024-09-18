import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div  className='home-div'>
     
      
     <img className='profile-img' src='https://cdn.prod.website-files.com/6245d17011e00c1acf2fc732/62472a3f43cd009db70fdddb_image-6-team-saasfy-template.png' />
 
         <Link to="/quiz">
       <p className='cta-button'>let's start
       <span className="material-symbols-outlined">
                arrow_forward
              </span>
       </p>

       </Link>
    </div>
  );
};



export default HomePage;
