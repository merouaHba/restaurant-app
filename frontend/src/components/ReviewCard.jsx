/* eslint-disable react/prop-types */
import  Rating from "./Rating";

const ReviewCard = ({profilePicture,username,review,rating}) => {
  return (
    <div className="bg-transparent-dark px-16 py-10 w-full text-white-text ">
      <div className="flex justify-start items-center">
        <img src={profilePicture} alt="profile" className=" rounded-full" />
        <div className="text-left ml-12">
          <h4 className="text-lg text-white-text capitalize tracking-widest font-bold">{username}</h4>
          <Rating
            rating={rating}
          />
        </div>
      </div>
      <p className="text-[1rem] h-36 text-left mt-10 text-white-text capitalize">{review}</p>
    </div>
  );
}

export default ReviewCard