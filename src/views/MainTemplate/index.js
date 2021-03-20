import { useState } from 'react';

import BigCart from 'components/BigCart';
import Search from 'components/Search';

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
