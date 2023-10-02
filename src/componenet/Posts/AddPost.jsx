import { useState } from "react"
import postsList from "../PostList/OldPosts"
import CreatePost from "../CreatePost/CreatePost"
import PostList from "../PostList/PostList"




const AddPost = () => {

    const [posts, setPosts] = useState([...postsList])
    const [nextID, setNextID] = useState(postsList.length + 1)


    const addPosts = (content, media) => {

        setPosts(
            [
                {
                    "postID": nextID,
                    "postName": "Chandan S",
                    "postPhoto": "/image/User profile img 1.png",
                    "postTime": "now",
                    "postContent": content,
                    "postMedia": media,
                    "postLike": "0 Likes",
                    "postComment": "0 Comments"
                },

                ...posts
            ]
        )
        setNextID(nextID + 1)
    }




    return (

        <>
            <CreatePost addPosts={addPosts} />
            <PostList posts={posts} />
        </>
    )
}

export default AddPost