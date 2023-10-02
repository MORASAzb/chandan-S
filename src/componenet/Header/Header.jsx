import './Header.css'
import { useState } from 'react';

{/* <li
  className={activeItem === 'home' ? 'home active' : 'home'}
  onClick={() => handleItemClick('home')}
>
  Home
</li> */}

const Header = () => {


  const [activeItem1, setActiveItem1] = useState('Explore');
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemClickMain = (item1) => {
    setActiveItem1(item1);
  };
  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  }

  return (
    <div className="menu1">

      <div className="menu-main">
        <ul className="navigation-main">
          <li
            className={activeItem1 === 'Explore' ? 'Explore active' : 'Explore'}
            onClick={() => handleItemClickMain('Explore')}>
            Explore
          </li>
          <li
            className={activeItem1 === 'Community-post' ? 'Community-post active' : 'Community-post'}
            onClick={() => handleItemClickMain('Community-post')}>
            Community post
          </li>
          <li
            className={activeItem1 === 'Pages' ? 'Pages active' : 'Pages'}
            onClick={() => handleItemClickMain('Pages')}>
            Pages
          </li>

        </ul>
      </div>

      <div className="left-menu1">
        <div className="search-in-top">
          <button className="search" onClick={handleSearch}>
            <img src="/public/image/icons8-search-16.png" alt="search icon" className='search1' />
          </button>

          <input type="text"
            className='icon'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <div className="right-left-menu1">
          <div className="image-page">
            <img src="/image/User profile img 1.png" alt="user picture" />
          </div>
          <div className="info-page">
            <div className="name-page">
              Chandan S
            </div>
            <div className="page-ID">
              @uiuxchandan
            </div>
          </div>
          <div className="show-another-page">
            <img src="/public/image/arrow-down.png" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header