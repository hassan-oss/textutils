
import React from 'react';

const Sumc = () => {
  const statelessSum = (a, b) => a + b;
  let a = 0;
  const statefulSum = () => a++;

  const sum1 = statelessSum(3, 4);
  const sum2 = statefulSum();

  return (
    <div>
      <h2>Stateless Sum Result: {sum1}</h2>
      <h2>Stateful Sum Result: {sum2}</h2>
    </div>
  );
};

export default Sumc;
