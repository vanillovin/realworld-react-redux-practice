import React from 'react';
import { Link } from 'react-router-dom';
import TagList from './TagList';

interface ArticlePreviewProps {
  slug: string;
  author: {
    username: string;
    image: string;
  };
  createdAt: string;
  favoritesCount: number;
  title: string;
  description: string;
  tagList: string[];
}

// 구조분해 할당 https://ko.javascript.info/destructuring-assignment
const ArticlePreview = ({
  slug,
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}: ArticlePreviewProps) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a className="" href={'#@' + author.username}>
          <img src={author.image} />
        </a>
        <div className="info">
          <a className="author" href={'#@' + author.username}>
            {author.username}
          </a>
          <span className="date">{createdAt}</span>
        </div>
        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            {favoritesCount}
          </button>
        </div>
      </div>
      <Link className="preview-link" to={'/article/' + slug}>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <TagList tagList={tagList} />
      </Link>
    </div>
  );
};

export default ArticlePreview;
