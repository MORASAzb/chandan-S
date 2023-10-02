import AddPost from '../Posts/AddPost'
import './MainMidle.css'




const MainMidle = () => {


  return (
    <div className="middle-main1">
      <div className="story-box">
        <div className="your-story">
          <img src="/public/image/add.png" alt="" className='add' />
        </div>
        <div className="people-story">
          <img src="/public/image/01.png" alt="" />
          <img src="/public/image/02.png" alt="" />
          <img src="/public/image/Rectangle 34625155.png" alt="" />
          <img src="/public/image/Rectangle 34625155 (1).png" alt="" />
          <img src="/public/image/Rectangle 34625155 (2).png" alt="" />
        </div>

      </div>




      <div className='add-post'>
        <AddPost />
      </div>
    </div>
  )

}

export default MainMidle




