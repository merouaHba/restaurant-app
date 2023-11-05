import img from '../assets/images/cooking.svg'
import { Link } from 'react-router-dom';
import Button from './Button';
import GoldenText from './GoldenText';

const CookingIngredients = () => {
   return (
     <div className="text-white text-left container mx-auto px-8 flex justify-between items-center pb-20 pt-36">
       <div className="w-[55%]">
         <GoldenText text="Cooking ingredients" />

         <h3 className=" capitalize font-bold text-3xl text-white-text mt-3.5 mb-14">
           What goes in
         </h3>
         <p className="w-4/5 mb-16 text-white-text capitalize text-sm tracking-widest">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
           hendrerit a amet viverra. Nunc pretium in amet at mattis cras.
           Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget
           nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus
           pellentesque nibh mattis. Malesuada integer nulla orci convallis sit.
           At libero lacus, eget fermentum sed turpis curabitur donec
           consectetur. Imperdiet aliquam quam mauris semper suscipit.
         </p>
         <Link to="/about">
           <Button text="Read more" />
         </Link>
       </div>
       <div className="w-1/3">
         <img src={img} alt="plat" />
       </div>
     </div>
   );
}

export default CookingIngredients