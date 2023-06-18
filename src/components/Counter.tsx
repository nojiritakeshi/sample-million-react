import { FC, useState } from "react";
// import { block } from 'million/react';

// Just wrap Counter in a block() function!
const Counter: FC<{ initialCount: number }> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const handleClick = () => {
    setCount(count + 1);
  };
  const arr = [1, 2, 3, 4];
  const toArr = Array(arr.length);
  console.log(toArr);

  return (
    <div>
      <tr>
        <button onClick={handleClick}>{count}</button>;
      </tr>
    </div>
  );
};

export default Counter;
