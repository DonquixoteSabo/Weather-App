import BigCart from 'components/BigCart';
import Search from 'components/Search';
import React from 'react';
import { useState } from 'react';

function MainTemplate() {
  const [isNavActive, setIsNavActive] = useState(true);

  const handleActiveChange = () => setIsNavActive(prevState => !prevState);

  return (
    <div>
      {isNavActive ? <Search /> : <BigCart />}
      <button onClick={handleActiveChange}>zmien</button>
    </div>
  );
}

export default MainTemplate;
