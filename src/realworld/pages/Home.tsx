import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import ArticlePreview from '../../components/ArticlePreview';

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

// apiArticleList 분리

// 추상화... 코드를 사람처럼 생각 (주방장과 손님) 주방장 함수 ><ㅡㅏ>?
// 코드 쪼개기의 원칙. 서로 연결된 로직들은 응집력
// 내부에 있지 않아도 되는 건 밖에 안에있는 게 좋은 경우도 있음.
function Home() {
  // https://react-redux.realworld.io/#/?_k=z6qyc9
  const [articleList, setArticleList] = useState<Article[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  // (REACT HOOK 작동 방식 공부)
  // dependency array 의존성 배열
  // https://velog.io/@velopert/react-hooks#2-useeffect

  function fetchArticles() {
    setLoading(true);
    setLoading(undefined);

    fetch(`https://api.realworld.io/api/articles?limit=10&offset=0`)
      .then((res) => res.json())
      .then((body) => setArticleList(body.articles))
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    // couter 예시 연습, error refetch
    // 처음 mount 될 때
    // 의존성 배열에 있는 상태가 업데이트될 때~
    fetchArticles();
  }, [setArticleList]);

  // 매 렌더링마다 다시 계산하거나, 호출하고 싶으면... useEffect 밖에!

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
                  {loading && '로딩중'}
                  {articleList?.map((article) => (
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
