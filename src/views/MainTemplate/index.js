import { useState } from 'react';

import BigCart from 'components/BigCart';
import Search from 'components/Search';

function MainTemplate() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleActiveChange = () => setIsSearchActive(prevState => !prevState);

  return (
    <div>
      {isSearchActive ? (
        <Search />
      ) : (
        <BigCart handleActiveChange={handleActiveChange} />
      )}
      <button onClick={handleActiveChange}>zmien</button>
    </div>
  );
}

export default MainTemplate;
