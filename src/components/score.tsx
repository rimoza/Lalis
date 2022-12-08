import React from 'react';
import classnames from 'classnames';

type ScoreProps = {
  isHome: boolean;
  value: number;
  increment: (isHome: boolean) => void;
  decrement: (isHome: boolean) => void;
};

const Score: React.FC<ScoreProps> = (props) => {
  const { isHome, value, increment, decrement } = props;

  const rootClass = classnames("flex flex-col items-center p-4", {
    "border-2 border-blue-400": isHome,
    "border-2 border-purple-400": !isHome,
  });

  return (
    <div className={rootClass}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 w-24" onClick={() => increment(isHome)}><i className="fas fa-plus-circle"></i></button>
      <div className="border-2 border-black rounded-lg p-2 text-black font-bold w-24 text-center bg-white">{value}</div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 w-24" onClick={() => decrement(isHome)}><i className="fas fa-minus-circle"></i></button>
    </div>
  );
}
export default Score;