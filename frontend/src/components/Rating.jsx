/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';
const Rating = ({rating}) => {
  return (
      <div className="flex">
          {
              [...Array(5)].map((star, index) => {
                  const starNumbr = index + 1;
                  console.log(starNumbr,rating,starNumbr <= rating)
                  return <FaStar key={`${Math.random(star)}`} size={20} color={starNumbr<=rating?"#fffffc":"gray"} />;
              })
          }
      </div>
  )
}

export default Rating