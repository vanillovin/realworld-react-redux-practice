import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ArticlePreview from '../../components/ArticlePreview';

// type va interface (넓은 개념)
// (컴포넌트와 컴포넌트 사이의 props)
// 객체와 다른 프로그램 사이에

type Article = {
  slug: string;
  author: {
    username: string;
    image: string;
  };
  createdAt: string;
  updatedAt: string;
  favoriteCount: number;
  title: string;
  description: string;
  tags: string[];
};

const article: Article = {
  slug: 'Create-a-new-implementation',
  author: {
    username: 'Gerome',
    image: 'https://api.realworld.io/images/demo-avatar.png',
  },
  createdAt: 'Wed Nov 24 2021',
  updatedAt: 'Wed Nov 24 2021',
  favoriteCount: 452,
  title: 'Create a new implementation',
  description: 'join the community by creating a new implementation',
  tags: ['implementations'],
};

function Home() {
  //https://react-redux.realworld.io/#/?_k=z6qyc9
  const [articleList, setArticleList] = useState([article, article, article]);

  return (
    <div id="main">
      <div data-reactroot="">
        <NavBar />
        <div className="home-page">
          <div className="banner">
            <div className="container">
              <h1 className="logo-font">conduit</h1>
              <p>A place to share your knowledge.</p>
            </div>
          </div>
          <div className="container page">
            <div className="row">
              <div className="col-md-9">
                <div className="feed-toggle">
                  <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                      <a href="" className="nav-link active">
                        Global Feed
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  {articleList.map((article) => (
                    <ArticlePreview {...article} />
                  ))}
                </div>
              </div>
              <div className="col-md-3">
                <div className="sidebar">
                  <p>Popular Tags</p>
                  <div className="tag-list"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
