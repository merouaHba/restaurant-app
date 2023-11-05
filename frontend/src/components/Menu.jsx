import GoldenText from "./GoldenText";
import MenuItem from "./MenuItem";
import img from '../assets/images/plat1.svg'
const Menu = () => {
  const menu = [
    {
      img,
      plat: "pizza",
      ingredients: "chidar chiken",
      prix: 15,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    {
      img,
      plat: "Phasellus convallis maximus",
      ingredients: "Lorem ipsum dolor sit amet",
      prix: 14,
    },
    
  ];
  return (
    <div id="menu" className="text-center">
      <div className="container mx-auto px-8 pt-6 pb-24">
        <GoldenText text="Straight From Kitchen" />
        <h3 className=" capitalize font-bold text-3xl text-white-text mb-16 mt-4">
          Our Menu
        </h3>
        <div className="flex justify-between items-center flex-wrap gap-y-8">
          {menu.map(({ img, plat, ingredients, prix }) => {
            return (
              <MenuItem
                img={img}
                ingredients={ingredients}
                plat={plat}
                prix={prix}
                key={ingredients}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu