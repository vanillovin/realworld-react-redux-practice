import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import ArticlePreview from '../components/ArticlePreview';
import { useQuery, useQueryClient } from 'react-query';

//         v5  useQuery
import { Link, useSearchParams } from 'react-router-dom';

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

// https://react-redux.realworld.io/
// refactor: useQuery로 articleList 상태 관리

interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

function Home() {
  // ? 뒤에
  // /shoes  ?brand=nike&sort=asc&sortby=price
  // searchParmas.get('brand') // nike

  // http://localhost:3000 (host)  /  ?tag=introduction (searchParams)
  // https://react-query.tanstack.com/overview
  // 태그가 없으면 tag === null or string?
  // *캐시 키가 달라지면 함수를 다시 호출함

  let [searchParams, _] = useSearchParams();
  const selectedTag = searchParams.get('tag');
  console.log(selectedTag);

  const queryString = selectedTag === null ? `&tag=${selectedTag}` : '';

  const { isLoading, error, data } = useQuery<ArticlesResponse, Error>(
    'Articles' + queryString,
    () =>
      fetch(
        'https://api.realworld.io/api/articles?limit=10&offset=0' + queryString
      ).then((res) => res.json())
  );

  const queryClient = useQueryClient();

  return (
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
                  <Link to="/" className="nav-link active">
                    Global Feed
                  </Link>
                </li>
                {selectedTag !== null && (
                  <li className="nav-item">
                    <Link
                      to={`/?tag=${selectedTag}`}
                      className="nav-link active"
                    >
                      #{selectedTag}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <button
                onClick={() => {
                  // https://react-query.tanstack.com/guides/query-invalidation
                  // https://react-query.tanstack.com/reference/useQueryClient#_top
                  queryClient.invalidateQueries('Articles' + queryString);
                }}
              >
                다시 요청하기
              </button>
              {error?.message}
              {isLoading && '로딩중'}
              {data?.articles.map((article) => (
                <ArticlePreview key={article.slug} {...article} />
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <div className="tag-list">
                {[
                  'welcome',
                  'implementations',
                  'codebaseShow',
                  'introduction',
                ].map((tag) => (
                  <Link
                    key={tag}
                    to={'/?tag=' + tag}
                    className="tag-default tag-pill"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
