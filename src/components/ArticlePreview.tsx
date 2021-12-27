import React from 'react';

interface ArticlePreviewProps {
  author: {
    username: string;
    image: string;
  };
  createdAt: string;
  favoriteCount: number;
  title: string;
  description: string;
  tags: string[];
}

// 구조분해 할당 https://ko.javascript.info/destructuring-assignment
const ArticlePreview = ({
  author,
  createdAt,
  favoriteCount,
  title,
  description,
  tags,
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
            {favoriteCount}
          </button>
        </div>
      </div>
      <a className="preview-link" href="#article/Create-a-new-implementation-1">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tags.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
};

export default ArticlePreview;
