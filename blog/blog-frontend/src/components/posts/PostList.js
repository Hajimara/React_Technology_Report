import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import Tags from "../common/Tags";
import SubInfo from "../common/SubInfo";
import { Link } from "react-router-dom";

const PostListStyled = styled(Responsive)`
  margin-top: 3rem;
`;
const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
const PostItemStyled = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /** 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

// const SubInfo = styled.div`
//     color: ${palette.gray[6]};

//     span+span:before {
//         color:${palette.gray[4]};
//         padding-left: 0.25rem;
//         padding-right: 0.25rem;
//         content:'\\B7'
//     }
// `;
// const Tags = styled.div`
//     margin-top: 0.5rem;
//     .tag{
//         display:inline-block;
//         color:${palette.cyan[7]};
//         text-decoration: none;
//         margin-right: 0.5rem;
//         &:hover{
//             color:${palette.cyan[6]};
//         }
//     }
// `;
const PostItem = ({ post }) => {
  
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemStyled>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemStyled>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    console.log(error);
    
    return <PostListStyled>에러가 발생했습니다.</PostListStyled>;
  }

  return (
    <PostListStyled>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && posts && (
        <div>
          {posts.map(post => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListStyled>
  );
};
export default PostList;
