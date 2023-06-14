import React from 'react'
import { useState , useEffect } from 'react';
import {deleteDoc, getDocs , doc} from "firebase/firestore"
import { collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import {auth } from "../firebase-config"

export default function Home({isAuth}) {
  const [postLists,setPostLists] = useState([]);
  const p1 = collection(db , "posts");

  useEffect (()=>{
    const getPosts = async ()=>{
      const data = await getDocs(p1); 
      setPostLists(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };
    getPosts();
  });

  const deletePost = async (id)=>{
    const postDoc = doc(db,"posts",id)
    await deleteDoc(postDoc);
  }

  return (
    <div className='homePage'>
      {postLists.map((post)=>{
        return <div className='post'>
          <div className='postHeader'>
            <div className='title'>
              <h1>{post.title}</h1>
            </div>
            <div className='deletePost'>
              {isAuth && post.author.id=== auth.currentUser.uid && (
              <button 
              onClick={()=>{
                deletePost(post.id);
                }}>&#128465;</button>)}
            </div>
          </div>
          <div className='postTextContainer'>
              {post.postText}
          </div>
          <h3>@{post.author.name}</h3>
        </div>
      })}
    </div>
  )
}
