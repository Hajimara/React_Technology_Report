import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
const { useEffect } = React;

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      loadingUsers={loadingUsers}
      loadingPost={loadingPost}
      post={post}
      users={users}
    ></Sample>
  );
};

export default connect(
  ({ sample, loading }) => ({
    // 루트 리듀서 설정의 이름을 가져온다.
    post: sample.post,
    users: sample.users,
    loadingPost: loading.GET_POST,
    loadingUsers: loading.GET_USERS
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
