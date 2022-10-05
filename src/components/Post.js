import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentsHolder from './CommentsHolder';
import { RefreshContext } from '../contexs/RefreshProvider';
import cookies from 'react-cookies';

function Post({ postData }) { //postData = {id='', title = '',content='',userId='',comments=[]}

  const { refreshMain, setRefreshMain } = useContext(RefreshContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_SERVER}/comment/${postData.id}`;
    const token = cookies.load("token");
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios.get(url, bearer)
      .then(comments => {
        setComments(comments.data);
        console.log('hello')
      })
      .catch(reject => console.log(`error with gitting comments`));
  }, [refreshMain])



  function deletePost() {
    const url = `${process.env.REACT_APP_SERVER}/post/${postData.id}`;
    const token = cookies.load("token");
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios.delete(url, bearer)
      .then(resolved => setRefreshMain(pre => pre + 1))
      .catch(reject => alert(reject.response.data));
  }

  return (
    <div className='postCard'>
      <button onClick={deletePost} className='btn'>delete</button>
      <h4>{postData.title}</h4>
      <hr></hr>
      <p>{postData.content}</p>
      {postData.comments.length ? <CommentsHolder comments={comments} /> : <p className='commentsHolder'>Add a comment...</p>}
      <CommentForm postID={postData.id} />
    </div>
  )
}

export default Post