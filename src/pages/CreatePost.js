import React, { useEffect, useState } from 'react'
import {addDoc, collection} from "firebase/firestore"
import { db , auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

export default function CreatePost({isAuth}) {

  const [title , setTitle] = useState("");
  const [postText , setPostText] = useState("");

  const p1 = collection(db , "posts");
  let navigate = useNavigate();


  const createPost = async () =>{
    await addDoc(p1, {
      title , 
      postText , 
      author:{name:auth.currentUser.displayName , id:auth.currentUser.uid},
    });
    navigate("/");
  };


 // to prevent from directly accessing through url 
  useEffect(()=>{
    if (!isAuth){
      navigate("/login");
    }
  },[])


  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title...' 
          onChange={(event)=>{
            setTitle(event.target.value);
          }}/>
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder="Post..." onChange={(event)=>{
            setPostText(event.target.value)
          }}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}
