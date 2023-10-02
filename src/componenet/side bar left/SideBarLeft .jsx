
import { useState } from 'react';
import './SideBarLeft.css'

const SideBarLeft = () => {

  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='side-bar-left'>


      <div className="top">
        <div className="topic">
          My Social
        </div>



        <div className="menu">
          <ul className="navigation">
            <li
              className={activeItem === 'home' ? 'home active' : 'home'}
              onClick={() => handleItemClick('home')}
            >
              Home
            </li>
            <li
              className={activeItem === 'messages' ? 'messages active' : 'messages'}
              onClick={() => handleItemClick('messages')}
            >
              Messages
            </li>
            <li
              className={activeItem === 'profile' ? 'profile active' : 'profile'}
              onClick={() => handleItemClick('profile')}
            >
              Profile
            </li>
            <li
              className={activeItem === 'saved-post' ? 'saved-post active' : 'saved-post'}
              onClick={() => handleItemClick('saved-post')}
            >
              Saved post
            </li>
            <li
              className={activeItem === 'market-place' ? 'market-place active' : 'market-place'}
              onClick={() => handleItemClick('market-place')}
            >
              Marketplace
            </li>
          </ul>
        </div>
      </div>


      <div className="update-massage">


        <div className="img">
          <img src="/public/image/topic.png" alt="" />
        </div>


        <div className="massage-text">
          Stay updated with the Socially mobile app
        </div>


        <div className="download">
          <a href="">
            Download Now
          </a>
        </div>

        
      </div>
    </div>
  )
}

export default SideBarLeft