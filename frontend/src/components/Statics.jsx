import delicacyicon from '../assets/images/delecacy.icon.svg'
import cheficon from '../assets/images/chef.icon.svg'
import peopleicon from '../assets/images/people.icon.svg'

const Statics = () => {
  return (
    <div className="bg-transparent-dark text-white">
      <div className="container mx-auto px-24 py-14 flex justify-between items-center">
        <div className="w-1/3 flex justify-center items-center">
          <img src={delicacyicon} alt="delicacy" />
          <div className="text-center ml-4">
            <h4 className="text-gold capitalize text-5xl font-bold">250+</h4>
            <p className="text-white-text capitalize text-lg font-bold">
              Delicacy
            </p>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img src={cheficon} alt="chef" />
          <div className="text-center ml-4">
            <h4 className="text-gold capitalize text-5xl font-bold">10+</h4>
            <p className="text-white-text capitalize text-lg font-bold">
              renowed chefs
            </p>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img src={peopleicon} alt="members" />
          <div className="text-center ml-4">
            <h4 className="text-gold capitalize text-5xl font-bold">30+</h4>
            <p className="text-white-text capitalize text-lg font-bold">
              members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
