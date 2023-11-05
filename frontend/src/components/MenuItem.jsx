/* eslint-disable react/prop-types */

const MenuItem = ({img,plat,ingredients,prix}) => {
  return (
    <div className="w-2/5 flex justify-between items-center  ">
      <div className=" flex justify-between">
        <div className="w-16 h-16">
          <img src={img} alt={plat} className="object-cover" />
        </div>
        <div className="text-left ml-2">
          <h4 className="text-[1rem] leading-6 font-bold text-white">{plat}</h4>
          <p className="text-sm text-white">{ingredients}</p>
        </div>
      </div>
      <div className="font-bold text-xl text-gold  relative after:absolute after:w-36 after:top-1/2 after:right-[130%] after:h-[1px] after:bg-main-gold">
        {prix}$
      </div>
    </div>
  );
}

export default MenuItem