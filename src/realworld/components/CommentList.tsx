import React from 'react';

const CommentList = () => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">
          Before starting a new implementation, please check if there is any
          work in progress for the stack you want to work on.
        </p>
      </div>
      <div className="card-footer">
        <a className="comment-author" href="#@Gerome">
          <img
            src="https://api.realworld.io/images/demo-avatar.png"
            className="comment-author-img"
          />
        </a>
        &nbsp;
        <a className="comment-author" href="#@Gerome">
          Gerome
        </a>
        <span className="date-posted">Wed Nov 24 2021</span>
      </div>
    </div>
  );
};

export default CommentList;
