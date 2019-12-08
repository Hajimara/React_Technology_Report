import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import { Helmet } from "react-helmet-async";

/**
 * 브런치 서비스에서 계정명을 주소로 하는 것(@username)을 사용
 */
const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Route component={PostListPage} path={["/@username", "/"]} exact></Route>
      <Route component={PostPage} path="/@:username/:postId"></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={RegisterPage} path="/register"></Route>
      <Route component={WritePage} path="/write"></Route>
    </>
  );
};

export default App;
