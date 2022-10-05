import React, { useContext, useEffect, useState } from 'react';
import AuthProvider, { AuthContext } from '../contexs/AuthProvider';
import { Navigate } from 'react-router-dom';
import AddPostForm from './AddPostForm';
import axios from 'axios';
import cookies from 'react-cookies';
import Post from './Post';
import '../App.css';
import { RefreshContext } from '../contexs/RefreshProvider';

function Main() {


  const { isLogged, setIsLogged } = useContext(AuthContext);
  const { refreshMain, setRefreshMain } = useContext(RefreshContext);


  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const token = cookies.load("token");
    if (token) {
      setIsLogged(true);
      const bearer = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      const url = `${process.env.REACT_APP_SERVER}/post`;
      axios.get(url, bearer)
        .then(resolve => {
          const posts = resolve.data;
          setPosts(posts);
        })
        .catch(reject => {
          console.log(reject);
        })
    }
  }, [refreshMain])


  return (
    <>
      {(isLogged) ?
        <div className='n2'>
          <section>
            <AddPostForm />
          </section>
          <section className='postsPlace'>
            {posts.map((post, index) => <Post postData={post} key={index} />)}
          </section>
        </div>
        : <Navigate to='/login' />}
    </>
  )
}

export default Main