import React from 'react';

function CommentsHolder({ comments }) { //[array of comment object]
  return (
    <div className='commentsHolder'>
      {comments.map((comment, index) => (          //comment = {content='',userId='',postId='',user="{}"}
        <div key={index}>
          <p> By : {comment.user.username}</p>
          <h4>{comment.content}</h4>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default CommentsHolder