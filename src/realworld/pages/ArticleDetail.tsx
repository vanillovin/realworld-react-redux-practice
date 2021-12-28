import React from 'react';

function ArticleDetail() {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>Create a new implementation</h1>
          <div className="article-meta">
            <a className="" href="#@Gerome">
              <img src="https://api.realworld.io/images/demo-avatar.png" />
            </a>
            <div className="info">
              <a className="author" href="#@Gerome">
                Gerome
              </a>
              <span className="date">Wed Nov 24 2021</span>
            </div>
            <span></span>
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div>
              <p>
                Share your knowledge and enpower the community by creating a new
                implementation
              </p>
            </div>
            <ul className="tag-list">
              <li className="tag-default tag-pill tag-outline">
                implementations
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="article-actions"></div>
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <p>
              <a className="" href="#login">
                Sign in
              </a>
              &nbsp;or&nbsp;
              <a className="" href="#register">
                sign up
              </a>
              &nbsp;to add comments on this article.
            </p>
            <div>
              <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    Before starting a new implementation, please check if there
                    is any work in progress for the stack you want to work on.
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
              <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    If someone else has started working on an implementation,
                    consider jumping in and helping them! by contacting the
                    author.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
