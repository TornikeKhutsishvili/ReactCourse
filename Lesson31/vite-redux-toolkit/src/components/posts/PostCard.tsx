import React from 'react'
import { Link } from 'react-router-dom';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  onDelete: (id: number) => void;
  onDetail: (id: number) => void;
}

const PostCard:React.FC<PostCardProps> = ({ id, title, body, onDelete, onDetail }) => {
  return (
    <div className="card my-3 text-center" style={{ width: "18rem" }} onClick={() => onDetail(id)}>
      <div className="card-body">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>

        <div className="btn-group">
          <Link to={`/update-posts/${id}`} className="btn btn-primary">Edit</Link>
          <button type="button" onClick={() => onDelete(id)} className="btn btn-outline">Delete</button>
        </div>
        <div>
          <Link to={`/post-detail/${id}`} className="btn btn-outline" style={{width: "100%", marginTop: "10px"}}>
            Post Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard;