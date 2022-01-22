import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Typography, TextField, Button } from "@mui/material";

import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));

    setComments(newComments);
    setComment("");
  };

  return (
    <>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            COMMENTS
          </Typography>
          {comments.map((comment, index) => (
            <Typography key={index} gutterBottom variant="subtitle1">
              {comment}
            </Typography>
          ))}
        </div>
        {user?.result?.name && (
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              lable="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
              onClick={handleClick}
              color="primary"
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentSection;
