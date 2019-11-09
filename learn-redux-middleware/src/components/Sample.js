import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
        <section>
            <h1>POST</h1>
            {loadingPost && '로딩중...'}
            {!loadingPost && post && ( // 유효성검사
                <div>
                    <h3>{post.title}</h3>
                    <h3>{post.body}</h3>
                </div>
            )}
        </section>
        <hr></hr>
        <section>
            <h1>POST</h1>
            {loadingUsers && '로딩중...'}
            {!loadingUsers && users && (
                <ul>
                    {users.map(user=> (
                        <li key={user.id}>{user.username}({user.email})</li>
                    ))}
                </ul>
            )}
        </section>
    </div>
    );
};

export default Sample;
