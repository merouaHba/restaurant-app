import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-hero h-[150vh] w-[98.5vw] flex flex-col justify-center items-center  after:flex after:w-[100%] after:h-[150vh] after:absolute after:z-10 after:bg-bg-gradient text-white bg-cover absolute  -top-48 left-0">
      <div className="flex flex-col justify-center items-center z-20 mt-44">
        <h1 className="font-bold text-3xl text-white-yellow w-3/5 text-center">
          Welcome To Golden View Dine
        </h1>
        <p className="font-bold text-lg mb-9 mt-5">
          Explore the authentic vegan dishes with your friends and family
        </p>
        <Button text="Read more" />
      </div>
    </div>
  );
}

export default Hero