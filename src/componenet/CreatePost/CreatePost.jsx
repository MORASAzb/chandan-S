
import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import './CreatePost.css'

const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    font-size: 12px;
    border: none;
    display: flex;
    padding: 2px;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    cursor: pointer;
`
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
`


const CreatePost = props => {

    const [formData, setFormData] = useState({
        'postPhoto': '/image/User profile img 1.png',
        'postName': 'Chandan S',
        'postDate': 'now',
        'postContent': '',
        'postMedia': ''
    })

    const onChangeHandler = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }


    const handleAddPosts = () => {
        if (formData.postContent) {
            props.addPosts(
                formData.postContent,
                formData.postMedia
            )
        } else {
            return
        }
    }



    return (
        <div className='add-post-item'>
            <Div className='form-control'>
                <img src={formData.postPhoto} alt="profile-img" />
                <input name='postContent' value={formData.postContent} placeholder='What’s on your mind?' onChange={onChangeHandler} />
            </Div>

            <div className='form-action'>
                <Div className="icons">
                    <Button><img src="/image/Icon set.png" alt="icon1" /></Button>
                    <Button><img src="/image/Icon set (1).svg" alt="icon2" /></Button>
                    <Button><img src="/image/Icon set (2).svg" alt="icon3" /></Button>
                </Div>
                <button className='btn' type="button" onClick={handleAddPosts}>Create a post</button>
            </div>

        </div>
    )
}

CreatePost.propTypes = {
    addPosts: PropTypes.func.isRequired
}

export default CreatePost