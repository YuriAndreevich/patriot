import React from "react";

export const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const onClickRemove = () => {};

  return (
    <div className="">
      {isEditable && (
        <div className="">
          <a href={`/posts/${_id}/edit`}></a>
        </div>
      )}
      {imageUrl && <img className="" src={imageUrl} alt={title} />}
      <div className="">
        <div className="">
          <h2 className="">
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>
          <ul className="">
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>
          {children && <div className="">{children}</div>}
          <ul className="">
            <li>
              <span>{viewsCount}</span>
            </li>
            <li>
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
