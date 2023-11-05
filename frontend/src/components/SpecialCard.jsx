/* eslint-disable react/prop-types */

const SpecialCard = ({icon,title,text}) => {
  return (
    <div className="px-14 pb-28 pt-20 w-[28%] bg-[#A080404D] text-white-text flex flex-col items-center">
      {icon}
      <h4 className=" capitalize text-2xl font-bold my-4">{title}</h4>
      <p className=" tracking-widest text-sm text-justify">{text}</p>
    </div>
  );
}

export default SpecialCard