import React from 'react';

interface TagListProps {
  tagList: string[];
}

const TagList = ({ tagList }: TagListProps) => {
  return (
    <ul className="tag-list">
      {tagList.map((tag) => (
        <li key={tag} className="tag-default tag-pill tag-outline">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
