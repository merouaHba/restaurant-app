import GoldenText from "./GoldenText";
import ReviewCard from "./ReviewCard";
import user1 from "../assets/images/user1.svg";
// import { Carousel } from "@trendyol-js/react-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const reviews = [
    {
      profilePicture: user1,
      username: "Alex andrina",
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “",
      rating: 4,
    },
    {
      profilePicture: user1,
      username: "Alex andrina",
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “",
      rating: 4,
    },
    {
      profilePicture: user1,
      username: "Alex andrina",
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “",
      rating: 4,
    },
    {
      profilePicture: user1,
      username: "Alex andrina",
      review:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “",
      rating: 4,
    },
  ];

  const settings = {
    //   dots: true,
    //   infinite: true,
   arrows:false,
    dragable: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    infinite:false,
  };
  return (
    <div className=" text-center">
      <div className="pt-6 pb-24">
        <div className="container mx-auto px-8">

        <GoldenText text="Reviews" />
        <h3 className=" capitalize font-bold text-3xl text-white-text mb-16 mt-4">
          words from our food lovers
        </h3>
        </div>
        {/* <div className="flex justify-center items-center"> */}
        {/* <Carousel show={1} swiping={true} responsive dynamic> */}
        <Slider {...settings}>
          {reviews.map(({ profilePicture, username, review, rating }) => {
            return (
              <ReviewCard
                profilePicture={profilePicture}
                username={username}
                review={review}
                rating={rating}
                key={`${review}-${username}-${rating}`}
              />
            );
          })}
        </Slider>
        {/* </Carousel> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Reviews;
