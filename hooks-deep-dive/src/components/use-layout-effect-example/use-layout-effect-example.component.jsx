import { useLayoutEffect, useEffect, useRef } from 'react';

import './styles.css';

export const UseLayoutEffectExample = () => {
  const ourDiv = useRef();

  useEffect(() => {
    console.log('useEffect');
    console.log(ourDiv.current);
    // we can see the black background color from style.css
    // ourDiv.current.style.backgroundColor = 'red';
  }, [ourDiv]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    // we cannot see any black color
    ourDiv.current.style.backgroundColor = 'red';
  }, [ourDiv]);

  return (
    <div id="my-div" ref={ourDiv}>
      useLayoutEffect vs useEffect
    </div>
  );
};
