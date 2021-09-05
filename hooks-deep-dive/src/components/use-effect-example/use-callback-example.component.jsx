import { useState, useEffect, useCallback } from 'react';

export const UseCallbackExample = () => {
  const [test1, setTest1] = useState(true);
  const [test2, setTest2] = useState(true);

  // if the function has to be declared inside the component
  const myFunc = useCallback(() => {
    console.log('effect run' + test1);
  }, [test1]);

  useEffect(() => {
    myFunc();
  }, [myFunc]);

  return (
    <div>
      <h1>test1 value: {String(test1)}</h1>
      <h1>test2 value: {String(test2)}</h1>
      <button onClick={() => setTest1(!test1)}>Flip test value</button>
      <button onClick={() => setTest2(!test2)}>Flip test value</button>
    </div>
  );
};
