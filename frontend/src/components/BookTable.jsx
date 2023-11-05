import { Link } from 'react-router-dom';
import Button from './Button';
const BookTable = () => {
  return (
    <div className="bg-transparent-dark ">
      <div className="container mx-auto px-8 flex justify-between items-stretch h-full">
        <div className="w-1/5 bg-leftImg bg-[length:235%] bg-center bg-no-repeat"></div>
        <div className="w-2/5 py-16 flex flex-col justify-center items-center">
          <p className="w-full font-dancing text-white-text text-center text-4xl font-bold  tracking-widest">
            Come join us for a lunch this weekend and enjoy
          </p>
          <h3 className="text-gold font-extrabold text-4xl mt-10 mb-6">
            FLAT 10% OFF
          </h3>
          <Link to="/reservation">
            <Button text="Book Table" />
          </Link>
        </div>
        <div className="w-1/5 bg-rightImg bg-[length:235%] bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
}

export default BookTable