import { Link } from "react-router-dom";
import skateboard from '../assets/images/skateboard.svg';
import Ace from '../assets/images/Aces.svg';
import Balance from '../assets/images/Balance.svg';
import architect from '../assets/images/architect.svg';



const HomePage = () => {

  const Logo = [
    'https://www.sparkl.me/assets/sparkllogo.png'
  ];

  return (
    <section className="w-full h-auto max-w-screen-xl mx-auto pt-[100px] pb-[100px] relative max-sm:px-5">
    <div className="absolute top-25 right-20 max-sm:right-4 max-sm:top-4">
      <img src={Logo[0]} className="w-52 h-20 object-contain max-sm:w-22 max-sm:h-10" alt="sparkl" />
    </div>
  
    <div className="entry mb-10 w-full">
      <h2 className="text-[47px] font-medium font-['GT_Walsheim_Pro'] leading-[67.98px] max-sm:text-[36px] max-sm:leading-[36.98px] max-sm:font-bold max-sm:py-5">
        What kind of IB Student are you?
      </h2>
      <p className="font-['GT_Walsheim_Pro'] text-[18px] font-medium text-left">
        IB is more than just a curriculum—it’s a lifestyle! Are you the cool-under-pressure student, <br /> the one who aces every subject, or maybe the one who's all about balancing study and fun?
      </p>
    </div>
    <div className="cards-container relative flex gap-5 justify-start overflow-x-auto flex-nowrap max-sm:px-0">
  <div className="card ">
    <img src={skateboard} alt="Skateboard" className="w-full h-auto rounded-lg" />
    <p className="mt-2 text-center">Cool Under Pressure</p>
  </div>

  <div className="card">
    <img src={Ace} alt="Skateboard" className="w-full h-auto rounded-lg" />
    <p className="mt-2 text-center">Aces Every Subject</p>
  </div>

  <div className="card ">
    <img src={Balance} alt="Skateboard" className="w-full h-auto rounded-lg" />
    <p className="mt-2 text-center">Balances Everything</p>
  </div>

  <div className="card">
    <img src={architect} alt="Skateboard" className="w-full h-auto rounded-lg" />
    <p className="mt-2 text-center">Architecture</p>
  </div>
</div>
<div className="mt-[50px] w-full flex max-sm:flex-col justify-between items-center max-sm:items-start">
  <p className="font-['GT_Walsheim_Pro'] text-[18px] font-medium text-left w-1/2 max-sm:w-full max-sm:pb-5">
    Find out which type of IB student you are with this fun, interactive quiz! <br />
    Share your results with friends and see who they are!
  </p>
  <Link to="/quiz" className="text-white-500 hover:underline w-1/2 flex justify-end max-sm:w-full">
   <p className="px-6 pb-3 pt-3 bg-[#080808] w-32 text-right text-white font-500 rounded-xl max-sm:w-full max-sm:text-center max-sm:py-4">  Let's start </p>
  </Link>
</div>


</section>

  
    
  );
};

export default HomePage;

{/*
    <div className="home w-full h-full" >
     
      <section className="w-4/5 h-auto  mx-auto" >
      <div className="entry">
  <h2 className="text-[51px] font-medium font-['GT_Walsheim_Pro'] leading-[67.98px]">
    What kind of IB Student are you?
  </h2>
  <p className="font-['GT_Walsheim_Pro'] text-[27px] font-medium leading-[35.99px] text-left">
    IB is more than just a curriculum—it’s a lifestyle! Are you the cool-under-pressure student, the one who aces every subject, or maybe the one who's all about balancing study and fun?
  </p>
</div>
<section>
  
  <div className="card w-[442px] h-[506px] absolute top-[314px] left-[110px] gap-0 bg-[#FFFFFFA8]">

</div>

</section>
</section>
    </div>
  */}