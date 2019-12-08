import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostsListContainer from "../containers/posts/PostsListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";

const PostListPage = () => {
    return (
        <>
            <HeaderContainer/>
            <PostsListContainer />
            <PaginationContainer />
        </>
    )
}

export default PostListPage;