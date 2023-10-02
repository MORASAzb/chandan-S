import './App.css'

import SideBarLeft from './componenet/side bar left/SideBarLeft '
import Header from './componenet/Header/Header'
import MainMidle from './componenet/MainMidle/MainMidle'
import SideBarRight from './componenet/Side bar right/SideBarRight'




function App() {

  return (
    <>
      <div>
        <SideBarLeft />
      </div>

      <div className='left'>
        <div className='main'>
          <Header />
        </div>
        <div className="middle-main">
          <MainMidle />
          <SideBarRight/>
        </div>
      </div>


    </>
  )
}

export default App

