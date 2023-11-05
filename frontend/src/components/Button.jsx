/* eslint-disable react/prop-types */

const Button = ({text}) => {
  return (
    <div className="inline-flex text-white border-white-yellow border-2 bg-transparent px-10 py-4 font-bold text-lg cursor-pointer text-center">
      {text}
    </div>
  );
}

export default Button