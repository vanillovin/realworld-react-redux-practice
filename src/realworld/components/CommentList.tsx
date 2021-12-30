import React from 'react';
import { useQuery } from 'react-query';
import { formatDate } from '../DateFormat';

interface CommentListProps {
  slug: string;
}

type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
  };
};

type CommentsListResponse = {
  comments: Comment[];
};

const CommentList = ({ slug }: CommentListProps) => {
  const { isLoading, error, data } = useQuery<CommentsListResponse>(
    `Article/${slug}/Comments`,
    () =>
      fetch(`https://api.realworld.io/api/articles/${slug}/comments`).then(
        (res) => res.json()
      )
  );

  if (data === undefined || isLoading) return <span>로딩 중</span>;

  return (
    <div>
      {data.comments.map(({ body, updatedAt, author: { username, image } }) => (
        <div className="card">
          <div className="card-block">
            <p className="card-text">{body}</p>
          </div>
          <div className="card-footer">
            <a className="comment-author" href={'#@' + username}>
              <img src={image} className="comment-author-img" />
            </a>
            &nbsp;
            <a className="comment-author" href={'#' + username}>
              {username}
            </a>
            <span className="date-posted">{formatDate(updatedAt)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
