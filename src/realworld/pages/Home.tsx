import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ArticlePreview from '../../components/ArticlePreview';
import { useQuery } from 'react-query';

// type vs interface (넓은 개념)
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

//
// refactor: useQuery로 articleList 상태 관리

// 추상화... 코드를 사람처럼 생각 (주방장과 손님) 주방장 함수 ><ㅡㅏ>?
// 코드 쪼개기의 원칙. 서로 연결된 로직들은 응집력
// 내부에 있지 않아도 되는 건 밖에 안에있는 게 좋은 경우도 있음.
function Home() {
  // https://react-query.tanstack.com/overview
  const { isLoading, error, data } = useQuery<Article[]>('Articles', () =>
    fetch('https://api.realworld.io/api/articles?limit=10&offset=0').then(
      (res) => res.json()
    )
  );

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
                  <button
                    onClick={() => {
                      fetchArticles();
                    }}
                  >
                    다시 요청하기
                  </button>
                  {error?.message}
                  {isLoading && '로딩중'}
                  {data?.map((article) => (
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
