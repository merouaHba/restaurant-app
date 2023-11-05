import { Link } from 'react-router-dom';
import img from '../assets/images/about.svg'
import GoldenText from './GoldenText';
import Button from './Button';
const AboutUs = () => {
  return (
    <div id="about" className="text-white text-left container mx-auto px-8 flex justify-between items-center pb-20 mt-[90vh] pt-36">
      <div className="w-[55%]">
        <GoldenText text="About Us" />

        <h3 className=" capitalize font-bold text-3xl text-white-text mt-3.5 mb-14">
          Discover the taste of worldclass vegan dishes from the kitchen of Go
          Green Dine
        </h3>
        <p className="w-4/5 mb-16 text-white-text capitalize text-sm tracking-widest">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
          hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque
          commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla
          duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque
          nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam
          mauris semper suscipit. Molestie maecenas interdum pharetra id velit
          sed nec.tetur sit sagittis pretium eget vitae semper pellentesque
          pellentesque.
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

export default AboutUs