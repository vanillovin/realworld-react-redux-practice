import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
// javascript 경로시스템 - 상대경로
// src(root)/components/... 절대경로
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';
import { formatDate } from '../DateFormat';

type Article = {
  author: {
    username: string;
    bio: string;
    image: string;
    followedBy: object[];
    following: boolean;
  };
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: string;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
};

type ArticleResponse = {
  article: Article;
};

function ArticleDetail() {
  // slug 를 useParams
  const { slug } = useParams();

  // api/articles/:slug 에서 데이터를 받아와야 한다
  // https://api.realworld.io/api/articles/Create-a-new-implementation-1
  // https://api.realworld.io/api/articles/Create-a-new-implementation-1/comments

  const { isLoading, error, data } = useQuery<ArticleResponse>(
    `Article/${slug}`,
    () =>
      fetch(`https://api.realworld.io/api/articles/${slug}`).then((res) =>
        res.json()
      )
  );

  if (data === undefined) {
    return <span>로딩 중</span>;
  }

  const {
    author: { username, image },
    body,
    createdAt,
    description,
    favorited,
    favoritesCount,
    tagList,
    title,
    updatedAt,
  } = data.article;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{title}</h1>
          <div className="article-meta">
            <a className="" href={'#@' + username}>
              <img src={image} />
            </a>
            <div className="info">
              <a className="author" href={'#@' + username}>
                {username}
              </a>
              {/* 전역 - 의존 */}
              <span className="date">{formatDate(updatedAt)}</span>
            </div>
            <span></span>
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div>
              <p>{body}</p>
            </div>
            <TagList tagList={tagList} />
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
            <CommentList slug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
