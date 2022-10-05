import axios from 'axios';
import React, { useContext, useState } from 'react';
import { RefreshContext } from '../contexs/RefreshProvider';
import cookies from 'react-cookies';

function AddPostForm() {
  const { refreshMain, setRefreshMain } = useContext(RefreshContext);

  async function AddPost(e) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_SERVER}/post`;
    const post = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    const token = cookies.load("token");
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const axiosResponse = await axios.post(url, post, bearer);
    setRefreshMain(pre => pre + 1);
    e.target.title.value = '';
    e.target.content.value = '';
  }






  return (
    <form className='addPostForm' onSubmit={AddPost}>
      <input type='text' placeholder='Title' name='title' id='tt' required></input>
      <br></br>
      <input type='text' placeholder='Content' name='content' id='tC' required></input>
      <br></br>
      <input type='submit' value='Post' id='tS'></input>
    </form>
  )
}

export default AddPostForm