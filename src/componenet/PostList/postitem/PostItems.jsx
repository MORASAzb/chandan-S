import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './PostItems.css'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 0.5rem;
`

const PostItems = props => {

    const [cmnt, setCmnt] = useState("")
    const onChangeHandler=evt=>setCmnt(evt.target.value)

  return (

    <div className='post-wrapper'>
    <div className='head-post'>
      <Div>
        <img src={props.postPhoto} alt="profile-img" />
        <div>
          <p>{props.postName}</p>
          <span>{props.postTime}</span>
        </div>
      </Div>
      <img src="/image/ic_More.png" alt="" />
    </div>
    <p className='content'>{props.postContent}</p>
    {
      props.postMedia
        ?
        <img src={props.postMedia} className='media-post' alt="post-media" />
        :
        null
    }

    <div className='post-action'>
      <Div>
        <img src="/image/heart.png" alt="" />
        <span>{props.postLike}</span>
        <img src="/image/message-2.png" alt="" />
        <span>{props.postComment}</span>
      </Div>
      <div className='share-post'>
        <img src="/image/Icon set.png" alt="" />
        <span>Share</span>
      </div>
    </div>
    <Div>
      <img src='/public/image/User profile img 1.png' alt="profile-img" />
      <input name='comment' className='comment' value={cmnt} placeholder='Write your comment' onChange={onChangeHandler} />
    </Div>
  </div>
  )
}

PostItems.propTypes = {
    postID: PropTypes.number.isRequired,
    postName: PropTypes.string.isRequired,
    postPhoto: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
    postMedia: PropTypes.string.isRequired,
    postLike: PropTypes.string.isRequired,
    postComment: PropTypes.string.isRequired
}

export default PostItems