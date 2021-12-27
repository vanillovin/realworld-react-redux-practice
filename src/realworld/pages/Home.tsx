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
  favoritesCount: number;
  title: string;
  description: string;
  tagList: string[];
};

function Home() {
  //https://react-redux.realworld.io/#/?_k=z6qyc9
  const [articleList, setArticleList] = useState<Article[]>([]);

  useEffect(() => {
    fetch(`https://api.realworld.io/api/articles?limit=10&offset=0`)
      .then((res) => res.json())
      .then((body) => setArticleList(body.articles));
  }, [setArticleList]);

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
                    <ArticlePreview key={article.slug} {...article} />
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
