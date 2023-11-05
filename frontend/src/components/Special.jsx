import { BiDish } from "react-icons/bi"; 
import { GiChefToque } from "react-icons/gi"; 
import { BsCupStraw } from "react-icons/bs";
import GoldenText from "./GoldenText";
import SpecialCard from "./SpecialCard";

const Special = () => {
  const specials = [
    {
      icon: <BsCupStraw size={50} />,
      title: "Fresh food",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.",
    },
    {
      icon: <GiChefToque size={50} />,
      title: "skilled Chef",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.",
    },
    {
      icon: <BiDish size={50} />,
      title: "Exotic dishes",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.",
    },
  ];
  return (
    <div id="special" className=" bg-transparent-dark text-center">
      <div className="container mx-auto px-8 pt-6 pb-24">
        <GoldenText text="Special" />
        <h3 className=" capitalize font-bold text-3xl text-white-text mb-16 mt-4">
          What makes us special
        </h3>
        <div className="flex justify-between items-center">
          {specials.map(({ icon, title, text }) => {
            return (
              <SpecialCard icon={icon} title={title} text={text} key={title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Special;
