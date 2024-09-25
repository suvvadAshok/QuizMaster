import { Link } from 'react-router-dom';
import React from 'react';


function Result() {
   //pass here the result text
    const person = [
        'The Planner'
    ]
    const persons = [
        'Loves structure',
        'Ace every challange',
        'Plan Ahead',
        'Well organised',
        'Does not Miss Deadlines'

    ]
  return (
    <section className="w-full h-auto max-w-screen-xl mx-auto pt-[100px] pb-[100px] relative max-sm:px-5 max-sm:w-full">
      <div className="gradient-bg-box">
        <div className="gradient-bg-one"></div>
        <div className="gradient-bg-two"></div>
      </div>
      <div>
        <div className="result-card">
            <div className='grid grid-cols-1 gap-y-3'>
               <h4 className='text-2xl font-bold'> {person} </h4>
               <p>You’re the type of student</p>
            </div>
            <div className='grid grid-cols-2 gap-2.5'>
  {persons.map((person, index) => (
    <li key={index} className=" font-bold">
      {person}
    </li>
  ))}
</div>
<Link to="/" className="text-white-500 w-1/2 flex justify-start max-sm:w-full no-underline">
        <p className="px-6 pb-3 pt-3 bg-[#fbbd2d] w-50 text-left text-black font-500 rounded-xl max-sm:w-full max-sm:text-center max-sm:py-4 no-underline">
          What next ?
        </p>
      </Link>
        </div>
        <div className="result-profile-card">
          {/* Ashok will use these */}
        </div>
      </div>

    </section>
  );
}

export default Result;
